#!/bin/bash
sudo chmod u+x docker.sh
A=1

while [ $A -ne 0 ]
do
clear
echo "1. Restaurar Back y BD"
echo "2. Restaurar Back"
echo "0. Salir"

read -p "Ingrese una opcion: " opc

case $opc in

1) clear
function Restaurar {
    docker stop backend-php-backend-1
    docker stop backend-mariadb-db-1

    docker rm backend-php-backend-1
    docker rm backend-mariadb-db-1

    docker rmi backend-php-backend
    cd ../../proyecto/backend
    echo "Back y BD restaurado correctamente :D"
    sleep 2
}
Restaurar
;;

2) 
clear
function RestaurarBack {
    docker stop backend-php-backend-1
    docker rm backend-php-backend-1
    docker rmi backend-php-backend
    cd ../../proyecto/backend
    docker-compose up -d 
    clear
    echo "Back restaurado correctamente :D"
    sleep 2
} 
RestaurarBack
;;

0) clear
echo "Volviendo al menú..."
sleep 1.5
A=0
;;
esac
done