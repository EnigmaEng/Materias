/*Creacion y Privilegios de Turistas*/
CREATE USER 'wwe_rol_t'@'%' IDENTIFIED BY 'ContraTurista';
GRANT USAGE ON wwe.* TO 'wwe_rol_t'@'%';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.usuarios TO 'wwe_rol_t'@'%';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.turista TO 'wwe_rol_t'@'%';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.turista TO 'wwe_rol_t'@'%';
GRANT SELECT ON wwe.tipo_restaurantes TO 'wwe_rol_t'@'%';
GRANT SELECT ON wwe.descuento TO 'wwe_rol_t'@'%';
GRANT INSERT, SELECT, DELETE ON wwe.turista_resena_rest TO 'wwe_rol_t'@'%';
GRANT SELECT ON wwe.premios TO 'wwe_rol_t'@'%';
GRANT SELECT ON wwe.plato_restaurantes TO 'wwe_rol_t'@'%';
GRANT INSERT, SELECT ON wwe.localizacion TO 'wwe_rol_t'@'%';
GRANT INSERT, SELECT, UPDATE ON wwe.alojamiento TO 'wwe_rol_t'@'%';
GRANT INSERT, SELECT ON wwe.turista_seAloja_Alojamiento TO 'wwe_rol_t'@'%';
GRANT SELECT ON wwe.restaurante_tiene_descuento TO 'wwe_rol_t'@'%';
GRANT SELECT ON wwe.rest_obtiene_premios TO 'wwe_rol_t'@'%';
FLUSH PRIVILEGES;

/*Creacion y Privilegios de Restaurantes*/
CREATE USER 'wwe_rol_r'@'%' IDENTIFIED BY 'ContraRestaurante';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.usuarios TO 'wwe_rol_r'@'%';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.Restaurante TO 'wwe_rol_r'@'%';
GRANT INSERT ON wwe.sesiones TO 'wwe_rol_r'@'%';
GRANT INSERT, SELECT, UPDATE ON wwe.tipo_restaurantes TO 'wwe_rol_r'@'%';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.descuento TO 'wwe_rol_r'@'%';
GRANT SELECT ON wwe.admin_aprueba_rest TO 'wwe_rol_r'@'%';
GRANT SELECT ON wwe.restaurante_tiene_tipo_subscripcion TO 'wwe_rol_r'@'%';
GRANT SELECT ON wwe.turista_resena_rest TO 'wwe_rol_r'@'%';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.premios TO 'wwe_rol_r'@'%';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.plato_restaurantes TO 'wwe_rol_r'@'%';
GRANT INSERT, SELECT ON wwe.localizacion TO 'wwe_rol_r'@'%';
GRANT SELECT, UPDATE ON wwe.tipo_subscripcion TO 'wwe_rol_r'@'%';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.restaurante_tiene_descuento TO 'wwe_rol_r'@'%';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.rest_obtiene_premios TO 'wwe_rol_r'@'%';
FLUSH PRIVILEGES;

/*Creacion y Privilegios de Admin*/
CREATE USER 'wwe_rol_a'@'%' IDENTIFIED BY 'ContraAdmin';
GRANT SELECT, UPDATE ON wwe.usuarios TO 'wwe_rol_a'@'%';
GRANT INSERT, SELECT, UPDATE, DELETE ON wwe.administrador TO 'wwe_rol_a'@'%';
GRANT INSERT ON wwe.sesiones TO 'wwe_rol_a'@'%';
GRANT SELECT ON wwe.tipo_restaurantes TO 'wwe_rol_a'@'%';
GRANT INSERT, SELECT ON wwe.admin_aprueba_rest TO 'wwe_rol_a'@'%';
GRANT INSERT, SELECT ON wwe.restaurante_tiene_tipo_subscripcion TO 'wwe_rol_a'@'%';
GRANT SELECT ON wwe.turista_resena_rest TO 'wwe_rol_a'@'%';
GRANT SELECT ON wwe.premios TO 'wwe_rol_a'@'%';
GRANT INSERT, SELECT, UPDATE ON wwe.tipo_subscripcion TO 'wwe_rol_a'@'%';
GRANT SELECT ON wwe.rest_obtiene_premios TO 'wwe_rol_a'@'%';
FLUSH PRIVILEGES;