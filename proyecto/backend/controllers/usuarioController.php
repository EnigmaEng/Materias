<?php
include_once '../models/turista.php';

function bloquearUsuario($idUsuario)
{
    $usuario = new Turista();
    $usuario->blockAccount($idUsuario);
}

function editarUsuario($idUsuario, $opcion, $valor)
{
    $usuario = new Turista();
    if ($opcion == "alias" || $opcion == "contrasena" || $opcion == "url_img_usuario") {
        if ($usuario->editUser($idUsuario, $opcion, $valor) == true) {
            return json_encode(array("status" => "Los cambios persistieron correctamente."));
        } else {
            return json_encode(array("status" => "Error en la persistencia de los cambios."));
        }
    } else {
        return json_encode(array("status" => "Opcion de cambio no valida."));
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);


    if (isset($data)) {
        switch ($data['accion']) {
            case "bloquearUsuario":
                bloquearUsuario($data['id_usuario']);
                break;
            case "editarUsuario":
                $resultado = editarUsuario($data["id_usuario"], $data["opcion"], $data["valor"]);
                break;
            default:
                echo json_encode("Error en el tipo de accion");
                break;
        }
    }
    echo $resultado;
}


