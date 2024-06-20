<?php

// $text = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris auctor auctor nulla, sed porta leo sodales ut. Nunc hendrerit risus a libero viverra, sed sodales ligula laoreet. In in orci orci. Vivamus nec venenatis quam. Cras justo augue, luctus nec justo eget, rhoncus vulputate leo. Quisque scelerisque elit vitae turpis sollicitudin, vitae pretium risus tempor. Morbi egestas leo eu mattis commodo. Nam ut mi tempor, bibendum massa non, finibus ex. Quisque vel faucibus elit. Proin sed viverra arcu. In elit elit, tempor in ultrices quis, pharetra sollicitudin mi. Praesent vulputate velit non lobortis maximus. Suspendisse dapibus elementum dolor, id scelerisque lacus semper non.

// Mauris id sollicitudin sem, ut aliquet mauris. Nullam cursus efficitur tortor, non auctor ipsum hendrerit ut. Duis gravida nibh elit. Sed ut porttitor sapien. Fusce eleifend in arcu vel consequat. Nunc aliquam eu ante nec pretium. Ut quis magna ipsum. Nam scelerisque blandit viverra. Vivamus semper interdum mauris a scelerisque. Nam nec pellentesque ipsum, sed imperdiet velit. Nulla quis hendrerit sem. Donec tincidunt blandit quam, interdum varius magna efficitur eu. Nullam bibendum molestie ligula vitae rhoncus.

// Vestibulum vitae augue at turpis condimentum rutrum. Nunc dictum, massa at pulvinar auctor, augue augue semper odio, ac tincidunt lectus eros at diam. Mauris sit amet interdum velit. Praesent placerat pellentesque erat, et imperdiet lacus vulputate quis. Vestibulum sed odio mauris. Sed et nibh nec libero ultrices lobortis. Proin nec lorem ut diam mattis ornare a vitae quam. Morbi varius, elit vel accumsan congue, ligula sapien convallis erat, in euismod nunc justo ut mi. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae;

// Phasellus semper eleifend diam, aliquet ornare justo mollis at. Sed quis elementum sem, quis bibendum nulla. Donec ornare laoreet neque eget convallis. Etiam dignissim quam eu nisi ornare, ac scelerisque augue lacinia. Sed semper erat eu consequat posuere. Donec lacus leo, venenatis et accumsan vulputate, vulputate at tortor. Aliquam faucibus lobortis mi, quis sagittis nisi dignissim quis. Orci varius natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Quisque eget massa a orci fermentum laoreet. In posuere urna at iaculis vulputate. Aliquam est est, blandit non erat ac, malesuada gravida arcu. Sed nec gravida massa, et auctor lectus. Nam velit lorem, porttitor sed tempus vitae, bibendum vitae neque. Donec ante felis, malesuada dapibus rhoncus bibendum, vehicula feugiat mi. Sed dignissim nunc magna, vitae pharetra arcu ornare sed. Etiam eget tincidunt odio.

// Suspendisse id imperdiet ipsum. Vestibulum sit amet neque tincidunt, elementum dui eu, congue massa. Donec aliquam volutpat massa, in placerat lorem. Cras vel tellus blandit dolor euismod tempor. Suspendisse facilisis orci erat, et ultrices enim volutpat id. Morbi mattis lectus sed tortor pretium, pharetra egestas sem pretium. Praesent eget lobortis velit. Etiam vestibulum, lacus in faucibus tempor, est orci semper lacus, in molestie nulla lorem sed augue. In facilisis, urna nec egestas gravida, ligula ipsum porta massa, ut bibendum nunc justo a mauris. Suspendisse sollicitudin odio ligula, non pharetra sem pulvinar eu. Nunc in urna vitae lacus pulvinar scelerisque. Ut sem ex, aliquet a scelerisque eget, condimentum vel massa. Ut purus ipsum, vulputate ut dignissim sit amet, volutpat non neque. Nulla mattis odio id elit scelerisque, et tempus arcu mollis. Sed rutrum interdum massa ut molestie.';


// file_put_contents('divinacommedia.txt', $text);

$read_html = file_get_contents('index.html');
// echo $read_html;
$response_html = str_replace("%titolo-pagina%", $_GET['titolo'], $read_html);
$random_page = rand(1, 100);


if (!is_dir('./backup')) {
  echo 'creo cartella';
  mkdir('./backup');
}

file_put_contents("./backup/index-{$random_page}.html", $response_html);


echo $response_html;
