<?php

require_once 'dataBaseConnection.php';
require_once 'crud.php';
require '../vendor/autoload.php';

ini_set('log_errors', 1);
ini_set('error_log', '/var/www/html/error_log.txt');

class Usuario extends DataBaseConnection implements Crud
{

    private $alias;

    private $email;

    private $contrasenia;

    private $activo;

    private $bloqueado;

    private $urlImagenUsuario;

    private $fechaCambioPwd;

    private $rol;

    function  __construct()
    {
        parent::__construct();
    }


    public function getAlias()
    {
        return $this->alias;
    }


    public function setAlias($alias): self
    {
        $this->alias = $alias;
        return $this;
    }


    public function getEmail()
    {
        return $this->email;
    }


    public function setEmail($email): self
    {
        $this->email = $email;
        return $this;
    }


    public function getContrasenia()
    {
        return $this->contrasenia;
    }


    public function setContrasenia($contrasenia): self
    {
        $this->contrasenia = $contrasenia;
        return $this;
    }


    public function getActivo()
    {
        return $this->activo;
    }

    public function setActivo($activo): self
    {
        $this->activo = $activo;
        return $this;
    }


    public function getBloqueado()
    {
        return $this->bloqueado;
    }


    public function setBloqueado($bloqueado): self
    {
        $this->bloqueado = $bloqueado;
        return $this;
    }


    public function getUrlImagenUsuario()
    {
        return $this->urlImagenUsuario;
    }


    public function setUrlImagenUsuario($urlImagenUsuario): self
    {
        $this->urlImagenUsuario = $urlImagenUsuario;
        return $this;
    }


    public function getFechaCambioPwd()
    {
        return $this->fechaCambioPwd;
    }

    public function setFechaCambioPwd($fechaCambioPwd): self
    {
        $this->fechaCambioPwd = $fechaCambioPwd;
        return $this;
    }


    public function getRol()
    {
        return $this->rol;
    }


    public function setRol($rol): self
    {
        $this->rol = $rol;
        return $this->rol;
    }

    public function create($tabla, $datos)
    {
        try {
            $query = "SELECT * FROM $tabla WHERE email = :email";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(':email', $datos['email']);
            $stmt->execute();
            if ($stmt->rowCount() > 0) {
                return false;
            } else {
                $hashedPass = password_hash($datos['contrasena'], PASSWORD_BCRYPT);

                //Almaceno nuevamente la contraseña
                $datos['contrasena'] = $hashedPass;

                $columnNames = implode(', ', array_keys($datos));
                $placeholders = implode(', ', array_map(function ($key) {
                    return ':' . $key;
                }, array_keys($datos)));

                $query = "INSERT INTO $tabla ($columnNames) VALUES ($placeholders)";

                $stmt = $this->getConn()->prepare($query);

                foreach ($datos as $nombre => $valor) {
                    $stmt->bindValue(':' . $nombre, $valor);
                }

                $stmt->execute();

                return true;
            }
        } catch (PDOException $ex) {
            echo "Error al insertar: " . $ex->getMessage();
        }
    }

    public function dataCreate($tabla, $datos)
    {
        try {
            $columnNames = implode(', ', array_keys($datos));
            $placeholders = implode(', ', array_map(function ($key) {
                return ':' . $key;
            }, array_keys($datos)));

            $query = "INSERT INTO $tabla ($columnNames) VALUES ($placeholders)";

            $stmt = $this->getConn()->prepare($query);

            foreach ($datos as $nombre => $valor) {
                $stmt->bindValue(':' . $nombre, $valor);
            }

            $stmt->execute();

            return true;
        } catch (PDOException $ex) {
            echo "Error al insertar: " . $ex->getMessage();
        }
    }

    public function delete($tabla, $datos)
    {
        try {
            $query = "SELECT * FROM $tabla WHERE alias = :alias AND contrasenia = :contrasenia";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(':alias', $datos['alias']);
            $stmt->bindValue(':contrasenia', $datos['contrasenia']);

            $stmt->execute();

            if ($stmt->rowCount() > 0) {
                $columnNames = implode(', ', array_keys($datos));
                $conditions = array_map(function ($key) {
                    return "$key = :$key";
                }, array_keys($datos));
                $query = "DELETE FROM $tabla WHERE " . implode(' AND ', $conditions);

                $stmt = $this->getConn()->prepare($query);

               
                foreach ($datos as $key => $value) {
                    $stmt->bindValue(':' . $key, $value);
                }

               
                if ($stmt->execute()) {
                    return "Se eliminó correctamente";
                } else {
                    return "Error al eliminar el registro";
                }
            } else {
                return "No se encontró ningún registro que coincida con los datos proporcionados";
            }
        } catch (PDOException $e) {
           
            return "Error al eliminar: " . $e->getMessage();
        }
    }


    public function alter($data)
    {
    }


    public function read($data)
    {
        $query = "SELECT {$data['valores']} FROM {$data['tabla']}";
        $stmt = $this->getConn()->prepare($query);

        $stmt->execute();

        $result = $stmt->fetchAll(PDO::FETCH_OBJ);

        return $result;
    }

    public function filter($tabla, $datos)
    {
        $columnNames = implode(', ', array_keys($datos));
        $conditions = array_map(function ($key) {
            return "$key = :$key";
        }, array_keys($datos));
        $query = "SELECT $columnNames FROM $tabla WHERE " . implode(' AND ', $conditions);

        $stmt = $this->getConn()->prepare($query);

        
        foreach ($datos as $key => $value) {
            $stmt->bindValue(':' . $key, $value);
        }

    
        $debugQuery = $stmt->queryString;

        foreach ($datos as $key => $value) {
            $debugQuery = str_replace(":$key", $value, $debugQuery);
        }
        
        $stmt->execute();

        
        $result = $stmt->fetchAll(PDO::FETCH_OBJ);

        return $result;
    }

    function blockAccount($emailUsuario)
    {
        try {
            error_log("Inicio de bloqueo de usuario");

            $query = "UPDATE usuarios SET bloqueado = :bloqueado WHERE email = :email;";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":email", $emailUsuario);
            $stmt->bindValue(":bloqueado", "S");

            if ($stmt->execute()) {
                error_log("Actualización en la base de datos exitosa");

                $comando = "nohup php -r '"
                    . " sleep(15); "
                    . "\$pdo = new PDO(\"mysql:host=" . $_ENV['DB_HOST'] . ";dbname=" . $_ENV['DB_NAME'] . "\", \"" . $_ENV['DB_USER'] . "\", \"" . $_ENV['DB_PASSWORD'] . "\");"
                    . "\$pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);"
                    . "\$stmt = \$pdo->prepare(\"UPDATE usuarios SET bloqueado = :bloqueado WHERE email = :email\");"
                    . "\$stmt->bindValue(\":email\", $emailUsuario);"
                    . "\$stmt->bindValue(\":bloqueado\", \"N\");"
                    . "\$stmt->execute();"
                    . "' > /dev/null 2>&1 &";

                
                error_log("Comando en segundo plano: $comando");

                exec($comando);
                
                error_log("Ejecución en segundo plano exitosa");
            } else {
                
                error_log("Error en la actualización de la base de datos");
            }
        } catch (PDOException $ex) {
            error_log("Error de base de datos: " . $ex->getMessage());
        } catch (Exception $e) {
            error_log("Error al ejecutar el proceso: " . $e->getMessage());
        }

        error_log("Fin de bloqueo de usuario");
    }
    public function editUser($idUsuario, $datos)
    {
        try {
            $query = "UPDATE usuarios SET ";
            $valores = [];

            foreach ($datos as $opcion => $valor) {
                switch ($opcion) {
                    case "alias":
                        $query .= "alias = :alias, ";
                        $valores[":alias"] = $valor;
                        break;
                    case "contrasena":
                        $query .= "contrasena = :contrasena, ";
                        $hashedPass = password_hash($valor, PASSWORD_BCRYPT);
                        $valores[":contrasena"] = $hashedPass;
                        break;
                    case "url_img_usuario":
                        $query .= "url_img_usuario = :url_img_usuario, ";
                        $valores[":url_img_usuario"] = $valor;
                        break;
                    default:
                        return false;
                }
            }

            
            $query = rtrim($query, ', ');

            $query .= " WHERE id_usuario = :id_usuario";
            $valores[":id_usuario"] = $idUsuario;

            $stmt = $this->getConn()->prepare($query);

            if ($stmt->execute($valores)) {
                return true;
            }

            return false;
        } catch (PDOException $ex) {
            error_log("Error en la actualización de datos: " . $ex->getMessage());
        }
    }
}
