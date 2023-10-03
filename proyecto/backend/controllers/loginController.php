<?php
require_once './cors.php';
require_once '../models/turista.php';
require_once '../models/restaurante.php';
require_once '../models/login.php';
require_once '../models/session.php';


function loginRestauranteController($tabla, $datos)
{
    $restaurante = new Restaurante();
    $login = new Login($restaurante);
    $restaurante->setEmail($datos['email']);
    $restaurante->setContrasenia($datos['contrasena']);

    // Llama a la funcion authenticate y verifica si las credenciales son correctas
    $usuarioData = $login->authenticate($tabla);

    if ($usuarioData) {
        // Llama a generateToken con los datos del usuario
        $token = Login::generateToken($usuarioData);

        if ($token) {
            // Devuelve un array con el token y un succes
            return array("success" => true, "token" => $token);
        }
    }

    // En caso de falla, devuelve un succes en falso
    return array("success" => false);
}

function loginTuristaController($tabla, $datos)
{
    $turista = new Turista();
    $login = new Login($turista);
    $turista->setEmail($datos['email']);
    $turista->setContrasenia($datos['contrasena']);

    // Llama a la funcion authenticate y verifica si las credenciales son correctas
    $usuarioData = $login->authenticate($tabla);

    if ($usuarioData) {
        // Llama a generateToken con los datos del usuario
        $token = Login::generateToken($usuarioData);

        if ($token) {
            // Devuelve un array con el token y un succes
            return array("success" => true, "token" => $token);
        }
    }

    // En caso de falla, devuelve un succes en falso
    return array("success" => false);
}





if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (isset($data['accion'])) {
        switch ($data['accion']) {
            case 'loginTurista':
                // Validar los datos recibidos
                if (isset($data['email']) && isset($data['contrasena'])) {
                    $result = loginTuristaController("usuarios", $data);
                    if ($result['success']) {
                        http_response_code(200); // Código de estado 200 (OK)
                        echo json_encode(array("token" => $result['token']));
                    } else {
                        http_response_code(401); // Código de estado 401 (No autorizado)
                        echo json_encode(array("mensaje" => "Autenticacion fallida"));
                    }
                } else {
                    http_response_code(400); // Código de estado 400 (Solicitud incorrecta)
                    echo json_encode(array("mensaje" => "Datos incompletos"));
                }
                break;
            case 'loginRestaurante':
                // Validar los datos recibidos
                if (isset($data['email']) && isset($data['contrasena'])) {
                    $result = loginRestauranteController("usuarios", $data);
                    if ($result['success']) {
                        http_response_code(200); //Devuelve un status 200
                        echo json_encode(array("token" => $result['token']));  //devuele el token en json
                    } else {
                        http_response_code(401); //Devuelve un status 400
                        echo json_encode(array("mensaje" => "Autenticacion fallida"));
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
        echo json_encode(array("mensaje" => "No se proporciono la accion"));
    }
}
