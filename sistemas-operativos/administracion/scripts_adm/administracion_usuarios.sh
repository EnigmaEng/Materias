#! /bin/bash
clear
logger -p local1.info "Ingreso a administracion de usuarios "
#con esta func validamos entrada de datos vacia:
validar_entrada() {
local entrada=$1	
logger -p local1.info "Se valida entrada por vacio de $entrada"
while [[ -z $entrada ]] 
do
read -p "El valor no puede estar vacío. Ingrese nuevamente: " entrada
done
echo $entrada
}

# Función para agregar un nuevo usuario
agregar_usuario() {
  	logger -p local1.info "Ingreso agregar usuario"
	read -p "Ingrese el nombre de usuario: " nombre_usuario
	nombre_usuario=$(validar_entrada $nombre_usuario)

  	sudo useradd -m $nombre_usuario
	logger -p local1.info "Se creo correctamente el usuario $nombre_usuario"
    	clear
	echo "Usuario $nombre_usuario creado exitosamente."
	echo "Presione enter para volver..."
	read exit	
	    	
}

# Func xa agregar un administrador
agregar_usuario_admin() {
    	logger -p local1.info "Ingresao agregar admin"
	read -p "Ingrese el nombre de usuario administrador: " nombre_usuario
   	nombre_usuario=$(validar_entrada $nombre_usuario)
    	read -sp "Ingrese la contraseña del usuario administrador: " contrasena
  	contrasena=$(validar_entrada $contrasena)
     	echo
   	read -p "Ingrese el nombre completo del usuario administrador: " nombre_completo
    	nombre_completo=$(validar_entrada "$nombre_completo")

    	# aca creamos:
 	sudo useradd -m -G wheel -c "$nombre_completo" $nombre_usuario
	logger -p local1.info "Se creo usuario administrador"
    	# contrasenia:
   	clear
	echo "$nombre_usuario:$contrasena" | chpasswd

    	echo "Usuario administrador $nombre_usuario creado exitosamente."
      	echo "Presione enter para volver..."
	read exit	
	
}

# Función para modificar un usuario que ya existe:
modificar_usuario() {
	logger -p local1.info "Ingreso modificacion usuario"
while [ "$aux" != "exit" ]
do
read -p "Ingrese nombre de usuario a modificar o 0 para salir: " usuario
usuario=$(validar_entrada $usuario)
if [ "$usuario" == 0 ] 
then
exit
fi
id "$usuario" &> /dev/null
if [ $? -ne 0 ]
then
    echo "El usuario $usuario no existe."
else
aux="exit"
fi
done
echo "El usuario seleccionado es: $usuario:"
echo "-------------------------------------------------"

read -p "Nuevo nombre completo del usuario: " nuevo_nombre
nuevo_nombre=$(validar_entrada $nuevo_nombre)
read -p "Nuevo directorio de inicio (vacío para mantener el actual): " nuevo_home
read -p "Nuevo shell (vacío para mantener el actual): " nuevo_shell

sudo usermod -c "$nuevo_nombre" -d "$nuevo_home" -s "$nuevo_shell" "$usuario"

echo "El usuario $usuario, fue modificado correctamente"
echo "Presione enter para volver..."
read exit	

}

# Función para eliminar un usuario
eliminar_usuario() {
logger -p local1.info ""
   read -p "Ingrese el nombre de usuario a eliminar: " nombre_usuario
  nombre_usuario=$(validar_entrada $nombre_usuario)

    # Aqui elimina el usuario:
    sudo userdel -r $nombre_usuario
	clear
     	echo "Usuario $nombre_usuario eliminado exitosamente."
   	echo "Presione enter para volver..."
	read exit	
}

# Funcion para modif contrasenia
modif_contrasenia(){
logger -p local1.info "Ingreso modificar contrasenia"
    read -p "Ingrese usuario a modif " usuario
    usuario=$(validar_entrada $usuario)
    sudo passwd $usuario
logger -p local1.info "Se modifica contrasenia"
  	echo "Presione enter para volver..."
			read exit 
}

listar_usuarios(){
logger -p local1.info "Se listan usuarios"
echo "Usuarios: "
cut -d: -f1 /etc/passwd
echo "Presione enter para volver..."
read exit
clear
}

buscar_usuario(){
logger -p local1.info "Ingreso a buscar usuario"
clear
    read -p "Ingrese nombre de usuario: " usuario
    usuario=$(validar_entrada $usuario)
 	if id "$usuario" &>/dev/null
	then
logger -p local1.info "Se lista indormacion de el usuario $usuario"

echo "
******************************************************************
******************************************************************
 Datos de $usuario:

 Nombre completo: $(grep $usuario /etc/passwd | cut -d':' -f5)
 UID: $(id -u $username)
 GID: $(id -g $username)
 Shell por defecto: $(grep $usuario /etc/passwd | cut -d':' -f7)
 Directorio de inicio: $(grep $usuario /etc/passwd | cut -d':' -f6)

******************************************************************
******************************************************************
"
echo "Presione enter para volver... "
read exit

	else
		echo "El usuario ingresado: $usuario, no existe en el sistema..."
		echo "Presione enter para volver..."
		read exit
	fi

}


# Función para mostrar el menú interactivo
mostrar_menu() {
OPC=1
    while [ "$OPC" != 0 ] 
    
    do
    clear
    echo "----------------------------------------------"
    echo "----- Menú de Administración de Usuarios -----"
    echo "----------------------------------------------"
    echo "1. Agregar un usuario"
    echo "2. Agregar un usuario administrador"
    echo "3. Modificar nombre de un usuario existente"
    echo "4. Eliminar un usuario"
    echo "5. Modificar contrasenia usuario"
    echo "6. Listar todos los usuarios"
    echo "7. Buscar usuario"
    echo "0. Salir"
    echo "------------------------------------------------"
    echo "------------------------------------------------"
    echo "------------------------------------------------"   
    echo ""
    read -p "Ingrese la opción deseada: " OPC
         case $OPC in
            1) agregar_usuario ;;
            2) agregar_usuario_admin ;;
            3) modificar_usuario ;;
            4) eliminar_usuario ;;
	    5) modif_contrasenia ;;
	    6) listar_usuarios ;;
	    7) buscar_usuario ;;
	    0) echo "Saliendo...."
		sleep 3 ;;
            *) clear
	echo "Opción inválida. Seleccione una opción válida de las listadas... " ;;
        esac
  echo
 done
}

# Ejecuto el menu
mostrar_menu
