<?php
require_once 'dataBaseConnection.php';

class Login extends DataBaseConnection
{
    private $userModel;

    function __construct($userModel)
    {
        $this->userModel = $userModel;
    }

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
                    'rol' => $userData['rol'],
                    'activo' => $userData['activo'],
                    'bloqueado' => $userData['bloqueado']
                );

                $rolData = array();
                if ($userData['rol'] === 'R') {
                    $query = "SELECT * FROM restaurante r 
                              JOIN localizacion l ON r.id_loc_restaurante = l.id_localizacion
                              JOIN tipo_restaurantes t ON r.id_usuario = t.id_usuario_rest
                              WHERE r.id_usuario = :id_usuario";
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
                    // Consulta para obtener datos de admin según el usuario con rol 'A'.
                    $query = "SELECT * FROM administrativo WHERE id_usuario = :id_usuario";
                    $stmt = $conn->prepare($query);
                    $stmt->bindValue(":id_usuario", $userData['id_usuario']);
                    $stmt->execute();
                    $rolData = $stmt->fetch(PDO::FETCH_ASSOC);
                }

                // Resto del código
                // Asegúrate de manejar adecuadamente los resultados de las consultas

                return false;
            }
        } catch (PDOException $ex) {
            // Manejar las excepciones
            throw new Exception("Error de autenticación: " . $ex->getMessage());
        }
    }
}
