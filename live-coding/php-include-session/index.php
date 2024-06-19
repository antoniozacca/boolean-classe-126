<?php

require_once __DIR__ . '/config/session.php';

$demo_code = 1234;

if (!empty($_GET['code'])) {


  if (intval($_GET['code']) === $demo_code) {


    $_SESSION['login'] = true;
    header('Location: ./dashboard.php');
    die();
  }
}



?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Prova Login</title>
  <?php include __DIR__ . '/includes/styles.php'; ?>
</head>

<body>
  <main class="py-5">
    <div class=" container">
      <h1>Home Page</h1>

      <?php include __DIR__ . '/includes/menu.php'; ?>


      <?php if (!isset($_SESSION['login'])) : ?>

        <a href="index.php?code=1234" class="btn btn-success">Prova Login Valido</a>
        <a href="index.php?code=5678" class="btn btn-danger">Prova Login NON Valido</a>

      <?php else : ?>

        <p>Ciao, guarda che hai già effettuato accesso</p>
        <a href="dashboard.php" class="btn btn-warning">vai alla tua area riservata</a>
      <?php endif; ?>

    </div>

  </main>

</body>

</html>