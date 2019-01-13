<?php

// db credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'inventorymgmt');

// Connect with the database.
function connect()
{
  $connect = pg_connect(`dbname=inventorymgmt host=localhost port=5432 user=matt`);
  $status = pg_connection_status($connect);
  echo $status;

//   if (pg_connect_errno($connect)) {
//     die("Failed to connect:" . pg_connect_error());
//   }

//   pg_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();