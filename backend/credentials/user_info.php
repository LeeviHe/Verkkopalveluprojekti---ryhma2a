<?php
require_once '../inc/headers.php';
session_start();
require_once '../inc/functions.php';

if (!isset($_SESSION['username'])) {
    http_response_code(403);
    echo "No access for user data";
    return;
}

$name = getUserName($_SESSION['username']);

$result = array();
$result['name'] = $name;

$json = json_encode($result);
header('Content-type: application/json');
echo $json;