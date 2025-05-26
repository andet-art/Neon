<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

$conn = new mysqli("localhost", "root", "", "neon_db");


if ($conn->connect_error) {
    http_response_code(500);
    echo json_encode(['error' => 'Database connection failed: ' . $conn->connect_error]);
    exit;
}

$data = json_decode(file_get_contents("php://input"), true);
if (!$data || !isset($data['title']) || !isset($data['description'])) {
    http_response_code(400);
    echo json_encode(['error' => 'Invalid input data']);
    exit;
}

$title = $conn->real_escape_string($data['title']);
$desc = $conn->real_escape_string($data['description']);

$sql = "INSERT INTO offers (title, description, featured) VALUES ('$title', '$desc', 0)";
if (!$conn->query($sql)) {
    http_response_code(500);
    echo json_encode(['error' => 'Database query failed: ' . $conn->error]);
    exit;
}

echo json_encode(['success' => true]);
?>
