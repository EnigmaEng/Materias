<?php


class Login
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
                $stmt->bindValue(":id_usuario", $userData['id_usuario']);
                $stmt->execute();
                $rolData = $stmt->fetch(PDO::FETCH_ASSOC);
            }
            // Agregar los datos del rol al arreglo de datos del usuario
            $usuarioData['rol'] = $rolData;
            
            
            return $usuarioData;
            
            }
                return false;
        } catch (PDOException $ex) {
            echo "Error en la conexión: " . $ex->getMessage();
        }
    }



}