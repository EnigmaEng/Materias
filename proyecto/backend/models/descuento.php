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
        $this->setPort($_ENV['PORT']);
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
            $query = "INSERT INTO descuento(activo,titulo_descuento,descripcion,url_img_descuento,costo) VALUES (:activo,:titulo_descuento,:descripcion,:url_img_descuento,:costo)";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":activo", $this->getActivo());
            $stmt->bindValue(":titulo_descuento", $this->getTituloDescuento());
            $stmt->bindValue(":descripcion", $this->getDescripcion());
            $stmt->bindValue(":url_img_descuento", $this->getUrlImagenDesc());
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
            $query = "SELECT MAX(id_descuento) AS max_id_descuento FROM descuento";
            $stmt = $this->getConn()->prepare($query);
            $stmt->execute();
            $result = $stmt->fetch(PDO::FETCH_ASSOC);

            if ($result && isset($result['max_id_descuento'])) {
                $id_descuento = $result['max_id_descuento'];

                $query = "INSERT INTO restaurante_tiene_descuento (id_descuento, id_usuario_rest, fecha_inicio, fecha_fin) 
                          VALUES (:id_descuento, :id_usuario_rest, :fecha_inicio, :fecha_fin)";
                $stmt = $this->getConn()->prepare($query);
                $stmt->bindValue(":id_descuento", $id_descuento);
                $stmt->bindValue(":id_usuario_rest", $this->getIdRestaurante());
                $stmt->bindValue(":fecha_inicio", $this->getFechaInicio());
                $stmt->bindValue(":fecha_fin", $this->getFechaFin());

                if ($stmt->execute()) {
                    return true;
                } else {
                    echo "Error en la inserción en la tabla restaurante_tiene_descuento.";
                }
            } else {
                echo "No se encontraron resultados en la tabla descuento.";
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
            join wwe.restaurante r on r.id_usuario = rd.id_usuario_rest
            where   des.activo = 'S'";
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
            join wwe.restaurante r on r.id_usuario = rd.id_usuario_rest
            where  des.activo = 'S'";
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

    public function mostrarDescuentosByIdUsuario($id)
    {
        $arrayDescuento = array();
        try {
           $query = "SELECT r.nombre, r.id_usuario, des.* 
          FROM wwe.descuento des
          JOIN wwe.restaurante_tiene_descuento rd ON des.id_descuento = rd.id_descuento
          JOIN wwe.restaurante r ON r.id_usuario = rd.id_usuario_rest
          WHERE rd.id_usuario_rest = :id_usuario AND des.activo = 'S'";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_usuario", $id); // Usar el parámetro $id en lugar de $this->getIdRestaurante()

            if ($stmt->execute()) {
                $resultados = $stmt->fetchAll(PDO::FETCH_ASSOC);
                foreach ($resultados as $resultado) {
                    if ($resultado["id_usuario"] == $id) {
                        $arrayDescuento[] = $resultado; // Agregar el resultado al array
                    }
                }
                return $arrayDescuento;
            } else {
                return false;
            }
        } catch (PDOException $ex) {
            error_log("" . $ex->getMessage());
            return false;
        }
    }


    public function modificarDescuento($idDescuento, $datos)
    {
        try {
            $query = "UPDATE descuento SET ";
            $valores = [];

            foreach ($datos as $opcion => $valor) {
                switch ($opcion) {
                    case "activo":
                        $query .= "activo = :activo, ";
                        $valores[":activo"] = $valor;
                        break;
                    case "titulo_descuento":
                        $query .= "titulo_descuento = :titulo_descuento, ";
                        $valores[":titulo_descuento"] = $valor;
                        break;
                    case "descripcion":
                        $query .= "descripcion = :descripcion, ";
                        $valores[":descripcion"] = $valor;
                        break;
                    case "url_img_descuento":
                        $query .= "url_img_descuento = :url_img_descuento, ";
                        $valores[":url_img_descuento"] = $valor;
                        break;
                    case "costo":
                        $query .= "costo = :costo, ";
                        $valores[":costo"] = $valor;
                        break;
                    default:
                        return false;
                }
            }

            $query = rtrim($query, ', ');

            $query .= " WHERE id_descuento = :id_descuento";
            $valores[":id_descuento"] = $idDescuento;

            $stmt = $this->getConn()->prepare($query);

            if ($stmt->execute($valores)) {
                return true;
            }

            return false;
        } catch (PDOException $ex) {
            error_log("Error en la actualización de datos: " . $ex->getMessage());
        }
    }

    public function eliminarDescuento()
    {
        try {
            $query = "UPDATE descuento SET activo= 'N' WHERE id_descuento = :id_descuento";
            $stmt = $this->getConn()->prepare($query);
            $stmt->bindValue(":id_descuento", $this->getIdDescuento());
            if ($stmt->execute()) {
                return true;
            }
            return false;
        } catch (PDOException $ex) {
            error_log("Error en el update de descuento: " . $ex->getMessage());
        }
    }
}
