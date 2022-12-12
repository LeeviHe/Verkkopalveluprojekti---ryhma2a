<?php
session_start();
require_once '../inc/functions.php';
require_once '../inc/headers.php';

if (!isset($_SESSION['username'])) {
    http_response_code(403);
    echo "No acces for user data";
    return;
}

$names = getUserName($_SESSION['username']);

$result = array();
$result['names'] = $names;

$json = json_encode($result);
header('Content-type: application/json');
echo $json;
//Testi tiedosto atm