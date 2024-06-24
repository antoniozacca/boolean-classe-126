<?php



// throw new Exception('ciao classe 126');


// class Exception {

//   private string $message;

//   public function __construct($text)
//   {
//     $this->message = $text;
//   }

//   public function getMessage(){
//     return $this->message;
//   }

// }


function mult($num)
{

  if (!is_int($num)) {

    // echo 'non è un numero';
    // die();

    throw new Exception('Attenzione, devi passare un numero');
  }

  if ($num < 10) {
    throw new Exception('Attenzione, il numero deve essere >= 10');
  }


  return 100 * $num;
}

// echo mult("prova");

try {
  echo 'sono nel try';
  echo mult(4);
} catch (Exception $error) {
  echo 'sono nel catch';
  echo $error->getMessage();
}

echo 'sono dopo queste istruzioni';
