<?php

require_once 'crudBasico.php';
require_once 'turista.php';
require_once 'localizacion.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;


class Alojamiento extends CrudBasico
{

    private $idAlojamiento;
    private $nombreAlojamiento;
    private $idLocAlojamiento;
    private $alojamientoActivo;

    private $fechaIniAlojamiento;

    private $fechaFinAlojamiento;

    private $activo;


    public function __construct()
    {
        $dotenv = Dotenv::createImmutable('/var/www/html/');
        $dotenv->load();

        $this->setHost($_ENV['DB_HOST']);
        $this->setUser($_ENV['DB_USER']);
        $this->setPassword($_ENV['DB_PASSWORD']);
        $this->setDatabase($_ENV['DB_NAME']);
        $this->setDriver($_ENV['DB_DRIVER']);
        $this->setDatCon();
        parent::__construct();
    }


    public function setIdAlojamiento($idAlojamiento)
    {
        $this->idAlojamiento = $idAlojamiento;
    }

    public function getIdAlojamiento()
    {
        return $this->idAlojamiento;
    }

    public function setNombreAlojamiento($nombreAlojamiento)
    {
        $this->nombreAlojamiento = $nombreAlojamiento;
    }

    public function getNombreAlojamiento()
    {
        return $this->nombreAlojamiento;
    }

    public function setIdLocAlojamiento($idLocAlojamiento)
    {
        $this->idLocAlojamiento = $idLocAlojamiento;
    }

    public function getIdLocAlojamiento()
    {
        return $this->idLocAlojamiento;
    }

    public function setAlojamientoActivo($alojamientoActivo)
    {
        $this->alojamientoActivo = $alojamientoActivo;
    }

    public function getAlojamientoActivo()
    {
        return $this->alojamientoActivo;
    }

    public function setActivo($activo)
    {
        $this->activo = $activo;
    }

    public function getActivo()
    {
        return $this->activo;
    }

    public function setFechaIniAlojamiento($fechaIniAlojamiento)
    {
        $this->fechaIniAlojamiento = $fechaIniAlojamiento;
    }

    public function getFechaIniAlojamiento()
    {
        return $this->fechaIniAlojamiento;
    }

    public function setFechaFinAlojamiento($fechaFinAlojamiento)
    {
        $this->fechaFinAlojamiento = $fechaFinAlojamiento;
    }

    public function getFechaFinAlojamiento()
    {
        return $this->fechaFinAlojamiento;
    }


    public function crearAlojamiento()
    {
        try {
            $query = "INSERT INTO wwe.alojamiento (id_loc_alojamiento,nombre_alojamiento) VALUES (:id_loc_alojamiento, :nombre_alojamiento);";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_loc_alojamiento", $this->getIdLocAlojamiento());
            $stmt->bindValue(":nombre_alojamiento", $this->getNombreAlojamiento());
            if ($stmt->execute()) {
                return true;
            } else {
                return false;
            }
        } catch (PDOException $ex) {
            error_log("Error en la persistencia del alojamiento: " . $ex->getMessage());
            return false;
        }
    }

    public function buscarAlojamiento($datos)
    {
        try {
            // Inicializa la consulta SQL base
            $query = "SELECT DISTINCT alo.nombre_alojamiento, loc.calle, loc.nro_puerta, loc.esquina FROM wwe.alojamiento alo
            JOIN wwe.localizacion loc ON alo.id_loc_alojamiento = loc.id_localizacion
            JOIN wwe.turista_sealoja_alojamiento talo ON alo.id_alojamiento = talo.id_alojamiento
            WHERE alo.activo = 'S' AND (";

           
            $condiciones = [];

           
            if (isset($datos["nombreAlojamiento"])) {
                $condiciones[] = "alo.nombre_alojamiento = :nombre_alojamiento";
            }

            
            if (isset($datos["calle"])) {
                $condiciones[] = "loc.calle = :calle";
            }

            
            if (isset($datos["nroPuerta"])) {
                $condiciones[] = "loc.nro_puerta = :nro_puerta";
            }

            
            if (isset($datos["esquina"])) {
                $condiciones[] = "loc.esquina = :esquina";
            }

            
            $query .= implode(" OR ", $condiciones);
            $query .= ");";

            $stmt = $this->getConn()->prepare($query);

            
            if (isset($datos["nombreAlojamiento"])) {
                $stmt->bindValue(":nombre_alojamiento", $datos["nombreAlojamiento"]);
            }

            if (isset($datos["calle"])) {
                $stmt->bindValue(":calle", $datos["calle"]);
            }

            if (isset($datos["nroPuerta"])) {
                $stmt->bindValue(":nro_puerta", $datos["nroPuerta"]);
            }

            if (isset($datos["esquina"])) {
                $stmt->bindValue(":esquina", $datos["esquina"]);
            }

            $stmt->execute();
            $resultado = $stmt->fetchAll(PDO::FETCH_ASSOC);

            if (!empty($resultado)) {
                return $resultado;
            }

            return false;
        } catch (PDOException $ex) {
            error_log("Error " . $ex->getMessage());
        }
    }


    public function obtenerUltimoIdAlojamiento()
    {
        try {
            $query = "SELECT MAX(id_alojamiento) AS max_id FROM wwe.alojamiento;";
            $stmt = $this->getConn()->prepare($query);
            $stmt->execute();
            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
            if (!empty($resultado)) {
                return $resultado["max_id"];
            } else {
                return false;
            }
        } catch (PDOException $ex) {
            error_log("Error al obtener el último ID: " . $ex->getMessage());
        }
    }

    public function insertarAlojamientoExistente($modeloTurista)
    {
        try {
            $query = "INSERT INTO wwe.turista_sealoja_alojamiento (id_usuario_turista,id_alojamiento,fecha_ini_alojamiento,fecha_fin_alojamiento) VALUES (:id_usuario_turista, :id_alojamiento, :fecha_ini_alojamiento, :fecha_fin_alojamiento);";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_usuario_turista", $modeloTurista->getIdUsuario());
            $stmt->bindValue(":id_alojamiento", $this->getIdAlojamiento());
            $stmt->bindValue(":fecha_ini_alojamiento", $this->getFechaIniAlojamiento());
            $stmt->bindValue(":fecha_fin_alojamiento", $this->getFechaFinAlojamiento());
            if ($stmt->execute()) {
                return true;
            }
            return false;
        } catch (PDOException $ex) {
            error_log("Error en el insert de turista_sealoja_alojamiento" . $ex->getMessage());
        }
    }
}
