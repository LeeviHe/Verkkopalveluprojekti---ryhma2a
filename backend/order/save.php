<?php
session_start();
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));

$fname = filter_var($input->fname,FILTER_SANITIZE_SPECIAL_CHARS);
$lname = filter_var($input->lname,FILTER_SANITIZE_SPECIAL_CHARS);
$address = filter_var($input->address,FILTER_SANITIZE_SPECIAL_CHARS);
$email = filter_var($input->email,FILTER_SANITIZE_SPECIAL_CHARS);
$postnumber = filter_var($input->postnumber,FILTER_SANITIZE_SPECIAL_CHARS);
$postdist = filter_var($input->postdist,FILTER_SANITIZE_SPECIAL_CHARS);
$cart = $input->cart;


try{
    $db = openDb();
    $db-> beginTransaction();

    $sql =  "INSERT INTO customer (fname, lname, address, email, postnumber, postdist) values ('$fname', '$lame', '$address', '$email', '$postnumber', '$postdist')";
    $statement = $db->prepare($sql);
    $statement->execute();

    
  $customerid = 	$db->lastInsertId();


  $sql = "insert into order (customerid, orderdate) values ($customerid, '$date')";
  $statement = $db->prepare($sql);
  $statement->execute();

  $order_id = $db->lastInsertId();

  foreach ($cart as $product) {
    $sql = "insert into orderrow (ordernumber, productnumber, amount) values ($ordernumber, $product->productnumber, $product->amount )";
    $statement = $db->prepare($sql);
    $statement->execute();
  }
  $db->commit();

  header('HTTP/1.1 200 OK');
  $data = array('id' => $customerid);
  echo json_encode($data);
} 
catch (PDOException $pdoex) {
    $db->rollBack();
    returnError($pdoex);
  
}
