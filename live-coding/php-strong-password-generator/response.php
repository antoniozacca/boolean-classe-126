<?php

session_start();

if (empty($_SESSION['password'])) {
  header('Location: ./index.php');
  die();
}


?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Password Generata</title>
</head>

<body>
  <h1>La tua password</h1>
  <p>La tua password è <?php echo $_SESSION['password']; ?></p>
</body>

</html>