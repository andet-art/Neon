<?php
$conn = new mysqli("localhost", "your_user", "your_pass", "your_db");

$data = json_decode(file_get_contents("php://input"), true);
$id = intval($data['id']);

$conn->query("UPDATE offers SET featured = NOT featured WHERE id = $id");
?>
