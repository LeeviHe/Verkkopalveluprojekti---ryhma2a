<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';
//Product pagelle koodi

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$product_id = $parameters[1];


try {
    $db = openDb();
    selectRowJson($db,"select * from product where product_id = $product_id");
  }
  catch (PDOException $pdoex) {
    returnError($pdoex);
  }