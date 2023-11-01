#!/bin/bash
porMes(){
	month=$1;
	day=""
		logger -p local1.info "buscando en el mes $month " 
		
      		echo "Mes: $month"
		echo "Ingrese el dia: "
		echo ">>si ingresa 0 ve los del mes completo<<"
		read day
		if [ -z $day ]
		then
			logger -p local1.info "error, no se admiten dias de fecha vacios"
			echo "No se admiten fechas vacias"
			echo "Presione enter para continuar"
			read exit
		else
			if (( $day >= 1 && $day <= 31 ))
			then
				last -a | grep "$month $day"
				if [ $? == 0 ]
				then
					logger -p local1.info "...buscando registros del '$day' de $month"
					echo "presione enter para continuar"
					read exit
				else
					logger -p local1.info "...no hay registros para la fecha '$day' de $month"
				
					echo "No hay logs para mostrar"
					echo ""
					echo "Presione enter para continuar"
					read exit
				fi
			elif (( $day == 0 ))
			then
				last -a | grep "$month" | less
				if [ $? == 0 ]
				then
					logger -p local1.info "mostrando los registros del mes $"
					echo "Presione enter para continuar"
					read exit
				else
					logger -p local1.info "no existen registros para el mes de $month"
					
					echo "No hay registros para este mes"
					echo "Mes: $month"
					echo "Presione enter para continuar"
					read exit
				fi
			else
				logger -p local1.info "error, se ingreso una fecha invalida"
				echo "Error, fecha invalida"
				echo "presione enter para continuar"
				read exit
			fi
		fi
}



logger -p local1.info "Ingreso al menu de auditoria"
op=1
while [ $op != 0 ]
do
	clear
	echo "////////////////////////Menu de auditoria/////////////////////////////"
	echo "//////////////////////////////////////////////////////////////////////"
	echo "/                                                                    /"
	echo "/ 1) Ver intentos fallidos de acceso                                 /"
	echo "/ 2) Ver ultimos logs de acceso                                      /"
	echo "/ 3) Ver quien esta conectado                                        /"
	echo "/ 4) Buscar logs por nombre de usuario                               /"
	echo "/ 5) Buscar logs por fecha                                           /"
	echo "/ 6) Ver logs por cambios en el sistema                              /"
	echo "/ 7) Ver los ultimos inicios de sesion                               /"
	echo "/                                                                    /"       
	echo "/ 0) Salir                                                           /"
	echo "//////////////////////////////////////////////////////////////////////"
	echo ""
	read -p "Ingrese una opcion: " op
	if [[ $op =~ ^[0-9]+$ ]]
	then
	case $op in
	1)
	logger -p local1.info "opcion: ver los intentos fallidos de acceso"
	sudo lastb -a
	echo "presione enter para contnuar"
	read exit
	;;
	2)
	logger -p local1.indo "opcion: ver los ultimos logs de acceso"
	last -a | head
	echo "presione enter para continuar"
	read exit
	;;
	3)
	logger -p local1.info "opcion: ver quien se encuentra conectado"
	w
	echo "presione enter para continuar"
	read exit
	;;
	4)
	logger -p local1.info "opcion: ver accesos por nombre"
	clear
	echo "Ingrese un nombre de usuario para realizar la busqueda"
	read userName
	if [ -z $userName]
	then
		logger -p local1.info "error, se ingreso un nombre vacio"
		echo "Debe ingresar un nombre de usuario valido"
		echo "Presione enter para continuar"
		read exit
	else
		last $userName | less
		if [ $? == 0 ]
		then
			logger -p local1.info "se buscaron los accesos de '$userName' con exito"
			echo "Presione enter para continuar"
			read exit
		else
			logger -p local1.info "el usuario que se esta buscando - '$userName' - no existe en los registros de acceso"
			echo "El usuario no tiene registros"
			read exit
		fi
	fi
	;;
	5)
	logger -p local1.info "opcion: buscar por fecha"
	clear
	monthNumber=0
	echo "Seleccione el mes: 1-Ene 2-Feb 3-Mar 4-Abr 5-May 6-Jun 7-Jul 8-Ago 9-Sep 10-Oct 11-Nov 12-Dic"
	read monthNumber
	if [[ $monthNumber =~ ^[0-9]+$ ]]
	then

case $monthNumber in
1)month="Jan" 
porMes $month;;
2)month="Feb"
porMes $month;;
3)month="Mar"
porMes $month;;
4)month="Apr"
porMes $month;;
5)month="may"
porMes $month;;
6)month="Jun"
porMes $month;; 
7)month="Jul"
porMes $month;;
8)month="Aug"
porMes $month;;
9)month="Sep"
porMes $month;;
10)month="Oct"
porMes $month;;
11)month="Nov"
porMes $month;;
12)month="Dec"
porMes $month;;	
*)logger -p local1.info "error, se ingreso una opcion invalida"
echo "Error, ingrese una opcion valida"
echo "Presione enter para continuar"
read exit
;;
esac
else
logger -p local1.info "error, se quiso ingresar un valor que no es numerico"
echo "error se ingreso un valor que no es numerico"
echo "presione enter para continuar"
read exit
fi
	;;
	6)
	logger -p local1.info "opcion: ver registros de cambios en el sistema"
	clear
	last -x | less
	if [ $? == 0 ]
	then
		logger -p local1.info "mostrando registros de los cambios en el sistema"
		echo "presione enter para continuar"
		read exit
	else
		logger -p local1.info "ocurrio un error al solicitar los registros"
		echo "error"
		echo "presione enter para continuar"
		read exit
	fi
	;;
	7)
	logger -p local1.info "mostrando registros de los ultimos ingresos al sistema"
	clear
	lastlog | less
	echo "presione enter para continuar"
	read exit
	;;
	0)
	logger -p local1.info "saliendo del menu de auditoria"
	clear
	;;
	*)
	logger -p local1.info "error, se ingreso una opcion invalida"
	echo "Opcion incorrecta"
	sleep 2s
	;;
	esac
	else
	logger -p local1.info "error el valor ingresado debe ser numerico"
	echo "error, el valor debe ser numerico"
	echo "presione enter para continuar"
	read exit
	fi
done

