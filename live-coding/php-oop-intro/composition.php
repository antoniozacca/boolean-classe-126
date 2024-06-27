<?php

class Address
{
  private string $street;
  private string $city;
  private int $postcode;

  public function __construct($street, $city, $postcode)
  {
    $this->street = $street;
    $this->city = $city;
    $this->postcode = $postcode;
  }
  public function getStreet(): string
  {
    return $this->street;
  }

  public function setStreet(string $street): void
  {
    $this->street = $street;
  }

  public function getCity(): string
  {
    return $this->city;
  }

  public function setCity(string $city): void
  {
    $this->city = $city;
  }

  public function getPostcode(): int
  {
    return $this->postcode;
  }

  public function setPostcode(int $postcode): void
  {
    $this->postcode = $postcode;
  }
}


class User
{

  private string $name;
  private int $age;
  private ?Address $address = null;

  public function __construct(string $name, int $age)
  {
    $this->name = $name;
    $this->age = $age;
  }


  public function getName(): string
  {
    return $this->name;
  }

  public function setName(string $name): void
  {
    $this->name = $name;
  }

  public function getAge(): int
  {
    return $this->age;
  }

  public function setAge(int $age): void
  {
    $this->age = $age;
  }

  public function getAddress(): ?Address
  {
    return $this->address;
  }

  public function setAddress(Address $address): void
  {
    $this->address = $address;
  }
}

$first_address = new Address("Via delle prove 50", "Siviglia", 41003);



$gaetano = new User("Gaetano", 40);
$antonio = new User("Antonio", 25);


$gaetano->setAddress($first_address);
$antonio->setAddress($first_address);

$result = $gaetano->getAddress()?->getStreet() ?? 'Indirizzo non trovato';

?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>My User</title>
</head>

<body>
  <h2><?php echo $gaetano->getName(); ?></h2>
  <p>Age: <?php echo $gaetano->getAge(); ?></p>

  <p>Indirizzo: <?php echo $gaetano->getAddress()?->getStreet() ?? 'Indirizzo non trovato'; ?></p>

  <hr>

  <h2><?php echo $antonio->getName(); ?></h2>
  <p>Age: <?php echo $antonio->getAge(); ?></p>

  <p>Indirizzo: <?php echo $antonio->getAddress()?->getStreet() ?? 'Indirizzo non trovato'; ?></p>
</body>

</html>