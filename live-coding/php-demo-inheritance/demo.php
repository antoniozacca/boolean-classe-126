<?php

require_once __DIR__ . '/Traits/Name.php';

class SuperMagicWow
{
  use Name {
    getName as getNameProva;
  }


  public function __construct($name)
  {
    $this->name = $name;
  }
}



class Animal extends SuperMagicWow
{
  public function getName()
  {
    // $prova = parent::getName();

    return 'Animal: ' .
      $this->getNameProva();
  }
}

class Building extends SuperMagicWow
{


  public function getName()
  {
    // $prova = parent::getName();

    return 'Building: ' . $this->getNameProva();
  }
}

class Person extends SuperMagicWow
{


  public function getName()
  {
    // $prova = parent::getName();

    return 'Person: ' . $this->getNameProva();
  }
}

$animal = new Animal('cane');
$building = new Building('grattacielo');
$person = new Person('gaetano');


echo $animal->getName() . '<br>';
echo $building->getName() . '<br>';
echo $person->getName() . '<br>';

// var_dump($animal);
// var_dump($building);
// var_dump($person);
