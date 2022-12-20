<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$subcategory_id = $parameters[2];

try {
    $db = openDb();
    $sql = "select * from subcategory where subcategory_id =".$subcategory_id;
    $query = $db->query($sql);
    $subcategory = $query->fetch(PDO::FETCH_ASSOC);

    $sql = "select * from product where subcategory_id =".$subcategory_id;
    $query = $db->query($sql);
    $subproducts = $query->fetchAll(PDO::FETCH_ASSOC);

    header('HTTP/1.1 200 OK');
    echo json_encode(array(
      "subcategory" => $subcategory ['subcategoryname'],
      "subproducts" => $subproducts
    ));
  }
  catch (PDOException $pdoex) {
    returnError($pdoex);
  }