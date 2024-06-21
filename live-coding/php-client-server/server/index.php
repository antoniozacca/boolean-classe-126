<?php
require_once __DIR__ . '/functions.php';

$database_file = __DIR__ . '/database.json';

//lettura della base dati
$data = file_get_contents($database_file);
//restituisce array associativo php
$todos = json_decode($data, true);

//result default - tutti i todo
$result = $todos;


//CRUD - READ

if (isset($_GET['action']) && $_GET['action'] === 'read') {

  if (isset($_GET['todo-id'])) {
    $index = $_GET['todo-id'];

    $todo_position = array_search($_GET['todo-id'], array_column($todos, 'id'));
    if ($todo_position !== false) {
      $result = $todos[$todo_position];
    }
  }
}

//CRUD - CREATE
if (isset($_POST['action']) && $_POST['action'] === 'create') {

  $new_todo = [
    "id" => rand(1000, 2000),
    "name" => $_POST['text'],
    "done" => false,
    "description" => ""
  ];


  if ($todos && count($todos)) {
    $result = [...$todos, $new_todo];
  } else {
    $result = [$new_todo];
  }
  //salvataggio del dato
  file_put_contents($database_file, json_encode($result));
}



//CRUD - UPDATE
if (isset($_GET['action']) && $_GET['action'] === 'update') {
}

//CRUD - DELETE
if (isset($_GET['action']) && $_GET['action'] === 'delete') {
}




header('Content-Type: application/json');

if ($result) {
  //result edulcorato
  $result = array_map('getTodosForList', $result);
}


echo json_encode($result);
