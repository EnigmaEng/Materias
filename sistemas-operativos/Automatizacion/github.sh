#!/bin/bash

clear
sudo chmod u+x back.sh
A=1
while [ $A -ne 0 ]
do
clear
echo ""
echo "1. Pullear desde main"
echo "2. Pushear al main"
echo "3. Volver al Menú"

read -p "Ingrese una opcion: " opc
case $opc in

1) clear
sh GitPull.sh
;;
2) clear
sh GitPush.sh
;;
3)clear
echo "Volviendo al menú..."
sleep 1.5
A=0
;;
*) 
clear
echo "Opción incorrecta, intente nuevamente."
sleep 1
clear
;;

esac
done
