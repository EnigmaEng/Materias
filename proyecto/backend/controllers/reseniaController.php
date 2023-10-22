<?php
require_once '../models/resenia.php';
require_once './cors.php';

function reseniaRestaurante($idUsuarioTurista, $idUsuarioRest, $fecha, $calificacionInstalaciones, $calificacionPersonal, $calificacionMenu, $calificacionGeneral)
{
    $resenia = new Resenia();
    $resenia->setIdUsuarioTurista($idUsuarioTurista);
    $resenia->setIdUsuarioRest($idUsuarioRest);
    $resenia->setFecha($fecha);
    $resenia->setCalificacionInstalaciones($calificacionInstalaciones);
    $resenia->setCalificacionPersonal($calificacionPersonal);
    $resenia->setCalificacionMenu($calificacionMenu);
    $resenia->setCalificacionGeneral($calificacionGeneral);

    if ($resenia->usuarioResenia()) {
        return json_encode("La reseña se ha creado correctamente");
    } else {
        return json_encode("Error en la creacion de la reseña");
    }
}

function obtenerResenias()
{
    $resenia = new Resenia();
    $resenias = $resenia->obtenerResenias();
    header('Content-Type: application/json');

    $response = "";

    foreach ($resenias as $resenia) {
        $reseniaDatos = json_encode((array(
            "id_usuario_turista" => $resenia['id_usuario_turista'],
            "id_usuario_rest" => $resenia['id_usuario_rest'],
            "fecha" => $resenia['fecha'],
            "calificacion_instalaciones" => $resenia['calificacion_instalaciones'],
            "calificacion_personal" => $resenia['calificacion_personal'],
            "calificacion_menu" => $resenia['calificacion_menu'],
            "calificacion_general" => $resenia['calificacion_general']
        )));
        if (!empty($response)) {
            $response .= ",";
        }
        $response .= $reseniaDatos;
    }
    return "[$response]";
}

function obtenerReseniaPorId($idUsuarioRest)
{
    $resenia = new Resenia();
    $resenia->setIdUsuarioRest($idUsuarioRest);
    $resenias = $resenia->obtenerReseniaPorId();
    if ($resenias) {
        header('Content-Type: application/json');

        $response = "";

        foreach ($resenias as $resenia) {
            $reseniaDatos = json_encode((array(
                "id_usuario_turista" => $resenia['id_usuario_turista'],
                "id_usuario_rest" => $resenia['id_usuario_rest'],
                "fecha" => $resenia['fecha'],
                "calificacion_instalaciones" => $resenia['calificacion_instalaciones'],
                "calificacion_personal" => $resenia['calificacion_personal'],
                "calificacion_menu" => $resenia['calificacion_menu'],
                "calificacion_general" => $resenia['calificacion_general']
            )));
            if (!empty($response)) {
                $response .= ",";
            }
            $response .= $reseniaDatos;
        }
        return "[$response]";
    } else {
        $response = json_encode("Error en la consulta");
    }


    return "[$response]";
}


if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $response = '';

    switch ($data['accion']) {
        case 'crearResenia':
            $response = reseniaRestaurante($data['id_usuario_turista'], $data['id_usuario_rest'], $data['fecha'], $data['calificacion_instalaciones'], $data['calificacion_personal'], $data['calificacion_menu'], $data['calificacion_general']);
            break;
        case "obtenerResenias":
            $response = obtenerResenias();
            break;
        case "obtenerReseniaPorId":
            $response = obtenerReseniaPorId($data['id_usuario_rest']);
            break;
        default:
            $response = "Error en el tipo de accion, intente nuevamente";
            break;
    }

    echo $response;
}
