#! /bin/bash
source ../configServer.conf
SERVIDOR="respaldo@$IPR"
PASSRESP="Respaldo123**"
logger -p local1.info "Comenzo respaldo mensual..."

carpetabase="/home/respaldo"
destino="/home/respaldo/mensuales"
timestamp=$(date +"%Y%m%d%H%M%S")
ARCH="respaldo_$timestamp"
carpetatemp="$carpetabase/$ARCH"

mkdir -p "$carpetatemp"

sudo cp -r "/etc/my.cnf" $carpetatemp
sudo cp -r "/etc/my.cnf.d/" $carpetatemp
sudo cp -r "/var/lib/mysql/" $carpetatemp
sudo cp -r "/etc/clamd.conf" $carpetatemp
sudo cp -r "/etc/freshclam.conf" $carpetatemp
sudo cp -r "/var/lib/clamav/" $carpetatemp
sudo cp -r "/etc/grafana/" $carpetatemp
sudo cp -r "/var/lib/grafana/" $carpetatemp
sudo cp -r "/etc/php.ini" $carpetatemp
sudo cp -r "/etc/php.d/" $carpetatemp
sudo cp -r "/var/lib/php/" $carpetatemp
sudo cp -r "/etc/httpd/" $carpetatemp
sudo cp -r "/var/www/html/" $carpetatemp
sudo cp -r "/var/log/messages" $carpetatemp
sudo cp -r "/var/log/syslog" $carpetatemp


logger -p local1.info "respaldos copiados al directorio intermediario se procede a comprimir..."
sudo tar -czvf "/home/respaldo/$ARCH.tar.gz" --directory=$carpetabase $ARCH
sudo rm -r "$carpetatemp"

rsync -avhzP -e "sshpass -p $PASSRESP ssh -p 50000" $carpetabase/$ARCH".tar.gz" $SERVIDOR:$destino
