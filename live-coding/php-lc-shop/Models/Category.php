<?php

class Category
{

  private string $name;
  private string $icon;

  public function __construct(string $name, string $icon)
  {
    $this->name = $name;
    $this->icon = $icon;
  }


  /**
   * Get the value of icon
   */
  public function getIcon(): string
  {
    return $this->icon;
  }

  /**
   * Set the value of icon
   *
   * @return  self
   */
  public function setIcon(string $icon): void
  {
    $this->icon = $icon;
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
}
