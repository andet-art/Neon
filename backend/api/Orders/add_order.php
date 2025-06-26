<?php
// File: backend/api/orders/add_order.php

// Allow CORS
header("Access-Control-Allow-Origin: http://localhost:9004");
header("Access-Control-Allow-Credentials: true");
header("Content-Type: application/json");

// Handle only POST
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    http_response_code(405);
    echo json_encode(['success' => false, 'message' => 'Only POST allowed']);
    exit;
}

// Get raw POST data
$data = json_decode(file_get_contents('php://input'), true);

if (!$data) {
    echo json_encode(['success' => false, 'message' => 'Invalid JSON']);
    exit;
}

// Validate fields
$required = ['name', 'surname', 'address', 'email', 'phone'];
foreach ($required as $field) {
    if (empty($data[$field])) {
        echo json_encode(['success' => false, 'message' => "Missing: $field"]);
        exit;
    }
}

// DB connection
require_once '../db_config.php';

$name = $conn->real_escape_string($data['name']);
$surname = $conn->real_escape_string($data['surname']);
$address = $conn->real_escape_string($data['address']);
$email = $conn->real_escape_string($data['email']);
$phone = $conn->real_escape_string($data['phone']);

$sql = "INSERT INTO orders (name, surname, address, email, phone) VALUES ('$name', '$surname', '$address', '$email', '$phone')";

if ($conn->query($sql)) {
    echo json_encode(['success' => true]);
} else {
    echo json_encode(['success' => false, 'message' => 'DB error: ' . $conn->error]);
}
?>
