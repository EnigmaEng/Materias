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

      Bienvenido, ingrese la opcion que desee...

  1) Menu administracion de usuarios.
  2) Menu administracion de grupos.
  3) Menu administracion de BaseDeDatos (MariaDB).
  4) Menu de monitoreo de recursos.

  0) Salir.

+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+-+

"

read -p "Ingrese la opcion: "  OPC

case $OPC in
	1) ./scripts_adm/administracion_usuarios.sh 
		;;
	2) ./scripts_adm/administracion_grupos.sh 
		;;
	3) ./scripts_adm/administracion_basededatos.sh 
		;;
	4) ./scripts_adm/monitoreo_sistema.sh
		;;
	0) echo "Saliendo menu administracion..."
		sleep 3
			exit
		;;
	*) echo "Ingrese una opcion correcta..."	

esac

done
