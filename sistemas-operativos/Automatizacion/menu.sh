#!/bin/bash

directorio_principal=$(pwd)

function show_menu {
    clear
    echo "╔══════════════════════════════════════════════════╗"
    echo "║   😎  BIENVENIDO AL MENÚ DE AUTOMATIZACIÓN 😎    ║"
    echo "╚══════════════════════════════════════════════════╝"
    echo ""
    echo " 🍕🍔🍟   Descubra el mundo de Where We Eat   🍕🍔🍟"
    echo ""
    echo "1. GitHub"
    echo "2. Docker"
    echo "3. Test Cypress"
    echo "4. WHERE WE EAT"
    echo "5. Moverme..."
    echo "6. Recomendaciones de uso (LEER)"
    echo ""
    echo "(0) Salir"
    echo ""
    read -p "Ingrese una opcion: " opc
}

function menu_de_directorios {
    clear
    echo ""
    echo "Estás en el directorio actual: $(pwd)"
    echo ""
    echo "Seleccione una opción:"
    echo ""
    echo "1. Listar contenido del directorio"
    echo "2. Abrir una carpeta y listar su contenido"
    echo "3. Abrir un archivo"
    echo "4. Volver un directorio atras"
    echo ""
    echo "(0) Volver al menu principal..."
    echo ""
    read -p "Ingrese una opción: " dir_opc

    case $dir_opc in
        1)
            clear
            echo "Contenido del directorio $(pwd):"
            ls -l
            read -p "Presione Enter para continuar..."
            menu_de_directorios
            ;;
        2)
            
            echo "Carpetas disponibles:"
            ls -d */
            read -p "Ingrese el nombre de la carpeta que desea abrir: " carpeta
            if [ -d "$carpeta" ]; then
                cd "$carpeta"
                menu_de_directorios
            else
                echo "La carpeta '$carpeta' no existe."
                read -p "Presione Enter para continuar..."
                menu_de_directorios
            fi
            ;;
        3)
            clear
            echo "Archivos disponibles:"
            ls
            read -p "Ingrese el nombre del archivo que desea abrir con Visual Studio Code: " archivo
            if [ -f "$archivo" ]; then
                code "$archivo"
                menu_de_directorios
            else
                echo "El archivo '$archivo' no existe."
                read -p "Presione Enter para continuar..."
                menu_de_directorios
            fi
            ;;
        4) clear
        cd ..
        echo "Ahora se encuentra en: " | pwd
        sleep 2
        ;;    
        0)
            clear
            echo "Volviendo al menu principal... 🔙"
            sleep 1
            # Regresa al directorio original antes de salir del menú secundario
            cd "$directorio_principal"
            ;;
        *)
            clear
            echo "Opción incorrecta, intente nuevamente."
            sleep 2
            menu_de_directorios
            ;;
    esac
}

A=1

while [ $A -ne 0 ]; do
    show_menu

    case $opc in
        1)
            clear
            ./github.sh
            ;;
        2)
            clear
            ./docker.sh
            ;;
        3)
            clear
            echo "  🤓 Abriendo Cypress 🤓"
            sleep 1
            function Cypress {
                npm i
                npm run cypress:open
            }
            cd ../../proyecto/frontend
            clear
            Cypress
            ;;
        4) 
            clear
            function WWE {
                cd ../../proyecto/frontend
                sleep 1
                echo " 😀 Front iniciado 😀"
                sleep 1.5
                npm run dev
            }

            function WWE+Back {
                cd ../../proyecto/backend
                docker-compose up -d
                sleep 1
                echo " 🔌 Back iniciado 🔌"
                sleep 1.5
                cd ../../proyecto/frontend
                echo " 😀 Front iniciado 😀"
                sleep 1.5
                npm run dev
            }

           echo "Seleccione una opción:"
        echo "(1) Abrir solo el 💻 FRONTEND 💻 (npm run dev)"
        echo "(2) Abrir el 🔌 BACKEND 🔌 y el 💻 FRONTEND 💻 (Docker y npm run dev)"
        echo ""
        echo "(0) Volver al menu principal..."
        echo ""
        read -p "Ingrese el número de la opción que desea ejecutar (1 o 2): " var
        if [ "$var" == "1" ]; then
            clear
            WWE
        cd "$directorio_principal"
            elif [ "$var" == "2" ]; then
            clear
            WWE+Back
        cd "$directorio_principal"
        elif [ "$var" == "0" ]; then
            clear
        cd "/MAIN/Materias/sistemas-operativos/Automatizacion"   
        else
            sleep 0.1
            clear
            echo "Opción incorrecta, por favor seleccione 1 o 2."
            sleep 2
        fi
        ;;

        5)
    clear
    read -p "Deseas ver qué carpetas existen? (s/[n]) " res
    if [[ $res == "S" || $res == "s" ]]; then
        cd ../../
        echo "Carpetas disponibles:"
        ls -d */
        read -p "Quiero ir a la carpeta... " folder
        if [ -d "$folder" ]; then
            cd "$folder"
            menu_de_directorios
        else
            echo "La carpeta '$folder' no existe."
            read -p "Presione Enter para continuar..."
            menu_de_directorios
        fi
    elif [[ $res == "N" || $res == "n" ]]; then
        read -p "Quiero ir a la carpeta... " folder
        if [ -d "$folder" ]; then
            cd "$folder"
            menu_de_directorios
        else
            echo "La carpeta '$folder' no existe."
            read -p "Presione Enter para continuar..."
            menu_de_directorios
        fi
    else
        echo "Opción incorrecta"
        sleep 1
    fi
    ;;

6) 
    while true; do
        clear
        echo " 📃 RECOMENDACIONES DE USO PARA NUESTRA APP - WHERE WE EAT 📃 "
        echo "---------------------------------------------------------------"
        echo ""
        echo "Seleccione una opción:"
        echo "1. INFO - GitHub"
        echo "2. INFO - Docker"
        echo "3. INFO - Cypress"
        echo "4. INFO - WHERE WE EAT"
        echo ""
        echo "(0) Volver al menu principal..."
        echo ""
        read -p "¿Qué necesita saber? " resp
        case $resp in
            1)
                clear
                echo "Recomendaciones sobre GitHub:"
                echo "Hay opciones dentro de GitHub que pueden causar inconvenientes en la rama main, es importante estar consciente de lo que estamos haciendo al elegir determinadas opciones."
                echo ""
                read -p "Presione Enter para volver..."
                ;;
            2)
                clear
                echo "Recomendaciones sobre Docker:"
                echo "Para desplegar la aplicación correctamente con Docker, debe tener instalado Docker Desktop y abrirlo. Luego, diríjase a la opción '4. WHERE WE EAT' en el menú principal y seleccione lo que desea desplegar."
                echo ""
                read -p "Presione Enter para volver..."
                ;;
            3)
                clear
                echo "Cypress es una herramienta de prueba de extremo a extremo (E2E) que se utiliza para realizar pruebas automatizadas en aplicaciones web. Permite simular interacciones de usuario y verificar que la aplicación funcione correctamente."
                echo ""
                read -p "Presione Enter para volver..."
                ;;
            4)
                clear
                echo "Recomendaciones sobre WHERE WE EAT:"
                echo "Para desplegar la aplicación WHERE WE EAT, siga las instrucciones proporcionadas en la opción '4. WHERE WE EAT' en el menú principal."
                echo ""
                read -p "Presione Enter para volver..."
                ;;
            0)
                clear
                echo "Volviendo al menú principal..."
                sleep 1
                break  # Salir del bucle de recomendaciones
                ;;
            *)
                clear
                echo "Opción incorrecta, intente nuevamente."
                sleep 2
                ;;
        esac
    done
    ;;
        0)
            clear
            echo " 🔚 Saliendo del menú... 🔚"
            sleep 1.5
            A=0
            ;;
        *)
            clear
            echo "Opción incorrecta, intente nuevamente."
            sleep 1.5
            ;;
    esac
done
