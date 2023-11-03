<?php
require './cors.php';
require_once '../models/subscripcion.php';
require_once '../models/admin.php';

function restauranteCompraSub($idUsuarioRest, $idTipoSubs, $fechaPago)
{
    $subscripcion = new Subscripcion();
    $subscripcion->setIdUsuarioRest($idUsuarioRest);
    $subscripcion->setIdTipoSubs($idTipoSubs);
    $subscripcion->setFechaPago($fechaPago);
    if ($subscripcion->usuarioPagaSubscripcion()) {
        return json_encode(array('status' => 'La compra se realizo correctamente'));
    } else {
        return json_encode(array('status' => 'Ya tienes una subscripcion pendiente o activa.'));
    }
}

function obtenerSubscripcionPorId($idUsuarioRest)
{
    $subscripcion = new Subscripcion();
    $subscripcion->setIdUsuarioRest($idUsuarioRest);
    return json_encode($subscripcion->obtenerSubscripcionPorId());
}

function finalizarSubscripcion($idUsuarioRest)
{
    $subscripcion = new Subscripcion();
    $subscripcion->setIdUsuarioRest($idUsuarioRest);
    if ($subscripcion->finalizarSubscripcion()) {
        return json_encode(array('status' => 'La subscripcion ha finalizado correctamente'));
    } else {
        return json_encode(array('status' => 'Error en finalizar la subscripcion'));
    }
}

function obtenerSubscripciones()
{
    $subscripcion = new Subscripcion();
    return json_encode($subscripcion->obtenerSubscripciones());
}

function adminApruebaRest($idUsuarioAdmin,$idUsuarioRest,$idTipoSubs){
    $subscripcion=new Subscripcion();
    $subscripcion->setIdTipoSubs($idTipoSubs);
    $admin=new Admin();
    $admin->setIdUsuarioAdmin($idUsuarioAdmin);
    $admin->setIdUsuarioRest($idUsuarioRest);
    if($admin->aprobarRestaurante($subscripcion)){
        return json_encode(array('status'=>'Restaurante aprobado correctamente.'));
    }else{
        return json_encode(array('status'=>'Hubo error en la aprobacion.'));
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $resultado = "";

    if (isset($data["accion"])) {
        switch ($data['accion']) {
            case 'comprarSubscripcion':
                $resultado = restauranteCompraSub($data['id_usuario_rest'], $data['idTipoSubs'], $data['fechaPago']);
                break;
            case 'obtenerSubscripcionPorId':
                $resultado = obtenerSubscripcionPorId($data['id_usuario_rest']);
                break;
            case 'finalizarSubscripcion':
                $resultado = finalizarSubscripcion($data['id_usuario_rest']);
                break;
            case 'obtenerSubscripciones':
                $resultado = obtenerSubscripciones();
                break;
            case 'aprobarRestaurante':
                $resultado= adminApruebaRest($data['id_usuario_admin'],$data['id_usuario_rest'],$data['id_tipo_sub']);
                break;
        }
    }
    echo $resultado;
}
