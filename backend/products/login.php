<?php
require_once '../inc/functions.php';
session_start();
require_once '../inc/headers.php';

if(isset($_SESSION['username'])) {
    http_response_code(200);
    echo $_SESSION['username']."eka testi";
    return;
}

if (!isset($_POST['logemail']) || !isset($_POST["logpassword"])) {
    http_response_code(401);
    echo "cannot login. Give valid info";
    return;
}

$username = $_POST['logemail'];
$password = $_POST['logpassword'];

$verified_user = checkLogin($username, $password);

if ($verified_user) {
    $_SESSION['username'] = $verified_user;
    http_response_code(200);
    echo "verified user:".$verified_user;
} else {
    http_response_code(401);
    echo "Wrong username or password.";
}
