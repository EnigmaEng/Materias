#!/bin/bash

DATABASE="wwe"
USER="wweat"
PASSWORD="Wweat123**"
RESPALDOS="/home/respaldo"
SERVIDOR="respaldo@192.168.100.5"
PASSRESP="Respaldo123**"

logger -p local1.info "Ingreso al menu de respaldos"
op=1
while [ "$op" != 0 ]
	do
	clear
	echo "*************************************************************"
	echo "*           Bienvenido al sistema de respaldos              *"
	echo "*            Para continuar elija una opcion                *"
	echo "*************************************************************"
	echo ""
	echo "1) Crear un respaldo de la Base de datos"
	echo "2) Importar respaldo a la Base de datos"
	echo "3) Probar conexion al servidor de respaldos"
	echo "4) Realizar el respaldo diario ahora"
	echo "5) Realziar el respaldo semanal ahora"
	echo "6) Realizar el respaldo mensual ahora"
	echo ""
	echo "0) Salir"
	read -p "Ingrese una opcion: " op
	case $op in
		1)
		
		logger -p local1.info "Comenzo respaldo de la BD"
		echo "Base de datos: "$DATABASE
		echo "--------------------------------------------------"
		mysqldump -u $USER -p$PASSWORD $DATABASE > $RESPALDOS/$DATABASE".sql"
		if [ $? -eq 0 ]
		then
			logger -p local1.info "Se ha exportado la DB con exito"
			ARCHIVO="./$(date +'%d-%m-%y')_hora_$(date +'%R')_respaldo_manual.tar.gz" 
			tar -czvf $ARCHIVO -C $RESPALDOS "$DATABASE.sql" 
			if [ $? -eq 0 ]
			then
				logger -p local1.info "Se ha llevado a cabo la compresion del archivo"
				mv $(find . -name "*.tar.gz") $RESPALDOS
				rm $RESPALDOS/$DATABASE".sql"
		#		rsync --remove-source-files -avhzP -e "sshpass -p $PASSRESP ssh -p 50000" $RESPALDOS/$ARCHIVO $SERVIDOR:$RESPALDOS
				rsync -avhzP -e "sshpass -p $PASSRESP ssh -p 50000" $RESPALDOS/$ARCHIVO $SERVIDOR:$RESPALDOS				

				if [ $? -eq 0 ]
				then
					echo "Respaldo completado..."
					logger -p local1.info "Respaldo BD creado"
				else
					echo "Hubo un error al realizar el respaldo..."
					logger -p local1.info "respaldo BD fallido..."
				
				fi
			else
				echo "Fallo la compresion"
				logger -p local1.info "Fallo la compresion de BD"
			fi
		else
		echo "Error al exportar desde la base de datos"
		logger -p local1.info "No se pudo hacer el respaldo, sucedio un error en la BD"
		fi
		echo "Presione enter para volver..."
		read exit;
		;;
		2)
		clear
		echo "Importando ultimo registro."
		sleep 1
	       	clear
		echo "Importando ultimo registro.."
		sleep 1 
		clear
		echo "Importando ultimo registro..."
		sleep 1
		resp=$(rsync -avhn --list-only --progress -e "sshpass -p Respaldo123** ssh -p 50000" $SERVIDOR:$RESPALDOS | grep "respaldo_manual.tar.gz" | tail -1 | cut -f4 -d"/")
		echo "Ultimo registro disponible en el servidor de respaldo:"
		echo ==> $resp
		sleep 1
		#rsync -avhzP --include=${resp} --exclude '*' -e "ssh -p 50000" $SERVIDOR:$RESPALDOS/ $RESPALDOS
	        #rsync -av -e "ssh -p 50000" $SERVIDOR:$RESPALDOS/$resp $RESPALDOS
                rsync --remove-source-files -avhzP -e "sshpass -p "$PASSRESP" ssh -p 50000" "$SERVIDOR:$RESPALDOS/$resp" $RESPALDOS
		if [ $? -eq 0 ]
		then
			echo "Respaldo importado..."
			logger -p local1.info "Respaldo importado"
			sleep 1
			clear
			echo "Descomprimiendo archivos"
			sleep 1
			clear
			echo "Descomprimiendo archivos." 
			sleep 1
			clear 
			echo "Descomprimiendo archivos.." 
			sleep 1 
			clear
			echo "Descomprimiendo archivos..."
			echo $RESPALDOS/$resp
			tar -xzvf $RESPALDOS/$resp -C $RESPALDOS/
			if [ $? -eq 0 ]
			then
				echo "Archivo descomprimido, se procede a restaurar base de datos..."
				logger -p local1.info "Archivos listos para importar a la base de datos, $resp"
				ls
				echo "Importando a la base de datos.."
				sleep 1
				mysql -u $USER -p$PASSWORD $DATABASE < $RESPALDOS/$DATABASE".sql"
				if [ $? -eq 0 ]
				then
					rm -r $RESPALDOS/*
					clear
					echo "Exito!"
					logger -p local1.info "Respaldo importado desde el servidor"
					echo "################################"
				else
					echo "Ocurrio un error al importar el respaldo a la BD"
					logger -p local1.info "Error al importar hacia la BD"
				fi
			else
				echo "No se pudo descomprimir el archivo"
				logger -p local1.info "No se pudo descomprimir el archivo"
			fi
		else
			echo "Algo salio mal al importar desde el servidor"
			logger -p local1.info "Ocurrio un error al importar el respaldo desde el servidor externo"
		fi
		echo "Presione enter para volver..."
		read exit;
		;;
		3)
		clear
	logger -p local1.info "ingreso a opcion probar conexion servidor de respaldo" 
		echo "Probando conexion..."
		#timeout 1m 
		#sshpass -p $PASSRESP ssh -p 50000 $SERVIDOR 
		echo "Intentando conectar al servidor remoto..."
		
		resultado=$(sshpass -p "$PASSRESP" ssh -p 50000 $SERVIDOR echo "conexion exitosa...") 
		
		#sshpass -p $PASSRESP ssh -o BatchMode=yes -o ConnectTimeout=5 -p 50000 $SERVIDOR echo "conexion exitosa..." 
		#al final el anterior no lo usamos por ahora

		if [ $? -eq 0 ]
		then
			sleep 1s
			echo "Conexion establecida: $resultado" 
			echo "Presione enter para volver"
			logger -p local1.info "Prueba servidor de respaldo existoso"
			read exit;
			clear
		else
			sleep 1s
			echo "Servidor de respaldos sin conexion: $resultado"
			logger -p local1.info "Servidor sin conexion. "			
			echo "Presione enter para volver"
			read exit;
			clear
		fi
		;;
	4)sudo ./respaldo-diario.sh
	echo "Presione enter para volver..."
	read exit;
	;;

	5)sudo ./respaldo-semanal.sh
	echo "Presione enter para volver..."
	read exit;
		;;

	6)sudo ./respaldo-mensual.sh
	echo "Presione enter para volver..."
	read exit;
		;;
		
	0)
		logger -p local1.info "Salio del menu de respaldos"
		clear
		;;
		
	*)
		clear
		echo "Opcion invalida, ingrese una opcion correcta..."
		;;
		esac
	done
