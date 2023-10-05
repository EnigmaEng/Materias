import React, { useReducer} from "react";

import todoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { REGISTRO_EXITOSO, REGISTRO_ERROR, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO, CERRAR_SESION, OBTENER_RESTAURANTE} from "../types/types";
import clienteAxios from "../config/axios";




//Usamos el useReducer para actualizar los estados de la aplicacion en funcion a las acciones que se envian en este caso, datos generados por el usuario 

const TodoState = ({ children }) => {

    const initialState = {
        token: typeof window !== 'undefined' ? localStorage.getItem('token') : '',
        autenticado: false,
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
            const respuesta = await clienteAxios.post("/restauranteController.php", datos);     
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
  try {
    const respuesta = await clienteAxios.post('/loginController.php', datos);

    if (respuesta.status === 200) {
      if (respuesta.data.success) {
        const usuarioData = respuesta.data.usuarioData;
console.log(respuesta.data.token)
        // Almacenar el token en el localStorage
        localStorage.setItem('token', respuesta.data.token);
        // Almacenar los datos del usuario en el localStorage
        localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
console.log(usuarioData)
        // Agregar el token a las solicitudes futuras

        dispatch({
          type: LOGIN_EXITOSO,
          usuario: usuarioData
        });

        
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: 'Credenciales incorrectas'
        });
      }
    } 
  } catch (error) {
    console.error("Error en la solicitud:", error);
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data.error
    });
  }
  setTimeout(() => {
    dispatch({
      type: LIMPIAR_ALERTA
    });
  }, 3000);
};


const usuarioAutenticado = () => {

  const token = localStorage.getItem('token');

  if (token) {
   
    clienteAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
    
   
    const usuarioData = JSON.parse(localStorage.getItem('usuarioData'));

    dispatch({
      type: USUARIO_AUTENTICADO,
      payload: usuarioData,
    });
  }
};



        const cerrarSesion = async () => {
            dispatch({
                type: CERRAR_SESION,
                
            });
        
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
                cerrarSesion,
            usuarioAutenticado,

                
            }}>

            {children}

        </todoContext.Provider>
    )
}

export default TodoState;