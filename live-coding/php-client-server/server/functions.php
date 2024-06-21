<?php

function getTodosForList($todo)
{
  return [
    "todoId" => $todo['id'],
    "todoName" => $todo['name'],
    "soloPerMarco" => $todo['name']
  ];
}
