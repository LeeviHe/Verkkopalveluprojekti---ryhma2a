<?php
require_once '../inc/headers.php';
session_start();
require_once '../inc/functions.php';

if (!isset($_SESSION['username'])) {
    http_response_code(403);
    echo "No access for user data";
    return;
}

$names = getUserName($_SESSION['username']);

$result = array();
$result['names'] = $names;

$json = json_encode($result);
header('Content-type: application/json');
echo htmlspecialchars($json);
//Testi tiedosto atm