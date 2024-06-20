<?php
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
  <form action="index.php" method="GET">
    <label for="password-length">Lunghezza della password</label>
    <input type="number" id="password-length" name="password-length">
    <input type="submit" value="Genera nuova password">
  </form>
</body>

</html>