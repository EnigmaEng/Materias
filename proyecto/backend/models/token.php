<?php
use Firebase\JWT\JWT;
use Dotenv\Dotenv;

class Token {
    private $secret_key;

    public function __construct($secret_key) {
         
        //Se usa la libreria dotenv y se especifica el archivo donde esta alojado
        $dotenv = Dotenv::createImmutable('../.env');
        $dotenv->load();
        //obtiene la clave secreta de las variables de entorno
        $this->secret_key = $_ENV['JWT'];
    }

    public function generarToken($userData) {
        $token_payload = [
            'exp' => time() + 3600, //el token expira en 1 hora
            'alias' => $userData['alias'],
            'email' => $userData['email'],
            'url_img_usuario' => $userData['url_img_usuario'],
            'rol' => $userData['rol'],
            'nacionalidad' => $userData['nacionalidad'],
            'nombres' => $userData['nombres'],
            'apellidos' => $userData['apellidos'],
            'nombre' => $userData['nombre'],
            'motivo_alojamiento' => $userData['motivo_alojamiento'];
        ];

        return JWT::encode($token_payload, $this->secret_key);
    }

    public function verificarToken($token) {
        try {
            return JWT::decode($token, $this->secret_key, ['HS256']);
        } catch (Exception $e) {
            return false;
        }
    }
}
?>
