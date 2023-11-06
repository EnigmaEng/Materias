<?php
require_once '../models/restaurante.php';
require_once '../models/platoRestaurante.php';
require_once '../models/descuento.php';
require_once './cors.php';
require_once '../models/guardarImagen.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/var/www/html/');
$dotenv->load();


function insertarController($alias, $url_img_usuario, $email, $contrasena, $rol, $nombre, $nroLocal, $calle, $esquina, $numero, $tipo)
{
    $directorioDestino = $_ENV['DIR_IMAGEN'];

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
        "id_usuario" => "",
        "nro_local" => $nroLocal,
        "id_loc_restaurante" => ""
    );

    $direccionRestaurante = array(
        "calle" => $calle,
        "esquina" => $esquina,
        "nro_puerta" => $numero
    );

    $tipoRestaurantes = array(
        "id_usuario_rest" => "",
        "descripcion" => $tipo
    );

    $guardarImagen = new GuardarImagen($directorioDestino);

    if (isset($_FILES['imagen']) && is_array($_FILES['imagen']['name'])) {
        $nombreArchivo = $_FILES['imagen']['name'][0];
        $ruta = $guardarImagen->guardarImagen($_FILES['imagen'], $nombreArchivo);
        $datosUsuario["url_img_usuario"] = $ruta;
    }

    if ($restaurante->create("usuarios", $datosUsuario)) {
        if ($restaurante->dataCreate("localizacion", $direccionRestaurante) && $restaurante->createInRestaurante("restaurante", $datosUsuario, $datosRestaurante) && $restaurante->createInTipoRestaurante("tipo_restaurantes", $datosUsuario, $tipoRestaurantes)) {
            return "Creación de usuario exitosa";
        } else {
            return "Error en la creación de usuario";
        }
    } else {
        return "El usuario ya existe";
    }
}


function obtenerRestauranteById($id)
{
    $restaurante = new Restaurante();
    $restauranteById = $restaurante->obtenerRestauranteById($id);
    header('Content-Type: application/json');

    if (!empty($restauranteById)) {
        return json_encode($restauranteById);
    } else {
        return "No se encontraron restaurantes";
    }
}

function crearPlato($id_plato, $nombre_plato, $costo, $descripcion, $url_img_menu, $estado_plato, $id_usuario_rest)
{
    $directorioDestino = $_ENV['DIR_IMAGEN'];
    $plato = new PlatoRestaurante();
    $plato->setIdPlato($id_plato);
    $plato->setNombrePlato($nombre_plato);
    $plato->setCosto($costo);
    $plato->setDescripcion($descripcion);
    $plato->setUrlImgMenu($url_img_menu);
    $plato->setEstadoPlato($estado_plato);
    $plato->setIdUsuario($id_usuario_rest);
    $plato->setPlato();

    $guardarImagen = new GuardarImagen($directorioDestino);

    if (isset($_FILES['imagen']) && is_array($_FILES['imagen']['name'])) {
        $nombreArchivo = $_FILES['imagen']['name'][0];
        $ruta = $guardarImagen->guardarImagen($_FILES['imagen'], $nombreArchivo);
    }

    if ($plato->persistirPlato()) {
        return json_encode(array('status'=>'Plato creado correctamente!'));
    }
}


function crearDescuento($idRestaurante, $activo, $tituloDescuento, $descripcion, $urlImgDescuento, $fechaInicio, $fechaFin, $costo)
{
    $directorioDestino = $_ENV['DIR_IMAGEN'];
    $descuento = new Descuento();
    $descuento->setIdRestaurante($idRestaurante);
    $descuento->setActivo($activo);
    $descuento->setTituloDescuento($tituloDescuento);
    $descuento->setDescripcion($descripcion);
    $descuento->setUrlImagenDesc($urlImgDescuento);
    $descuento->setFechaInicio($fechaInicio);
    $descuento->setFechaFin($fechaFin);
    $descuento->setCosto($costo);

    $guardarImagen = new GuardarImagen($directorioDestino);

    if (isset($_FILES['imagen']) && is_array($_FILES['imagen']['name'])) {
        $nombreArchivo = $_FILES['imagen']['name'][0];
        $ruta = $guardarImagen->guardarImagen($_FILES['imagen'], $nombreArchivo);
        $urlImgDescuento = $ruta;
        $descuento->setUrlImagenDesc($urlImgDescuento);
    }

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
    $restaurantes = $restaurante->obtenerRestaurantes();

    header('Content-Type: application/json');

    $response = "";

    foreach ($restaurantes as $restaurante) {

        $restaurantesDatos = json_encode(array(
            "id_usuario" => $restaurante->id_usuario,
            "nombre_restaurante" => $restaurante->nombre_restaurante,
            "foto_usuario" => $restaurante->foto_usuario
        ));

        if (!empty($response)) {
            $response .= ",";
        }

        $response .= $restaurantesDatos;
    }

    return "[$response]";
}

function obtenerDescuentos()
{
    $descuento = new Descuento;
    return json_encode($descuento->mostrarDescuentos());
}

function obtenerDescuentoPorId($idDescuento)
{
    $descuento = new Descuento;
    $descuento->setIdDescuento($idDescuento);
    $resultado = $descuento->mostrarDescuentoPorId();
    if (!empty($resultado)) {
        return json_encode($resultado);
    } else {
        return json_encode(array("status" => "No se ha encontrado un descuento."));
    }
}

function obtenerDescuentoByIdUsuario($id){
    $descuento = new Descuento;
    $resultado = $descuento->mostrarDescuentosByIdUsuario($id);
    if(!empty($resultado)){
        return json_encode($resultado);
    }else{
            return json_encode(array("status" => "No hay descuentos del restaurante"));
        }
    }


function modificarPlato($idPlato, $datos)
{
    $plato = new PlatoRestaurante();
    $validOptions = ["nombre_plato", "costo", "descripcion", "estado_plato","url_img_menu"];
    $nuevosDatos = [];

    $directorioDestino = $_ENV['DIR_IMAGEN'];

    foreach ($datos as $opcion => $valor) {
        if ($opcion === "accion" || $opcion === "id_Plato") {
            continue;
        }

        if (in_array($opcion, $validOptions)) {
            switch ($opcion) {
                case "nombre_plato":
                    $plato->setNombrePlato($valor);
                    break;
                case "costo":
                    $plato->setCosto($valor);
                    break;
                case "descripcion":
                    $plato->setDescripcion($valor);
                    break;
                case "estado_plato":
                    $plato->setEstadoPlato($valor);
                    break;
            }
            $nuevosDatos[$opcion] = $valor;
        } else {
            return json_encode(array("status" => "Opción de cambio no válida: " . $opcion));
        }
    }

    $guardarImagen = new GuardarImagen($directorioDestino);

    if (isset($_FILES['imagen']['name'])) {
        $nombreArchivo = $_FILES['imagen']['name'][0];
        $ruta = $guardarImagen->guardarImagen($_FILES['imagen'], $nombreArchivo);
        $nuevosDatos["url_img_menu"] = $ruta;
    }

    if ($plato->modificarPlato($idPlato, $nuevosDatos)) {
        return json_encode(array("status" => "Modificación realizada correctamente."));
    } else {
        return json_encode(array("status" => "Hubo errores en la modificación."));
    }
}


function modificarDescuento($idDescuento, $datos)
{
    $descuento = new Descuento();
    $validOptions = ["activo", "titulo_descuento", "descripcion", "url_img_descuento", "costo"];
    $nuevosDatos = [];

    $directorioDestino = $_ENV['DIR_IMAGEN'];

    foreach ($datos as $opcion => $valor) {
        if ($opcion === "accion" || $opcion === "id_descuento") {
            continue;
        }

        if (in_array($opcion, $validOptions)) {
            switch ($opcion) {
                case "activo":
                    $descuento->setActivo($valor);
                    break;
                case "titulo_descuento":
                    $descuento->setTituloDescuento($valor);
                    break;
                case "descripcion":
                    $descuento->setDescripcion($valor);
                    break;
                case "url_img_descuento":
                    $descuento->setUrlImagenDesc($valor);
                    break;
                case "costo":
                    $descuento->setCosto($valor);
                    break;
            }
            $nuevosDatos[$opcion] = $valor;
        } else {
            return json_encode(array("status" => "Opción de cambio no válida: " . $opcion));
        }
    }

    $guardarImagen = new GuardarImagen($directorioDestino);

    if (isset($_FILES['imagen']['name'])) {
        $nombreArchivo = $_FILES['imagen']['name'][0];
        $ruta = $guardarImagen->guardarImagen($_FILES['imagen'], $nombreArchivo);
        $nuevosDatos["url_img_descuento"] = $ruta;
    }

    if ($descuento->modificarDescuento($idDescuento, $nuevosDatos)) {
        return json_encode(array("status" => "Modificación realizada correctamente."));
    } else {
        return json_encode(array("status" => "Hubo errores en la modificación."));
    }
}

if ($_SERVER['REQUEST_METHOD'] == 'POST') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);
    $resultado = "";
    if (isset($data['accion'])) {
        switch ($data['accion']) {
            case "altaRestaurante":
                $resultado = insertarController(
                    $data['alias'],
                    $data['url_img_usuario'],
                    $data['email'],
                    $data['contrasena'],
                    $data['rol'],
                    $data['nombre'],
                    $data['nro_local'],
                    $data['calle'],
                    $data['esquina'],
                    $data['nro_puerta'],
                    $data['descripcion']
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
                    $data['id_usuario_rest'],
                    $data['activo'],
                    $data['titulo_descuento'],
                    $data['descripcion'],
                    $data['url_img_descuento'],
                    $data['fecha_inicio'],
                    $data['fecha_fin'],
                    $data['costo']
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
            case "restauranteById":
                $resultado = obtenerRestauranteById($data['id_usuario']);
                break;
            case "obtenerPlatos":
                $resultado = obtenerPlatos($data['id_usuario_rest']);
                break;
            case "obtenerDescuentoPorId":
                $resultado = obtenerDescuentoPorId($data['id_descuento']);
                break;
            case "obtenerDescuentosByIdUsuario":
                $resultado = obtenerDescuentoByIdUsuario($data['id_usuario']);
                break;
            case "obtenerDescuentos":
                $resultado = obtenerDescuentos();
                break;
            case "modificarPlato":
                $resultado = modificarPlato($data['id_Plato'], $data);
                break;
            case "modificarDescuento":
                $resultado = modificarDescuento($data['id_descuento'], $data);
                break;
            default:
                $resultado = "Error en el tipo de accion, intente nuevamente";
                break;
        }
    }

    echo $resultado;
}
