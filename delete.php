<?php
// delete.php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "kurdish_resources";

$conn = new mysqli($host, $user, $pass, $db);
if($conn->connect_error) die("Connection failed: " . $conn->connect_error);

// Check if 'id' is set and is a number
if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id']) && is_numeric($_POST['id'])) {
    $id = $_POST['id'];

    // Delete from pending_resources
    $stmt = $conn->prepare("DELETE FROM pending_resources WHERE id = ?");
    $stmt->bind_param("i", $id);
    $stmt->execute();
    $stmt->close();
}

$conn->close();
header("Location: admin.php");
exit;
?>