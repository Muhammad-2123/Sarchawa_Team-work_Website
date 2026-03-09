<?php
// approve.php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "kurdish_resources";

$conn = new mysqli($host, $user, $pass, $db);
if($conn->connect_error) die("Connection failed: " . $conn->connect_error);

if($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['id'])) {
    $id = $_POST['id'];

    // Get the pending resource
    $res = $conn->query("SELECT * FROM pending_resources WHERE id=$id");
    if($res->num_rows > 0){
        $row = $res->fetch_assoc();

        // Insert into approved_resources
        $stmt = $conn->prepare("INSERT INTO approved_resources (title, description, source_url, category, submitter_email, logo, approved_at) VALUES (?, ?, ?, ?, ?, ?, NOW())");
        $stmt->bind_param(
            "ssssss",
            $row['title'],
            $row['description'],
            $row['url'],             // match column in pending_resources
            $row['category'],
            $row['submitter_email'], // match column in pending_resources
            $row['logo']
        );
        $stmt->execute();
        $stmt->close();

        // Delete from pending_resources
        $conn->query("DELETE FROM pending_resources WHERE id=$id");
    }
}

$conn->close();
header("Location: admin.php");
exit;
?>