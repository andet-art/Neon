<?php
$conn = new mysqli("localhost", "your_user", "your_pass", "your_db");

$data = json_decode(file_get_contents("php://input"), true);
$title = $conn->real_escape_string($data['title']);
$desc = $conn->real_escape_string($data['description']);

$conn->query("INSERT INTO offers (title, description, featured) VALUES ('$title', '$desc', 0)");
?>
