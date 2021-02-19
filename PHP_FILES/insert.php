<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bank";

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$insert = "insert into cust values(0,'Select Name',0,0,'Null','Null',0)";

if(mysqli_query($conn,$insert))
{
	echo "data inserted";
	mysqli_close($conn);
}
?>