<?php
// --- Debug log file path ---
$logFile = __DIR__ . '/contact_log.txt';

// --- Append a timestamped entry for each request ---
$entry  = "[" . date('Y-m-d H:i:s') . "] Incoming request: ";
$raw    = file_get_contents("php://input");
$entry .= $raw . PHP_EOL;
file_put_contents($logFile, $entry, FILE_APPEND);

// --- Headers ---
header("Access-Control-Allow-Origin: *");
header("Content-Type: application/json");
header("Access-Control-Allow-Methods: POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

// Handle preflight requests
if ($_SERVER['REQUEST_METHOD'] == 'OPTIONS') {
    http_response_code(200);
    exit();
}

// --- Include database configuration ---
require_once 'db_config.php';

// --- Decode JSON payload ---
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
    // --- Create messages table if it doesn't exist ---
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

    // --- Prepare statement for better security ---
    $stmt = $conn->prepare("INSERT INTO messages (name, email, message) VALUES (?, ?, ?)");
    if (!$stmt) {
        throw new Exception("Error preparing statement: " . $conn->error);
    }
    
    // --- Bind parameters and execute ---
    $stmt->bind_param("sss", $data['name'], $data['email'], $data['message']);
    
    if (!$stmt->execute()) {
        throw new Exception("Error executing statement: " . $stmt->error);
    }
    
    file_put_contents($logFile, "[" . date('Y-m-d H:i:s') . "] Insert successful (ID: " . $conn->insert_id . ")" . PHP_EOL, FILE_APPEND);
    echo json_encode(["success" => true, "message" => "Your message has been sent successfully!"]);
    
} catch (Exception $e) {
    $err = "Error: " . $e->getMessage();
    file_put_contents($logFile, "[" . date('Y-m-d H:i:s') . "] $err" . PHP_EOL, FILE_APPEND);
    http_response_code(500);
    echo json_encode(["error" => $err]);
}

// --- Close statement and connection ---
if (isset($stmt)) {
    $stmt->close();
}
$conn->close();
?>
