<?php

require_once 'usuario.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;

class Admin extends Usuario
{

    private $nroEmpleado;

    private $nombres;

    private $apellidos;

    private $idUsuarioRest;

    private $idUsuarioAdmin;

    private $fechaIniSub;

    private $fechaFinSub;

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

    public function setNroEmpleado($nroEmpleado)
    {
        $this->nroEmpleado = $nroEmpleado;
    }

    public function getNroEmpleado()
    {
        return $this->nroEmpleado;
    }

    public function setNombres($nombres)
    {
        $this->nombres = $nombres;
    }

    public function getNombres()
    {
        return $this->nombres;
    }

    public function setApellidos($apellidos)
    {
        $this->apellidos = $apellidos;
    }

    public function getApellidos()
    {
        return $this->apellidos;
    }

    public function setIdUsuarioRest($idUsuarioRest){
        $this->idUsuarioRest=$idUsuarioRest;
    }

    public function getIdUsuarioRest(){
        return $this->idUsuarioRest;
    }

    public function setIdUsuarioAdmin($idUsuarioAdmin){
        $this->idUsuarioAdmin=$idUsuarioAdmin;
    }

    public function getIdUsuarioAdmin(){
        return $this->idUsuarioAdmin;
    }

    public function setFechaIniSub($fechaIniSub){
        $this->fechaIniSub=$fechaIniSub;
    }

    public function getFechaIniSub(){
        return $this->fechaIniSub;
    }

    public function setFechaFinSub($fechaFinSub){
        $this->fechaFinSub=$fechaFinSub;
    }

    public function getFechaFinSub(){
        return $this->fechaFinSub;
    }

    public function aprobarRestaurante(){
        $query='INSERT INTO admin_aprueba_rest(id_usuario_rest,id_usuario_admin,fecha_ini_sub,fecha_fin_sub) VALUES (:id_usuario_rest,:id_usuario_admin,:fecha_ini_sub,:fecha_fin_sub);';
        $stmt=$this->getConn()->prepare($query);
        
    }

}