<!DOCTYPE html>
<html>
<head>
    <title>Formulario de Carga de Imágenes</title>
</head>
<body>
    <h1>Formulario de Carga de Imágenes</h1>

    <form action="../controllers/procesar.php" method="post" enctype="multipart/form-data">
        <label for="imagen">Seleccione una imagen:</label>
        <input type="file" name="imagen" id="imagen" accept="image/*" required>
        <br>
        <input type="submit" value="Cargar Imagen">
    </form>
</body>
</html>
