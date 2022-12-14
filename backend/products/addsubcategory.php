<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$input = json_decode(file_get_contents('php://input'));
$name = filter_var($input->name, FILTER_SANITIZE_FULL_SPECIAL_CHARS);
$id = filter_var($input->id, FILTER_SANITIZE_FULL_SPECIAL_CHARS);

try {
    $db = openDb();
    $sql = "INSERT INTO subcategory (subcategoryname, category_id) values ('$name', '$id')";
    executeInsert($db,$sql);
    $data = array('id' => $db -> lastInsertId(), 'subcategoryname' => $name);
    print json_encode($data);
} catch (PDOException $pdoex){
    returnError($pdoex);
}