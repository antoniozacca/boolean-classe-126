<?php

class BankAccount
{

  private string $ownerName;
  private string $ownerSurname;
  private int $money = 0;

  // public function __construct()
  // {

  // }

  public function getMoney()
  {
    return $this->addMoneyToMoney($this->money);
  }

  private function addMoneyToMoney(int $currentMoney)
  {
    return $currentMoney + 100;
  }


  public function setMoney(int $value)
  {

    if ($value < 0) {
      throw new Exception('Devi passare un importo numerico maggiore di zero');
    }
    $this->money = $value;
  }

  public function getFullName()
  {
    return $this->ownerName . " " . $this->ownerSurname;
  }

  public function setownerName(string $name)
  {

    if (strlen($name) <= 2) {
      throw new Exception('Il nome deve essere di almeno 3 caratteri');
    }
    $this->ownerName = $name;
  }
  public function setownerSurname(string $surname)
  {
    $this->ownerSurname = $surname;
  }
}
