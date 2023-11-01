#! /bin/bash

OP=1
while [ "$OP" != 0 ]
do
	logger -p local1.info "Ingreso menu de testeos de red..."
clear
echo "
-----------------------------------------------------------------
-                                                               -   
-   Bienvenido al menu de testeo de red, seleccione una opcion  -
-                                                               -  
-   1) Realizar PING                                            -
-   2) Ver datos de dispositivos de red                         -
-   3) Acciones con CURL                                        -
-                                                               -
-   0) Salir                                                    -
-                                                               -
-----------------------------------------------------------------"
read -p "Ingrese la opcion: " OP
#profe si lee esto ud esta bendecido!!
case $OP in 
	1) logger -p local1.info "Ingreso opcion 1 realizar PING..."
		IP=""
		while [ "$IP" != 0 ]
do
read -p "Ingrese IP o url para realizar Ping o 0 para salir: " IP
if [ -z $IP ]
then echo "Error, debe ingresar ip o 0 para salir: "
else
	while true
	do
	read -p "Ingrese cantidad de paquetes a hacer ping, vacio para no especificar: " ING
	if [[ -z "$ING" ]] 
	then 
		ping "$IP" 
	fi;
	if [[ "$ING" =~ ^[0-9]+$ ]] 
	then
		ping -c $ING $IP
		IP=0
		echo "Presione enter para volver..."
		read exit
		break
	else
		 echo "Tiene que ser numerico..."
	fi;

done
fi




		done

		;;
	2)  logger -p local1.info "Consultando dispositivos de red..."
		clear
		ip a | less
		echo "Presione enter para volver..."
		read exit
		;;
	3)  logger -p local1.info "entrando a submenu CURL..."
		clear
		opcion=""
		while [ "$opcion" != 0 ]
	       	do
  echo "
######################################################################  
  
                  Seleccione una opción:"
  echo " 1. Descargar un archivo desde una URL"
  echo " 2. Enviar datos a un servidor mediante una solicitud POST"
  echo " 3. Consultar información de encabezados de una URL"
  echo ""
  echo " 0. Salir"
echo "
######################################################################"
  read -p "Opción: " opcion
url=""
datos=""
  case $opcion in
    1) logger -p local1.info "sub submenu 1 curl archivo a descargar..."
	    while [ -z "$url" ]
	 
do
	clear
read -p "Ingrese la URL del archivo que desea descargar: " url
done
   curl -O "$url" 
 echo "Presione enter para volver..."
                read exit
		;;
    2)  logger -p local1.info "sub submenu 2 curl enviar datos a un servidor por pst..."
	    while [ -z "$url" ] || [ -z "$datos" ]
do
	clear
read -p "Ingrese la URL a enviar datos: " url
read -p "Ingrese los datos a enviar (en formato 'clave=valor'): " datos

done
curl -X POST -d "$datos" "$url"
 echo "Presione enter para volver..."
                read exit
	    ;;
    3)  logger -p local1.info "sub sumenu Consultar encabezados..."
	    while [ -z "$url" ]
do
read -p "Ingrese la URL a consultar encabezados: " url
done

curl -I "$url"
 echo "Presione enter para volver..."
                read exit
	    ;;
    0)  logger -p local1.info "Saliendo sub sumenu..."
	    echo "Saliendo..."
	    sleep 3
	    clear
	;;
    *) echo "Opción no válida. Inténtelo de nuevo." ;;
  esac

  echo # Línea en blanco
done
		;;
	

	0) logger -p local1.info "Saliendo del menu CURL..."
		echo "Saliendo..."
		sleep 3
		clear
		;;
	*)
		echo "Opcion incorrecta, reintente..."
		echo "Presione enter para volver..."
		read exit
		;;


	esac
	done


