<?php

require_once '../inc/functions.php';
require_once '../inc/headers.php';

$db = null;

$input = json_decode(file_get_contents('php://input'));
$fname = filter_var($input->firstname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$lname = filter_var($input->lastname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$address = filter_var($input->address, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email = filter_var($input->email, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$zip = filter_var($input->zip, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$city = filter_var($input->city, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

$cart = $input->cart;

try {
  $db = openDb();

  $db->beginTransaction();

  //lisää asiakas
  $sql = "insert into customer (fname,lname,address,email,zip,city) values 
    ('" .
    filter_var($fname, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($lname, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($address, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($email, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($zip, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($city, FILTER_SANITIZE_FULL_SPECIAL_CHARS)
    . "')";

  $customerid = executeInsert($db, $sql);

  //lisää tilaus
  $sql = "insert into `order` (customerid) values ($customerid)";
  $ordernumber = executeInsert($db, $sql);

  //lisää tilausrivit
  foreach ($cart as $product) {
    $sql = "insert into orderrow (ordernumber,productnumber, amount) values ("
      .
      $ordernumber . "," .
      $product->productnumber . "," .
      $product->amount
      .   ")";
    executeInsert($db, $sql);
  }

  $db->commit();
  header('HTTP/1.1 200 OK');
  $data = array('id' => $customer_id);
  echo json_encode($data);
} catch (PDOException $pdoex) {
  $db->rollback();
  returnError($pdoex);
  echo ($pdoex);
};
