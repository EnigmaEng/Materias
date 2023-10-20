<?php
require_once '../models/restaurante.php';
require_once '../models/platoRestaurante.php';
require_once '../models/descuento.php';
require_once './cors.php';

function insertarController($alias = '', $url_img_usuario = '', $email = '', $contrasena = '', $rol = '', $nombre = '')
{
    $restaurante = new Restaurante();
    $datosUsuario = array(
        "alias" => $alias,
        "url_img_usuario" => $url_img_usuario,
        "email" => $email,
        "contrasena" => $contrasena,
        "rol" => $rol
    );

    $datosRestaurante = array(
        "nombre" => $nombre,
        "id_usuario" => ""
    );

    if ($restaurante->create("usuarios", $datosUsuario)) {
        if ($restaurante->createInRestaurante("restaurante", $datosUsuario, $datosRestaurante)) {
            return "Creacion de usuario exitosa";
        } else {
            return "Error en la creacion de usuario";
        }
    } else {
        return "El usuario ya existe";
    }
}

function crearPlato($id_plato, $nombre_plato, $costo, $descripcion, $url_img_menu, $estado_plato, $id_usuario_rest)
{
    $plato = new PlatoRestaurante();
    $plato->setIdPlato($id_plato);
    $plato->setNombrePlato($nombre_plato);
    $plato->setCosto($costo);
    $plato->setDescripcion($descripcion);
    $plato->setUrlImgMenu($url_img_menu);
    $plato->setEstadoPlato($estado_plato);
    $plato->setIdUsuario($id_usuario_rest);
    $plato->setPlato();
    return $plato->persistirPlato();
}


function crearDescuento($idDescuento, $idRestaurante, $activo, $tituloDescuento, $descripcion, $urlImgDescuento, $fechaInicio, $fechaFin)
{
    $descuento = new Descuento();
    $descuento->setIdDescuento($idDescuento);
    $descuento->setIdRestaurante($idRestaurante);
    $descuento->setActivo($activo);
    $descuento->setTituloDescuento($tituloDescuento);
    $descuento->setDescripcion($descripcion);
    $descuento->setUrlImagenDesc($urlImgDescuento);
    $descuento->setFechaInicio($fechaInicio);
    $descuento->setFechaFin($fechaFin);
    if ($descuento->crearDescuento()) {
        if ($descuento->restauranteTieneDescuento()) {
            return true;
        }
    }
    return false;
}

function obtenerPlatos($id_usuario_rest)
{
    $platos = new PlatoRestaurante();
    // Obtener la lista de restaurantes
    $obtenerPlatos = $platos->obtenerPlatosPorIdUsuarioRest($id_usuario_rest);

    if (!empty($obtenerPlatos)) {
        return json_encode($obtenerPlatos);
    } else {
        return "No se encontraron restaurantes";
    }
}

function obtenerRestaurante()
{
    $restaurante = new Restaurante();
    // Obtener la lista de restaurantes
    $restaurantes = $restaurante->obtenerRestaurantes();

    if (!empty($restaurantes)) {
        return json_encode($restaurantes);
    } else {
        return "No se encontraron restaurantes";
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);


    if (isset($data['accion'])) {
        switch ($data['accion']) {
            case "altaRestaurante":
                $resultado = insertarController(
                    $data['alias'],
                    $data['url_img_usuario'],
                    $data['email'],
                    $data['contrasena'],
                    $data['rol'],
                    $data['nombre']
                );
                break;
            case "crearPlato":
                $resultado = crearPlato(
                    $data['id_Plato'],
                    $data['nombre_plato'],
                    $data['costo'],
                    $data['descripcion'],
                    $data['url_img_menu'],
                    $data['estado_plato'],
                    $data['id_usuario_rest']
                );
                break;
            case "crearDescuento":
                $resultado = crearDescuento(
                    $data['id_descuento'],
                    $data['id_usuario_rest'],
                    $data['activo'],
                    $data['titulo_descuento'],
                    $data['descripcion'],
                    $data['url_img_descuento'],
                    $data['fecha_inicio'],
                    $data['fecha_fin']
                );
                if ($resultado == true) {
                    $resultado = "Descuento creado exitosamente";
                } else {
                    $resultado = "No se ha podido crear el descuento";
                }
                break;

            case "obtenerRestaurantes":
                $resultado = obtenerRestaurante();
                break;
            case "obtenerPlatos":
                $resultado = obtenerPlatos($data['id_usuario_rest']);
                break;
            default:
                $resultado = "Error en el tipo de accion, intente nuevamente";
                break;
        }
    }
    echo $resultado;

}

// if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['accion']) && $_GET['accion'] == 'obtenerPlatos') {
//     if (isset($_GET['id_usuario_rest'])) {
//         $idUsuarioRest = $_GET['id_usuario_rest'];

    
//         $platoRestaurante = new PlatoRestaurante();
        
//         $platos = $platoRestaurante->obtenerPlatosPorIdUsuarioRest($idUsuarioRest);

//         // Devuelve el resultado como JSON
//         header('Content-Type: application/json');
//         echo json_encode($platos);
//     } else {
//         echo json_encode(array('mensaje' => 'Falta el parámetro "id_usuario_rest".'));
//     }
// }
