<?php

require_once 'crudBasico.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;


class Localizacion extends CrudBasico
{

    private $idLocalizacion;

    private $nroPuerta;

    private $calle;

    private $esquina;

    public function __construct()
    {
        // Carga las variables de entorno desde el archivo .env
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

    public function setIdLocalizacion($idLocalizacion)
    {
        $this->idLocalizacion = $idLocalizacion;
    }

    public function getIdLocalizacion()
    {
        return $this->idLocalizacion;
    }

    public function setNroPuerta($nroPuerta)
    {
        $this->nroPuerta = $nroPuerta;
    }

    public function getNroPuerta()
    {
        return $this->nroPuerta;
    }

    public function setCalle($calle)
    {
        $this->calle = $calle;
    }

    public function getCalle()
    {
        return $this->calle;
    }

    public function setEsquina($esquina)
    {
        $this->esquina = $esquina;
    }

    public function getEsquina()
    {
        return $this->esquina;
    }

    public function crearLocalizacion()
    {
        try {
            $query = "INSERT INTO wwe.localizacion (calle,esquina,nro_puerta) VALUES (:calle, :esquina, :nro_puerta);";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":calle", $this->getCalle());
            $stmt->bindValue(":esquina", $this->getEsquina());
            $stmt->bindValue(":nro_puerta", $this->getNroPuerta());
            if ($stmt->execute()) {
                return true;
            } else {
                return false;
            }
        } catch (PDOException $ex) {
            error_log("Error en la persistencia del alojamiento: " . $ex->getMessage());
        }
    }

    public function obtenerUltimoIdLocalizacion(){
        try{
            $query = "SELECT MAX(id_localizacion) AS max_id FROM wwe.localizacion;";
            $stmt = $this->getConn()->prepare($query);
            $stmt->execute();
            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
            if(!empty($resultado)){
                return $resultado["max_id"];
            } else {
                return false;
            }
        } catch(PDOException $ex) {
            error_log("Error al obtener el último ID: " . $ex->getMessage());
        }
    }
    
}
