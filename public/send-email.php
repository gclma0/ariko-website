<?php
// Enable error reporting for debugging
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Headers: Content-Type");
header("Content-Type: application/json");

if ($_SERVER["REQUEST_METHOD"] === "POST") {
    // Get form data
    $input = json_decode(file_get_contents("php://input"), true);
    
    $name = strip_tags(trim($input["name"] ?? ''));
    $email = filter_var(trim($input["email"] ?? ''), FILTER_SANITIZE_EMAIL);
    $phone = strip_tags(trim($input["phone"] ?? ''));
    $subject = strip_tags(trim($input["subject"] ?? ''));
    $message = strip_tags(trim($input["message"] ?? ''));

    // Validate required fields
    if (empty($name) || empty($email) || empty($subject) || empty($message)) {
        http_response_code(400);
        echo json_encode(["error" => "Please complete all required fields."]);
        exit;
    }

    // Set receiver email
    $to = "tasfik06@gmail.com"; 
    $email_subject = "Ariko Website Inquiry: " . $subject;
    
    // Build email body
    $email_content = "Name: $name\n";
    $email_content .= "Email: $email\n";
    $email_content .= "Phone: $phone\n\n";
    $email_content .= "Message:\n$message\n";

    // Build email headers
    $email_headers = "From: Ariko Website <no-reply@scrapbangla.com>\r\n";
    $email_headers .= "Reply-To: $email\r\n";

    // Send the email
    try {
        if (mail($to, $email_subject, $email_content, $email_headers)) {
            http_response_code(200);
            echo json_encode(["success" => "Message sent successfully."]);
        } else {
            // Check if there is a PHP error
            $last_error = error_get_last();
            http_response_code(500);
            echo json_encode([
                "error" => "PHP mail() function returned false. The mail server might be disabled or misconfigured.",
                "details" => $last_error
            ]);
        }
    } catch (Exception $e) {
        http_response_code(500);
        echo json_encode([
            "error" => "An exception occurred while trying to send email.",
            "details" => $e->getMessage()
        ]);
    }
} else {
    http_response_code(403);
    echo json_encode(["error" => "There was a problem with your submission, please try again."]);
}
?>
