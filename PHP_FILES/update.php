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

$postdata = file_get_contents("php://input");

if(isset($postdata) && !empty($postdata)){
	$ex_data = json_decode($postdata);
	
	$usr_acc = $ex_data->acc_no;
	$usr_new_bal = $ex_data->bal;
	$sender_acc = $ex_data->sacc_no;
	$sender_new_bal = $ex_data->d_amt;
	
	$update = "update cust set bal=$usr_new_bal where acc_no=$usr_acc";
	$update_send = "update cust set bal=bal-$sender_new_bal where acc_no=$sender_acc";
	mysqli_query($conn,$update);
	mysqli_query($conn,$update_send);
	mysqli_close($conn);
}

?>