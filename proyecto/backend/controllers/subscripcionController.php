<?php

require_once '../models/subscripcion.php';


function restauranteCompraSub($idUsuarioRest, $idTipoSubs, $fechaPago)
{
    $subscripcion = new Subscripcion();
    $subscripcion->setIdUsuarioRest($idUsuarioRest);
    $subscripcion->setIdTipoSubs($idTipoSubs);
    $subscripcion->setFechaPago($fechaPago);
    if ($subscripcion->usuarioPagaSubscripcion()) {
        return json_encode(array('status' => 'La compra se realizo correctamente'));
    }else{
        return json_encode(array('status' => 'Error'));
    }
}


if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $resultado = "";

    if(isset($data["accion"])){
        switch($data['accion']){
            case 'comprarSubscripcion':
                $resultado=restauranteCompraSub($data['idUsuarioRest'],$data['idTipoSubs'],$data['fechaPago']);
                break;
        }
    }
    echo $resultado;
}
