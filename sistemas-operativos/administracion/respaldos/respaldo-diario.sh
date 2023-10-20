#! /bin/bash
SERVIDOR="respaldo@192.168.100.5"
DIRRESPALDO="/home/respaldo"



/var/log/mysql/error.log
/var/log/mariadb/mariadb.log
/var/log/clamav/freshclam.log
/var/log/httpd/error_log
/var/log/httpd/access_log
/var/log/secure
/var/log/grafana/grafana.log
/var/log/lastlog


#elimino despues de 30 dias
find "/home/respaldos/diarios" -type f -name "respaldo_logs_*" -mtime +7 -exec rm {} \;

