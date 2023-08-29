import React, { useReducer} from "react";

import todoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { REGISTRO_EXITOSO, REGISTRO_ERROR, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO, CERRAR_SESION,} from "../types/types";
import clienteAxios from "../config/axios";

//falta token


//Usamos el useReducer para actualizar los estados de la aplicacion en funcion a las acciones que se envian en este caso, datos generados por el usuario 

const TodoState = ({ children }) => {

    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        autenticado: null,
        usuario: null,
        mensaje: null,
    }
    //Reducer
    const [state, dispatch] = useReducer(todoReducer, initialState);



    //Registrar nuevos usuarios
    const registrarTurista = async datos => {
    
        try {
            const respuesta = await fetch("http://127.0.0.1:8080/controllers/turistaController.php", { 
            method:'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            
            body:JSON.stringify(datos) 
        });
        const contenidoRespuesta = await respuesta.text();
console.log("Contenido de la respuesta:", contenidoRespuesta);
            const datosJSON = JSON.parse(contenidoRespuesta)
            
            dispatch({
                type: REGISTRO_EXITOSO, 
                payload: datosJSON.msg
            });
            
        } catch (error) {
        console.log("Full Error:", error);
            }
            
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA

            })
        }, 3000);
     
    }

    //Registrar restaurante
    const registrarRestaurante = async datos => {
    
        try {
            const respuesta = await fetch("http://127.0.0.1:8080/controllers/restauranteController.php", { 
            method:'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            
            body:JSON.stringify(datos) 
        });
        const contenidoRespuesta = await respuesta.text();
console.log("Contenido de la respuesta:", contenidoRespuesta);
            const datosJSON = JSON.parse(contenidoRespuesta)
            
            dispatch({
                type: REGISTRO_EXITOSO, 
                payload: datosJSON.msg
            });
            
        } catch (error) {
        console.log("Full Error:", error);
            }
            
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA

            })
        }, 3000);
     
    }

    //Autenticar Usuarios 
    const iniciarSesion = async datos => {
        try {
            const respuesta = await fetch("http://127.0.0.1:8080/controllers/loginController.php", { 
            method:'POST',
            headers: {
                'Content-Type': 'application/json' 
            },
            
            body:JSON.stringify(datos) 
        });
        const contenidoRespuesta = await respuesta.text();
console.log("Contenido de la respuesta:", contenidoRespuesta);
            const datosJSON = JSON.parse(contenidoRespuesta)
            
            dispatch({
                type: LOGIN_EXITOSO, 
                payload: datosJSON.msg
            });
            
        } catch (error) {
        console.log("Full Error:", error);
            }
            
        setTimeout(() => {
            dispatch({
                type: LIMPIAR_ALERTA

            })
        }, 3000);
    }


    //user autenticado
    const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token)
        }
        try {
            const respuesta = await clienteAxios.get('');
            
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: respuesta.data.usuario
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }


    const cerrarSesion = () => {
    

        dispatch({
            type: CERRAR_SESION

        })
      
    }


 
    
    return (
        <todoContext.Provider
            value={{
                token: state.token,
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarTurista,
                registrarRestaurante,
                iniciarSesion,
                usuarioAutenticado,
                cerrarSesion,
            }}>

            {children}

        </todoContext.Provider>
    )
}

export default TodoState;