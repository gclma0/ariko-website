<?php
// Enable CORS so the React app can submit to it from any domain or localhost
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

    // Set receiver email (tasfik06@gmail.com for now)
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
    if (mail($to, $email_subject, $email_content, $email_headers)) {
        http_response_code(200);
        echo json_encode(["success" => "Message sent successfully."]);
    } else {
        http_response_code(500);
        echo json_encode(["error" => "Oops! Something went wrong and we couldn't send your message."]);
    }
} else {
    http_response_code(403);
    echo json_encode(["error" => "There was a problem with your submission, please try again."]);
}
?>
