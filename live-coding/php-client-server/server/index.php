<?php
require_once __DIR__ . '/functions.php';

$database_file = __DIR__ . '/database.json';


//lettura della base dati
$data = file_get_contents($database_file);

//parametro -  - stato azione (create, read, update, delete) => CRUD

$todos = json_decode($data, true); //restituisce array associativo php

$result = $todos;
if ($result) {
  $result = array_map('getTodosForList', $result);
}


if (isset($_GET['action']) && $_GET['action'] === 'read') {

  if (isset($_GET['todo-id'])) {
    $index = $_GET['todo-id'];

    $todo_position = array_search($_GET['todo-id'], array_column($todos, 'id'));
    if ($todo_position !== false) {
      $result = $todos[$todo_position];
    }
  }
}

//create
if (isset($_POST['action']) && $_POST['action'] === 'create') {

  // echo 'qualcuno vuole creare un todo';
  // die();

  //validazione dei dati

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
  file_put_contents($database_file, json_encode($result));
  $result = array_map('getTodosForList', $result);
}

if (isset($_GET['action']) && $_GET['action'] === 'update') {
}

if (isset($_GET['action']) && $_GET['action'] === 'delete') {
}




header('Content-Type: application/json');

echo json_encode($result);
