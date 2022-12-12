<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';
//Product pagelle koodi
try {
    $db = openDb();
    selectAsJson($db, 'select * from product where product_id=1');
} catch (PDOException $pdoex) {
    returnError($pdoex); }