<?php
include_once 'crud.php';
include_once 'usuario.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;

// Carga las variables de entorno desde el archivo .env
$dotenv = Dotenv::createImmutable('/var/www/html/');
$dotenv->load();

class Restaurante extends Usuario
{
    private $tipoRestaurante;

    private $nombre;

    private $nroLocal;

    private $direccionRest;

    public function __construct()
    {
        $this->setHost($_ENV['DB_HOST']);
        $this->setUser($_ENV['DB_USER']);
        $this->setPassword($_ENV['DB_PASSWORD']);
        $this->setDatabase($_ENV['DB_NAME']);
        $this->setDriver($_ENV['DB_DRIVER']);
        $this->setDatCon();
        parent::__construct();
    }

    public function setTipoRestaruante($tipoRestaurante)
    {
        $this->tipoRestaurante = $tipoRestaurante;
    }

    public function getTipoRestaurante()
    {
        return $this->tipoRestaurante;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setNroLocal($nroLocal)
    {
        $this->nroLocal = $nroLocal;
    }

    public function getNroLocal()
    {
        return $this->nroLocal;
    }

    public function setDireccionRest($direccionRest)
    {
        $this->direccionRest = $direccionRest;
    }

    public function getDireccionRest()
    {
        return $this->direccionRest;
    }

    public function createInRestaurante($tabla, $datos, $datosRestaurante)
    {
        try {
            $query = "SELECT id_usuario FROM usuarios WHERE email = :email";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(':email', $datos['email']);
            $stmt->execute();
            $idRows = $stmt->fetchAll();

            if (!empty($idRows)) {
                $datosRestaurante['id_usuario'] = $idRows[0]['id_usuario'];


                $query = "SELECT MAX(id_localizacion) AS last_id_localizacion FROM localizacion";
                $stmt = $this->getConn()->prepare($query);
                $stmt->execute();
                $lastIdLocalizacion = $stmt->fetchColumn();


                $datosRestaurante['id_loc_restaurante'] = $lastIdLocalizacion;


                $columnNames = implode(', ', array_keys($datosRestaurante));
                $placeholders = implode(', ', array_map(function ($key) {
                    return ':' . $key;
                }, array_keys($datosRestaurante)));


                $query = "INSERT INTO $tabla ($columnNames) VALUES ($placeholders)";
                $stmt = $this->getConn()->prepare($query);


                foreach ($datosRestaurante as $nombre => $valor) {
                    $stmt->bindValue(':' . $nombre, $valor);
                }

                $stmt->execute();

                return true;
            } else {
                return "No se encontró ningún registro con ese email.";
            }
        } catch (PDOException $ex) {
            throw new Exception("Error al insertar: " . $ex->getMessage());
        }
    }



    public function obtenerRestaurantes()
    {
        $query = "SELECT u.id_usuario AS id_usuario,r.nombre AS nombre_restaurante, u.url_img_usuario AS foto_usuario
        FROM wwe.restaurante r
        JOIN wwe.usuarios u ON r.id_usuario = u.id_usuario
        JOIN wwe.admin_aprueba_rest m ON m.id_usuario_rest = u.id_usuario
        WHERE m.fecha_fin_sub >= CURDATE()";

        $stmt = $this->getConn()->prepare($query);

        $stmt->execute();


        $data = $stmt->fetchAll(PDO::FETCH_OBJ);

        return $data;
    }


    public function createInTipoRestaurante($tabla, $datos, $datosRestaurante)
    {
        try {
            $query = "SELECT id_usuario FROM usuarios WHERE email = :email";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(':email', $datos['email']);
            $stmt->execute();
            $idRows = $stmt->fetchAll();

            if (!empty($idRows)) {
                $datosRestaurante['id_usuario_rest'] = $idRows[0]['id_usuario'];


                $columnNames = implode(', ', array_keys($datosRestaurante));
                $placeholders = implode(', ', array_map(function ($key) {
                    return ':' . $key;
                }, array_keys($datosRestaurante)));


                $query = "INSERT INTO $tabla ($columnNames) VALUES ($placeholders)";
                $stmt = $this->getConn()->prepare($query);


                foreach ($datosRestaurante as $nombre => $valor) {
                    $stmt->bindValue(':' . $nombre, $valor);
                }

                $stmt->execute();

                return true;
            } else {
                return "No se encontró ningún registro con ese email.";
            }
        } catch (PDOException $ex) {
            throw new Exception("Error al insertar: " . $ex->getMessage());
        }
    }

    public function obtenerRestauranteById($id)
    {
        $query = "  SELECT *
            FROM restaurante, usuarios, admin_aprueba_rest
            WHERE restaurante.id_usuario = usuarios.id_usuario
            AND usuarios.id_usuario = :id_usuario
            AND admin_aprueba_rest.id_usuario_rest = usuarios.id_usuario
            AND admin_aprueba_rest.fecha_fin_sub >= CURDATE()";

        $stmt = $this->getConn()->prepare($query);
        $stmt->bindParam(":id_usuario", $id, PDO::PARAM_INT);
        $stmt->execute();
        $data = $stmt->fetchAll(PDO::FETCH_OBJ);
        return $data;
    }
}
