<!DOCTYPE html>
<html>
<head>
    <title>Formulario de Registro</title>
</head>
<body>
    <h2>Formulario de Registro</h2>
    <form action="../controllers/restauranteController.php" method="POST" enctype="multipart/form-data">
        <label for="alias">Alias:</label>
        <input type="text" name="alias" required><br><br>
        
        <label for="email">Email:</label>
        <input type="email" name="email" required><br><br>
        
        <label for="contrasena">Contraseña:</label>
        <input type="password" name="contrasena" required><br><br>
        
        <label for="confirmContrasena">Confirmar Contraseña:</label>
        <input type="password" name="confirmContrasena" required><br><br>
        
        <label for="url_img_usuario">Foto de perfil:</label>
        <input type="file" name="imagen" accept="image/*"><br><br>
        
        <label for="rol">Rol:</label>
        <select name="rol" required>
            <option value="T">Turista</option>
            <option value="R">Restaurante</option>
        </select><br><br>
        
        <!-- Campos adicionales para turista -->
        <div id="turistaCampos" style="display: none;">
            <label for="nombres">Nombres:</label>
            <input type="text" name="nombres"><br><br>
            
            <label for="apellidos">Apellidos:</label>
            <input type="text" name="apellidos"><br><br>
            
            <label for="motivo_alojamiento">Motivo de alojamiento:</label>
            <select name="motivo_alojamiento">
                <option value="Vacaciones">Vacaciones</option>
                <option value="Trabajo">Trabajo</option>
                <option value="Otro">Otro</option>
            </select><br><br>
            
            <label for="nacionalidad">Nacionalidad:</label>
            <select name="nacionalidad">
                <option value="Uruguay">Uruguay</option>
                <option value="Argentina">Argentina</option>
                <!-- Agrega más opciones según tus necesidades -->
            </select><br><br>
        </div>
        
        <!-- Campos adicionales para restaurante -->
        <div id="restauranteCampos" style="display: none;">
            <label for="nombre">Nombre del restaurante:</label>
            <input type="text" name="nombre"><br><br>
            
            <label for="calle">Calle:</label>
            <input type="text" name="calle"><br><br>
            
            <label for="nro_puerta">Nro de puerta:</label>
            <input type="text" name="nro_puerta"><br><br>
            
            <label for="nro_local">Nro de local:</label>
            <input type="text" name="nro_local"><br><br>
            
            <label for="descripcion">Tipo de restaurante:</label>
            <select name="descripcion">
                <option value="Restaurante para llevar">Restaurante para llevar</option>
                <option value="Comida italiana">Comida italiana</option>
                <option value="Comida francesa">Comida francesa</option>
                <!-- Agrega más opciones según tus necesidades -->
            </select><br><br>
            
            <label for="esquina">Esquina:</label>
            <input type="text" name="esquina"><br><br>
        </div>
        
        <input type="checkbox" id="aceptaTerminos" required>
        <label for="aceptaTerminos">Acepta términos y condiciones</label><br><br>
        
        <a href="https://www.tus_terminos_y_condiciones.com" target="_blank">Ver términos y condiciones</a><br><br>
        
        <input type="submit" value="Registrar">
    </form>
    
    <script>
        // Mostrar u ocultar campos adicionales según el rol seleccionado
        const rolSelect = document.querySelector('select[name="rol"]');
        const turistaCampos = document.getElementById('turistaCampos');
        const restauranteCampos = document.getElementById('restauranteCampos');
        
        rolSelect.addEventListener('change', function () {
            if (this.value === 'T') {
                turistaCampos.style.display = 'block';
                restauranteCampos.style.display = 'none';
            } else if (this.value === 'R') {
                turistaCampos.style.display = 'none';
                restauranteCampos.style.display = 'block';
            } else {
                turistaCampos.style.display = 'none';
                restauranteCampos.style.display = 'none';
            }
        });
    </script>
</body>
</html>
