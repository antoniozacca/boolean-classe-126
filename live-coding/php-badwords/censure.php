<?php

//paragrafo con parole da censurare
$my_text = $_GET['my-text'];
#parola da censurare
$badword = $_GET['badword'];

//lunghezza del paragrafo da censurare
$my_text_length = strlen($my_text);

//censuro parola
// $my_text_cleaned = str_replace($badword, '***', $my_text);
$my_text_cleaned = str_ireplace($badword, '***', $my_text);

//lunghezza del paragrafo censurato
$my_text_cleaned_length = strlen($my_text_cleaned);

// echo $my_text;

// echo '<hr>';

// echo $badword;

?>

<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Badwords</title>
</head>

<body>
  <h2>Paragrafo da censurare</h2>
  <p><?php echo $my_text; ?></p>

  <h3>Parola da censurare</h3>
  <p><?php echo $badword; ?></p>

  <h3>Numero di caratteri del paragrafo da censurare</h3>
  <p><?php echo $my_text_length; ?></p>

  <hr>

  <h2>Paragrafo censurato</h2>
  <p><?php echo $my_text_cleaned; ?></p>

  <h3>Numero di caratteri del paragrafo da censurare</h3>
  <p><?php echo $my_text_cleaned_length; ?></p>
</body>

</html>