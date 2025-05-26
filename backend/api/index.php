<?php
header("Content-Type: application/json");
header("Access-Control-Allow-Origin: *");
header("Access-Control-Allow-Methods: GET, POST, OPTIONS");
header("Access-Control-Allow-Headers: Content-Type");

error_reporting(E_ALL);
ini_set('display_errors', 1);

echo json_encode([
    "success" => true,
    "message" => "API is working",
    "server_info" => [
        "php_version" => PHP_VERSION,
        "server_software" => $_SERVER['SERVER_SOFTWARE'],
        "document_root" => $_SERVER['DOCUMENT_ROOT'],
        "script_filename" => $_SERVER['SCRIPT_FILENAME'],
        "request_uri" => $_SERVER['REQUEST_URI']
    ]
]);
?>
