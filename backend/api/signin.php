<?php
// Enable error reporting for debugging
error_reporting(E_ALL);
ini_set('display_errors', 1);

// Allow cross-origin requests from your frontend only
header('Access-Control-Allow-Origin: http://localhost:9005');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

// Handle preflight OPTIONS request early
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

// Start session so cookies can be set/sent
session_start();

// Debug log
error_log("Signin request received: " . file_get_contents('php://input'));

try {
    $input = json_decode(file_get_contents('php://input'), true);
    if (json_last_error() !== JSON_ERROR_NONE) {
        throw new Exception("Invalid JSON: " . json_last_error_msg());
    }

    $username = $input['username'] ?? '';
    $password = $input['password'] ?? '';
    error_log("Login attempt - Username: $username, Password: $password");

    // Simple check — DO NOT use in production without secure hashing, prepared statements, etc.
    if ($username === 'admin' && $password === 'neonneon') {
        $_SESSION['admin_id'] = 1;
        echo json_encode(['success' => true]);
    } else {
        echo json_encode(['success' => false, 'message' => 'Invalid credentials']);
    }
} catch (Exception $e) {
    error_log("Signin error: " . $e->getMessage());
    http_response_code(500);
    echo json_encode(['success' => false, 'message' => $e->getMessage()]);
}
