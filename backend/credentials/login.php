<?php
require_once '../inc/headers.php';
session_start();
require_once '../inc/functions.php';

if(isset($_SESSION["username"])) {
    http_response_code(200);
    echo $_SESSION["username"];
    return;
}

if (!isset($_POST['logemail']) || !isset($_POST["logpassword"])) {
    http_response_code(401);
    echo "Kirjautumistietoja ei löydetty.";
    return;
}

// sanitizing user input

$username = filter_input(INPUT_POST, 'logemail', FILTER_SANITIZE_EMAIL);
$password = filter_input(INPUT_POST, 'logpassword', FILTER_SANITIZE_STRING);
$verified_user = checkLogin($username, $password);

try {
    $db = openDb();
    $stmt = $db->prepare("SELECT * FROM customer WHERE email = :email");

    $stmt->bindParam(':email', $username);
    $stmt->execute();

    $user = $stmt->fetch();

    if ($verified_user) {
      $_SESSION["username"] = $verified_user;
      http_response_code(200);
      echo htmlspecialchars($verified_user), ENT_NOQUOTES;

    } else {
      http_response_code(401);
      echo "Väärä sähköpostiosoite tai salasana.";
    }

  } catch (PDOException $pdoex) {
    returnError($pdoex);
  }

/*

old user login input

$username = $_POST['logemail'];
$password = $_POST['logpassword'];

$verified_user = checkLogin($username, $password);
if ($verified_user) {
    $_SESSION["username"] = $verified_user;
    http_response_code(200);
    echo $verified_user;
} else {
    http_response_code(401);
    echo "Väärä sähköpostiosoite tai salasana.";
}*/