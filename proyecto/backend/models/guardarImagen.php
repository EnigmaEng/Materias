<?php

class GuardarImagen
{
    private $directorioDestino;

    public function __construct($directorioDestino)
    {
        $this->directorioDestino = $directorioDestino;
    }

    public function guardarImagen($archivo, $nombreArchivo)
    {
        $rutaCompleta = $this->directorioDestino . '/' . $nombreArchivo;

        if (move_uploaded_file($archivo['tmp_name'], $rutaCompleta)) {
            return $rutaCompleta;
        } else {
            return false;
        }
    }
}
