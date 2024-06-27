<?php

class Helper
{


  public static function toUpperCaseAndAdd126(string $text)
  {
    return strtoupper($text) . '126';
  }
}


class Car
{
  private static int $lastId = 0;
  private int $id;
  private string $name;
  private string $model = "m1";

  public function __construct(string $name)
  {

    $this->id = self::$lastId++;

    // $this->id = $car3->lastId++;
    $this->name = $name;
  }

  public static function getLastId(): int
  {
    return self::$lastId;
  }

  public function getName(): string
  {
    return $this->name;
  }
}


$car1 = new Car('Car 1');
$car2 = new Car('Car 2');
$car3 = new Car('Car 3');

$car4 = new Car('Car 4');
$car5 = new Car('Car 5');

// echo Car::getLastId();

// $helper = new Helper();
// $helper->toUpperCaseAndAdd126('ciao');

//echo $car1->getName();

echo Helper::toUpperCaseAndAdd126($car1->getName());

// echo Car::$lastId;


// var_dump($car1);
// var_dump($car2);
// var_dump($car3);
// var_dump($car4);
// var_dump($car5);
