#! /bin/bash

validar_entrada(){
ENT=$1
while [[ -z $ENT ]]
do
	read -p "Debe ingresar una opcion... reintente." ENT
done
echo $ENT
}
while  [ "$OPC" != 0 ]
do
clear
echo "
+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

     Bienvenido ABD, ingrese la opcion que desee...


  1) Menu administracion de BaseDeDatos (MariaDB).
  2) Menu de monitoreo de recursos.
  3) Menu de servicios.

  0) Salir.

+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

"

read -p "Ingrese la opcion: "  OPC

case $OPC in
	1) ./scripts_adm/administracion_basededatos.sh 
		;;
	2) ./scripts_monitoreo/monitoreo_sistema.sh
		;;
	3) ./scripts_monitoreo/servicios.sh
		;;
	0) echo "Saliendo menu abd..."
		sleep 3
		exit
		;;
	*) echo "Ingrese una opcion correcta..."	

esac

done
