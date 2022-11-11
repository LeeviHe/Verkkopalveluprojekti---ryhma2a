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