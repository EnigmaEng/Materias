#! /bin/bash
source ../configServer.conf
FILE="./FILE.txt"
DATABASE="wwe"
USER="wweat"
PASSWORD="Wweat123**"
RESPALDOS="/home/respaldo"
SERVIDOR="respaldo@$IPR"
PASSRESP="Respaldo123**"
                logger -p local1.info "Comenzo respaldo de la BD"
                #echo "Base de datos: "$DATABASE
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
                #               rsync --remove-source-files -avhzP -e "sshpass -p $PASSRESP ssh -p 50000" $RESPALDOS/$ARCHIVO $SERVIDOR:$RESPALDOS
                                rsync -avhzP -e "sshpass -p $PASSRESP ssh -p 50000" $RESPALDOS/$ARCHIVO $SERVIDOR:$RESPALDOS

                                if [ $? -eq 0 ]
                                then
                   #                     echo "Respaldo completado..."
                                        logger -p local1.info "Respaldo BD creado"
                                else
                  #                      echo "Hubo un error al realizar el respaldo..."
                                        logger -p local1.info "respaldo BD fallido..."

                                fi
                        else
                 #               echo "Fallo la compresion"
                                logger -p local1.info "Fallo la compresion de BD"
                        fi
                else
                #echo "Error al exportar desde la base de datos"
                logger -p local1.info "No se pudo hacer el respaldo, sucedio un error en la BD"
                fi
                #echo "Presione enter para volver..."
