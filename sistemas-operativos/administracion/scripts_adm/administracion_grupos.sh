#!/bin/bash
logger -p local1.info "Ingresando a menu de administracion de usuarios y grupos"
OPCION=1
while [ "$OPCION" != 0 ]
do
	clear
	echo "-----------------------------------"
	echo "--------------GRUPOS---------------"
	echo "-----------------------------------"
	echo " 1- Agregar un nuevo grupo"
	echo " 2- Eliminar un grupo"
	echo " 3- Modificar un grupo"
	echo " 4- Listar grupos"
	echo " 5- Buscar grupo"
	echo " 0- Salir"
	echo "-----------------------------------"
	echo "-----------------------------------"
	echo "-----------------------------------"
	read OPCION
	
	if [[ $OPCION =~ ^[0-9]+$ ]]
	then
	case $OPCION in
		1)
		logger -p local1.info "ingreso a agregar un nuevo grupo"
		clear
		read -p "Ingrese nombre del nuevo grupo: " groupName
		if [ -z "$groupName" ]
			then
			logger -p local1.info "...ingreso valores vacios, error"
			clear
			echo "No ingresar valores vacios!"
			continue
		fi
		if [ $(cat /etc/group | cut -f1 -d':' | grep -c -w $groupName) != 0 ]
		then
			logger -p local1.info "...el grupo existente"
			echo "El grupo $groupName existe en el sistema"
		else
			logger -p local1.info "...grupo creado exitosamente"
			
			sudo groupadd $groupName
			clear
			echo "Grupo $groupName creado"
			sudo cat /etc/group | grep -w $groupName
		fi
		;;

		2)
		logger -p local1.info "Ingreso eliminar grupo"
		clear
		read -p "Ingrese nombre del grupo: " groupName
		if [ -z "$groupName" ]
			then
			logger -p local1.info "ingreso valores vacios, error"
			echo "No ingresar valores vacios!"
			continue
		fi
		if [ $(cat /etc/group | cut -f1 -d':' | grep -c -w $groupName) != 0 ]
		then
			logger -p local1.info " grupo '$groupName' eliminado"
			sudo groupdel $groupName
			echo "El grupo $groupName fue eliminado satisfactoriamente"
			echo "Presione enter para volver..."
			read exit
		else
			logger -p local1.info "...el grupo a eliminar no exite en el sistema"
			echo "Grupo $groupName no existe"
			echo "Presione enter para volver..."
			read exit
		fi
		;;
		3)
		logger -p local1.info "Ingreso a modificar grupo"
		clear
		read -p "Ingrese nombre de grupo: " groupName
		if [ -z "$groupName" ]
			then
			logger -p local1.info " ingreso valores vacios, error"
			echo "No se deben ingresar valores vacios!"
			continue
		fi
		if [ $(cat /etc/group | cut -f1 -d':' | grep -c -w $groupName) != 0 ]
			then
			while [ "$opt" != 0 ]
				do
				clear
				echo "Seleccione una opcion"
				echo "1) Cambiar GID del grupo $groupName"
				echo "2) Cambiar nombre del grupo $groupName"
				echo "0) Volver"
				read opt
				case $opt in
					1)
					logger -p local1.info " cambiar el GID del grupo"
					clear
					read -p "Ingrese nuevo GID del grupo " gid
					if [ -z "$gid" ]
						then
						local1.info " ingreso campos vacios, error"
						echo "No ingresar valores vacios"
						sleep 3
						continue
					fi
					regexp='^[0-9]+$'
					if ! [[ $gid =~ $regexp ]] ; then
						logger -p local1.info " no ingreso valores numericos, error"
   						echo "Solo valores numericos"
						sleep 3
						continue
					fi
					if [ $(cat /etc/group | cut -f3 -d':' | grep -c -w $gid) != 0 ]
						then
						logger -p local1.info "...el valor del GID ya se encuentra en uso"
						echo "El GID $gid se encuentra en uso"
						sleep 3
						continue
					fi
					logger -p local1.info " GID actualizado con exito"
					sudo groupmod -g $gid $groupName
					echo "GID se cambio con exito"
					sudo cat /etc/group | grep -w $groupName
					sleep 3
					;;
					2)
					logger -p local1.info " cambiar nombre del grupo"
					read -p "Ingrese el nuevo nombre " newName
					if [ -z "$newName" ]
						then
						logger -p local1.info " ingreso valores vacios, error"
						echo "No ingresar valores vacios"
						sleep 3
						continue
					fi
					logger -p local1.info " nombre de grupo cambiado"
					sudo groupmod -n $newName $groupName
					echo "Nombre de grupo se cambio con exito"
					sleep 3
					;;
					0)
					logger -p local1.info "Salio de modificar grupo"
					clear
					opt=0
					;;
					*)
					echo "Opcion invalida, reintente"
					;;
				esac
			done
		else
			logger -p local1.info "grupo ingresado no existe"
			echo "El grupo ingresado no existe"
		fi
		;;
		4)
		logger -p local1.info "ingreso a listar grupos"
		clear
		sudo cat /etc/group | cut -f1 -d':'
		if [ $? == 0 ]
		then
			logger -p local1.info "...grupos listados"
		else
			logger -p local1.info "...no se listaron los grupos"
		fi
		echo "Presione enter para continuar..."
		read exit
		;;
5) logger -p local1.info "Ingresa a buscar grupo..."
	read -p "Ingrese el nombre del grupo que desee buscar: " grupo
	if grep -q "^$grupo:" /etc/group
	then
		gid=$(grep "^$grupo:" /etc/group | cut -d':' -f3)
		miembros=$(grep "^$grupo:" /etc/group | cut -d':' -f4)
echo "
***************************************
 Datos del grupo $grupo:

 GID del grupo: $gid
 Usuarios en el grupo: $miembros

*+*************************************
Presione enter para volver...
"
		read exit
	else
		echo "El grupo $grupo, no existe..."
		echo "Presione enter para volver..."
		read exit
	fi


	;;

		0)
		logger -p local1.info "Salio del menu de aministracion de grupos"
		clear
		exit
		;;
		*)
		clear
		echo "Opcion incorrecta, reintente"
		sleep 3s
		;;
	esac
	else
		logger -p local1.info "Se ingreso un valor que no es numero"
		clear
		echo "error, el ingreso no es numerico"
		echo "presione enter para continuar"
		read exit
	fi
done
