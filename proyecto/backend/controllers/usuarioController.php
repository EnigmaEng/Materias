<?php
include_once '../models/turista.php';
include './cors.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/var/www/html/');
$dotenv->load();
function bloquearUsuario($emailUsuario)
{
    $usuario = new Turista();
    $usuario->blockAccount($emailUsuario);
}

function editarUsuario($idUsuario, $datos)
{
    $directorioDestino = $_ENV['DIR_IMAGEN'];
    $usuario = new Turista();
    $validOptions = ["alias", "contrasena", "url_img_usuario"];
    $nuevosDatos = [];

    foreach ($datos as $opcion => $valor) {
        if ($opcion === "accion" || $opcion === "id_usuario") {
            continue;
        }

        if (in_array($opcion, $validOptions)) {
            switch ($opcion) {
                case "alias":
                    $usuario->setAlias($valor);
                    break;
                case "contrasena":
                    $usuario->setContrasenia($valor);
                    break;
                case "url_img_usuario":
                    $usuario->setUrlImagenUsuario($valor);
                    break;
            }
            $nuevosDatos[$opcion] = $valor;
        } else {
            return json_encode(array("status" => "Opción de cambio no válida: " . $opcion));
        }
    }

    if (isset($_FILES['imagen']['name'])) {
        $nombreArchivo = $_FILES['imagen']['name'];
        $nuevosDatos["url_img_usuario"] = $nombreArchivo;
    }

    if ($usuario->editUser($idUsuario, $nuevosDatos)) {
        return json_encode(array("status" => "Los cambios se persistieron correctamente."));
    } else {
        return json_encode(array("status" => "Error en la persistencia de los cambios."));
    }
}




if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $resultado = "";

    if (isset($data)) {
        switch ($data['accion']) {
            case "bloquearUsuario":
                bloquearUsuario($data['email']);
                break;
            case "modificarUsuario":
                $resultado = editarUsuario($data["id_usuario"], $data);
                break;
            default:
                echo json_encode("Error en el tipo de accion");
                break;
        }
    }
    echo $resultado;
}
