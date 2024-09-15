<?php
include 'conexion.php';

$cmd = $_REQUEST['cmd'];

    switch($cmd){
        case 'obtenerCiudades':
            $sql = "SELECT * FROM region";
            $result = pg_query($conn, $sql);
            $lastError = pg_last_error($conn);

            $obj = array();

            if($lasError){
                array_push($obj, array('error' => $lastError));
            }else{
                while($row = pg_fetch_object($result)){
                    array_push($obj, array('id' => $row->idregion, 'nombre' => $row->nombre));
                }
            }
            echo json_encode($obj);
    }


?>