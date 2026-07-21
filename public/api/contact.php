<?php
// Prevent displaying errors to the visitor
ini_set('display_errors', 0);
error_reporting(0);

// Only allow POST requests
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    header('HTTP/1.1 405 Method Not Allowed');
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['status' => 'error', 'message' => 'Method not allowed.']);
    exit;
}

header('Content-Type: application/json; charset=utf-8');

// Load input data
$input = json_decode(file_get_contents('php://input'), true);
if (!$input) {
    // Fallback to standard POST form data
    $input = $_POST;
}

// 1. Honeypot check
// The field "website" is our honeypot. If it is filled, it is a bot.
if (!empty($input['website'])) {
    // Silently succeed without sending mail
    echo json_encode(['status' => 'success', 'message' => 'Message submitted successfully.']);
    exit;
}

// 2. Form submission speed check
// We verify that the user took at least 3 seconds from form load/interaction.
$timestamp = isset($input['ts']) ? intval($input['ts']) : 0;
if ($timestamp === 0 || (time() - $timestamp) < 3) {
    // Reject submissions that are too fast (likely automated bots)
    echo json_encode(['status' => 'error', 'message' => 'Submission failed verification.']);
    exit;
}

// 3. Validation & Sanitization
$name = isset($input['name']) ? trim(string_validation($input['name'], 100)) : '';
$email = isset($input['email']) ? trim(string_validation($input['email'], 100)) : '';
$phone = isset($input['phone']) ? trim(string_validation($input['phone'], 30)) : '';
$subject = isset($input['subject']) ? trim(string_validation($input['subject'], 100)) : '';
$message = isset($input['message']) ? trim(string_validation($input['message'], 3000)) : '';

if (empty($name) || empty($email) || empty($subject) || empty($message)) {
    echo json_encode(['status' => 'error', 'message' => 'All required fields must be completed.']);
    exit;
}

if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
    echo json_encode(['status' => 'error', 'message' => 'Invalid email address format.']);
    exit;
}

// Helper to sanitize and limit string length
function string_validation($str, $max_len) {
    // Remove null bytes and CR/LF characters to prevent injection
    $str = str_replace(array("\0", "\r", "\n"), '', $str);
    if (strlen($str) > $max_len) {
        $str = substr($str, 0, $max_len);
    }
    return strip_tags($str);
}

// 4. Retrieve SMTP Password
// Option A: Check environment variables
$smtp_password = getenv('SMTP_PASSWORD');

// Option B: Fallback to secure config file outside document root
if (empty($smtp_password)) {
    // Move up 3 directories from /public/api/contact.php (to parent of public_html/website folder)
    $config_path = dirname(dirname(dirname(__FILE__))) . '/smtp_config.php';
    if (file_exists($config_path)) {
        include $config_path;
        if (defined('SMTP_PASSWORD')) {
            $smtp_password = SMTP_PASSWORD;
        }
    }
}

if (empty($smtp_password)) {
    error_log("ARIKO Mailer: SMTP password configuration missing.");
    echo json_encode(['status' => 'error', 'message' => 'An unexpected server error occurred. Please try again.']);
    exit;
}

// Retrieve Recipient Email (falls back to shahrear@scrapbangla.com)
$recipient_email = getenv('RECIPIENT_EMAIL');
if (empty($recipient_email)) {
    if (defined('RECIPIENT_EMAIL')) {
        $recipient_email = RECIPIENT_EMAIL;
    } else {
        $recipient_email = 'shahrear@scrapbangla.com';
    }
}


// 5. Load PHPMailer classes
require_once __DIR__ . '/lib/PHPMailer/Exception.php';
require_once __DIR__ . '/lib/PHPMailer/PHPMailer.php';
require_once __DIR__ . '/lib/PHPMailer/SMTP.php';

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

$mail = new PHPMailer(true);

try {
    // Server settings
    $mail->isSMTP();
    $mail->Host       = 'mail.scrapbangla.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'no-reply@scrapbangla.com';
    $mail->Password   = $smtp_password;
    $mail->SMTPSecure = PHPMailer::ENCRYPTION_SMTPS; // SMTPS (Implicit TLS) on port 465
    $mail->Port       = 465;
    $mail->SMTPDebug  = 0; // Disable debug output

    // Recipients
    $mail->setFrom('no-reply@scrapbangla.com', 'ARIKO Website');
    $mail->addAddress($recipient_email);
    $mail->addReplyTo($email, $name);

    // Email Body Construction
    $safe_name = htmlspecialchars($name, ENT_QUOTES, 'UTF-8');
    $safe_email = htmlspecialchars($email, ENT_QUOTES, 'UTF-8');
    $safe_phone = htmlspecialchars($phone, ENT_QUOTES, 'UTF-8');
    $safe_subject = htmlspecialchars($subject, ENT_QUOTES, 'UTF-8');
    $safe_message = nl2br(htmlspecialchars($message, ENT_QUOTES, 'UTF-8'));

    // HTML Body
    $html_body = "
    <h2>New Website Inquiry</h2>
    <p><strong>Name:</strong> {$safe_name}</p>
    <p><strong>Email:</strong> {$safe_email}</p>
    <p><strong>Phone:</strong> " . ($safe_phone ?: 'Not provided') . "</p>
    <p><strong>Subject:</strong> {$safe_subject}</p>
    <hr>
    <p><strong>Message:</strong><br>{$safe_message}</p>
    ";

    // Plain Text Body
    $plain_body = "New Website Inquiry\n\n" .
                  "Name: {$name}\n" .
                  "Email: {$email}\n" .
                  "Phone: " . ($phone ?: 'Not provided') . "\n" .
                  "Subject: {$subject}\n\n" .
                  "Message:\n{$message}\n";

    // Content
    $mail->isHTML(true);
    $mail->Subject = "Website Inquiry: " . $subject;
    $mail->Body    = $html_body;
    $mail->AltBody = $plain_body;

    $mail->send();
    echo json_encode(['status' => 'success', 'message' => 'Message submitted successfully.']);

} catch (Exception $e) {
    // Log exception error securely without exposing credentials
    error_log("ARIKO Mailer: Failed to send email. Error: " . $mail->ErrorInfo);
    echo json_encode(['status' => 'error', 'message' => 'An unexpected server error occurred. Please try again.']);
}
