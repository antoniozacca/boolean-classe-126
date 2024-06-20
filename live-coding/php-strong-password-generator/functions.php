<?php

function generatePassword($password_length)
{
  $upper_chars = range('A', 'Z');
  $lower_chars = range('a', 'z');
  $numbers = range(0, 9);
  $special = str_split('/()[]!?');

  $password_chars = [...$upper_chars, ...$lower_chars, ...$numbers, ...$special];

  $password = '';
  // $password_chars = 'ABCDZabcdz012349/()[]!?';

  for ($i = 0; $i < $password_length; $i++) {
    $rand = rand(0, count($password_chars) - 1);
    $password .= $password_chars[$rand];
  }

  return $password;
}
