<?php

class User
{
  // public  string $firstName;
  // public  string $lastName;
  private int $eta = 0;
  private bool $hasBankAccount = false;

  public function __construct(public string $firstName, public string $lastName, int $eta)
  {
    // $this->firstName = $firstName;
    // $this->lastName = $lastName;
    $this->eta = $eta;
  }

  // public function __destruct()
  // {
  //   echo 'destruct invocato<br>';
  // }

  public function getFirstName(): string
  {
    return $this->firstName;
  }

  public function setFirstName(string $name): void
  {
    $this->firstName = $name;
  }

  public function getLastName(): string
  {
    return $this->lastName;
  }

  public function setLastName(string $name): void
  {
    $this->lastName = $name;
  }

  public function setEta(int $eta): void
  {
    $this->eta = $eta;
  }

  public function setHasBankAccount(bool $value)
  {
    $this->hasBankAccount = $value;
  }

  public function getHasBankAccount(): bool
  {
    return $this->hasBankAccount;
  }
}
