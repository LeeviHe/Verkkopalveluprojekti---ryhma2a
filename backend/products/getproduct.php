<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

try {
    $db = openDb();
    selectAsJson($db, 'select * from product where productnumber=1');
} catch (PDOException $pdoex) {
    returnError($pdoex); }