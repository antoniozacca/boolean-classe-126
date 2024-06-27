<?php

require_once __DIR__ . '/Category.php';

class Product
{

  private string $name;
  private float $price = 0;
  private ?string $description = null;
  private Category $category;
  protected string $type = '';


  //se passo i parametri eseguo una certa logica
  public function __construct(string $name, Category $category)
  {
    // $this->name = $name;
    $this->setName($name);
    $this->setCategory($category);
    //metodi di debug o di controllo specifici
  }





  /**
   * Get the value of name
   */
  public function getName(): string
  {
    return $this->name;
  }

  /**
   * Set the value of name
   *
   * @return  self
   */
  public function setName(string $name): void
  {
    $this->name = $name;
  }

  /**
   * Get the value of price
   */
  public function getPrice(): float
  {
    return $this->price;
  }

  /**
   * Set the value of price
   *
   * @return  self
   */
  public function setPrice(float $price): void
  {
    $this->price = $price;
  }

  /**
   * Get the value of description
   */
  public function getDescription(): ?string
  {
    return $this->description;
  }

  /**
   * Set the value of description
   *
   * @return  self
   */
  public function setDescription(string $description): void
  {
    $this->description = $description;
  }

  /**
   * Get the value of category
   */
  public function getCategory(): Category
  {
    return $this->category;
  }

  /**
   * Set the value of category
   *
   * @return  self
   */
  public function setCategory(Category $category): void
  {
    $this->category = $category;
  }

  /**
   * Get the value of type
   */
  public function getType()
  {
    return $this->type;
  }

  public function getCurrentType()
  {
    return get_class($this);
  }
}
