<?php

$nome = $_GET['nome-persona'];
$cognome = $_GET['cognome-persona'];
$eta = $_GET['eta-persona'];

?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Test GET</title>
</head>

<body>
  <h1>Sono test GET</h1>
  <p>Benvenut* <?php echo $nome; ?> <?php echo $cognome; ?>, so che hai <?php echo $eta; ?> anni
</body>

</html>