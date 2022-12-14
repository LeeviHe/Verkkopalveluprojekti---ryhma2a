<?php

require_once '../inc/functions.php';
require_once '../inc/headers.php';

$db = null;

$input = json_decode(file_get_contents('php://input'));
$fname = filter_var($input->fname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$lname = filter_var($input->lname, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$address = filter_var($input->address, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$email = filter_var($input->email, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$zip = filter_var($input->zip, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$city = filter_var($input->city, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

$cart = $input->cart;

try {
  $db = openDb();

  $db->beginTransaction();

  $sql = "insert into customer_order (fname,lname,address,email,zip,city) values 
    ('" .
    filter_var($fname, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($lname, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($address, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($email, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($zip, FILTER_SANITIZE_FULL_SPECIAL_CHARS) . "','" .
    filter_var($city, FILTER_SANITIZE_FULL_SPECIAL_CHARS)
    . "')";

  $customerorder_id = executeInsert($db, $sql);

  //lisää tilaus
  $sql = "insert into `order` (customerorder_id) values ($customerorder_id)";
  $order_id = executeInsert($db, $sql);

  //lisää tilausrivit
  foreach ($cart as $product) {
    $sql = "insert into orderrow (order_id,product_id, amount) values ("
      .
      $order_id . "," .
      $product->product_id . "," .
      $product->amount
      .   ")";
    executeInsert($db, $sql);
  }

  $db->commit();
  header('HTTP/1.1 200 OK');
  $data = array('id' => $customerorder_id);
  echo json_encode($data);
} catch (PDOException $pdoex) {
  $db->rollback();
  returnError($pdoex);
  echo($pdoex);
};
