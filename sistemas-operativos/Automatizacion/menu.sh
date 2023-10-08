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
    echo "0. Salir"
    echo ""
    read -p "Ingrese una opcion: " opc
}

function menu_de_directorios {
    clear
    echo "Estás en el directorio actual: $(pwd)"
    echo "Seleccione una opción:"
    echo "1. Listar contenido del directorio"
    echo "2. Abrir una carpeta y listar su contenido"
    echo "3. Abrir un archivo"
    echo "0. Volver al menú principal"
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
            clear
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
        read -p "Ingrese el nombre del archivo que desea abrir con Visual Studio Code: " carpeta
        if [ -f "$carpeta" ]; then
            code "$carpeta"
            menu_de_directorios
        else
            echo "El archivo '$carpeta' no existe."
            read -p "Presione Enter para continuar..."
            menu_de_directorios
        fi
        ;;
        0)
            clear
            echo "Volviendo al menú principal..."
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

            read -p "1) FRONTEND ❓: o 2) BACK Y FRONT ❓:   " var
            if [ $var == "1" ]; then
                clear
                WWE
            elif [ $var == "2" ]; then
                clear
                WWE+Back
            else
                sleep 0.1
                clear
                echo "Valor incorrecto, intente nuevamente."
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
                    echo "error"
                fi
            fi
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
            ;;
    esac
done
