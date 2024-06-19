<?php


require_once __DIR__ . '/config/session.php';


if (!isset($_SESSION['login'])) {
  header('Location: ./index.php');
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <?php include __DIR__ . '/includes/styles.php'; ?>
</head>

<body>



  <main class="py-5">
    <div class=" container">
      <h1>La tua area riservata</h1>

      <?php include __DIR__ . '/includes/menu.php'; ?>

      <a href="logout.php" class="btn btn-info">Logout</a>

    </div>

  </main>


</body>

</html>