<?php 
require_once "../models/token.php";
require_once "../models/login.php";
require_once "./cors.php";

class AuthController {

    private $token;

    public function __construct() {
        $this->token = new Token($this->secret_key);
    }

    public function login() {
        if ($_SERVER['REQUEST_METHOD'] === 'POST') {
            $identificador = $_POST['identificador']; //alias o email
            $contrasena = $_POST['contrasena'];

            $login = new Login(); 
            //llama a la funcion authenticate de la clase Login para verificar las credenciales
            if ($login->authenticate($identificador, $contrasena)) {
                
                //genera el token 
                $token = $this->token->generarToken([]);

                //se crea la cookie con el token
                setcookie('token', $token, time() + 3600, '/');

                //envia el token en formato json al front
                echo json_encode(['token' => $token]);
            } else {
                
                echo json_encode(['message' => 'Credenciales incorrectas']);
            }
        }
    }
}


$authController = new AuthController();
//endpoint 
if (isset($_GET['action']) && $_GET['action'] === 'login') {
    $authController->login();
}
?>


