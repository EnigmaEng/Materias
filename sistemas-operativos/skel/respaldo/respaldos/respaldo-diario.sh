#! /bin/bash
source ../configServer.conf
SERVIDOR="respaldo@$IPR"
PASSRESP="Respaldo123**"
logger -p local1.info "Comenzo respaldo diario..."

carpetabase="/home/respaldo"
destino="/home/respaldo/diarios"
timestamp=$(date +"%Y%m%d%H%M%S")
ARCH="respaldo_$timestamp"
carpetatemp="$carpetabase/$ARCH"

mkdir -p "$carpetatemp"

#sudo cp "/var/log/mysql/error.log" "$carpetatemp"
sudo cp "/var/log/mariadb/mariadb.log" "$carpetatemp"
sudo cp "/var/log/freshclam.log" "$carpetatemp"
sudo cp "/var/log/httpd/error_log" "$carpetatemp"
sudo cp "/var/log/httpd/access_log" "$carpetatemp"
sudo cp "/var/log/secure" "$carpetatemp"
sudo cp "/var/log/grafana/grafana.log" "$carpetatemp"
sudo cp "/var/log/lastlog" "$carpetatemp"
sudo cp "/etc/passwd" "$carpetatemp"
sudo cp "/etc/shadow" "$carpetatemp"
sudo cp "/etc/group" "$carpetatemp"
sudo cp "/etc/sudoers" "$carpetatemp"
sudo cp -r "/etc/sysconfig/network-scripts/" "$carpetatemp"
sudo cp "/etc/hosts" "$carpetatemp"
sudo cp "/etc/resolv.conf" "$carpetatemp"

logger -p local1.info "respaldos copiados al directorio intermediario se procede a comprimir..."
sudo tar -czvf "/home/respaldo/$ARCH.tar.gz" --directory=$carpetabase $ARCH
sudo rm -r "$carpetatemp"

#respaldamos diariamente la BD
./resp-bd.sh


rsync -avhzP -e "sshpass -p $PASSRESP ssh -p 50000" $carpetabase/$ARCH".tar.gz" $SERVIDOR:$destino
#find "/home/respaldo/" -type f -name "respaldo*" -mtime +7 -exec rm {} \;

