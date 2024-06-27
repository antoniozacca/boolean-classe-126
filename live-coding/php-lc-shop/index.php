<?php

require_once __DIR__ . '/Models/Category.php';
require_once __DIR__ . '/Models/Product.php';
require_once __DIR__ . '/Models/Food.php';
require_once __DIR__ . '/Models/Game.php';

//definizione delle categorie
$categoria_cane = new Category('Cane', '<i class="fa-solid fa-dog"></i>');
$categoria_gatto = new Category('Gatto', '<i class="fa-solid fa-cat"></i>');
$categoria_tartaruga = new Category('Tartaruga Cow', '<i class="fa-solid fa-cow"></i>');

//definizione dei prodotti
//prodotto food
$pappa = new Food('Pappa ai cereali', $categoria_cane);
$pappa->setIngredients('Pollo, Verdura, Salmone');
$pappa->setPrice(60);

//prodotto game
$gomitolo = new Game('Gomitolo rosso', $categoria_gatto);
$gomitolo->setPrice(1);


//prodotto food
$alghe = new Food('Alghe fantastiche', $categoria_tartaruga);
$alghe->setIsVegan(true);
$alghe->setPrice(99);

$products = [
  $alghe,
  $pappa,
  $gomitolo
];


?>


<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP SHOP</title>

  <!-- BS -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

  <!-- Font Awesome -->
  <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.2/css/all.min.css" integrity="sha512-SnH5WK+bZxgPHs44uWIX+LLJAJ9/2PkPKZ5QiAj6Ta86w+fsb2TkcmfRyVX3pBnMFcV7oQPJkl9QevSCWr3W6A==" crossorigin="anonymous" referrerpolicy="no-referrer" />

</head>

<body>
  <header class="py-3">
    <div class="container">
      <h1>Pet Shop Boys</h1>
    </div>
  </header>


  <main class="py-3">
    <div class="container">
      <div class="row">
        <?php foreach ($products as $product) : ?>
          <!-- card prodotto -->
          <div class="col-md-4">
            <div class="card">
              <div class="card-body">
                <h5 class="card-title"><?php echo $product->getCategory()->getIcon(); ?> - <?php echo $product->getName(); ?></h5>
                <p class="card-text">
                  Prezzo: <?php echo $product->getPrice(); ?> €
                </p>
                <p class="card-text">
                  Category: <?php echo $product->getCategory()->getName(); ?>
                </p>
                <p class="card-text">
                  Type: <?php echo $product->getCurrentType(); ?>
                </p>
                <?php if ($product instanceof Food) : ?>
                  <p class="card-text">
                    Ingredients: <?php echo $product->getIngredients() ? $product->getIngredients() : 'Nessun ingrediente trovato'; ?>
                  </p>
                <?php endif; ?>
              </div>
            </div>

          </div>
          <!-- /card prodotto -->
        <?php endforeach; ?>

      </div>
    </div>

  </main>
</body>

</html>