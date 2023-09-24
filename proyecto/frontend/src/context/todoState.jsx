import React, { useReducer} from "react";

import todoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { REGISTRO_EXITOSO, REGISTRO_ERROR, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO, CERRAR_SESION,} from "../types/types";
import clienteAxios from "../config/axios";
<<<<<<< HEAD

=======
import tokenAuth from "../config/token";
>>>>>>> main


//Usamos el useReducer para actualizar los estados de la aplicacion en funcion a las acciones que se envian en este caso, datos generados por el usuario 

const TodoState = ({ children }) => {

    const initialState = {
<<<<<<< HEAD
       
=======
        token: typeof window !== 'undefined' ? localStorage.getItem('token'): '',
>>>>>>> main
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
                payload: 'Registro exitoso'
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
                payload: 'Registro exitoso'
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
<<<<<<< HEAD
        try {
          const respuesta = await clienteAxios.post('/loginController.php', datos);
          const {data} = respuesta;
          if(data.mensaje === "Logueado correctamente"){
              dispatch({ 
              type: LOGIN_EXITOSO,
              
            }); 
          }else{
            dispatch({ 
                type: LOGIN_ERROR, 
                payload: 'Credenciales incorrectas'
              });
          }
        } catch (error) {
            dispatch({ 
                type: LOGIN_ERROR, 
                payload: response.error.data.msg
              });
        }
        setTimeout(() => {
          dispatch({
            type: LIMPIAR_ALERTA
          })
        }, 3000);
      };

      
        const cerrarSesion = () => {
            dispatch({
                  type: CERRAR_SESION

=======
  try {
    const respuesta = await clienteAxios.post('/loginController.php', datos);
    const responseData = parseResponseData(respuesta.data);
    if (responseData && responseData.mensaje === "Logueado correctamente") {
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
      payload: 'Credenciales incorrectas'
    });
  }
  setTimeout(() => {
    dispatch({
      type: LIMPIAR_ALERTA
    });
  }, 3000);
};

function parseResponseData(responseData) {
  const startIndex = responseData.indexOf('{');
  if (startIndex !== -1) {
    const jsonString = responseData.substring(startIndex);
    try {
      return JSON.parse(jsonString);
    } catch (error) {
      console.error("Error al analizar JSON:", error);
      return null;
    }
  }
  return null;
}








        const usuarioAutenticado = async () => {
        const token = localStorage.getItem('token');
        if (token) {
            tokenAuth(token)
        }
        try {
            const respuesta = await clienteAxios.get('/auth.php', {
                   headers: {
                'Content-Type': 'application/json' 
            },
            });
            
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

>>>>>>> main
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
<<<<<<< HEAD
=======
                usuarioAutenticado,
>>>>>>> main
                cerrarSesion
            }}>

            {children}

        </todoContext.Provider>
    )
}

export default TodoState;