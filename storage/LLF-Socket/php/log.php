<?php

session_start();
$requestback = array();
$mode = $_POST['mode'];
if (!isset($_COOKIE['username']) || $mode == 1) {
    // if(isset($_POST['username']))
    $username = $_POST['username'];
    $password = $_POST['password'];
    if (pregmatch($username, '/^[a-zA-Z0-9_]+$/') && pregmatch($password, '/^[a-zA-Z0-9_!@]+$/')) {
        $contentd = file_get_contents('../json/users.json');
        $data = json_decode($contentd);
        $length = count($data);
        $md5 = md5($password);
        for ($x = 0;$x < $length;++$x) {
            if ($data[$x][0] == $username) {
                if ($data[$x][1] == $md5) {
                    array_push($requestback, 1, $username);
                    $_SESSION['username'] = $username;
                    break;
                } else {
                    array_push($requestback, 2, $username);
                    break;
                }
            }
        }
        if (count($requestback) < 1) {
            array_push($requestback, 0, 'None');
        }
    } else {
        array_push($requestback, 3, 'Error');
    }
} else {
    $username = $_COOKIE['username'];
    $eusername = $_COOKIE['eusername'];
    if (pregmatch($username, '/^[a-zA-Z0-9_]+$/') && pregmatch($eusername, '/^[a-zA-Z0-9_]+$/')) {
        $contentd = file_get_contents('../json/users.json');
        $data = json_decode($contentd);
        $length = count($data);
        for ($x = 0;$x < $length;++$x) {
            if ($data[$x][0] == $username) {
                if (decode($eusername, $data[$x][2]) == $username) {
                    array_push($requestback, 1, $username);
                    break;
                } else {
                    array_push($requestback, 4, 'Cookie Error');
                }
            } else {
                array_push($requestback, 5, 'Cookie Not Exist');
            }
        }
        if (count($requestback) < 1) {
            array_push($requestback, 0, 'None');
        }
    } else {
        array_push($requestback, 3, 'Error');
    }
  // $password = decode($epassword,$key);
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
//@author Anyon
function encode($string, $skey)
{
    $strArr = str_split(base64_encode($string));
    $strCount = count($strArr);
    foreach (str_split($skey) as $key => $value) {
        $key < $strCount && $strArr[$key] .= $value;
    }

    return str_replace(array('=', '+', '/'), array('O0O0O', 'o000o', 'oo00o'), implode('', $strArr));
}
function decode($string, $skey)
{
    $strArr = str_split(str_replace(array('O0O0O', 'o000o', 'oo00o'), array('=', '+', '/'), $string), 2);
    $strCount = count($strArr);
    foreach (str_split($skey) as $key => $value) {
        $key <= $strCount  && isset($strArr[$key]) && $strArr[$key][1] === $value && $strArr[$key] = $strArr[$key][0];
    }

    return base64_decode(implode('', $strArr));
}
