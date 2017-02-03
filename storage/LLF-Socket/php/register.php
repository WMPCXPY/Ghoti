<?php

session_start();
$requestback = array();
$username = $_POST['username'];
$password = $_POST['password'];
if (pregmatch($username, '/^[a-zA-Z0-9_]+$/') && pregmatch($password, '/^[a-zA-Z0-9_!@]+$/')) {
    $contentd = file_get_contents('../json/users.json');
    $data = json_decode($contentd);
    $length = count($data);
    $md5 = md5($password);
    for ($x = 0;$x < $length;++$x) {
        if ($data[$x][0] == $username) {
            array_push($requestback, 8, $username);
            break;
        }
    }
    if (count($requestback) < 1) {
        $key = genkey(6);
        $user = array();
        array_push($user, $username, $md5, $key, 200);
        array_push($data, $user);
        $re = json_encode($data);
        file_put_contents('../json/users.json', $re);
        array_push($requestback, 9, $key);
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
function genkey($length)
{
    $chars = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789';
    $key = '';
    for ($i = 0; $i < $length; ++$i) {
        $key .= $chars[ mt_rand(0, strlen($chars) - 1) ];
    }

    return $key;
}
