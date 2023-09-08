#Configuracion para PHP 8.2

FROM php:8.2-apache

COPY . /var/www/html

#se instala la extension pdo y pdo_mysql 
RUN docker-php-ext-install pdo pdo_mysql

#se implementan los permisos necesarios para acceder y modificar archivos en este directorio
RUN chown -R www-data:www-data /var/www/html

#se establecen permisos para que el servidor web acceda y ejecute archivos de PHP mientras que los demas usuarios tienen permisos de lectura 
RUN chmod -R 755 /var/www/html


EXPOSE 80



