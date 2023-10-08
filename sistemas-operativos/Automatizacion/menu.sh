#!/bin/bash
clear
sudo chmod u+x back.sh 2>/dev/null
A=1
while [ $A -ne 0 ]
do
clear
echo "╔══════════════════════════════════════════════╗"
echo "║     BIENVENIDO AL MENÚ DE AUTOMATIZACIÓN     ║"
echo "╚══════════════════════════════════════════════╝"
echo ""
echo "1. GitHub"
echo "2. Docker"
echo "3. Cypress"
echo "4. WHERE WE EAT"
echo "0. Salir"
echo ""
read -p "Ingrese una opcion: " opc

case $opc in

1) clear
./github.sh
;;
2) clear
./docker.sh
;;
3) clear
echo "Abriendo Cypres..."
sleep 1
function Cypress {
    npm i
    npm run cypress:open
}
cd ../../proyecto/frontend
clear
Cypress
;;
4) clear
function WWE {
    cd ../../proyecto/frontend
    sleep 1
    echo "Front iniciado :D"
    sleep 1
    npm run dev
}

function WWE+Back {
    cd ../../proyecto/backend
    docker-compose up -d
    sleep 1
    echo "Back iniciado..."
    sleep 1
    cd ../../proyecto/frontend
    clear
    echo "Front iniciado :D"
    sleep 1
    npm run dev
}

read -p "1) FrontEnd: o 2) Back y Front: " var
if [ $var == "1" ];
then
WWE
elif [ $var == "2" ];
then
WWE+Back
else
sleep 0.1
clear
echo "Valor incorrecto, intente nuevamente."
sleep 2
fi
;;
0)clear
echo "Saliendo del menú..."
sleep 1.5
A=0
;;
*) 
clear
echo "Opción incorrecta, intente nuevamente."
;;

esac
done