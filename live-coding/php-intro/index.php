<?php
$first_name = 'Gaetano';

//cognome
$last_name = 'Frascolla';

/*
     questi
     sono
     i 
     miei
     anni
 */
$age = 41;
$isOld = false;

$prova_array = [1, 2, 3];

// echo $prova_array;

// var_dump($prova_array);


$prova_array_string = ['gaetano', '41', 'prova'];

var_dump($prova_array_string);


?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>La mia prima pagina PHP</title>
</head>

<body>
  <h1>Sono una pagina PHP</h1>
  <p>Il mio nome è <?php echo $first_name; ?> </p>

</body>

</html>