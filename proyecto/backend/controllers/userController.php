<?php
include './cors.php';
require_once '../models/usuario.php';
function bloquearUsuario($id_usuario)
{
    $usuario=new Usuario();
    $usuario->blockAccount($id_usuario);
}

if($_SERVER['REQUEST_METHOD']=='POST'){
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if(isset($data['accion'])){
        switch($data['accion']){
            case "bloquearUsuario":
                $idUsuario=$data['id_usuario'];
                bloquearUsuario($idUsuario);
                break;
        }
    }
}