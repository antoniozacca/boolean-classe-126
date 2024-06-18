<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>PHP Badwords</title>
</head>

<body>
  <form action="censure.php" method="GET">
    <div>
      <div><label for="my-text">Testo</label></div>
      <textarea name="my-text" id="my-text"></textarea>
    </div>

    <hr />

    <div>
      <div><label for="badword">Parola da censurare</label></div>
      <input type="text" name="badword" />
    </div>

    <hr />

    <div>
      <div><label for="password">Password</label></div>
      <input type="password" name="password" />
    </div>

    <hr />

    <button>Invia i dati</button>
  </form>
</body>

</html>