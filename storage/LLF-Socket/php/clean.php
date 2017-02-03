<?php

$requestback = array();
$username = $_POST['username'];
$password = $_POST['password'];
if (pregmatch($username, '/^[a-zA-Z0-9_]+$/') && pregmatch($password, '/^[a-zA-Z0-9_!@]+$/')) {
    if ($username == 'potatoandfish' && $password == md5('orijen')) {
        $contentd = file_get_contents('../json/users.json');
        $data = json_decode($contentd);
        $length = count($data);
        $data = array();
        $re = json_encode($data);
        file_put_contents('../json/users.json', $re);
        array_push($requestback, 45, $length);
    } else {
        array_push($requestback, 44, 'WRONG');
    }
} else {
    array_push($requestback, 3, 'Error');
}
echo json_encode($requestback);
//under ->
//functions
function pregmatch($string, $preg)
{
    if (preg_match($preg, $string)) {
        return true;
    } else {
        return false;
    }
}
