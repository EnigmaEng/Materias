<?php


require_once 'crudBasico.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;

class PlatoRestaurante extends CrudBasico
{
    private $idPlato;
    private $nombrePlato;
    private $costo;
    private $descripcion;
    private $urlImgMenu;
    private $estadoPlato;
    private $idUsuario;
    private $plato;

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

    public function setIdPlato($idPlato)
    {
        $this->idPlato = $idPlato;
    }

    public function getIdPlato()
    {
        return $this->idPlato;
    }

    public function setNombrePlato($nombrePlato)
    {
        $this->nombrePlato = $nombrePlato;
    }

    public function getNombrePlato()
    {
        return $this->nombrePlato;
    }
    public function setCosto($costo)
    {
        $this->costo = $costo;
    }

    public function getCosto()
    {
        return $this->costo;
    }

    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
    }

    public function getDescripcion()
    {
        return $this->descripcion;
    }

    public function setUrlImgMenu($urlImgMenu)
    {
        $this->urlImgMenu = $urlImgMenu;
    }

    public function getUrlImgMenu()
    {
        return $this->urlImgMenu;
    }

    public function setEstadoPlato($estadoPlato)
    {
        $this->estadoPlato = $estadoPlato;
    }

    public function getEstadoPlato()
    {
        return $this->estadoPlato;
    }

    public function setIdUsuario($idUsuario)
    {
        $this->idUsuario = $idUsuario;
    }

    public function getIdUsuario()
    {
        return $this->idUsuario;
    }

    public function setPlato()
    {
        $this->plato = array(
            "id_plato" => $this->getIdPlato(),
            "nombre_plato" => $this->getNombrePlato(),
            "costo" => $this->getCosto(),
            "descripcion" => $this->getDescripcion(),
            "url_img_menu" => $this->getUrlImgMenu(),
            "estado_plato" => $this->getEstadoPlato(),
            "id_usuario_rest" => $this->getIdUsuario()
        );
    }

    public function getPlato()
    {
        return $this->plato;
    }


    public function guardarImagen($archivo_temporal, $nombre_archivo, $carpeta_destino) {
        return move_uploaded_file($archivo_temporal, $carpeta_destino . $nombre_archivo);
    }


    public function persistirPlato()
    {
        //Valido que exista el id del usuario restaurante
        try {
            $query = "SELECT id_usuario FROM restaurante WHERE id_usuario= :id_usuario";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_usuario", $this->getIdUsuario());
            $stmt->execute();
            $idRows = $stmt->fetchAll();
            if (!empty($idRows)) {
                try {
                    //Persisto el plato en la tabla plato_restaurantes
                    $query = "INSERT INTO plato_restaurantes(nombre_plato,costo,descripcion,url_img_menu,estado_plato,id_usuario_rest) VALUES (:nombre_plato,:costo,:descripcion,:url_img_menu,:estado_plato,:id_usuario_rest)";
                    $stmt = $this->getConn()->prepare($query);
                    $stmt->bindValue(":nombre_plato", $this->getNombrePlato());
                    $stmt->bindValue(":costo", $this->getCosto());
                    $stmt->bindValue(":descripcion",$this->getDescripcion());
                    $stmt->bindValue(":url_img_menu",$_ENV['DIR_IMAGEN'].$this->getUrlImgMenu());
                    $stmt->bindValue(":estado_plato", $this->getEstadoPlato());
                    $stmt->bindValue(":id_usuario_rest", $this->getIdUsuario());
                    
                    if ($stmt->execute()) {
                        return true;
                    }
                } catch (PDOException $ex) {
                    return "Error en el insert: " . $ex->getMessage();
                }
            } else {
                return false;
            }
        } catch (PDOException $ex) {
            return "Error en la busqueda del usuario restaurante:" . $ex->getMessage();
        }
    }

    public function obtenerPlatos()
    {
        try {
            // Consulta SQL para seleccionar todos los platos de la tabla "plato_restaurantes"
            $query = "SELECT * FROM `wwe`.`plato_restaurantes`";
            $stmt = $this->getConn()->prepare($query);

            $stmt->execute();

            $result = $stmt->fetchAll(PDO::FETCH_OBJ);

            return $result;
        } catch (PDOException $ex) {
            // Registra el error o lanza una excepción para el manejo superior
            error_log("Error en obtenerPlatosAsJSON: " . $ex->getMessage());
            throw $ex;
        }
    }

    public function obtenerPlatosPorIdUsuarioRest($id_usuario_rest)
    {
        $query = "SELECT * FROM plato_restaurantes WHERE id_usuario_rest = :id_usuario_rest";
        $stmt = $this->getConn()->prepare($query);
        $stmt->bindParam(":id_usuario_rest", $id_usuario_rest, PDO::PARAM_INT);
        $stmt->execute();

        // Obtén los resultados como un arreglo asociativo
        $resultados = $stmt->fetchAll(PDO::FETCH_OBJ);

        return $resultados;
    }
}
