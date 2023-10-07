<?php
require_once '../vendor/autoload.php';
use Firebase\JWT\JWT;

class Login
{

    private $userModel;

    function __construct($userModel)
    {
        $this->userModel = $userModel;
    }

//   public static function generateToken($data)
// {
//     // Clave secreta para firmar el token (debe estar en tu .env)
//     $secret_key = "tu_clave_secreta";

//     // Tiempo de expiración del token (puedes personalizarlo)
//     $expiration_time = 3600; // 1 hora (en segundos)

//     // Crear el payload del token con los datos del usuario
//     $payload = array(
//         "data" => $data,
//         "exp" => time() + $expiration_time
//     );

//     // Generar el token JWT
//     $token = JWT::encode($payload, $secret_key, 'HS256');

//     return $token;
// }

    public function authenticate($tabla)
    {
        try {
            $conn = $this->userModel->getConn(); // Obtener la conexión desde el modelo

            // Consulta para obtener el salt y la contraseña hash del usuario según su email
            $query = "SELECT * FROM usuarios WHERE email = :email";
            $stmt = $conn->prepare($query);
            $stmt->bindValue(":email", $this->userModel->getEmail());
            $stmt->execute();
            $userData = $stmt->fetch(PDO::FETCH_ASSOC);
            
            if (!$userData) {
                return false;
            }
            
            // Verificar la contraseña utilizando password_verify
            if (password_verify($this->userModel->getContrasenia(), $userData['contrasena'])) {
            
            // Obtener el rol del usuario
            $rol = $userData['rol'];
            
            // Inicializar los datos del usuario a agregar al token
            $usuarioData = array(
                'id_usuario' => $userData['id_usuario'],
                'alias' => $userData['alias'],
                'email' => $userData['email'],
                'url_img_usuario' => $userData['url_img_usuario'],
                'rol' => $rol,
                'activo' => $userData['activo'],
                'bloqueado' => $userData['bloqueado']
            );
            
            $rolData = array();
            if ($rol === 'R') {
                
                $query = "SELECT * FROM restaurante WHERE id_usuario = :id_usuario";
                $stmt = $conn->prepare($query);
                $stmt->bindValue(":id_usuario", $userData['id_usuario']);
                $stmt->execute();
                $rolData = $stmt->fetch(PDO::FETCH_ASSOC);
            } elseif ($rol === 'T') {
                
                $query = "SELECT * FROM turista WHERE id_usuario = :id_usuario";
                $stmt = $conn->prepare($query);
                $stmt->bindValue(":id_usuario", $userData['id_usuario']);
                $stmt->execute();
                $rolData = $stmt->fetch(PDO::FETCH_ASSOC);
            } elseif ($rol === 'A') {
                // Consulta para obtener datos de admin según el usuario con rol 'A'
                $query = "SELECT * FROM administrativo WHERE id_usuario = :id_usuario";
                $stmt = $conn->prepare($query);
                $stmt->bindValue(":id_usuario", $userData['id']);
                $stmt->execute();
                $rolData = $stmt->fetch(PDO::FETCH_ASSOC);
            }
            // Agregar los datos del rol al arreglo de datos del usuario
            $usuarioData['rol'] = $rolData;
            
            
            // creamos la varaible para generar el token con los datos del usuario
            // $token = Login::generateToken($usuarioData);
            return $usuarioData;
            
            }
                return false;
        } catch (PDOException $ex) {
            echo "Error en la conexión: " . $ex->getMessage();
        }
    }



}