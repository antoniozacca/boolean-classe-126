<?php

require_once __DIR__ . '/src/User.php';
require_once __DIR__ . '/src/BankAccount.php';



$gaetano = new User('Gaetano', 'Frascolla', 40);
$gaetano->setHasBankAccount(true);

var_dump($gaetano);



if ($gaetano->getHasBankAccount()) {
  try {
    $bankGaetano = new BankAccount();
    $bankGaetano->setownerName('Gae'); //eccezione perchè nome piu corto di 3 caratteri
    $bankGaetano->setownerSurname('Frascolla');

    $bankGaetano->setMoney(1000); //eccezione perchè  valore inferiore di zero
    var_dump($bankGaetano);
  } catch (Exception $e) {
    echo $e->getMessage();
  } catch (TypeError $e) {
    echo 'Errore fatale, chiama Gaetano';
  }
}
