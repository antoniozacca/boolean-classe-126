<?php
require_once __DIR__ .'/Models/Category.php';
require_once __DIR__ .'/Models/Product.php';
require_once __DIR__ .'/Models/Food.php'; 
require_once __DIR__ .'/Models/Game.php';

// $prodotti_db = [
//   [
//     "name" => "Prova Prodotto"
//     "macro" => "Food"
//   ]
// ]



$cani = new Category('Cani', '<i class="fa-solid fa-dog"></i>');
$gatti = new Category('Gatti', '<i class="fa-solid fa-cat"></i>');

//product default
$product_default = new Product(100, 'Prova Prodotto', $cani);

//product food
$cibo_buono_cane = new Food(259, 'Cibo buono cane', $cani, 'pollo, verdura, salmone');
// $cibo_buono_cane->set_ingredients('pollo, verdura, salmone');

//product game
$palla_gatto = new Game(357, 'Palla rossa', $gatti);
$palla_gatto->set_material('lana');


// var_dump($product, $cibo_buono_cane, $palla_gatto);

$products = [
  $product_default,
  $cibo_buono_cane,
  $palla_gatto
];




?>




<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>PHP Shop</title>
  <!-- bootstrap -->
  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-T3c6CoIi6uLrA9TneNEoa7RxnatzjcDSCmG1MXxSR1GAsXEV/Dwwykc2MPK8M2HN" crossorigin="anonymous">
    <!-- /bootstrap -->
    <!-- font awesome -->
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css" integrity="sha512-DTOQO9RWCH3ppGqcWaEA1BIZOC6xxalwEsw9c2QQeAIftl+Vegovlnee1c9QX4TctnWMn13TZye+giMm8e2LwA==" crossorigin="anonymous" referrerpolicy="no-referrer" />
    <!-- /font awesome -->

</head>
<body>


  <div class="container">
      <h1>Pet Shop Boys</h1>
    <div class="row">

    <?php foreach($products as $product): ?>
       <!-- Col Prodotto --> 
      <div class="col-3">
      <!-- Card Prodotto --> 
        <div class="card">
          <div class="card-body">
            <h5 class="card-title"><?php echo $product->get_name(); ?></h5>
            <div>
              <p>
               <?php echo $product->get_category()->get_name(); ?> <?php echo $product->get_category()->get_icon(); ?>
              </p>
                 <p>
                Tipo: <?php if($product->get_product_type() === 'Food'): ?>pippo<?php endif; ?>
              </p>
              <p>Prezzo: <?php echo $product->get_price(); ?></p>
            </div>
            <a href="#" class="btn btn-primary">Go somewhere</a>
          </div>  
        </div>
      <!-- /Card Prodotto --> 
      </div>
      <!-- Col Prodotto --> 
      <?php endforeach; ?>
      
    </div>
</div>


</body>
</html>