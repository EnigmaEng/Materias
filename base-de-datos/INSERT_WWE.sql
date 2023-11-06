/*Datos de Prueba*/

/*Insertando restaurantes de Montevideo…*/

-- Restaurante 1
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('michelindelmar', 'michelindelmar@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'R');

INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Bulevar Espana', 'Juan Carlos Gomez', '4321');

INSERT INTO restaurante (id_usuario, nombre, id_loc_restaurante)
VALUES (LAST_INSERT_ID(), 'Le Marechal', LAST_INSERT_ID());

INSERT INTO tipo_restaurantes (descripcion,id_usuario_rest)
VALUES ('Comida Vegana',LAST_INSERT_ID());

-- Restaurante 2
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('gourmetparadise', 'gourmetparadise@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'R');

INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Avenida Italia', 'Plaza Cagancha', '1234');

INSERT INTO restaurante (id_usuario, nombre, id_loc_restaurante)
VALUES (LAST_INSERT_ID(), 'Gourmet Paradise', LAST_INSERT_ID());

INSERT INTO tipo_restaurantes (descripcion,id_usuario_rest)
VALUES ('Comida China',LAST_INSERT_ID());

-- Restaurante 3
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('saboresdelrio', 'saboresdelrio@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'R');

INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Calle Uruguay', 'Plaza Independencia', '5678');

INSERT INTO restaurante (id_usuario, nombre, id_loc_restaurante)
VALUES (LAST_INSERT_ID(), 'Sabores del Rio', LAST_INSERT_ID());

INSERT INTO tipo_restaurantes (descripcion,id_usuario_rest)
VALUES ('Comida Mexicana',LAST_INSERT_ID());

-- Restaurante 4
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('mariscosenclave', 'mariscosenclave@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'R');

INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Rambla', 'Plaza Virgilio', '9101');

INSERT INTO restaurante (id_usuario, nombre, id_loc_restaurante)
VALUES (LAST_INSERT_ID(), 'Mariscos en Clave', LAST_INSERT_ID());

INSERT INTO tipo_restaurantes (descripcion,id_usuario_rest)
VALUES ('Comida Vegetariana',LAST_INSERT_ID());

-- Restaurante 5
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('asadospremium', 'asadospremium@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'R');

INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Avenida Brasil', 'Plaza Espana', '1213');

INSERT INTO restaurante (id_usuario, nombre, id_loc_restaurante)
VALUES (LAST_INSERT_ID(), 'Asados Premium', LAST_INSERT_ID());

INSERT INTO tipo_restaurantes (descripcion,id_usuario_rest)
VALUES ('Comida Rapida',LAST_INSERT_ID());

-- Restaurante 6
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('casadelosplatos', 'casadelosplatos@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'R');

INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Calle 18 de Julio', 'Plaza Matriz', '1415');

INSERT INTO restaurante (id_usuario, nombre, id_loc_restaurante)
VALUES (LAST_INSERT_ID(), 'Casa de los Platos', LAST_INSERT_ID());

INSERT INTO tipo_restaurantes (descripcion,id_usuario_rest)
VALUES ('Solo Pick Up y Delivery',LAST_INSERT_ID());
-- Restaurante 7
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('saboresdeorientet', 'saboresdeorientet@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'R');

INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Avenida Rivera', 'Plaza Zabala', '1617');

INSERT INTO restaurante (id_usuario, nombre, id_loc_restaurante)
VALUES (LAST_INSERT_ID(), 'Sabores de Oriente', LAST_INSERT_ID());

-- Restaurante 8
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('paraisogourmet', 'paraisogourmet@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'R');

INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Rambla Republica de Mexico', 'Plaza Gomensoro', '1819');

INSERT INTO restaurante (id_usuario, nombre, id_loc_restaurante)
VALUES (LAST_INSERT_ID(), 'Paraiso Gourmet', LAST_INSERT_ID());

-- Restaurante 9
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('saborfueguino', 'saborfueguino@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'R');

INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Avenida Italia', 'Plaza Seregni', '2021');

INSERT INTO restaurante (id_usuario, nombre, id_loc_restaurante)
VALUES (LAST_INSERT_ID(), 'Sabor Fueguino', LAST_INSERT_ID());

-- Restaurante 10
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('exquisitezdelmar', 'exquisitezdelmar@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'R');

INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Bulevar Artigas', 'Plaza Cuba', '2223');

INSERT INTO restaurante (id_usuario, nombre, id_loc_restaurante)
VALUES (LAST_INSERT_ID(), 'Exquisitez del Mar', LAST_INSERT_ID());


/*Insertando datos de turistas…*/

-- Insertar turista 1
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('jsmith', 'turista1@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'USA', 'Vacaciones', 'John', 'Smith');

-- Insertar turista 2
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('smartin', 'turista2@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'France', 'Vacaciones', 'Sophie', 'Martin');

-- Insertar turista 3
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('agarcia', 'turista3@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'Spain', 'Vacaciones', 'Antonio', 'Garcia');

-- Insertar turista 4
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('lschmidt', 'turista4@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'Germany', 'Vacaciones', 'Lukas', 'Schmidt');

-- Insertar turista 5
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('ssilva', 'turista5@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'Brazil', 'Vacaciones', 'Isabella', 'Silva');
-- Insertar turista 6
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('wchen', 'turista6@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'China', 'Vacaciones', 'Wei', 'Chen');

-- Insertar turista 7
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('ojohnson', 'turista7@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'Australia', 'Vacaciones', 'Olivia', 'Johnson');

-- Insertar turista 8
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('divanov', 'turista8@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'Russia', 'Vacaciones', 'Dmitri', 'Ivanov');

-- Insertar turista 9
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('ebrown', 'turista9@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'Canada', 'Vacaciones', 'Emma', 'Brown');

-- Insertar turista 10
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('mjkim', 'turista10@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'South Korea', 'Vacaciones', 'Min-Ji', 'Kim');

-- Insertar turista 11
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('asharma', 'turista11@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'India', 'Vacaciones', 'Aarav', 'Sharma');

-- Insertar turista 12
INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('sricci', 'turista12@example.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'T');

INSERT INTO turista (id_usuario, nacionalidad, motivo_alojamiento, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 'Italy', 'Vacaciones', 'Sophia', 'Ricci');

/*Insertando premios…*/
-- Premio 1

INSERT INTO premios (cantidad, descripcion_premio)
VALUES (2, 'Estrellas Michelin');

INSERT INTO rest_obtiene_premios (id_premio, fecha_recibido,id_usuario_rest)
VALUES (1, SYSDATE(),1);

-- Restaurante 2

-- Agregar premios (Tenedores de Oro)
INSERT INTO premios (cantidad, descripcion_premio)
VALUES (2, 'Tenedores de Oro');

INSERT INTO rest_obtiene_premios (id_premio, fecha_recibido,id_usuario_rest)
VALUES (2, SYSDATE(),2);

-- Restaurante 3

-- Agregar premios (Premio Siri)
INSERT INTO premios (cantidad, descripcion_premio)
VALUES (2, 'Premio Siri');

INSERT INTO rest_obtiene_premios (id_premio, fecha_recibido,id_usuario_rest)
VALUES (3, SYSDATE(),3);


/*Insertando administradores*/

INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('admin22', 'admin@admin.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'A');

INSERT INTO administrativo (id_usuario, nro_empleado, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 22, 'Juan', 'Perez');

INSERT INTO usuarios (alias, email, contrasena, activo, bloqueado, rol)
VALUES ('admin17', 'admin17@wwe.com', '$2y$10$UADHYcQi2TCTP6OE5hUoc.UUypcvxTBtKVbSlWzz.GDGRb/mOrmU2', 'S', 'N', 'A');

INSERT INTO administrativo (id_usuario, nro_empleado, nombres, apellidos)
VALUES (LAST_INSERT_ID(), 17, 'Maria', 'Gonzalez');

/*Insertando Alojamientos*/

-- Insertar alojamiento 1
INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Rambla Republica de Mexico', '21 de Setiembre', '1234');

INSERT INTO alojamiento (nombre_alojamiento, id_loc_alojamiento, activo)
VALUES ('Hotel del Mar', LAST_INSERT_ID(), 'S');

-- Insertar alojamiento 2
INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Avenida Italia', 'Bulevar Artigas', '5678');

INSERT INTO alojamiento (nombre_alojamiento, id_loc_alojamiento, activo)
VALUES ('Apartamentos Montevideo', LAST_INSERT_ID(), 'S');

-- Insertar alojamiento 3
INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('18 de Julio', 'Plaza Independencia', '9012');

INSERT INTO alojamiento (nombre_alojamiento, id_loc_alojamiento, activo)
VALUES ('Gran Hotel Plaza', LAST_INSERT_ID(), 'S');

-- Insertar alojamiento 4
INSERT INTO localizacion (calle, esquina, nro_puerta)
VALUES ('Pocitos', 'Bvar Espana', '3456');

INSERT INTO alojamiento (nombre_alojamiento, id_loc_alojamiento, activo)
VALUES ('Hostel Pocitos', LAST_INSERT_ID(), 'S');

/*Insertando Suscripciones*/

INSERT INTO tipo_subscripcion (nombre, precio_subscripcion)
VALUES ('Standard', '9.99');

INSERT INTO tipo_subscripcion (nombre, precio_subscripcion)
VALUES ('Premium', '99.99');

INSERT INTO tipo_subscripcion (nombre, precio_subscripcion)
VALUES ('VIP', '149.99');

/*Insertando suscripciones...*/

-- Restaurante 1
INSERT INTO restaurante_paga_subscripcion (id_usuario_rest, id_tipo_subscripcion, fecha_pago)
VALUES (1, 1, SYSDATE());

-- Restaurante 2
INSERT INTO restaurante_paga_subscripcion (id_usuario_rest, id_tipo_subscripcion, fecha_pago)
VALUES (2, 2, SYSDATE());

-- Restaurante 3
INSERT INTO restaurante_paga_subscripcion (id_usuario_rest, id_tipo_subscripcion, fecha_pago)
VALUES (3, 3, SYSDATE());

-- Restaurante 4
INSERT INTO restaurante_paga_subscripcion (id_usuario_rest, id_tipo_subscripcion, fecha_pago)
VALUES (4, 1, SYSDATE());

-- Restaurante 5
INSERT INTO restaurante_paga_subscripcion (id_usuario_rest, id_tipo_subscripcion, fecha_pago)
VALUES (5, 2, SYSDATE());

-- Restaurante 6
INSERT INTO restaurante_paga_subscripcion (id_usuario_rest, id_tipo_subscripcion, fecha_pago)
VALUES (6, 3, SYSDATE());

-- Restaurante 7
INSERT INTO restaurante_paga_subscripcion (id_usuario_rest, id_tipo_subscripcion, fecha_pago)
VALUES (7, 1, SYSDATE());

-- Restaurante 8
INSERT INTO restaurante_paga_subscripcion (id_usuario_rest, id_tipo_subscripcion, fecha_pago)
VALUES (8, 3, SYSDATE());

-- Restaurante 9
INSERT INTO restaurante_paga_subscripcion (id_usuario_rest, id_tipo_subscripcion, fecha_pago)
VALUES (9, 1, SYSDATE());

/*Insertando aprobaciones de Admin a las subs de restaurantes...*/

INSERT INTO admin_aprueba_rest (id_usuario_rest, id_usuario_admin, fecha_ini_sub, fecha_fin_sub)
VALUES (1, 23, SYSDATE(), '27-08-24');

INSERT INTO admin_aprueba_rest (id_usuario_rest, id_usuario_admin, fecha_ini_sub, fecha_fin_sub)
VALUES (2,23,SYSDATE(),DATE_ADD(SYSDATE(), INTERVAL 1 MONTH));

INSERT INTO admin_aprueba_rest (id_usuario_rest, id_usuario_admin, fecha_ini_sub, fecha_fin_sub)
VALUES (3,23,SYSDATE(),DATE_ADD(SYSDATE(), INTERVAL 2 YEAR));

INSERT INTO admin_aprueba_rest (id_usuario_rest, id_usuario_admin, fecha_ini_sub, fecha_fin_sub)
VALUES (4,23,SYSDATE(),DATE_ADD(SYSDATE(), INTERVAL 1 YEAR));

INSERT INTO admin_aprueba_rest (id_usuario_rest, id_usuario_admin, fecha_ini_sub, fecha_fin_sub)
VALUES (5,23,SYSDATE(),DATE_ADD(SYSDATE(), INTERVAL 1 YEAR));

INSERT INTO admin_aprueba_rest (id_usuario_rest, id_usuario_admin, fecha_ini_sub, fecha_fin_sub)
VALUES (6,23,SYSDATE(),DATE_ADD(SYSDATE(), INTERVAL 2 YEAR));

INSERT INTO admin_aprueba_rest (id_usuario_rest, id_usuario_admin, fecha_ini_sub, fecha_fin_sub)
VALUES (7,23,SYSDATE(),DATE_ADD(SYSDATE(), INTERVAL 1 YEAR));

INSERT INTO admin_aprueba_rest (id_usuario_rest, id_usuario_admin, fecha_ini_sub, fecha_fin_sub)
VALUES (8,23,SYSDATE(),DATE_ADD(SYSDATE(), INTERVAL 1 MONTH));

INSERT INTO admin_aprueba_rest (id_usuario_rest, id_usuario_admin, fecha_ini_sub, fecha_fin_sub)
VALUES (9,23,SYSDATE(),DATE_ADD(SYSDATE(), INTERVAL 1 MONTH));

UPDATE restaurante_paga_subscripcion SET aprobado = 'S';

/*Insertando Platos…*/

-- Restaurante 1
INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Salmon a la Parrilla', ROUND(RAND() * 150 + 150, 2), 'Salmon fresco a la parrilla con vegetales asados.', 1);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Filete de Res Wellington', ROUND(RAND() * 200 + 250, 2), 'Filete de res envuelto en hojaldre y cocido a la perfeccion.', 1);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Tarta de Limon', ROUND(RAND() * 80 + 120, 2), 'Deliciosa tarta de limon con merengue.', 1);

-- Restaurante 2
INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Risotto de Mariscos', ROUND(RAND() * 170 + 130, 2), 'Risotto cremoso con una variedad de mariscos frescos.', 2);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Chuleton de Ternera', ROUND(RAND() * 250 + 300, 2), 'Chuleton de ternera cocido a la parrilla y acompanado de guarniciones.', 2);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Tiramisu', ROUND(RAND() * 60 + 90, 2), 'El clasico postre italiano con capas de cafe y crema.', 2);

-- Restaurante 3
INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Ceviche de Pescado', ROUND(RAND() * 130 + 170, 2), 'Ceviche fresco de pescado con limon y especias.', 3);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Pasta Alfredo con Pollo', ROUND(RAND() * 180 + 200, 2), 'Pasta fettuccine en salsa alfredo con trozos de pollo.', 3);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Mousse de Chocolate', ROUND(RAND() * 50 + 70, 2), 'Suave mousse de chocolate con decoracion de frutas.', 3);

-- Restaurante 4
INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Parrillada Mixta', ROUND(RAND() * 250 + 350, 2), 'Seleccion variada de carnes a la parrilla.', 4);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Pasta Frutti di Mare', ROUND(RAND() * 180 + 220, 2), 'Pasta con mariscos frescos en salsa de tomate.', 4);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Tartaleta de Frutas', ROUND(RAND() * 70 + 100, 2), 'Tartaleta crujiente rellena de frutas frescas.', 4);

-- Restaurante 5
INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Cordero Patagonico', ROUND(RAND() * 320 + 380, 2), 'Cordero asado con hierbas patagonicas.', 5);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Salmon en Salsa de Mostaza', ROUND(RAND() * 220 + 260, 2), 'Salmon con salsa de mostaza y miel.', 5);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Profiteroles Rellenos', ROUND(RAND() * 80 + 120, 2), 'Profiteroles rellenos de crema y chocolate.', 5);

-- Restaurante 6
INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Raviolis de Calabaza', ROUND(RAND() * 160 + 200, 2), 'Raviolis rellenos de calabaza en salsa de salvia.', 6);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Ternera a la Parrilla', ROUND(RAND() * 280 + 320, 2), 'Ternera jugosa cocida a la parrilla.', 6);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Tarta de Manzana', ROUND(RAND() * 60 + 90, 2), 'Clasica tarta de manzana con crumble.', 6);

-- Restaurante 7
INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Pulpo a la Gallega', ROUND(RAND() * 190 + 220, 2), 'Pulpo cocido con paprika y aceite de oliva.', 7);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Paella Valenciana', ROUND(RAND() * 260 + 300, 2), 'Paella tradicional con mariscos y pollo.', 7);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Crema Catalana', ROUND(RAND() * 70 + 100, 2), 'Postre cremoso con capa de azucar quemado.', 7);

-- Restaurante 8
INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Tacos de Carnitas', ROUND(RAND() * 140 + 180, 2), 'Tacos de cerdo asado con condimentos mexicanos.', 8);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Enchiladas Verdes', ROUND(RAND() * 160 + 200, 2), 'Enchiladas rellenas de pollo con salsa verde.', 8);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Churros con Chocolate', ROUND(RAND() * 50 + 80, 2), 'Churros crujientes servidos con chocolate caliente.', 8);

-- Restaurante 9
INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Risotto de Hongos', ROUND(RAND() * 180 + 220, 2), 'Risotto cremoso con hongos silvestres.', 9);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Bife de Lomo con Salsa de Vino', ROUND(RAND() * 280 + 320, 2), 'Bife de lomo cocido con salsa de vino tinto.', 9);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Tarta de Frutas del Bosque', ROUND(RAND() * 70 + 100, 2), 'Tarta de frutas del bosque con crema chantilly.', 9);

-- Restaurante 10
INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Parrillada Argentina', ROUND(RAND() * 250 + 350, 2), 'Seleccion de cortes argentinos a la parrilla.', 10);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Empanadas Criollas', ROUND(RAND() * 160 + 200, 2), 'Empanadas rellenas de carne, huevo y aceitunas.', 10);

INSERT INTO plato_restaurantes (nombre_plato, costo, descripcion, id_usuario_rest)
VALUES ('Flan Casero', ROUND(RAND() * 50 + 80, 2), 'Flan casero con caramelo y crema.', 10);

/*Insertando Turistas Alojados*/

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('11','1','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('12','2','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('13','3','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('14','4','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('15','2','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('16','2','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('17','3','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('18','1','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('19','4','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('20','4','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('21','1','2023-09-01','2023-09-07');

INSERT INTO turista_sealoja_alojamiento (id_usuario_turista, id_alojamiento, fecha_ini_alojamiento, fecha_fin_alojamiento)
VALUES ('22','3','2023-09-01','2023-09-07');

/*Insertando resenias de turistas a restaurantes*/

INSERT INTO turista_visita_rest (id_turista, id_rest, token,fecha_visita)
VALUES
  (11, 2, FLOOR(1000000 * RAND()) + 1, curdate()),  -- Genera un valor aleatorio entre 1 y 1000000
  (12, 9, FLOOR(1000000 * RAND()) + 1, DATE_ADD(NOW(), INTERVAL 2 MONTH)),
  (13, 7, FLOOR(1000000 * RAND()) + 1, DATE_ADD(NOW(), INTERVAL 3 MONTH)),
  (14, 7, FLOOR(1000000 * RAND()) + 1, DATE_ADD(NOW(), INTERVAL 3 MONTH)),
  (15, 7, FLOOR(1000000 * RAND()) + 1, DATE_ADD(NOW(), INTERVAL 3 MONTH)),
  (16, 7, FLOOR(1000000 * RAND()) + 1, DATE_ADD(NOW(), INTERVAL 3 MONTH));

-- Insercion de una resena por un turista para un restaurante
INSERT INTO turista_resena_rest (id_usuario_turista, id_usuario_rest, fecha, calificacion_instalaciones, calificacion_personal, calificacion_menu, calificacion_general)
VALUES (11, 4, '2023-08-25', 'Excelente', '9', '8', 'Muy bueno');

-- Otra resena de turista para otro restaurante
INSERT INTO turista_resena_rest (id_usuario_turista, id_usuario_rest, fecha, calificacion_instalaciones, calificacion_personal, calificacion_menu, calificacion_general)
VALUES (12, 9, '2023-08-26', 'Medio', '5', '6', 'Bueno');

-- Una resena más para un restaurante diferente
INSERT INTO turista_resena_rest (id_usuario_turista, id_usuario_rest, fecha, calificacion_instalaciones, calificacion_personal, calificacion_menu, calificacion_general)
VALUES (13, 7, '2023-08-27', 'Insuficiente', '3', '4', 'Medio');

-- Otra resena de turista para otro restaurante
INSERT INTO turista_resena_rest (id_usuario_turista, id_usuario_rest, fecha, calificacion_instalaciones, calificacion_personal, calificacion_menu, calificacion_general)
VALUES (14, 4, '2023-08-26', 'Medio', '7', '9', 'Bueno');

INSERT INTO turista_resena_rest (id_usuario_turista, id_usuario_rest, fecha, calificacion_instalaciones, calificacion_personal, calificacion_menu, calificacion_general)
VALUES (15, 9, '2023-08-26', 'Medio', '7', '9', 'Bueno');

INSERT INTO turista_resena_rest (id_usuario_turista, id_usuario_rest, fecha, calificacion_instalaciones, calificacion_personal, calificacion_menu, calificacion_general)
VALUES (16, 8, '2023-08-26', 'Medio', '7', '9', 'Bueno');

INSERT INTO wwe.descuento (activo,titulo_descuento,descripcion,url_img_descuento,costo) VALUES ('S','Hamburgesas Caseras','Hamburguesas caseras con papa fritas y bebida','FotoHambur.jpg',923);