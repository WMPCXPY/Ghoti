<?php
// this php file include function that running with out socket
// for sec we put card file in the cards.json
class cards
{
    protected $cards = array();
    public function __construct(){
      $this->cards = array();
      $colours = array(
            'S','H','D','C'
      );
      $numbers = array(
            '01','02','03','04','05','06','07','08','09','10','11','12','13'
      );
      foreach ($colours as $color){
        foreach ($numbers as $number){
          $card = $color.$number;
          array_push($this->cards, $card);
        }
      }
    }

    public function getCards(){
      return $this->cards;
    }

    public function shuffle(){
      shuffle($this->cards);
      shuffle($this->cards);
      shuffle($this->cards);
      shuffle($this->cards);
      shuffle($this->cards);
    }

    public function gencards($modes)
    {
        switch ($modes) {
        case 0:
        for ($i = 0;$i < 52;++$i) {
            $arr[$i] = $i + 1;
        }
        $N = 100;
        for ($i = 0;$i < $N;++$i) {
            $a = mt_rand(0, 51);
            $b = mt_rand(0, 51);
            $temp = $arr[$a];
            $arr[$a] = $arr[$b];
            $arr[$b] = $temp;
        }
        break;
        default:
        break;
        }
        // array_push($this->cards, 15);
        // var_dump($this->cards);
    }
}
function getaccount($username)
{
    if (pregmatch($username, '/^[a-zA-Z0-9_]+$/')) {
        $contentd = file_get_contents('../json/users.json');
        $data = json_decode($contentd);
        $length = count($data);
        for ($x = 0;$x < $length;++$x) {
            if ($data[$x][0] == $username) {
                return array(1, $data[$x][3]);
            }
        }

        return array(0, 0);
    }

    return array(2, 0);
}
function updateaccount($username, $balance)
{
    $re = json_encode($data);
    file_put_contents('../json/users.json', $re);
}
function pregmatch($string)
{
    if (preg_match('/^[a-zA-Z0-9_]+$/', $string)) {
        return true;
    } else {
        return false;
    }
}
function make_seed()
{
  list($usec, $sec) = explode(' ', microtime());
  return $sec + $usec * 1000000;
}
