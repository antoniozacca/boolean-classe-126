<?php
trait Name {
  private $name;


  public function set_name($_name){
    $this->name = $_name;
  }
  
  /**
   * get_name: nome prodotto
   *
   * @return void
   */
  public function get_name(){
    return strtoupper($this->name);
  }
}