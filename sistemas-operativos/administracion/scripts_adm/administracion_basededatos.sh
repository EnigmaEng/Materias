#!/bin/bash
logger -p local1.info "Iniciando administracion de base de datos"

user=wweat
pass=Wweat123**
database=wwe

OPCION=1
while [ $OPCION != 0 ]
do
	clear
	echo "***************************************"
	echo "Menu de administracion de base de datos"
	echo "***************************************"
	echo "1) Crear usuario"
	echo "2) Eliminar usuario"
	echo "3) Administrar privilegios"
	echo "4) Ver usuarios"
	echo "5) Actualizar cambios"
	echo "6) Ver registro actividad BD"
	echo "7) Ver registro de errores BD"
	echo "8) Realizar un respaldo de BD"
	echo "9) Restaurar BD"
	echo "0) Salir"
	echo "***************************************"
	echo "***************************************"
	echo "***************************************"
	read -p "Ingrese una opcion: " OPCION
	if [[ $OPCION =~ ^[0-9]+$ ]]
	then
	case $OPCION in 
	1)
	logger -p local1.info "Creacion de usuario"
	clear
	echo "
*************
Crear usuario
*************
"
	read -p "Ingrese nombre de nuevo usuario: " newUser
	if [[ -n $newUser ]]
	then
	read -p "Ingrese contrasena: " newPass
	if [[ -n $newPass ]]
	then
	sudo mysql -u "$user" -p"$pass" $database -e "CREATE USER '$newUser'@'%' IDENTIFIED BY '$newPass'"  
		if [ $? == 0 ]
		then
			logger -p local1.info "Usuario creado correctamente"
			echo "Usuario creado correctamente, para continuar presione enter"
			read exit
		else
			logger -p local1.info "No se pudo crear el usuario, ocurrio un error o el usuario ya existe."
				echo "No se pudo crear el usuario, ocurrio un error o el usuario ya existe en la base de datos..."

			echo "Para continuar presione enter"
			read exit
		fi
	else
		logger -p local1.info "Ingreso contrasena vacia"			
		echo "Debe ingresar una contrasena"
		fi
	else
		logger -p local1.info "Nombre vacio"
		echo "Ingreso nombre vacio"
		sleep 3
	fi
	;;
	2)
	logger -p local1.info "opcion eliminar usuarios"
	echo "
******************
******************
*Eliminar usuario*
******************
******************"
	read -p "Ingrese el nombre del usuario a eliminar" delUser
	if [[ -z $delUser ]]
	then
		logger -p local1.info "Nombre a borrar vacio"
		echo "Nombre a borrar vacio..."
		sleep 2
	else
		mysql -u "$user" -p"$pass" $database -e "DROP USER $delUser"
		if [ $? == 0 ]
		then
			logger -p local1.info "Usuario eliminado"
			echo "Usuario $delUser eliminado correctamente"
			sleep 3
		else
			logger -p local1.info "error al intentar eliminar usuario"
			echo "El usuario a eliminar no existe"
			sleep 3
		fi
	fi
	;;

	3)
	logger -p local1.info "se ingreso a la opcion de administrar privilegios"
PRIVILEGIOS=1	
read -p "Indique usuario a administrar privilegios: " userPriv
	mysql -u "$user" -p"$pass" mysql -e "SHOW GRANTS FOR $userPriv"
if [ $? == 0 ]
	then
		while [ $PRIVILEGIOS != 0 ]
		do
			clear
			echo "
///////////////////////////////////
/   Administracion de privilegios /
/ Usuario seleccionado: $userPriv /
/				  /
/ 1) Ver 			  /
/ 2) Agregar 			  /
/ 3) Quitar 			  /
/ 0) Volver al menu	          /
/                                 /   
///////////////////////////////////"

read -p "Seleccione una opcion: " PRIVILEGIOS

case $PRIVILEGIOS in 
			1)
			logger -p local1.info "Ingreso a opcion ver privilegios"
			clear
			echo "Mostrando privilegios para: $userPriv 
			"
			echo "/////////////////////////////////////////////////////"
			mysql -u "$user" -p"$pass" mysql -e "SHOW GRANTS FOR $userPriv" | grep "GRANT" | cut -f1-6 -d" "
			echo "/////////////////////////////////////////////////////"
			echo "Para volver presione enter..."
			read exit
			;;
			2)
			logger -p local1.info "Ingreso a opcion agregar privilegios"
			AGPRIV=1
			while [ $AGPRIV != 0 ]
			do
			clear
echo "
Agregar privilegios
////////////////////////////////////

1)Permiso para INSERT
2)Permiso para SELECT
3)Permiso para UPDATE
4)Permiso para DELETE
0)Volver

////////////////////////////////////
			"		
read -p "Ingrese una opcion: " AGPRIV
	case $AGPRIV in
1)
logger -p local1.info "Agregando permiso INSERT"
read -p "Ingrese tabla donde modificar los privilegios: " table
mysql -u "$user" -p"$pass" $database -e "GRANT INSERT ON `$database`.$table TO '$userPriv'@'%' "
if [ $? == 0 ]
	then
logger -p local1.info "Permiso INSERT agregado a '$userPriv' en tabla '$table'"
clear
echo "Permisos para insert otorgados a $userPriv en tabla $table (Debe actualizar privilegios para que se reflejen...)"
echo "Presione enter para volver..."
read exit
	else
logger -p local1.info "Error al agregar privilegio insert"
echo "No se pudo aplicar el permiso"
echo "Presione enter para volver..."
read exit
fi
;;
2)
logger -p local1.info "Agregando privilegio SELECT"
read -p "Ingrese tabla donde modificar los privilegios" table
mysql -u "$user" -p"$pass" $database -e "GRANT SELECT ON `$database`.$table TO $userPriv@'%'"
if [ $? == 0 ]
then
logger -p local1.info "Permiso SELECT agregado a '$userPriv' en tabla '$table'"
clear
echo "Permisos para select otorgados a $userPriv en tabla $table (Debe actualizar privilegios para que se reflejen...)"
echo "Presione enter para volver..."
read exit
else
logger -p local1.info "Error al agregar privilegio select"
echo "No se pudo aplicar el permiso"
echo "Presione enter para continuar"
read exit
fi
;;
3)
logger -p local1.info "Agregando privilegio UPDATE"
read -p "Ingrese tabla donde modificar los privilegios" table
mysql -u "$user" -p"$pass" $database -e "GRANT UPDATE ON `$database`.$table TO $userPriv@'%'"
if [ $? == 0 ]
then
logger -p local1.info "Permiso UPDATE agregado a '$userPriv' en tabla '$table'"
clear
echo "Permisos para update otorgados a $userPriv en tabla $table (Debe actualizar privilegios para que se reflejen...)"
echo "Presione enter para volver..."
read exit
else
logger -p local1.info "Error al agregar privilegio update"
echo "No se pudo aplicar el permiso, presione enter para continuar"
read exit
fi
;;
4)
logger -p local1.info "Agregando privilegio DELETE"
read -p "Ingrese el nombre de la tabla donde quiera modificar los privilegios" table
mysql -u "$user" -p"$pass" $database -e "GRANT DELETE ON `$database`.$table TO $userPriv@'%'"
if [ $? == 0 ]
then
logger -p local1.info "Permiso DELETE agregado a '$userPriv' en la tabla '$table'"
echo "Permisos para delete otorgados a $userPriv en tabla $table (Debe actualizar privilegios para que se reflejen...)"
echo "Presione enter para volver..."
read exit
else
logger -p local1.info "Error al agregar privilegio delete"
echo "No se pudo aplicar el permiso, presione enter para continuar"
read exit

fi
;;
0)
logger -p local1.info "Saliendo del menu de agregar privilegios"
clear
;;
*)
echo "Opcion incorrecta"
;;
esac
done
;;
3)
logger -p local1.info "ingreso a la opcion de quitar privilegios"
QUITPRIV=1
while [ $QUITPRIV != 0 ]
do
clear
echo "
Quitar privilegios
////////////////////////////////////

1)Quitar permiso para INSERT
2)Quitar permiso para SELECT
3)Quitar permiso para UPDATE
4)Quitar permiso para DELETE
0)Volver

////////////////////////////////////
"
read -P "Ingrese una opcion: " QUITPRIV
case $QUITPRIV in

1)
logger -p local1.info "Quitando permiso INSERT"
read -p "Ingrese tabla donde modificar los privilegios: " table
mysql -u "$user" -p"$pass" $database -e "REVOKE INSERT ON `$database`.$table FROM $userPriv@'%'"
if [ $? == 0 ]
then
logger -p local1.info "Permiso INSERT quitado a '$userPriv' en tabla '$table'"
clear
echo "Permisos para insert quitados a $userPriv en tabla $table (Debe actualizar privilegios para que se reflejen...)"
echo "Presione enter para volver..."
read exit
else
logger -p local1.info "Error al quitar privilegio insert"
echo "No se pudo aplicar el permiso"
echo "Presione enter para volver..."
read exit
fi
;;

2)
logger -p local1.info "Quitando permiso SELECT"
read -p "Ingrese tabla donde modificar los privilegios" table
mysql -u "$user" -p"$pass" $database -e "REVOKE SELECT ON `$database`.$table FROM $userPriv@'%'"
if [ $? == 0 ]
then
logger -p local1.info "Permiso SELECT quitado a '$userPriv' en tabla '$table'"
clear
echo "Permisos para select quitado a $userPriv en tabla $table (Debe actualizar privilegios para que se reflejen...)"
echo "Presione enter para volver..."
read exit
else
logger -p local1.info "Error al quitar privilegio select"
echo "No se pudo aplicar el permiso"
echo "Presione enter para continuar"
read exit
fi
;;

3)
logger -p local1.info "Quitando privilegio UPDATE"
read -p "Ingrese tabla donde modificar los privilegios" table
mysql -u "$user" -p"$pass" $database -e "REVOKE UPDATE ON `$database`.$table FROM $userPriv@'%'"
if [ $? == 0 ]
	then
logger -p local1.info "Permiso UPDATE quitado a '$userPriv' en tabla '$table'"
clear
echo "Permisos para update quitados a $userPriv en tabla $table (Debe actualizar privilegios para que se reflejen...)"
echo "Presione enter para volver..."
read exit
else
logger -p local1.info "Error al quitar privilegio update"
echo "No se pudo aplicar el permiso, presione enter para continuar"
read exit
fi
;;

4)
logger -p local1.info "Quitando privilegio DELETE"
read -p "Ingrese tabla donde modificar los privilegios" table
mysql -u "$user" -p"$pass" $database -e "REVOKE DELETE ON `$database`.$table FROM $userPriv@'%'"
if [ $? == 0 ]
	then
logger -p local1.info "Permiso DELETE quitado a '$userPriv' en la tabla '$table'"
echo "Permisos para delete quitados a $userPriv en tabla $table (Debe actualizar privilegios para que se reflejen...)"
echo "Presione enter para volver..."
read exit
else
logger -p local1.info "Error al quitar privilegio delete"
echo "No se pudo aplicar el permiso, presione enter para continuar"
read exit
fi
;;

0)
logger -p local1.info "Saliendo de quitar privilegios"
clear
;;
*)
echo "Opcion incorrecta..."
;;
esac
done
;;
0)
logger -p local1.info "Saliendo del menu de privilegios"
clear
;;
*)
echo "Seleccione una opcion valida..."
;;
esac
done
else
logger -p local1.info "El usuario ingresado no existe en el sistema, error"
echo "El usuario $userPriv no existe en la base de datos"
sleep 2
fi		
;;

4)logger -p local1.info "Se listaron usuarios de la base de datos..."
mysql -u "$user" -p"$pass"  $database -e "SELECT User, Host FROM mysql.user;"
sleep 3
echo "Presione enter para volver..."
read exit
;;
	
5)
logger -p local1.info "entrando en opcion de actualizar privilegios"
clear
echo "Actualizando privilegios...."
mysql -u "$user" -p"$pass" $database -e "FLUSH PRIVILEGES"
if [ $? == 0 ]
then
logger -p local1.info "Privilegios actualizados"
clear
echo "Privilegios actualizados"
sleep 3
else
logger -p local1.info "...no se pudieron actualizar los privilegios"
clear
echo "Hubo un error al actualizar los privilegios, Presione enter para continuar"
read exit
fi
;;

6)logger -p local1.info "Se consulta registro actividad BD"
sudo mysql -u "$user" -p"$pass" $database -e "SHOW GLOBAL STATUS LIKE 'Uptime'; SHOW GLOBAL STATUS LIKE 'Slow_queries'; SHOW GLOBAL STATUS LIKE 'Com_select';"
sleep 3
echo "Precione enter para volver..."
read exit	
;;

7)
logger -p local1.info "Se consulta registro errores BD"
sudo mysql -u "$user" -p"$pass" $database -e "SHOW VARIABLES LIKE 'log_error';"
sleep 3
echo "Precione enter para volver..."
read exit
;;
8)
logger -p local1.info "Se ingrea a realizar respaldo de la BD"
read -p "Ingrese nombre para archivo de respaldo: " BACK
if [ -z "$BACK" ]
then echo "El nombre de archivo esta vacio, presione enter para continuar..."
	read exit
else
mysqldump -u "$user" -p"$pass" "$database" > "$BACK"

if [ $? -eq 0 ]; then
	logger -p local1.info "Respaldo de la BD creado correctamente"
      	echo "
Respaldo completado correctamente con nombre: $BACK
Para volver presione enter
	"
read exit
else
  	logger -p local1.info "Respaldo de bd fallido..."
	echo "Error al realizar el respaldo"
fi
fi
;;

9)#Hacer restauracion bd
	;;
0)
logger -p local1.info "saliendo de adminBD"
echo "Gracias por utilizar el script de administracion!!!"
sleep 3
clear
;;
*)
echo "Opcion incorrecta, reintente!!!"
;;
esac
else
logger -p local1.info "Error, se quiso ingresar un valor no numerico"
echo "Debe ingresar un numero"
echo "Presione enter para continuar"
read exit
fi
done


