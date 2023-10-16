import React, { useReducer, useState} from "react";

import todoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { REGISTRO_EXITOSO, REGISTRO_ERROR, PLATO_CREADO,LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO, CERRAR_SESION, OBTENER_RESTAURANTE, DESCUENTO_CREADO} from "../types/types";
import clienteAxios from "../config/axios";


const TodoState = ({ children }) => {

  const [cargando, setCargando] = useState(true)

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
                payload: 'Registro exitoso!'
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
                payload: 'Registro exitoso!'
            });
            
        } catch (error) {
            dispatch({
                type:REGISTRO_ERROR,
                payload: respuesta.data.mensaje
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
        //usuarioData trae todos los datos del usuario desde el backend
        const usuarioData = respuesta.data.usuarioData;
        console.log(respuesta.data.token)
        
        // const token = respuesta.data.token
        // clienteAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
         //se guardan el token de la sesion en el localstorage
        localStorage.setItem('token', respuesta.data.token);
        
        //se guardan los datos del usuario en formato json en el localstorage
        localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
        console.log(usuarioData)

        dispatch({
          type: LOGIN_EXITOSO,
          usuario: usuarioData
        });
        
      } else {
        dispatch({
          type: LOGIN_ERROR,
          payload: respuesta.data.mensaje  //traigo el mensaje de error desde el back
        });
      }
    } 
  } catch (error) {
    console.error("Error en la solicitud:", error);
    dispatch({
      type: LOGIN_ERROR,
      payload: error.response.data.mensaje
    });
  }
  setTimeout(() => {
    dispatch({
      type: LIMPIAR_ALERTA
    });
  }, 3000);
};


const usuarioAutenticado = () => {

  //usamos el token guardado en el localstorage
  const token = localStorage.getItem('token');

  if (token) {

    //usamos el encabezado authorization y utilizamos el esquema de autorizacion Bearer
    clienteAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
  
    // parseamos en formato json los datos guardados del usuario en el localstorage 
    const usuarioData = JSON.parse(localStorage.getItem('usuarioData'));

    dispatch({
      type: USUARIO_AUTENTICADO,
      payload: usuarioData,
    });
  }

  
};

    const crearPlato = async datos => {
      try {
        const respuesta = await clienteAxios.post('/restauranteController.php', datos)
        
        dispatch({
        type: DESCUENTO_CREADO,
        payload: 'Plato creado exitosamente!'
      })
      } catch (error) {
        console.log(error)
      }
     
    }

        const crearDescuento = async (datos) => {
      try {
        const respuesta = await clienteAxios.post('/restauranteController.php', datos)
        
        dispatch({
        type: PLATO_CREADO,
        payload: 'Descuento creado!'
      })
      } catch (error) {
        console.log(error)
      }
     
    }


        const cerrarSesion = async () => {

          
            dispatch({
                type: CERRAR_SESION,
                
            });
            // Eliminamos el token y los datos de usuario del localstorage una vez cerrado sesion
              localStorage.removeItem('token');
              localStorage.removeItem('usuarioData');

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
                crearPlato,
                crearDescuento
            }}>

            {children}

        </todoContext.Provider>
    )
}

export default TodoState;