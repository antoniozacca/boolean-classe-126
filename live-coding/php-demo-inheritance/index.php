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
// var_dump($figlia1);
// var_dump($figlia2);
// var_dump($figlia2);

// var_dump($genitore instanceof Genitore);

// var_dump($figlia instanceof Genitore);

trait Position
{

  protected $lat;
  protected $lng;


  public function setLat($lat)
  {
    $this->lat = $lat;
  }

  public function getLat()
  {
    return $this->lat;
  }

  public function setLng($lng)
  {
    $this->lng = $lng;
  }

  public function getLng()
  {
    return $this->lng;
  }
}


class User
{

  use Position;

  private $nome;
  private $email;
  protected $sconto = 0;

  public function setNome($nome)
  {
    $this->nome = $nome;
  }



  public function setSconto(int $_eta): void
  {
    if ($_eta > 65) {
      $this->sconto = 60;
    }
  }

  public function getSconto(): int
  {
    return $this->sconto;
  }
}


class Employee extends User
{
  private $livello;

  public function setLivello(int $_livello): void
  {
    $this->livello = $_livello;
  }

  public function setSconto(int $_eta): void
  {
    parent::setSconto($_eta);



    if ($this->sconto < 50) {
      $this->sconto = $this->sconto + 20;
    } else {
      $this->sconto = $this->sconto + 13;
    }
  }
}

class SuperEmployee extends Employee
{

  public function setSconto(int $_eta): void
  {
    $this->sconto = 100;
  }

  public function setLat($lat)
  {
    $this->lat = 1970;
  }
}






//utente
$user = new User();
$user->setNome('Gaetano');
$user->setSconto(70);

//employee

$employee = new Employee();
$employee->setLivello(10);
$employee->setSconto(40);
$employee->setLat(100);

//super employee

$superEmployee = new SuperEmployee();
$superEmployee->setSconto(40);
$superEmployee->setLng(50);
$superEmployee->setLat(10);


var_dump($user);
var_dump($employee);
var_dump($superEmployee);
