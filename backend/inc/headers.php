<?php
header('Access-Control-Allow-Origin: http://localhost:3000');
header('Access-Control-Allow-Credentials: true');
header('Access-Control-Allow-Methods: POST, GET, PUT, DELETE, OPTIONS');
header('Access-Control-Allow-Headers: ACCEPT, Content-Type, Access-Control-Allow-Header');
header('Content-Type: application/json');
header('Access-Control-Max-Age: 3600');

//Tarkista esimerkki koodista if isset() metodi tähän
if($_SERVER['REQUEST_METHOD']=== 'OPTIONS') {
    return 0;
}