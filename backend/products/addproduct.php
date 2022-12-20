<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$brand = filter_var($input->brand, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$name = filter_var($input->name, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$price = filter_var($input->price, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$catid = filter_var($input->catid, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$subcatid = filter_var($input->subcatid, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

if ($subcatid) {
try {
    $db = openDb();
    $sql = "INSERT INTO product (brand, productname, price, category_id, subcategory_id, img) values ('$brand', '$name', '$price', '$catid', '$subcatid', 'placeholder.png')";
    executeInsert($db,$sql);
    $data = array('id' => $db -> lastInsertId(), 'productname' => $name, 'price' => $price, 'image' => 'placeholder.png');
    print json_encode($data);
} catch (PDOException $pdoex){
    returnError($pdoex);
}} else {
    try {
        $db = openDb();
        $sql = "INSERT INTO product (brand, productname, price, category_id, img) values ('$brand', '$name', '$price', '$catid', 'placeholder.png')";
        executeInsert($db,$sql);
        $data = array('id' => $db -> lastInsertId(), 'productname' => $name, 'price' => $price, 'image' => 'placeholder.png');
        print json_encode($data);
    } catch (PDOException $pdoex){
        returnError($pdoex);
    }}