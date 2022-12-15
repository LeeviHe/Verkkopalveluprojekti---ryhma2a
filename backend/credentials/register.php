<?php
require_once '../inc/headers.php';
session_start();
require_once '../inc/functions.php';

$content = file_get_contents("php://input");
$login_info = json_decode($content);

registerUser($login_info->fname, $login_info->lname, $login_info->email, $login_info->password);

$_SESSION['fullname'] = $login_info->fname." ".$login_info->lname ;
$_SESSION['username'] = $login_info->email;

header('HTTP/1.1 200 OK');
echo $_SESSION['username'];