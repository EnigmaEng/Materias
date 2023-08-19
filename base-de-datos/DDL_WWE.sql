DROP DATABASE IF EXISTS `wwe`;
CREATE DATABASE `wwe` CHARSET utf8mb4;
USE `wwe`;

CREATE TABLE `usuarios` (
  id_usuario INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  alias VARCHAR(50) UNIQUE,
  email VARCHAR(50) NOT NULL,
  contrasena VARCHAR(50) NOT NULL,
  activo ENUM ('S','N') DEFAULT 'S',
  bloqueado ENUM ('S','N') DEFAULT 'N',
  url_img_usuario VARCHAR(150) DEFAULT NULL,
  fecha_cambio_pwd DATETIME DEFAULT NULL,
  rol ENUM ('T','R','A') NOT NULL,
  CHECK (email LIKE '%_@%_.%')
);

CREATE TABLE `localizacion` (
  id_localizacion INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  calle VARCHAR(80),
  esquina VARCHAR(80),
  nro_puerta VARCHAR(10)
);

CREATE TABLE `turista` (
  id_usuario INT(10) UNSIGNED PRIMARY KEY,
  nacionalidad VARCHAR(50) NOT NULL,
  motivo_alojamiento VARCHAR (60) NOT NULL,
  FOREIGN KEY (id_usuario) REFERENCES `usuarios`(id_usuario)
);

CREATE TABLE `administrador` (
  id_usuario INT(10) UNSIGNED PRIMARY KEY,
  nro_empleado SMALLINT(5) UNIQUE,
  FOREIGN KEY (id_usuario) REFERENCES `usuarios`(id_usuario)
);

CREATE TABLE `restaurante` (
  id_usuario INT(10) UNSIGNED PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  id_loc_restaurante INT(10) UNSIGNED,
  FOREIGN KEY (id_usuario) REFERENCES `usuarios`(id_usuario),
  FOREIGN KEY (id_loc_restaurante) REFERENCES `localizacion`(id_localizacion)
);

CREATE TABLE `sesiones`(
	id_sesion INT (10) UNSIGNED AUTO_INCREMENT,
    fecha_ultima_sesion DATE NOT NULL, #Se crea cuando el usuario INICIA sesion.
    ip VARCHAR (16),
    max_intentos INT (1),
    id_usuario_rest INT (10) UNSIGNED,
    PRIMARY KEY (id_sesion,fecha_ultima_sesion),
    FOREIGN KEY (id_usuario_rest) REFERENCES `restaurante`(id_usuario)
);

CREATE TABLE `tipo_restaurantes`(
	id_tipo_rest INT(10) UNSIGNED PRIMARY KEY,
    descripcion VARCHAR(50) NOT NULL,
    id_usuario_rest INT (10) UNSIGNED,
	FOREIGN KEY (id_usuario_rest) REFERENCES `restaurante`(id_usuario)
);

CREATE TABLE `premios`(
	id_premio INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    cantidad INT (3) NOT NULL,
    descripcion_premio VARCHAR(50)
);

CREATE TABLE `rest_obtiene_premios` (
	id_premio INT(10) UNSIGNED,
    fecha_recibido DATE,
    PRIMARY KEY (id_premio, fecha_recibido),
    FOREIGN KEY (id_premio) REFERENCES `premios` (id_premio),
    CHECK (fecha_recibido <= sysdate())
);

CREATE TABLE `alojamiento` (
  id_alojamiento INT(10) UNSIGNED AUTO_INCREMENT,
  nombre_alojamiento VARCHAR(50) NOT NULL,
  id_loc_alojamiento INT(10) UNSIGNED,
  activo ENUM ('S','N') DEFAULT 'S',
  PRIMARY KEY (id_alojamiento,id_loc_alojamiento),
  FOREIGN KEY (id_alojamiento) REFERENCES `localizacion`(id_localizacion)
  );

CREATE TABLE `menu_restaurantes` (
  id_menu_res INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre_menu VARCHAR(50) NOT NULL,
  costo FLOAT(5,2),
  descripcion VARCHAR(300),
  url_img_menu VARCHAR(150),
  id_usuario_rest INT (10) UNSIGNED,
  FOREIGN KEY (id_usuario_rest) REFERENCES `restaurante`(id_usuario)
);

CREATE TABLE `tipo_subscripcion` (
  id_tipo_subs INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(50) NOT NULL,
  precio_subscripcion ENUM ('9.99','99.99','149.99') NOT NULL
);



CREATE TABLE `descuento` (
  id_descuento INT(10) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
  activo ENUM ('S','N') DEFAULT 'S',
  titulo_descuento VARCHAR(50),
  descripcion VARCHAR(300) DEFAULT NULL,
  url_img_descuento VARCHAR(150) DEFAULT NULL
);

CREATE TABLE `admin_aprueba_rest` (
  id_usuario_rest INT(10) UNSIGNED,
  id_usuario_admin INT(10) UNSIGNED,
  fecha_ini_sub DATE,
  fecha_fin_sub DATE,
  PRIMARY KEY (id_usuario_rest, fecha_ini_sub, fecha_fin_sub),
  CHECK (fecha_ini_sub < fecha_fin_sub),
  FOREIGN KEY (id_usuario_rest) REFERENCES `restaurante` (id_usuario),
  FOREIGN KEY (id_usuario_admin) REFERENCES `administrador` (id_usuario)
);

CREATE TABLE `restaurante_tiene_tipo_subscripcion` (
  id_usuario_rest INT(10) UNSIGNED PRIMARY KEY,
  id_tipo_subscripcion INT(10) UNSIGNED,
  FOREIGN KEY (id_usuario_rest) REFERENCES `restaurante` (id_usuario),
  FOREIGN KEY (id_tipo_subscripcion) REFERENCES `tipo_subscripcion` (id_tipo_subs)
);

CREATE TABLE `turista_seAloja_Alojamiento` (
  id_usuario_turista INT(10) UNSIGNED,
  id_alojamiento INT(10) UNSIGNED,
  fecha_ini_alojamiento DATE,
  fecha_fin_alojamiento DATE,
  PRIMARY KEY (id_usuario_turista, fecha_ini_alojamiento, fecha_fin_alojamiento),
  CHECK (fecha_ini_alojamiento < fecha_fin_alojamiento),
  FOREIGN KEY (id_usuario_turista) REFERENCES `turista` (id_usuario),
  FOREIGN KEY (id_alojamiento) REFERENCES `alojamiento` (id_alojamiento)
);

CREATE TABLE `turista_resena_rest` (
  id_usuario_turista INT(10) UNSIGNED,
  id_usuario_rest INT(10) UNSIGNED,
  fecha DATE NOT NULL,
  calificacion_instalaciones ENUM('Excelente','Medio','Insuficiente') NOT NULL,
  calificacion_personal ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10') NOT NULL,
  calificacion_menu ENUM('1', '2', '3', '4', '5', '6', '7', '8', '9', '10') NOT NULL,
  calificacion_general ENUM('Muy bueno', 'Bueno', 'Medio', 'Malo', 'Muy malo') NOT NULL,
  PRIMARY KEY (id_usuario_turista, id_usuario_rest),
  /* CHECK (fecha >= fecha_ini_alojamiento AND fecha >= fecha_fin_alojamiento + 90), REVISAR ESTO !!! */
  FOREIGN KEY (id_usuario_turista) REFERENCES `turista` (id_usuario),
  FOREIGN KEY (id_usuario_rest) REFERENCES `restaurante` (id_usuario));
  
CREATE TABLE `restaurante_tiene_descuento` (
  id_descuento INT(10) UNSIGNED,
  id_usuario_rest INT(10) UNSIGNED,
  fecha_inicio DATE NOT NULL,
  fecha_fin DATE NOT NULL,
  PRIMARY KEY (id_descuento, id_usuario_rest, fecha_inicio, fecha_fin),
  CHECK (fecha_inicio < fecha_fin),
  FOREIGN KEY (id_descuento) REFERENCES `descuento` (id_descuento),
  FOREIGN KEY (id_usuario_rest) REFERENCES `restaurante` (id_usuario)
);
