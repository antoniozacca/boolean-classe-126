<?php
require_once __DIR__ . '/functions.php';

session_start(); //includiamo lo store

//se parametro password-length esiste ed è compilato allora genero password

$password = '';

if (!empty($_GET['password-length'])) {

  //validazione "deve essere un numero"
  $lunghezza_password = intval($_GET['password-length']) ? intval($_GET['password-length']) : rand(5, 10);

  //creazione della password
  $password = generatePassword($lunghezza_password);

  $_SESSION['password'] = $password;
  header('Location: ./response.php');
  die();
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Strong Password Generator</title>
</head>

<body>
  <h1>Password Generator</h1>
  <section>
    <form action="index.php" method="GET">
      <label for="password-length">Lunghezza della password</label>
      <input type="number" id="password-length" name="password-length">
      <input type="submit" value="Genera nuova password">
    </form>
  </section>

  <?php if (strlen($password)) : ?>
    <hr>
    <section>La tua password è <?php echo $password; ?></section>
  <?php endif; ?>
</body>

</html>