<?php

function multiplication($int) {
 if (!is_int($int)) {

  $exception = new Exception("$int Is not a number");

   throw $exception;
 }
 return $int*5;
}


try {
  echo multiplication('ciao');
} catch (Exception $error) {

  //mando una mail allo sviluppatore e gli dico che è avvenuto QUESTO ERRORE SPECIFICO

  echo $error->getMessage();
}



echo '<hr>';



echo 'bellissima calcolatrice';

