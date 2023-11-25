#Configuracion para PHP 8.2

FROM php:8.2-apache

#se actualiza el sistema e instala dependecias para composer
RUN apt-get update && apt-get install -y \
    git \
    unzip

#etiquetas para mi imagen, se especifica la version y el nombre de la imagen, esto sera util para trabajar con varias versiones de la misma imagen y facilitar el seguimiento
LABEL version="1.0"
LABEL description="Api de PHP"

#con el comando COPY . copia todo el contenido con  desde la ubicacion de este mismo archivo y lo envia al destino del contenedor en este caso /var/www/html
COPY . .

#se instala la extension pdo y pdo_mysql 
RUN docker-php-ext-install pdo pdo_mysql

RUN echo "ServerName localhost" >> /etc/apache2/apache2.conf

#se instala composer globalmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

#se hace una limpieza de cache despues de instalar las dependencias para composer para reducir la memoria de la imagen de docker
RUN apt-get clean && rm -rf /var/lib/apt/lists/*


EXPOSE 80

CMD ["apache2-foreground"]
