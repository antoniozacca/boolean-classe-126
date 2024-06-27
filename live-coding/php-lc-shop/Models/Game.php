<?php
require_once __DIR__ .'/Product.php';

class Game extends Product {

  private $material;
  private $age;
  private $size;


  public function set_material($_material){
    $this->material = $_material;
  }

  public function get_material(){
    return $this->material;
  }

  public function set_age($_age){
    $this->age = $_age;
  }

  public function get_age(){
    return $this->age;
  }

  public function set_size($_size){
    $this->size = $_size;
  }

  public function get_size(){
    return $this->size;
  }




}