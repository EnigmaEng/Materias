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
echo "3. Volver un Commit"
echo "0. Volver al Menú"

read -p "Ingrese una opcion: " opc
case $opc in

1) clear
sh GitPull.sh
;;
2) clear
sh GitPush.sh
;;
0)clear
echo "Volviendo al menú..."
sleep 1.5
A=0
;;
3)
clear
function Revert() {
    read -p "Desea ver el historial de commits? (s/n) " res
    if [[ $res == "S" || $res == "s" ]];
    then
    git log -n 10 --pretty=format:"%h - %ad - %an - %s" --date=short
    sleep 1
    read -p "Ingrese el ID del commit al que desea volver: " ID
    read -p "ESTAS SEGURO DE LO QUE ESTAS HACIENDO? (s/n) " val
    if [ $val == "S" || $val == "s" ];
    then
    git revert "$ID"
    else
    break
    fi

    elif [ $res == "N" ||$res == "n" ];
    then
    read -p "Ingrese el ID del commit al que desea volver: " ID
    git revert "$ID"
    else
    echo "Opcion incorrecta, intente nuevamente."
    sleep 1
    fi
}
Revert
;;
*) 
clear
echo "Opción incorrecta, intente nuevamente."
sleep 1
clear
;;

esac
done
