<?php
require_once '../inc/functions.php';
require_once '../inc/headers.php';


// 
try {
    $db = openDb();
    selectAsJson($db, 'select * from subcategory'); /**/
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