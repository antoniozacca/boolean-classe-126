<?php

require_once __DIR__ . '/Product.php';

class Game extends Product
{


  private int $minAge = 0;
  private int $maxAge = 0;


  public function __construct(string $name, Category $category)
  {
    parent::__construct($name, $category);
    $this->type = 'game';
  }
}
