<?php
require_once '../models/turista.php';
require_once '../models/restaurante.php';
require_once '../models/login.php';
require_once '../models/session.php';
require_once 'cors.php';
require_once '../vendor/autoload.php';
require '../vendor/autoload.php';

use Dotenv\Dotenv;
use Firebase\JWT\JWT;

/// Carga las variables de entorno desde el archivo .env
$dotenv = Dotenv::createImmutable('/var/www/html/');
$dotenv->load();


function loginUsuario($tabla, $datos)
{
    $restaurante = new Restaurante();
    $login = new Login($restaurante);
    $restaurante->setEmail($datos['email']);
    $restaurante->setContrasenia($datos['contrasena']);

    // Llama a la funcion authenticate y verifica si las credenciales son correctas
    $usuarioData = $login->authenticate($tabla);

    if ($usuarioData) {

        $tokenData = [
            'id_usuario' => $usuarioData['id_usuario'],
            'email' => $usuarioData['email'],
        ];
        $secret_key = $_ENV['SECRET_KEY'];
        $token = JWT::encode($tokenData, $secret_key, 'HS256');


        return array("success" => true, "usuarioData" => $usuarioData, "token" => $token);
    } else {
        return array("success" => false, "mensaje" => "Autenticación fallida");
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (isset($data['accion'])) {
        switch ($data['accion']) {
            case 'login':
                // Validar los datos recibidos
                if (isset($data['email']) && isset($data['contrasena'])) {
                    $result = loginUsuario("usuarios", $data);
                    if ($result['success']) {
                        http_response_code(200);
                        echo json_encode($result);
                    } else {
                        http_response_code(401);
                        echo json_encode(array("mensaje" => "Contraseña incorrecta"));
                    }
                } else {
                    http_response_code(400);
                    echo json_encode(array("mensaje" => "Datos incompletos"));
                }
                break;
            default:
                http_response_code(400);
                echo json_encode(array("mensaje" => "Accion no reconocida"));
        }
    } else {
        http_response_code(400);
        echo json_encode(array("mensaje" => "No se proporcionó la acción"));
    }
}