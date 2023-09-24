#Configuracion para PHP 8.2

FROM php:8.2-apache

<<<<<<< HEAD
=======
#se actualiza el sistema e instala dependecias para composer
RUN apt-get update && apt-get install -y \
    git \
    unzip

>>>>>>> main
COPY . /var/www/html

#se instala la extension pdo y pdo_mysql 
RUN docker-php-ext-install pdo pdo_mysql

#se implementan los permisos necesarios para acceder y modificar archivos en este directorio
RUN chown -R www-data:www-data /var/www/html

<<<<<<< HEAD
=======
#se instala composer globalmente
RUN curl -sS https://getcomposer.org/installer | php -- --install-dir=/usr/local/bin --filename=composer

>>>>>>> main
#se establecen permisos para que el servidor web acceda y ejecute archivos de PHP mientras que los demas usuarios tienen permisos de lectura 
RUN chmod -R 755 /var/www/html


EXPOSE 80



