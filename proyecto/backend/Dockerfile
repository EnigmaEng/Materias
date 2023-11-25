# Utiliza la imagen proporcionada por Railway para PHP 8.2
FROM railwayapp/php:8.2

# Configura el directorio de trabajo
WORKDIR /app

# Copia todos los archivos de tu aplicación al directorio de trabajo del contenedor
COPY . .


RUN apt-get clean && rm -rf /var/lib/apt/lists/*
