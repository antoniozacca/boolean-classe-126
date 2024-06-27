<?php

require_once __DIR__ . '/Product.php';

class Food extends Product
{
  private ?string $ingredients = null;
  private bool $isVegan = false;
  private ?string $expirationDate = null;

  /**
   * Get the value of expirationDate
   */
  public function getExpirationDate()
  {
    return $this->expirationDate;
  }

  /**
   * Set the value of expirationDate
   *
   * @return  self
   */
  public function setExpirationDate($expirationDate)
  {
    $this->expirationDate = $expirationDate;

    return $this;
  }

  /**
   * Get the value of isVegan
   */
  public function getIsVegan()
  {
    return $this->isVegan;
  }

  /**
   * Set the value of isVegan
   *
   * @return  self
   */
  public function setIsVegan($isVegan)
  {
    $this->isVegan = $isVegan;

    return $this;
  }

  /**
   * Get the value of ingredients
   */
  public function getIngredients()
  {
    return $this->ingredients;
  }

  /**
   * Set the value of ingredients
   *
   * @return  self
   */
  public function setIngredients($ingredients)
  {
    $this->ingredients = $ingredients;

    return $this;
  }
}
