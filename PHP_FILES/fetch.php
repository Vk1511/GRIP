<?php
$servername = "localhost";
$username = "root";
$password = "";
$dbname = "bank";

$cust_name = [];

// Create connection
$conn = mysqli_connect($servername, $username, $password, $dbname);
// Check connection
if ($conn->connect_error) {
  die("Connection failed: " . $conn->connect_error);
}

$select_name = "select * from cust";

if($result = mysqli_query($conn,$select_name))
{
	$cr = 0;
	if(mysqli_num_rows($result) > 0){
		while($row = mysqli_fetch_assoc($result)){
			$cust_name[$cr]['id'] = $row['id'];
			$cust_name[$cr]['name'] = $row['name'];
			$cust_name[$cr]['acc_no'] = $row['acc_no'];
			$cust_name[$cr]['mo_no'] = $row['mo_no'];
			$cust_name[$cr]['mail'] = $row['mail'];
			$cust_name[$cr]['add'] = $row['add'];
			$cust_name[$cr]['bal'] = $row['bal'];
			$cr++;
		}
		
		mysqli_free_result($result);
		//print_r($cust_name);
		echo json_encode($cust_name);
	}
	else{
		echo "sorry";
	}
	
	mysqli_close($conn);
}
?>