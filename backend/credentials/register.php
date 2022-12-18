<?php
require_once '../inc/headers.php';
session_start();
require_once '../inc/functions.php';

$content = file_get_contents("php://input");
$login_info = json_decode($content);


// sanitizing user input

try {
  $db = openDb();
  $stmt = $db->prepare("INSERT INTO customer (fname, lname, email, password) VALUES (:fname, :lname, :email, :password)");
  
  $stmt->bindParam(':fname', $login_info->fname);
  $stmt->bindParam(':lname', $login_info->lname);
  $stmt->bindParam(':email', $login_info->email);
  
  $password = password_hash($login_info->password, PASSWORD_DEFAULT);
  
  $stmt->bindParam(':password', $password);
  $stmt->execute();
  
  $_SESSION['fullname'] = $login_info->fname." ".$login_info->lname;
  $_SESSION['username'] = $login_info->email;
  
  header('HTTP/1.1 200 OK');
  echo htmlspecialchars($_SESSION['username']);
  
} catch (PDOException $pdoex) {
  returnError($pdoex);
}

/*

old user register input

registerUser($login_info->fname, $login_info->lname, $login_info->email, $login_info->password);

$_SESSION['fullname'] = $login_info->fname." ".$login_info->lname ;
$_SESSION['username'] = $login_info->email;

header('HTTP/1.1 200 OK');
echo $_SESSION['username'];
*/