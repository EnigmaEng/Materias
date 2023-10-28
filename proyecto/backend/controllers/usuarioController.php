<?php
include_once '../models/turista.php';

function bloquearUsuario($idUsuario){
    $usuario=new Turista();
    $usuario->blockAccount($idUsuario);
}

if($_SERVER['REQUEST_METHOD']=='POST'){
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);


    if(isset($data)){
        switch($data['accion']){
            case "bloquearUsuario":
                bloquearUsuario($data['id_usuario']);
                break;
            case "editarUsuario":
                
                break;    
            default:
                echo json_encode("Error en el tipo de accion");
                break;
        }
    }
}