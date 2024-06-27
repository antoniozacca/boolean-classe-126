<?php

class Genitore
{

  protected $name;
  private $surname;

  public function __construct($name, $surname)
  {
    $this->setName($name);
    $this->surname = $surname;
  }

  public function setName($name)
  {

    if (strlen($name) > 5) {
      $this->name = $name;
    }
  }
}

class Figlia extends Genitore
{

  public $livello;

  public function __construct($name, $surname, $livello)
  {


    parent::__construct($name, $surname);
    // $this->surname = $surname;
    $this->livello = $livello;
  }

  public function setName($name)
  {
    $this->name = $name;
  }




  // public function __construct($name, $surname, $livello)
  // {
  //   $this->setName($name);
  //   $this->surname = $surname;
  //   $this->livello = $livello;
  // }



  // public function setLivello($livello)
  // {
  //   $this->livello = $livello;
  // }
}
// class Nipote extends Figlia
// {
// }



// $genitore = new Genitore('Gaetano', 'Frascolla');
$figlia1 = new Figlia('Liv', 'Merello', 5);
// $figlia2 = new Figlia('nomeFiglia', 'cognomeFiglio', 10);

// $figlia1->setLivello(5);

// echo $figlia->name;

// echo $figlia->getNameMagic();

// $figlia->name = 'Nome Figlia';

// $figlia->demo();
// $genitore->demo();







// var_dump($genitore);
var_dump($figlia1);
// var_dump($figlia2);
// var_dump($figlia2);

// var_dump($genitore instanceof Genitore);

// var_dump($figlia instanceof Genitore);




// class User
// {
//   private $nome;
//   private $email;
//   private $sconto = 0;

//   public function setSconto(int $_eta): void
//   {
//     if ($_eta > 65) {
//       $this->sconto = 40;
//     }
//   }

//   public function getSconto(): int
//   {
//     return $this->sconto;
//   }
// }


// class Employee extends User
// {
//   public int $livello;
//   public function setLivello(int $_livello): void
//   {
//     $this->livello = $_livello;
//   }
// }


// $user = new User('Gaetano', 'me@gaetano.it');
// $employee = new Employee('Salvatore', 'me@salvatore.it');

// $employee->setSconto(100);

// var_dump($user);
// var_dump($employee);
