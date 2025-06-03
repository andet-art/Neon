<?php

$origin = $_SERVER['HTTP_ORIGIN'] ?? '';
header("Access-Control-Allow-Origin: $origin");
header('Access-Control-Allow-Methods: GET, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

// Handle preflight OPTIONS request
if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
    http_response_code(200);
    exit();
}

session_start();

// Check if user is authenticated
$isAuthenticated = isset($_SESSION['admin_id']) && $_SESSION['admin_id'] > 0;

echo json_encode([
    'isAuthenticated' => $isAuthenticated,
    'userId' => $isAuthenticated ? $_SESSION['admin_id'] : null
]);
