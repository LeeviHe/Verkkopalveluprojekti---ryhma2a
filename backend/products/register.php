<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$content = file_get_contents("php://input");
$login_info = json_decode($content);
registerUser($login_info->fname, $login_info->lname, $login_info->email, $login_info->password);
//$_SESSION['username'] = $user->username;

header('HTTP/1.1 200 OK');