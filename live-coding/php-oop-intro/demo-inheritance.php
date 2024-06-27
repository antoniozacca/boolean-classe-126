<?php
class User
{
  public string $nome;
  public string $email;
  public int $sconto = 0;
  public function setSconto(int $_eta): void
  {
    if ($_eta > 65) {
      $this->sconto = 15;
    }
  }
}

$gaetano = new User();

var_dump($gaetano);
