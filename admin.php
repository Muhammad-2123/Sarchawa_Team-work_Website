<?php
// Admin.php
$host = "localhost";
$user = "root";
$pass = "";
$db   = "kurdish_resources";

$conn = new mysqli($host, $user, $pass, $db);
if($conn->connect_error) die("Connection failed: " . $conn->connect_error);

// Fetch all pending resources
$result = $conn->query("SELECT * FROM pending_resources ORDER BY id DESC");
?>

<!DOCTYPE html>
<html lang="ku" dir="rtl">
<head>
<meta charset="UTF-8">
<title>Admin Panel</title>
<style>
body{font-family:sans-serif; background:#fffaf4; padding:20px;}
table{width:100%; border-collapse:collapse;}
th, td{border:1px solid #ccc; padding:10px; text-align:right;}
button{padding:6px 12px; margin:2px; cursor:pointer;}
img{border-radius:5px;}
</style>
</head>
<body>
<h2>Pending Resources</h2>
<table>
<tr>
<th>ID</th>
<th>Title</th>
<th>Category</th>
<th>Email</th>
<th>Description</th>
<th>Image</th>
<th>URL</th>
<th>Actions</th>
</tr>

<?php while($row = $result->fetch_assoc()): ?>
<tr>
<td><?= $row['id'] ?></td>
<td><?= $row['title'] ?></td>
<td><?= $row['category'] ?></td>
<td><?= isset($row['submitter_email']) ? $row['submitter_email'] : '-' ?></td>
<td><?= isset($row['description']) ? $row['description'] : '-' ?></td>
<td>
<?php 
if(isset($row['logo']) && $row['logo']) 
    echo "<img src='".$row['logo']."' width='50'>"; 
else 
    echo '-';
?>
</td>
<td>
<?php 
if(isset($row['url']) && $row['url']) 
    echo "<a href='".$row['url']."' target='_blank'>Link</a>"; 
else 
    echo '-';
?>
</td>
<td>
    <form style="display:inline" action="approve.php" method="post">
        <input type="hidden" name="id" value="<?= $row['id'] ?>">
        <button type="submit">Approve</button>
    </form>
    <form style="display:inline" action="delete.php" method="post">
        <input type="hidden" name="id" value="<?= $row['id'] ?>">
        <button type="submit">Delete</button>
    </form>
</td>
</tr>
<?php endwhile; ?>
</table>
</body>
</html>