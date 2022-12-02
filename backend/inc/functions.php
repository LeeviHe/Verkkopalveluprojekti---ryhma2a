<?php

function openDb(): object {
    $ini = parse_ini_file('../conf.ini', true);
    $host = $ini['host'];
    $dbname = $ini['db'];
    $username = $ini['username'];
    $password = $ini['password'];
    $db = new PDO("mysql:host=$host;dbname=$dbname;charset=utf8", $username, $password);
    $db->setAttribute(PDO::ATTR_ERRMODE,PDO::ERRMODE_EXCEPTION);
    return $db;
}

function selectAsJson(object $db, string $sql) {
    $query = $db->query($sql);
    $results = $query->fetchAll(PDO::FETCH_ASSOC);
    header('HTTP/1.1 200 OK');
    echo json_encode($results);
}

function selectRowJson(object $db, string $sql) {
    $query = $db->query($sql);
    $results = $query->fetch(PDO::FETCH_ASSOC);
    header('HTTP/1.1 200 OK');
    echo json_encode($results);
}

function returnError(PDOException $pdoex){
    header('HTTP/1.1 500 internal server error');
    $error = array('error' => $pdoex->getMessage());
    print json_encode($error);
    exit;
}

function registerUser($fname, $lname, $email, $password) {
    $db = openDb();

    $pw = password_hash($password, PASSWORD_DEFAULT);

    $sql = "INSERT INTO customer (fname, lname, email, password) values (?, ?, ?, ?)";
    $statement = $db->prepare($sql);
    $statement->execute(array($fname, $lname, $email, $pw));
}

//Käyttäjän email osoitetta käytetään $username:na
function checkLogin ($username, $password) {
    $db = openDb();

    $sql = "SELECT password FROM customer WHERE email=?";
    $statement = $db->prepare($sql);
    $statement->execute(array($username));

    $hashedpw = $statement->fetchColumn();

    
    if(isset($hashedpw)){
        return password_verify($password, $hashedpw) ? $username : null;
    } else {
        return null;
    }
}

// Testi toistaseks
function getUserName ($username) {
    $db = openDb();

    $sql = "SELECT fname, lname FROM  customer WHERE email=?";
    $statement = $db -> prepare($sql);
    $statement -> execute(array($username));

    return $statement -> fetchAll(PDO::FETCH_COLUMN,0);
}