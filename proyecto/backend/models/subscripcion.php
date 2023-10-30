<?php

include_once 'crud.php';
include_once 'usuario.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;

// Carga las variables de entorno desde el archivo .env
$dotenv = Dotenv::createImmutable('/var/www/html/');
$dotenv->load();


class Subscripcion extends Usuario
{

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

    //Datos de la subscripcion
    private $idTipoSubs;
    private $nombre;
    private $precioSubscripcion;
    //Datos del restaurante
    private $idUsuarioRest;
    private $fechaPago;


    public function setIdTipoSubs($idTipoSubs)
    {
        $this->idTipoSubs = $idTipoSubs;
    }

    public function getIdTipoSubs()
    {
        return $this->idTipoSubs;
    }

    public function setNombre($nombre)
    {
        $this->nombre = $nombre;
    }

    public function getNombre()
    {
        return $this->nombre;
    }

    public function setPrecioSubscripcion($precioSubscripcion)
    {
        $this->precioSubscripcion = $precioSubscripcion;
    }

    public function getPrecioSubscripcion()
    {
        return $this->precioSubscripcion;
    }

    public function setIdUsuarioRest($idUsuarioRest)
    {
        $this->idUsuarioRest = $idUsuarioRest;
    }

    public function getIdUsuarioRest()
    {
        return $this->idUsuarioRest;
    }

    public function setFechaPago($fechaPago)
    {
        $this->fechaPago = $fechaPago;
    }

    public function getFechaPago()
    {
        return $this->fechaPago;
    }

    public function usuarioPagaSubscripcion()
    {
        try {
            $query = "SELECT * FROM tipo_subscripcion WHERE id_tipo_subs= :id_tipo_subs ;";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_tipo_subs", $this->getIdTipoSubs());
            $stmt->execute();
            $resultado = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($resultado !== false) {
                $query = "INSERT INTO restaurante_paga_subscripcion (id_usuario_rest,id_tipo_subscripcion,fecha_pago) VALUES (:id_usuario_rest,:id_tipo_subscripcion,:fecha_pago);";
                $stmt = $this->getConn()->prepare($query);
                $stmt->bindValue(":id_usuario_rest", $this->getIdUsuarioRest());
                $stmt->bindValue(":id_tipo_subscripcion", $this->getIdTipoSubs());
                $stmt->bindValue(":fecha_pago", $this->getFechaPago());
                if ($stmt->execute()) {
                    return true;
                }
                return false;
            }else{
                throw new Exception("El tipo de subscripcion no existe o no es correcto.");
            }
        } catch (PDOException $ex) {
            error_log("Error en el INSERT de subscripcion: " . $ex->getMessage());
        }
    }

    public function obtenerSubscripciones(){
        try{
            $query="SELECT * FROM restaurante_paga_subscripcion";
            $stmt=$this->getConn()->prepare($query);
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        }catch(PDOException $ex){
            error_log("Error en obtener todas las subscripciones: ".$ex->getMessage());
        }
    }

    public function obtenerSubscripcionPorId()
    {
        try {
            $query = "SELECT * FROM restaurante_paga_subscripcion WHERE id_usuario_rest = :id_usuario_rest ;";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_usuario_rest", $this->getIdUsuarioRest());
            $stmt->execute();
            return $stmt->fetch(PDO::FETCH_ASSOC);
        } catch (PDOException $ex) {
            error_log("Error en la consulta de la subscripcion: " . $ex->getMessage());
        }
    }

    public function finalizarSubscripcion()
    {
        try {
            $query = "DELETE FROM restaurante_paga_subscripcion WHERE id_usuario_rest = :id_usuario_rest ;";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_usuario_rest", $this->getIdUsuarioRest());
            if ($stmt->execute()) {
                return true;
            }
            return false;
        } catch (PDOException $ex) {
            error_log("Error en el DELETE de la subscripcion: " . $ex->getMessage());
        }
    }
}
