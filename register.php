<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
$username = $_POST["username"];
$password = $_POST["password"];

$conn = new mysqli("","root");
$conn->select_db("stu");

$sql = "select * from users where username = '$username'";

$result = $conn->query($sql);
if($result->num_rows == 0){
	echo "1";
	$sql = "insert into users (username,password) values ('$username','$password')";
	$conn->query($sql);
}else{
	echo "0";
}




?>