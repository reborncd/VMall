<?php
header("content-type:text/html;charset=utf-8");
header("Access-Control-Allow-Origin:*");
$username = $_POST["username"];
$password = $_POST["password"];

$conn = new mysqli("","root");
$conn->select_db("stu");

$sql = "select * from users where username = '$username'";
$sql = "select * from users where password = '$password'";

$result = $conn->query($sql);
if($result->num_rows == 0){
	echo "1";
}else{
	echo "0";
}




?>