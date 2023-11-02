<?php

require_once 'crudBasico.php';

require '../vendor/autoload.php';

use Dotenv\Dotenv;

$dotenv = Dotenv::createImmutable('/var/www/html/');
$dotenv->load();

class Descuento extends CrudBasico
{
    private $idDescuento;
    private $activo;
    private $idRestaurante;
    private $descuentoActivo;
    private $tituloDescuento;
    private $descripcion;
    private $urlImgDesc;
    private $fechaInicio;
    private $fechaFin;

    private $costo;

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

    public function setIdDescuento($idDescuento)
    {
        $this->idDescuento = $idDescuento;
    }

    public function getIdDescuento()
    {
        return $this->idDescuento;
    }

    public function setActivo($activo)
    {
        $this->activo = $activo;
    }

    public function getActivo()
    {
        return $this->activo;
    }

    public function setIdRestaurante($idRestaurante)
    {
        $this->idRestaurante = $idRestaurante;
    }

    public function getIdRestaurante()
    {
        return $this->idRestaurante;
    }

    public function setDescuentoActivo($descuentoActivo)
    {
        $this->descuentoActivo = $descuentoActivo;
    }

    public function getDescuentoActivo()
    {
        $this->descuentoActivo;
    }

    public function setTituloDescuento($tituloDescuento)
    {
        $this->tituloDescuento = $tituloDescuento;
    }

    public function getTituloDescuento()
    {
        return $this->tituloDescuento;
    }

    public function setDescripcion($descripcion)
    {
        $this->descripcion = $descripcion;
    }

    public function getDescripcion()
    {
        return $this->descripcion;
    }

    public function setUrlImagenDesc($urlImgDesc)
    {
        $this->urlImgDesc = $urlImgDesc;
    }

    public function getUrlImagenDesc()
    {
        return $this->urlImgDesc;
    }

    public function setFechaInicio($fechaInicio)
    {
        $this->fechaInicio = $fechaInicio;
    }

    public function getFechaInicio()
    {
        return $this->fechaInicio;
    }

    public function setFechaFin($fechaFin)
    {
        $this->fechaFin = $fechaFin;
    }

    public function getFechaFin()
    {
        return $this->fechaFin;
    }

    public function setCosto($costo)
    {
        $this->costo = $costo;
    }

    public function getCosto()
    {
        return $this->costo;
    }

    public function guardarImagen($archivo_temporal, $nombre_archivo, $carpeta_destino)
    {
        return move_uploaded_file($archivo_temporal, $carpeta_destino . $nombre_archivo);
    }

    public function crearDescuento()
    {
        try {
            $query = "INSERT INTO descuento(id_descuento,activo,titulo_descuento,descripcion,url_img_descuento,costo) VALUES (:id_descuento,:activo,:titulo_descuento,:descripcion,:url_img_descuento,:costo)";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_descuento", $this->getIdDescuento());
            $stmt->bindValue(":activo", $this->getActivo());
            $stmt->bindValue(":titulo_descuento", $this->getTituloDescuento());
            $stmt->bindValue(":descripcion", $this->getDescripcion());
            $stmt->bindValue(":url_img_descuento", $_ENV['DIR_IMAGEN'] . $this->getUrlImagenDesc());
            $stmt->bindValue(":costo", $this->getCosto());
            if ($stmt->execute()) {
                return true;
            }
            return false;
        } catch (PDOException $ex) {
            echo "Error en el insert: " . $ex->getMessage();
        }
    }

    public function restauranteTieneDescuento()
    {
        try {
            $query = "SELECT max(id_descuento) FROM descuento";
            $stmt = $this->getConn()->prepare($query);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);
            if ($result) {
                $id_descuento = $result['id_descuento'];
                $query = "INSERT INTO restaurante_tiene_descuento(id_descuento,id_usuario_rest,fecha_inicio,fecha_fin) VALUES (:id_descuento,:id_usuario_rest,:fecha_inicio,:fecha_fin)";
                $stmt = $this->getConn()->prepare($query);
                $stmt->bindValue(":id_descuento", $id_descuento);
                $stmt->bindValue(":id_usuario_rest", $this->getIdRestaurante());
                $stmt->bindValue(":fecha_inicio", $this->getFechaInicio());
                $stmt->bindValue(":fecha_fin", $this->getFechaFin());
                if ($stmt->execute()) {
                    return true;
                }
            } else {
                echo "No se encontraron resultados.";
            }
            return false;
        } catch (PDOException $ex) {
            echo "Error en el insert: " . $ex->getMessage();
        }
    }

    public function mostrarDescuentoPorId()
    {
        try {
            $query = "SELECT r.nombre,r.id_usuario,des.* FROM wwe.descuento des
            join wwe.restaurante_tiene_descuento rd on des.id_descuento = rd.id_descuento
            join wwe.restaurante r on r.id_usuario = rd.id_usuario_rest";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_descuento", $this->getIdDescuento());
            if ($stmt->execute()) {
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return false;
            }
        } catch (PDOException $ex) {
            error_log("Error al mostrar el descuento: " . $ex->getMessage());
        }
    }

    public function mostrarDescuentos()
    {
        try {
            $query = "SELECT r.nombre, r.id_usuario, des.* FROM wwe.descuento des
            join wwe.restaurante_tiene_descuento rd on des.id_descuento = rd.id_descuento
            join wwe.restaurante r on r.id_usuario = rd.id_usuario_rest";
            $stmt = $this->getConn()->prepare($query);
            if ($stmt->execute()) {
                return $stmt->fetchAll(PDO::FETCH_ASSOC);
            } else {
                return false;
            }
        } catch (PDOException $ex) {
            error_log("" . $ex->getMessage());
        }
    }

    public function modificarDescuento($idDescuento, $opcion, $valor)
    {
        try {
            $query = "";
            $nombreColumna = "";

            switch ($opcion) {
                case "activo":
                    $nombreColumna = "activo";
                    break;
                case "titulo_descuento":
                    $nombreColumna = "titulo_descuento";
                    break;
                case "descripcion":
                    $nombreColumna = "descripcion";
                    break;
                case "url_img_descuento":
                    $nombreColumna = "url_img_descuento";
                    break;
                case "costo":
                    $nombreColumna = "costo";
                    break;
                default:
                    // Manejar un caso incorrecto o desconocido de $opcion
                    return false;
            }

            $query = "UPDATE descuento SET $nombreColumna = :valor WHERE id_descuento = :id_descuento";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":valor", $valor);
            $stmt->bindValue(":id_descuento", $idDescuento);

            if ($stmt->execute()) {
                return true;
            }

            return false;
        } catch (PDOException $ex) {
            error_log("Error en la actualización de datos: " . $ex->getMessage());
        }
    }
}
