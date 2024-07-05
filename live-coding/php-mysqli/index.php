<?php

define("DB_SERVERNAME", "localhost:8889");
define("DB_USERNAME", "root");
define("DB_PASSWORD", "root");
define("DB_NAME", "db_university");


$params = $_GET;

var_dump($params);




// Connect
$conn = new mysqli(DB_SERVERNAME, DB_USERNAME, DB_PASSWORD, DB_NAME);

// Check connection
if ($conn && $conn->connect_error) {
  echo "Connection failed: " . $conn->connect_error;
}

//connesso al db
//da qui in poi queries

if (isset($params['id']) && $params['id'] !== '') {
  echo 'ho un parametro';
  // $sql = "SELECT * FROM departments WHERE id = {$params['id']}";
  $stmt = $conn->prepare("SELECT * FROM departments WHERE id = ?");
  $stmt->bind_param("i", $params['id']);
  $stmt->execute();
  // $result = $conn->query($sql);
  $result = $stmt->get_result();
} else {
  echo 'non ho parametri';
  // $sql = "SELECT * FROM departments";
  $stmt = $conn->prepare("SELECT * FROM departments");

  $stmt->execute();
  // $result = $conn->query($sql);
  $result = $stmt->get_result();
}



/*


<?php

// prepare and bind
$stmt = $conn->prepare("INSERT INTO my_guests (firstname, lastname, email) VALUES (?, ?, ?)");
$stmt->bind_param("sss", $firstname, $lastname, $email);

// set parameters and execute
$firstname = "John";
$lastname = "Doe";
$email = "john@example.com";
$stmt->execute();

// get result
$result = $stmt->get_result();


*/





?>
<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Departments</title>
</head>

<body>
  <?php

  if ($result && $result->num_rows > 0) :
    // output data of each row
  ?>
    <ul>
      <?php
      while ($row = $result->fetch_assoc()) :
      ?>
        <li>
          <a href="?id=<?php echo $row['id']; ?>"><?php echo $row['id']; ?> - <?php echo $row['name']; ?> - <?php echo $row['head_of_department']; ?></a>
        </li>
      <?php
      endwhile;
      ?>
    </ul>
  <?php
  endif;

  ?>




</body>

</html>
<?php
$conn->close();
?>