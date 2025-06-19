<?php
use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

// --- Include PHPMailer ---
require 'PHPMailer/PHPMailer.php';
require 'PHPMailer/SMTP.php';
require 'PHPMailer/Exception.php';

// --- Debug log ---
$logFile = __DIR__ . '/contact_log.txt';
$entry  = "[" . date('Y-m-d H:i:s') . "] Incoming request: ";
$raw    = file_get_contents("php://input");
$entry .= $raw . PHP_EOL;
file_put_contents($logFile, $entry, FILE_APPEND);

// --- CORS & Headers ---
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- DB config ---
require_once 'db_config.php';

// --- Parse JSON ---
$data = json_decode($raw, true);
if (
    !isset($data['name'], $data['email'], $data['message']) ||
    empty($data['name']) || empty($data['email']) || empty($data['message'])
) {
    $err = "Validation failed: missing fields";
    file_put_contents($logFile, "[" . date('Y-m-d H:i:s') . "] $err" . PHP_EOL, FILE_APPEND);
    http_response_code(400);
    echo json_encode(["error" => "Missing required fields"]);
    exit;
}

try {
    // --- Save to database ---
    $createTable = "CREATE TABLE IF NOT EXISTS messages (
        id INT AUTO_INCREMENT PRIMARY KEY,
        name VARCHAR(255) NOT NULL,
        email VARCHAR(255) NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
    ) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_unicode_ci";
    
    if (!$conn->query($createTable)) {
        throw new Exception("Error creating table: " . $conn->error);
    }

    $stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    if (!$stmt) {
        throw new Exception("Error preparing statement: " . $conn->error);
    }

    $stmt->bind_param("sss", $data['name'], $data['email'], $data['message']);
    if (!$stmt->execute()) {
        throw new Exception("Error executing statement: " . $stmt->error);
    }
    $stmt->close();

    // --- Send email to admin ---
    $mail = new PHPMailer(true);


    $mail->SMTPDebug = 2; // Verbose debug output
$mail->Debugoutput = function($str, $level) use (&$logFile) {
    file_put_contents($logFile, "[" . date('Y-m-d H:i:s') . "] MAIL DEBUG: " . $str . PHP_EOL, FILE_APPEND);
};



    $mail->isSMTP();
    $mail->Host       = 'smtp.gmail.com';
    $mail->SMTPAuth   = true;
    $mail->Username   = 'neoncomputers1999@gmail.com';      // 🔁 Your Gmail
    $mail->Password   = 'vojhrekvkmiqheot';         // 🔁 App password from Google
    $mail->SMTPSecure = 'tls';
    $mail->Port       = 587;

    $mail->setFrom($data['email'], $data['name']);
    $mail->addAddress('4n637fejzuli@gmail.com', 'Admin'); // 🔁 Replace with admin receiver

    $mail->Subject = 'New Contact Form Submission';
    $mail->Body    = "Name: {$data['name']}\nEmail: {$data['email']}\nMessage:\n{$data['message']}";

    $mail->send();

    file_put_contents($logFile, "[" . date('Y-m-d H:i:s') . "] Insert + Email successful" . PHP_EOL, FILE_APPEND);
    echo json_encode(["success" => true, "message" => "Message sent and saved!"]);

} catch (Exception $e) {
    $err = "Error: " . $e->getMessage();
    file_put_contents($logFile, "[" . date('Y-m-d H:i:s') . "] $err" . PHP_EOL, FILE_APPEND);
    http_response_code(500);
    echo json_encode(["error" => $err]);
}

// --- Close DB ---
$conn->close();
?>
