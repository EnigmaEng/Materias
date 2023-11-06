<?php
include_once 'crud.php';
include_once 'usuario.php';
require '../vendor/autoload.php';

use Dotenv\Dotenv;


// Carga las variables de entorno desde el archivo .env
$dotenv = Dotenv::createImmutable('/var/www/html/');
$dotenv->load();



class Turista extends Usuario
{

    private $idUsuario;

    private $nacionalidad;

    private $motivoAlojamiento;

    private $nombre;

    private $apellido;


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

    public function setIdUsuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;
    }

    public function getIdUsuario()
    {
        return $this->idUsuario;
    }

    public function setNacionalidad($nacionalidad)
    {
        $this->nacionalidad = $nacionalidad;
    }

    public function getNacionalidad()
    {
        return $this->nacionalidad;
    }

    public function setMotivoAlojamiento($motivoAlojamiento)
    {
        $this->motivoAlojamiento = $motivoAlojamiento;
    }

    public function getMotivoAlojamiento()
    {
        return $this->motivoAlojamiento;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setApellido($apellido)
    {
        $this->apellido = $apellido;
    }

    public function getApellido()
    {
        return $this->apellido;
    }

    public function createInTurista($tabla, $datos, $datosTurista)
    {
        try {
            $query = "SELECT id_usuario FROM usuarios WHERE email = :email";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(':email', $datos['email']);
            $stmt->execute();
            $idRows = $stmt->fetchAll();

            if (!empty($idRows)) {
                $datosTurista['id_usuario'] = $idRows[0]['id_usuario'];
                $columnNames = implode(', ', array_keys($datosTurista));
                $placeholders = implode(', ', array_map(function ($key) {
                    return ':' . $key;
                }, array_keys($datosTurista)));

                $query = "INSERT INTO $tabla ($columnNames) VALUES ($placeholders)";

                $stmt = $this->getConn()->prepare($query);

                foreach ($datosTurista as $nombre => $valor) {
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

    public function turistaVisitaRest($modeloRestaurante)
    {
        try {
            $query = "INSERT INTO turista_visita_rest (id_turista, id_rest, token,fecha_visita)
            VALUES (:id_turista, :id_rest, FLOOR(1000000 * RAND()) + 1, curdate());";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_turista", $this->getIdUsuario());
            $stmt->bindValue(":id_rest", $modeloRestaurante->getIdUsuarioRest());
            if ($stmt->execute()) {
                return true;
            }
            return false;
        } catch (PDOException $ex) {
            throw new Exception("Error en el insert de turista visita rest: " . $ex->getMessage());
        }
    }

    public function obtenerVisitasTurista(){
        try {

        }catch(PDOException $ex) {
            throw new Exception("". $ex->getMessage());
        }
    }
}
