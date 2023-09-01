import React, { useReducer} from "react";

import todoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { REGISTRO_EXITOSO, REGISTRO_ERROR, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO, CERRAR_SESION,} from "../types/types";
import clienteAxios from "../config/axios";



//Usamos el useReducer para actualizar los estados de la aplicacion en funcion a las acciones que se envian en este caso, datos generados por el usuario 

const TodoState = ({ children }) => {

    const initialState = {
      
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
                payload: respuesta.data.msg
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
            const respuesta = await clienteAxios.post("/restauranteController.php", datos, { 
        
            headers: {
                'Content-Type': 'application/json' 
            },

        });

            
            dispatch({
                type: REGISTRO_EXITOSO, 
                payload: respuesta.data.msg
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
      const {data} =respuesta
          if(data.mensaje === 'Logueado correctamente'){
            dispatch({ 
                type: LOGIN_EXITOSO, 
                payload: data.usuario
            });
          }else{
            dispatch({
                type: LOGIN_ERROR,
                payload: 'Credenciales incorrectas'
            })
          }
            
         
        } catch (error) {
          
            dispatch({ 
                type: LOGIN_ERROR, 
                payload: error.response.data.msg
             });
        }
      };

    const usuarioAutenticado = async () => {
        const session = sessionStorage.getItem('session');
       if(session === 'autenticado'){
        try {
            const respuesta = await clienteAxios.post('/loginController.php');
            
            dispatch({
                type: USUARIO_AUTENTICADO,
                payload: respuesta.data.usuario,
            })
        } catch (error) {
            dispatch({
                type: LOGIN_ERROR,
                payload: error.response.data.msg
            })
        }
    }
    }

        const cerrarSesion = () => {
            dispatch({
                  type: CERRAR_SESION

         })
         window.location.reload();
        }
   
 
    
    return (
        <todoContext.Provider
            value={{
               
                autenticado: state.autenticado,
                usuario: state.usuario,
                mensaje: state.mensaje,
                registrarTurista,
                registrarRestaurante,
                iniciarSesion,
              
            }}>

            {children}

        </todoContext.Provider>
    )
}

export default TodoState;