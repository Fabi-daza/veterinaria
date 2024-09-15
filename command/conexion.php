<?php 
$conn = pg_connect("host=localhost dbname=trainingfdaza port=5433 user=postgres password=12345");
if($conn){
    echo "Conexión exitosa a la base de datos fdaza\n";}
if (!$conn) {
  echo "Failed connecting to postgres database fdaza\n";
  exit;
}
?>