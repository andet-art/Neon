<?php
// public/api/signout.php
session_start();

header('Access-Control-Allow-Origin: http://localhost:5173'); // your frontend URL
header('Access-Control-Allow-Credentials: true');
header('Content-Type: application/json');

$_SESSION = [];
session_destroy();

echo json_encode(['success' => true]);
