<?php

session_start();



if (!isset($_SESSION['nome'])) {

  $_SESSION['nome'] = 'Gaetano';
}
