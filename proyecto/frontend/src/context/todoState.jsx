import React, { useReducer} from "react";

import todoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { REGISTRO_EXITOSO, REGISTRO_ERROR, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO, CERRAR_SESION, OBTENER_RESTAURANTE} from "../types/types";
import clienteAxios from "../config/axios";
import tokenAuth from "../config/token";


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

    //Registrar turista
    const registrarTurista = async datos => {
    
        try {
            const respuesta = await clienteAxios.post("/turistaController.php", datos,{ 
            headers: {
                'Content-Type': 'application/json' 
            },
            
        });
            dispatch({
                type: REGISTRO_EXITOSO, 
                payload: respuesta.data
            });
            
        } catch (error) {
            dispatch({
                type: REGISTRO_ERROR,
                payload: error.response.data.msg
            })
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
            const respuesta = await clienteAxios.post("/restauranteController.php", datos);     
            dispatch({
                type: REGISTRO_EXITOSO, 
                payload: respuesta.data    
            });

        } catch (error) {
            dispatch({
                type:REGISTRO_ERROR,
                payload: error.response.data.msg
            })
            }
            setTimeout(() => {
                dispatch({
                    type: LIMPIAR_ALERTA
                })
            }, 3000);
    }

    //Login
    const iniciarSesion = async (datos) => {
    try {
    const respuesta = await clienteAxios.post('/loginController.php', datos);
    console.log(respuesta.data)
    if (respuesta.data) {
    dispatch({
        type: LOGIN_EXITOSO,
        
    });
    } else {
    dispatch({
        type: LOGIN_ERROR,
        payload: 'Credenciales incorrectas'
    });
    }
} catch (error) {
    console.error("Error en la solicitud:", error);
    dispatch({
    type: LOGIN_ERROR,
    payload: response.data.error
    });
}
setTimeout(() => {
    dispatch({
    type: LIMPIAR_ALERTA
    });
  }, 3000);
};

const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token)
        }
        try {
            const respuesta = await clienteAxios.get('/login');
            
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

        const cerrarSesion = async () => {
            dispatch({
                type: CERRAR_SESION,
                
            });
        
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