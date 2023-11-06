<?php

require_once '../models/turista.php';
require_once '../models/resenia.php';
require_once '../models/alojamiento.php';
require_once '../models/localizacion.php';
require_once './cors.php';
require_once '../models/guardarImagen.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/var/www/html/');
$dotenv->load();

function insertarController($alias = '', $url_img_usuario = '', $email = '', $contrasena = '', $rol = '', $nacionalidad = '', $motivoAlojamiento = '', $nombres = '', $apellidos = '')
{
    $directorioDestino = $_ENV['DIR_IMAGEN'];
    $turista = new Turista();
    $datosUsuario = array(
        "alias" => $alias,
        "url_img_usuario" => $url_img_usuario,
        "email" => $email,
        "contrasena" => $contrasena,
        "rol" => $rol
    );

    $datosTurista = array(
        "nacionalidad" => $nacionalidad,
        "motivo_alojamiento" => $motivoAlojamiento,
        "id_usuario" => "",
        "nombres" => $nombres,
        "apellidos" => $apellidos
    );

    $guardarImagen = new GuardarImagen($directorioDestino);

    if (isset($_FILES['imagen']) && is_array($_FILES['imagen']['name'])) {
        $nombreArchivo = $_FILES['imagen']['name'][0];
        $ruta = $guardarImagen->guardarImagen($_FILES['imagen'], $nombreArchivo);
        $datosUsuario["url_img_usuario"] = $ruta;
    }

    if ($turista->create("usuarios", $datosUsuario)) {
        if ($turista->createInTurista("turista", $datosUsuario, $datosTurista)) {
            return "Creacion de usuario exitosa";
        } else {
            return "Error en la creacion de usuario";
        }
    } else {
        return "El usuario ya existe";
    }
}

function listarController($valores, $tabla)
{
    $turista = new Turista();
    $data = array(
        "valores" => "$valores",
        "tabla" => "$tabla"
    );
    return $turista->read($data);
}

function filtrarController($tabla, $datos)
{
    $turista = new Turista();
    return $turista->filter($tabla, $datos);
}

function borrarController($tabla, $datos)
{
    $turista = new Turista();
    $resultado = $turista->delete($tabla, $datos);
    echo $resultado;
}

function crearAlojamiento($id_usuario_turista, $nombre_alojamiento, $calle, $esquina, $nro_puerta, $fecha_ini_alojamiento, $fecha_fin_alojamiento)
{
    //Creacion de la localizacion
    $localizacion = new Localizacion();
    $localizacion->setCalle($calle);
    $localizacion->setEsquina($esquina);
    $localizacion->setNroPuerta($nro_puerta);
    if ($localizacion->crearLocalizacion()) {
        //Crear Alojamiento
        $idLocalizacion = $localizacion->obtenerUltimoIdLocalizacion();
        $alojamiento = new Alojamiento();
        $alojamiento->setNombreAlojamiento($nombre_alojamiento);
        $alojamiento->setIdLocAlojamiento($idLocalizacion);
        if ($alojamiento->crearAlojamiento()) {
            $turista = new Turista();
            $turista->setIdUsuario($id_usuario_turista);
            $idAlojamiento = $alojamiento->obtenerUltimoIdAlojamiento();
            $alojamiento->setIdAlojamiento($idAlojamiento);
            $alojamiento->setFechaIniAlojamiento($fecha_ini_alojamiento);
            $alojamiento->setFechaFinAlojamiento($fecha_fin_alojamiento);
            if ($alojamiento->insertarAlojamientoExistente($turista)) {
                return json_encode(array("status" => "Alojamiento creado correctamente"));
            } else {
                return json_encode(array("status" => "Error en la creacion del alojamiento de turista"));
            }
        } else {
            return json_encode(array("status" => "Error en la creacion de alojamiento"));
        }
    } else {
        return json_encode(array("status" => "Error en la creacion de localizacion"));
    }
}

function consultarAlojamiento($data)
{
    $alojamiento = new Alojamiento();
    $resultado = $alojamiento->buscarAlojamiento($data);
    if (!empty($resultado)) {
        return json_encode($resultado);
    } else {
        echo $resultado;
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if (isset($data['accion'])) {
        switch ($data['accion']) {
            case 'altaTurista':
                $resultado = insertarController(
                    $data['alias'],
                    $data['url_img_usuario'],
                    $data['email'],
                    $data['contrasena'],
                    $data['rol'],
                    $data['nacionalidad'],
                    $data['motivo_alojamiento'],
                    $data['nombres'],
                    $data['apellidos']
                );
                break;
            case "crearAlojamiento":
                $resultado = crearAlojamiento(
                    $data['id_usuario_turista'],
                    $data['nombre_alojamiento'],
                    $data['calle'],
                    $data['esquina'],
                    $data['nro_puerta'],
                    $data['fecha_ini_alojamiento'],
                    $data['fecha_fin_alojamiento']
                );
                break;
            case "consultarAlojamiento":
                $resultado = consultarAlojamiento($data);
                break;
        }
    } else {
        $resultado = 'Error en la peticion, intente nuevamente';
    }
    echo $resultado;
}

if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['accion']) && $_GET['accion'] == 'listarTuristas') {
    $turistas = listarController("*", "usuarios");

    header('Content-Type: application/json');

    $turistas_array = array();
    foreach ($turistas as $turista) {
        $turistas_array[] = $turista;
    }


    echo json_encode($turistas_array);
}


if ($_SERVER['REQUEST_METHOD'] == 'GET' && isset($_GET['accion']) && $_GET['accion'] == 'filtrarTurista') {
    $datos = array(
        "alias" => $_GET['alias'],
        "contrasenia" => $_GET['contrasenia']
    );
    $turista = filtrarController("usuarios", $datos);
    echo json_encode($turista);
}


if ($_SERVER['REQUEST_METHOD'] == 'DELETE' && isset($_GET['accion']) && $_GET['accion'] == 'eliminarTurista') {
    $datos = array(
        "alias" => $_GET['alias'],
        "contrasenia" => $_GET['contrasenia']
    );

    borrarController("usuarios", $datos);
}
