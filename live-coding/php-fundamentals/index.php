<?php

//esempi

echo '<h2>Istruzioni condizionali</h2>';

$age = $_GET['age'] ?? 18;
// echo $age;
$result = '';

if ($age >= 150) {
  echo 'benvenuto matusalemme';
} else if ($age >= 15) {
  echo 'benvenut';
} else {
  echo 'sei un ragazzin';
}

$name = 'Gaetano';
$test_concatenazione = 'Ciao sono ' . $name . ' e non so';
$test_concatenazione_wow = "Ciao sono $name e non so";
$test_concatenazione_wow2 = "Ciao sono {$name} e non so";

echo '<h2>Concatenazione Stringhe</h2>';

echo $test_concatenazione;
echo '<hr>';
echo $test_concatenazione_wow;
echo '<hr>';
echo $test_concatenazione_wow2;
echo '<hr>';

echo '<h2>Array indici numerici</h2>';

// $array = ['Valore1', 'Valore2', 'Valore3', 2, true];
$array = array('Valore1', 'Valore2', 'Valore3', 2, true);

var_dump($array);

echo '<hr>';

echo $array[4];

echo '<hr>';

$array[] = 'Valore aggiunto1';
$array[] = 'Valore aggiunto2';

array_push($array, 'Valore aggiunto 3', 'Valore aggiunto 4');


var_dump($array);



$array[] = "valore3";
// l’array avrà 3 elementi
// con indici 0, 1 e 2



echo '<h2>Array associativo</h2>';

$person_data = [
  'name' => 'John',
  'lastname' => 'Doe',
];

var_dump($person_data);

echo '<hr>';

echo $person_data['name'];

echo '<hr>';

//modifico la chiave name
$person_data['name'] = 'Gaetano';
//aggiungo una nuova chiave all'array associativo person_data
$person_data['age'] = 32;

//stampa il contenuto dell'array
var_dump($person_data);


echo '<h2>Array multidimensionali</h2>';

$team = [ // primo livello: array "contenitore" con indici numerici

  [ // secondi livelli: array associtativi
    "name" => "Fabio",
    "lastname" => "Forghieri",
    "role" => "Co-Founder",
  ],
  [
    "name" => "Michele",
    "lastname" => "Papagni",
    "role" => "Head of Teaching",
  ]
];

var_dump($team);


echo '<h2>Array multidimensionali</h2>';



$myNewInt = rand(1, 100);

echo $myNewInt;

echo '<hr>';

echo getrandmax();
//Stamperà un numero random tra 1 e 100




echo '<h2>Ciclo FOR</h2>';


for ($i = 0; $i < 10; $i++) {
  echo $i;
  echo '<br>';
}

echo '<h2>Ciclo FOREACH array indici numerici</h2>';


$products = [
  'biscuits',
  'cornflakes',
  'milk'
];


/*
array.forEach((value, key, arr) => {})

*/


foreach ($products as $key => $value) {
  if ($key !== 0) {
    echo "$key - $value";
    echo '<br>';
  }
}

echo '<h2>Ciclo FOREACH array associativo</h2>';

$studentData = [
  "name" => "John",
  "lastname" => "Doe"
];

foreach ($studentData as $key => $value) {
  // if ($key == 'lastname') {
  //   echo $value;
  // } else {
  //   echo substr($value, 0, 1);
  // }
  echo "$key - $value";
  echo '<br>';
}

echo '<h2>Cosa mai succederà</h2>';

$animals = [
  "mammals" => ["cow", "pig", "horse", "dog"],
  "birds" => ["duck", "chicken"]
];




// foreach ($animals as $animalClass) {
//   foreach ($animalClass as $animal) {
//     echo $animal;
//     echo '<br>';
//   }

//   echo '<hr>';
// }

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Document</title>
</head>

<body>
  <?php foreach ($animals as $key => $animalList) : ?>
    <h2><?php echo $key; ?></h2>
    <ul>
      <?php foreach ($animalList as $key => $animal) : ?>
        <li><?php echo $key; ?> - <?php echo $animal; ?></li>
      <?php endforeach; ?>
    </ul>
  <?php endforeach; ?>
</body>

</html>