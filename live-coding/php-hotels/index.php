<?php

$hotels = [

    [
        'name' => 'Hotel Belvedere',
        'description' => 'Hotel Belvedere Descrizione',
        'parking' => true,
        'vote' => 4,
        'distance_to_center' => 10.4
    ],
    [
        'name' => 'Hotel Futuro',
        'description' => 'Hotel Futuro Descrizione',
        'parking' => true,
        'vote' => 2,
        'distance_to_center' => 2
    ],
    [
        'name' => 'Hotel Rivamare',
        'description' => 'Hotel Rivamare Descrizione',
        'parking' => false,
        'vote' => 1,
        'distance_to_center' => 1
    ],
    [
        'name' => 'Hotel Bellavista',
        'description' => 'Hotel Bellavista Descrizione',
        'parking' => false,
        'vote' => 5,
        'distance_to_center' => 5.5
    ],
    [
        'name' => 'Hotel Milano',
        'description' => 'Hotel Milano Descrizione',
        'parking' => true,
        'vote' => 2,
        'distance_to_center' => 50
    ],

];

// var_dump($hotels);

?>
<!DOCTYPE html>
<html lang="en">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>PHP Hotels</title>
    <!-- bootstrap -->

    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.3.3/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-QWTKZyjpPEjISv5WaRU9OFeRpok6YctnYmDr5pNlyT2bRjXh0JMhjY6hW+ALEwIH" crossorigin="anonymous">

    <!-- /bootstrap -->

</head>

<body>

    <header>
        <div class="container text-center p-3">
            <h1>Hotels</h1>
        </div>

    </header>

    <main>
        <!-- lista hotel -->
        <div class="container  p-3">
            <!-- versione lista ul -->
            <!-- <ul>
                <?php foreach ($hotels as $hotel) : ?>
                    <li>
                        <h2><?php echo $hotel['name']; ?></h2>
                        <div><?php echo $hotel['description']; ?></div>
                        <div>Parking: <?php echo $hotel['parking'] ? 'si' : 'no'; ?></div>
                        <div>Vote: <?php echo $hotel['vote']; ?></div>
                        <div>Distance: <?php echo $hotel['distance_to_center']; ?> km</div>
                    </li>
                <?php endforeach; ?>
            </ul> -->
            <!-- /versione lista ul -->
            <!-- versione tabella -->
            <table class="table table-striped">
                <thead>
                    <tr>
                        <th scope="col">Nome</th>
                        <th scope="col">Descrizione</th>

                        <th scope="col">Voto</th>
                        <th scope="col">Parcheggio</th>
                        <th scope="col">Distanza</th>
                    </tr>
                </thead>
                <tbody>
                    <?php foreach ($hotels as $hotel) : ?>
                        <tr>
                            <td><?php echo $hotel['name']; ?></td>
                            <td><?php echo $hotel['description']; ?></td>

                            <td><?php echo $hotel['vote']; ?></td>
                            <td><?php echo $hotel['parking'] ? 'si' : 'no'; ?></td>
                            <td><?php echo $hotel['distance_to_center']; ?> km</td>
                        </tr>
                    <?php endforeach; ?>
                </tbody>
            </table>
            <!-- /versione tabella -->
        </div>
        <!-- /lista hotel -->
    </main>

    <footer>
        <div class="container text-center p-3">
            Hotels by classe 126
        </div>
    </footer>

</body>

</html>