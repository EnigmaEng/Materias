#! /bin/bash
source ../configServer.conf
SERVIDOR="respaldo@$IPR"
PASSRESP="Respaldo123**"
logger -p local1.info "Comenzo respaldo mensual..."

carpetabase="/home/respaldo"
destino="/home/respaldo/semanales"
timestamp=$(date +"%Y%m%d%H%M%S")
ARCH="respaldo_$timestamp"
carpetatemp="$carpetabase/$ARCH"

mkdir -p "$carpetatemp"

sudo cp -r "/etc/ssh/" $carpetatemp
sudo cp -r "/var/log/secure" $carpetatemp 
sudo cp -r "/etc/skel/administracion" $carpetatemp



logger -p local1.info "respaldos copiados al directorio intermediario se procede a comprimir..."
sudo tar -czvf "/home/respaldo/$ARCH.tar.gz" --directory=$carpetabase $ARCH
sudo rm -r "$carpetatemp"

rsync -avhzP -e "sshpass -p $PASSRESP ssh -p 50000" $carpetabase/$ARCH".tar.gz" $SERVIDOR:$destino
#find "/home/respaldo/" -type f -name "respaldo*" -mtime +40 -exec rm {} \;
