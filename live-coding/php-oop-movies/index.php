<?php
require_once __DIR__ . '/Models/Movie.php';
require_once __DIR__ . '/Models/Genre.php';

//logica di creazione dati applicativo

$error = '';

try {

  // $genere1 = new Genre('prova1');

  $movie1 = new Movie("Titolo 1", 2000, 8);
  $movie2 = new Movie("Titolo 2", 1994, 5);
  $movie1->setVote(6);
  $movie1->setGenre([new Genre('Horror'), new Genre('Comedy')]);
  $movie2->setVote(5);
  // $movie2->setGenre(new Genre('Biopic'));
  //1000 loc
  // $movie2->setGenre('Prova aggiunta dopo');
  $movies_list = [$movie1, $movie2];



  var_dump($movies_list);
} catch (Exception $error) {

  $error = $error->getMessage();
}

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Movies</title>
</head>

<body>
  <h1>Movies</h1>
  <?php if ($error) : ?>
    <div>
      Si è verificato un errore durante la creazione dei movies: <?php echo $error; ?>
    </div>
  <?php else : ?>
    <ul>
      <?php foreach ($movies_list as $movie) : ?>
        <li>
          <div>
            <h3><?php echo $movie->getTitle(); ?></h3>
            <p>Vote: <?php echo $movie->getVote(); ?></p>
            <p>Year: <?php echo $movie->getYear(); ?></p>
            <p>Genre: <?php echo $movie->getAllgenres(); ?></p>
          </div>

        </li>
      <?php endforeach; ?>
    </ul>
  <?php endif; ?>

</body>

</html>