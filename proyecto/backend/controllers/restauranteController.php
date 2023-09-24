<?php
require_once './cors.php';
require_once '../models/restaurante.php';


function insertarController($alias = '', $url_img_usuario = '', $email = '', $contrasena = '', $rol = '',$nombre='')
{
    $restaurante = new Restaurante();
    $datosUsuario = array(
        "alias" => $alias,
        "url_img_usuario" => $url_img_usuario,
        "email" => $email,
        "contrasena" => $contrasena,
        "rol" => $rol
    );

    $datosRestaurante=array(
        "nombre"=>$nombre,
        "id_usuario"=>""
    );

    if($restaurante->create("usuarios",$datosUsuario)){
        if($restaurante->createInRestaurante("restaurante",$datosUsuario,$datosRestaurante)){
            return "Creacion de usuario exitosa";
        }else{
            return "Error en la creacion de usuario";
        }
    }else{
        return "El usuario ya existe";
    }
}

if($_SERVER['REQUEST_METHOD']=='POST'){
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    if(isset($data['accion']) && $data['accion']=='altaRestaurante'){
        $resultado = insertarController(
            $data['alias'],
            $data['url_img_usuario'],
            $data['email'],
            $data['contrasena'],
            $data['rol'],
            $data['nombre']
        );
    }else{
        $resultado="Error en la peticion, intente nuevamente";
    }
    echo $resultado;
}


if ($_SERVER['REQUEST_METHOD'] == 'GET') {
    $json = file_get_contents('php://input');
    $data = json_decode($json, true);

    
        //se crea la instancia del modelo restaurante
        $restaurante = new Restaurante();

        //llama a la funcion creada dentro del modelo restaurante para obtener los datos del restaurante
        $datos = $restaurante->obtenerRestaurantes();

        //convierte los datos en formato json y los envia como respuesta
        $respuesta = json_encode($datos);
        
        echo $respuesta;
        
        
}else {
 //error en la respuesta
        echo json_encode(false);
}


