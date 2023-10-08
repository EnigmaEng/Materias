#!/bin/bash
sudo chmod u+x docker.sh 2>/dev/null

A=1
clear
while [ $A -ne 0 ]
do
clear
echo "🌐🔥 BIENVENIDO A DOCKER - WWE 🔥🌐"
echo ""
echo "Qué desea hacer❓"
echo ""
echo "1. Restaurar Back y BD"
echo "2. Restaurar Back"
echo "3. Detener Back y BD"
echo "0. Volver al Menu principal..."
echo ""
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
    echo " ✅ Back y BD restaurado correctamente ✅ "
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
    echo " ✅ Back restaurado correctamente ✅"
    sleep 2
} 
RestaurarBack
;;

3) clear
docker stop backend-php-backend-1
docker stop backend-mariadb-db-1
echo ""
echo " 🛑 Backend y BD detenidos 🛑"
sleep 2
;;

0) clear
echo "Volviendo al menú... 🔙"
sleep 1.5
A=0
;;
esac
done