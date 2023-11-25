<?php

require_once 'crudBasico.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;

class Resenia extends CrudBasico
{
    private $idUsuarioTurista;
    private $idUsuarioRest;
    private $calificacionMenu;
    private $calificacionInstalaciones;
    private $calificacionPersonal;
    private $calificacionGeneral;
    private $fecha;

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
        $this->setPort($_ENV['PORT']);
        $this->setDatCon();
        parent::__construct();
    }

    public function setIdUsuarioTurista($idUsuarioTurista)
    {
        $this->idUsuarioTurista = $idUsuarioTurista;
    }

    public function getIdUsuarioTurista()
    {
        return $this->idUsuarioTurista;
    }

    public function setIdUsuarioRest($idUsuarioRest)
    {
        $this->idUsuarioRest = $idUsuarioRest;
    }

    public function getIdUsuarioRest()
    {
        return $this->idUsuarioRest;
    }

    public function setCalificacionMenu($calificacionMenu)
    {
        $this->calificacionMenu = $calificacionMenu;
    }

    public function getCalificacionMenu()
    {
        return $this->calificacionMenu;
    }

    public function setCalificacionInstalaciones($calificacionInstalaciones)
    {
        $this->calificacionInstalaciones = $calificacionInstalaciones;
    }

    public function getCalificacionInstalaciones()
    {
        return $this->calificacionInstalaciones;
    }

    public function setCalificacionPersonal($calificacionPersonal)
    {
        $this->calificacionPersonal = $calificacionPersonal;
    }

    public function getCalificacionPersonal()
    {
        return $this->calificacionPersonal;
    }


    public function setCalificacionGeneral($calificacionGeneral)
    {
        $this->calificacionGeneral = $calificacionGeneral;
    }

    public function getCalificacionGeneral()
    {
        return $this->calificacionGeneral;
    }

    public function setFecha($fecha)
    {
        $this->fecha = $fecha;
    }

    public function getFecha()
    {
        return $this->fecha;
    }

    public function usuarioResenia()
    {
        try {
            $query = 'INSERT INTO turista_resena_rest(id_usuario_turista,id_usuario_rest,fecha,calificacion_instalaciones,calificacion_personal,calificacion_menu,calificacion_general) VALUES(:id_usuario_turista,:id_usuario_rest,:fecha,:calificacion_instalaciones,:calificacion_personal,:calificacion_menu,:calificacion_general)';
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_usuario_turista", $this->getIdUsuarioTurista());
            $stmt->bindValue(":id_usuario_rest", $this->getIdUsuarioRest());
            $stmt->bindValue(":fecha", $this->getFecha());
            $stmt->bindValue(":calificacion_instalaciones", $this->getCalificacionInstalaciones());
            $stmt->bindValue(":calificacion_personal", $this->getCalificacionPersonal());
            $stmt->bindValue(":calificacion_menu", $this->getCalificacionMenu());
            $stmt->bindValue(":calificacion_general", $this->getCalificacionGeneral());
            if ($stmt->execute()) {
                return true;
            }
            return false;
        } catch (PDOException $ex) {
            error_log("Error en el insert: " . $ex->getMessage());
            throw $ex;
        }
    }

    public function obtenerResenias()
    {
        try {
            $query = "SELECT * FROM turista_resena_rest";
            $stmt = $this->getConn()->prepare($query);
            $stmt->execute();
            $res = $stmt->fetchAll(PDO::FETCH_ASSOC);
            return $res;
        } catch (PDOException $ex) {
            error_log("Error en la consulta: " . $ex->getMessage());
            throw $ex;
        }
    }

    public function obtenerReseniaPorId(){
        try{
            $query="SELECT * FROM turista_resena_rest WHERE id_usuario_rest= :id_usuario_rest";
            $stmt=$this->getConn()->prepare($query);
            $stmt->bindValue(":id_usuario_rest",$this->getIdUsuarioRest());
            if($stmt->execute()){
                return $res=$stmt->fetchAll(PDO::FETCH_ASSOC);
            }else{
                return false;
            }
        }catch(PDOException $ex){
            error_log("Error en la consulta: ".$ex->getMessage());
        }
    }
}
