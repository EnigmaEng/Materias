#!/bin/bash

logger -p local1.info "entrando en el menu de monitoreo de sistema"
OPCION=1
while [ $OPCION != 0 ]
do
	clear
	echo "Menu de monitoreo"
	echo "---------------------------------------------"
	echo "1) Vizualizar uso de los recursos del sistema"
	echo "2) Vizualizar espacio disponible en el disco duro"
	echo "3) Ver utilizacion de memoria RAM"
	echo "4) Ver todos los servicios"
	echo "5) Ver servicios activos"
	echo "0) Salir"
	read OPCION

	case $OPCION in 
	1)
	logger -p local1.info "muestro monitoreo de sistema"
	htop
	;;
	2)
	logger -p local1.info "muestro espacio de disco duro"
	df -h
	echo "Presione enter para continuar"
	read exit
	;;
	3)
	logger -p local1.info "muestro información de memoria RAM"
	vmstat -s -S M
	echo "Presione enter para continuar"
	read exit
	;;
	4)
	logger -p local1.info "muestro todos los servicios"
	systemctl list-units --type=service | cat
	echo "Presione enter para continuar"
	read exit
	;;
	5)
	logger -p local1.info "muestro todos los servicios activos"
	systemctl list-units --type=service --state=running | cat
	echo "Presione enter para continuar"
	read exit
	;;
	0)
	logger -p local1.info "saliendo del menu de monitoreo"
	clear
	;;
	*) logger -p local1.info "se ingreso una opcion incorrecta" 
	echo "opcion incorrecta" 
	echo "Presione enter para continuar" 
	read exit
	;;
	esac
done

