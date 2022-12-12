<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';

$uri = parse_url(filter_input(INPUT_SERVER,'PATH_INFO'),PHP_URL_PATH);
$parameters = explode('/',$uri);
$category_id = $parameters[1];

// 
try {
    $db = openDb();
    selectAsJson($db, 'select * from subcategory where category_id =' .$category_id); /**/
    //$query = $db->query($sql);
    //$subcategory = $query->fetch(PDO::FETCH_ASSOC);

    /*header('HTTP/1.1 200 OK');
    echo json_encode(array(
      "category" => $category['categoryname'],
      "subcategory" => $subcategory
    ));*/
    
    /*header('HTTP/1.1 200 OK');
    echo json_encode(array(
      "subcategory" => $subcategory ['subcategoryname']
    ));*/
  }
catch (PDOException $pdoex) {
    returnError($pdoex);
}