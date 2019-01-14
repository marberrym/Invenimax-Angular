<?php

// db credentials
define('DB_HOST', 'localhost');
define('DB_USER', 'root');
define('DB_PASS', '');
define('DB_NAME', 'postgres://matt@localhost:5432/inventorymgmt');

// Connect with the database.
function connect()
{
  $connect = pg_connect(`user=matt host=localhost dbname=inventorymgmt`);
  $status = pg_connection_status($connect);
  echo $status;

//   if (pg_connect_errno($connect)) {
//     die("Failed to connect:" . pg_connect_error());
//   }

//   pg_set_charset($connect, "utf8");

  return $connect;
}

$con = connect();