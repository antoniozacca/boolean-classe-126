<?php

$data = file_get_contents('studenti.json');

// $students = json_decode($data, true);

// var_dump($students);

//elaborazione del dato
$students = json_decode($data, true);
//aggiungo studenti

$students[] = [
  'name' => 'Andrea'
];

file_put_contents('antonio.json', json_encode($students));





//rimuovo studenti
//modifico studenti





//todo: salvare nuovamente il file studenti.json

header('Content-Type: application/json');

echo json_encode($students);
