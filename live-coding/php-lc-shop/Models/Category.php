<?php
require_once __DIR__.'/../Traits/Name.php';
class Category {

  use Name {
    get_name as get_name_trait;
  }



  // private $name;
  private $icon;

  public function __construct($_name, $_icon){
    $this->name = $_name;
    $this->icon = $_icon;
  }

  // public function get_name(){
  //   return $this->name;
  // }

  //   public function set_name($_name){
  //   $this->name = $_name;
  // }


  public function get_icon(){
    return $this->icon;
  }

  public function get_name(){
    return "Category: {$this->get_name_trait()}";
  }


}