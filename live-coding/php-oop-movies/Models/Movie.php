<?php
class Movie
{

  //siamo nella classe

  private string $title;
  private int $year;
  private array $genre = [];
  private int $vote;
  private string $logline;

  public function __construct(string $_title, int $_year, int $_vote)
  {
    // echo 'ho chiamato il costruttore';

    // echo $this->getTitle();
    // echo $_title;
    // echo $year;

    $this->title = $_title;
    $this->year = $_year;

    $this->setVote($_vote);
    // $this->vote = $_vote;
  }



  public function getTitle(): string
  {
    return $this->title;
  }

  public function setTitle(string $title): void
  {
    $this->title = $title;
  }

  public function getYear(): int
  {
    return $this->year;
  }

  public function setYear(int $year): void
  {
    $this->year = $year;
  }

  public function getGenre(): array
  {
    return $this->genre;
  }

  public function setGenre(string ...$genre): void
  {

    $this->genre = [...$this->genre, ...$genre];
  }

  public function getVote(): int
  {
    return $this->vote;
  }

  public function setVote(int $vote): void
  {

    if ($vote < 3 || $vote > 8) {
      throw new Exception("Il voto deve essere compreso tra 3 e 8");
    }

    $this->vote = $vote;
  }

  public function getLogLine(): string
  {
    return $this->logline;
  }

  public function setLogline(string $logline): void
  {
    $this->logline = $logline;
  }
}
