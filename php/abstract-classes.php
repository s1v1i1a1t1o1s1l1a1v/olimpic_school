<?php

interface SportPersonLife
{
    function regime();

    function healtCare();

    function healthyDreams();

}

interface sportActivity
{
    function compete();

    function condition();

    function tactics();

    function strategy();
}

abstract class Sport
{
    public $rules;
    public $uniform;
    public $coach;
    public $inventory;
    public $isOlympicSport;
    public $motivation;
    public $purpose;
    public $result = ['win', 'loose', 'draw'];
    public $skill;

    public function __construct($rules, $uniform, $coach, $inventory, $isOlympicSport, $motivation, $purpose, $result, $skill)
    {

        $this->rules = $rules;

        $this->uniform = $uniform;

        $this->coach = $coach;

        $this->inventory = $inventory;

        $this->isOlympicSport = $isOlympicSport;

        $this->motivation = $motivation;

        $this->purpose = $purpose;

        $this->result = $result;
    }

    abstract public function definitionOfWin();
}

class ArtisticGymnastics extends Sport implements SportActivity
{

    function __construct()
    {
    }

    function compete()
    {
        if($menCompetition){
            return "Floor Exercise, Pommel Horse, Still Rings, Vault, Parallel Bars, Horizontal Bar";
        } else if ($womenCompetition){
            return "Vault, Uneven bars, Balance beam, Floor exercise";
        }
    }

    function condition()
    {

    }

    function tactics()
    {

    }

    function strategy()
    {

    }

    function definitionOfWin()
    {
        return "SportPerson with highest score";
    }

}

class Box extends Sport implements SportActivity
{

    function __construct()
    {
    }

    function compete()
    {
        return "Boxing Match. One to One";
    }

    function condition()
    {

    }

    function tactics()
    {

    }

    function strategy()
    {

    }

    function definitionOfWin()
    {
        return "TKO or judgeDecision";
    }

}

class Chess extends Sport implements SportActivity
{

    function __construct()
    {
    }

    function compete()
    {
        return "ChessPlayer_1 vs ChessPlayer_2. One to One";

    }

    function condition()
    {

    }

    function tactics()
    {

    }

    function strategy()
    {

    }

    function definitionOfWin()
    {
        return "Chess_Player_1 set Mate to Chess_Player_2 ";
    }

}

class Wrestling extends Sport implements SportActivity
{

    function __construct()
    {
    }

    function compete()
    {

    }

    function condition()
    {

    }

    function tactics()
    {

    }

    function strategy()
    {

    }

    function definitionOfWin()
    {
        return "Tusche or Score 5:0";
    }

}

$chess = new Chess();


//
//abstract class SportsPerson {
//
//     $age;
//
//     $weight;
//
//     $height;
//
//     $health: ["excellent", "good", "normal", "weak"];
//
//     $streingth: ["very_strong", "strong", "normal", "needs_improvement", "weak"]
//
//     $sex;
//
//     $nationality;
//
//     dateTimeStamp: $careerStart;
//
//     dateTimeStamp? $careerEnd;
//}
//
//
//class ArtisticGymnastics extends Sport implements SportActivity {
//
//  function __construct($artur, $weight, $height, $health, $streingth, $sex, $nationality, $careerStart, $careerEnd) {
//	  $this->age = $artur;
//
//	  $this->weight = $weight;
//
//	  $this->heigth = $height;
//
//	  $this->health = $health;
//
//	  $this->streingth = $streingth;
//
//	  $this->sex = $sex;
//
//	  $this->nationality = $nationality;
//
//	  $this->careerStart = $careerStart;
//
//	  $this->careerEnd = $careerEnd;
//
//}
//
//
//$artisticGymanstics = new ArtisticGymnastics();
//
//$artur = new Gymnast(15, 50, 168, "excellent", "very_strong", male, ukr, 01.09.2013, null);
//$sviat = new Gymnast();
//$andriy = new Gymnast();
//$anton  = new Gymnast();
//$maksyn = new Gymnast();
//$dania = new Gymnast();
//$oleksiy = new Gymnast();
//
//
//class Box extends Sport implements SportActivity {}
//
//class Wrestling extends Sport implements SportActivity {}
//
//class Chess extends Sport implements SportActivity {}
//
//class Gymnast extends SportsPerson implements SportsPersonLife {};
//
//class Boxer extends SportsPerson implements SportsPersonLife {};
//
//class Wrestler extends SportsPerson implements SportsPersonLife {};
//
//class ChessPlayer extends SportsPerson implements SportsPersonLife {};
//
//
//?>
