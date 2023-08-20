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
    	echo ""
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
      	echo ""
}

# Función para modificar un usuario que ya existe:
modificar_usuario() {
	logger -p local1.info "Ingreso modificacion usuario"
    read -p "Ingrese el nombre de usuario a modificar: " nombre_usuario
    nombre_usuario=$(validar_entrada $nombre_usuario)
    read -p "Ingrese el nuevo nombre de usuario: " nuevo_nombre_usuario
    nuevo_nombre_usuario=$(validar_entrada $nuevo_nombre_usuario)
    # Modificacion real aca:
    sudo usermod -l $nuevo_nombre_usuario $nombre_usuario
    clear
    echo "Nombre de usuario modificado exitosamente de $nombre_usuario a $nuevo_nombre_usuario."
    echo
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
   	echo
}

# Funcion para modif contrasenia
modif_contrasenia(){
logger -p local1.info "Ingreso modificar contrasenia"
    read -p "Ingrese usuario a modif " usuario
    usuario=$(validar_entrada $usuario)
    sudo passwd $usuario
logger -p local1.info "Se modifica contrasenia"
    clear
}

listar_usuarios(){
logger -p local1.info "Se listan usuarios"
echo "Usuarios: "
cut -d: -f1 /etc/passwd
sleep 5
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
