<?php
// this php file need run in the SHELL!!!
// for windows ``` php socket.php ``` stop the socket just with C-c
// for unix ``` php socket.php start ``` and ``` php socket.php stop
require_once '../vendor/autoload.php';
require_once '../socket/ingame.php';
use Workerman\Worker;
use PHPSocketIO\SocketIO;

$io = new SocketIO(3120);
$usernames = array();
$waitinglist = array();
$cards = new cards();
// connect
$io->on('connection', function ($connection) use ($io) {
  $connection->addedUser = false;
  echo 'C';
  $connection->on('message', function ($msg) {
    echo 'M';
  });
  $connection->on('chat message', function ($msg) use ($connection, $io) {

    // $connection->emit('chat message from server', $msg);
    // $io->emit('chat message from server', $msg);
  });
  $connection->on('user reg', function ($username) use ($connection, $io) {
    global $usernames, $waitinglist, $cards;
    $getaccount = getaccount($username);
    if ($getaccount[0] == 1) {
        if (count($usernames < 2)) {
            $usernames[$username] = $getaccount;
            $connection->addedUser = true;
            $connection->username = $username;
            $re = array($usernames, $username);
            $connection->emit('reg complete', $re);
            $connection->join('table');
            if (count($usernames) == 2) {
                $io->to('table')->emit('start', count($usernames));
            } else {
                $connection->emit('wait', count($usernames));
            }
        } else {
            $connection->join('waiting');
            $waitinglist[$username] = $username;
            $connection->broadcast->emit('list', $username);
            $connection->emit('full', $username);
        }
        var_dump($usernames);
    }
  });
  $connection->on('disconnect', function ($msg) use ($connection) {
    global $usernames;
    if ($connection->addedUser) {
        unset($usernames[$connection->username]);
        $connection->broadcast->emit('user left', array(
               'username' => $connection->username,
               'numUsers' => count($usernames),
            ));
    }
    var_dump($usernames);
    echo 'D';
  });
});
Worker::runAll();
// 1、向当前客户端发送事件
// $connection->emit('event name', $data);
// 2、向所有客户端发送事件
// $io->emit('event name', $data);
// 3、向所有客户端发送事件，但不包括当前连接。
// $connection->broadcast->emit('event name', $data);
// 4、向某个分组的所有客户端发送事件
// $io->to('group name')->emit('event name', $data);
