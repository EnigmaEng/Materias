import React, { useReducer} from "react";
import todoContext from "./todoContext";
import todoReducer from "./todoReducer";
import { REGISTRO_EXITOSO, REGISTRO_ERROR, PLATO_CREADO,LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO, CERRAR_SESION, EDITAR_PERFIL, DESCUENTO_CREADO, RESENIA_CREADA,EDITAR_PLATO, SOLICITUD_SUBSCRIPCION, ALOJAMIENTO_CREADO, EDITAR_DESCUENTO, TURISTA_VISITA} from "../types/types";
import clienteAxios from "../config/axios";


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
                payload: "Registro exitoso!"
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
       
        
        // const token = respuesta.data.token
        // clienteAxios.defaults.headers.common['Authorization'] = `Bearer ${token}`;
         //se guardan el token de la sesion en el localstorage
        localStorage.setItem('token', respuesta.data.token);
        
        //se guardan los datos del usuario en formato json en el localstorage
        localStorage.setItem('usuarioData', JSON.stringify(usuarioData));
       
        
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
        type: PLATO_CREADO,
        payload: 'Plato creado!'
      })
      } catch (error) {
        console.log(error)
      }
    }

        const crearDescuento = async (datos) => {
      try {
        const respuesta = await clienteAxios.post('/restauranteController.php', datos)
        
        dispatch({
        type: DESCUENTO_CREADO,
        payload: respuesta.data
      })
      } catch (error) {
        console.log(error)
      }
    
    }


    const crearResenia = async (datos) => {
      try {
        const respuesta = await clienteAxios.post('/reseniaController.php', datos)
        dispatch({
        type: RESENIA_CREADA,
        payload: respuesta.data
        })
      } catch (error) {
        console.log(error)
      }
    }

    const solicitudSubscripcion = async (datos) => {
      try {
        const respuesta = await clienteAxios.post('/subscripcionController.php', datos)
        dispatch({
          type: SOLICITUD_SUBSCRIPCION,
          payload: respuesta.data.status
        })
        
      } catch (error) {
        console.log(error)
      }
    }

      const editarPlato = async (datos) => {
      try {
        const respuesta = await clienteAxios.post("/restauranteController.php", datos)
        dispatch({
          type: EDITAR_PERFIL,
          payload: respuesta.data.status
        })
       
      } catch (error) {
        console.log(error)
      }
    }

    const editarPerfil = async (datos) => {
      try {
        const respuesta = await clienteAxios.post("/usuarioController.php", datos)
        dispatch({
          type: EDITAR_PLATO,
          payload: respuesta.data.status
        })
        
      } catch (error) {
        console.log(error)
      }
    }

      const editarDescuento = async(datos) => {
        try {
           const respuesta = clienteAxios.post('/restauranteController.php', datos)
            dispatch({
          type: EDITAR_DESCUENTO,
          payload: respuesta.data.status
        })
        } catch (error) {
          console.log(error)
        }
       

        
    }


const crearAlojamiento = async (datos) => {
  try {
      const respuesta  = await clienteAxios.post("/turistaController.php", datos)
  dispatch({
    type: ALOJAMIENTO_CREADO,
    payload: respuesta.data.status
  })
  } catch (error) {
    console.log(error)
  }

}

const turistaVisitaRest = async(datos) => {
try {
   const respuesta = await clienteAxios.post("/turistaController.php", datos)
  dispatch({
    type: TURISTA_VISITA,
    payload: respuesta.data.status
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
                crearDescuento,
                crearResenia,
                solicitudSubscripcion,
                editarPerfil,
                editarPlato,
                editarDescuento,
                crearAlojamiento,
                turistaVisitaRest
            }}>

            {children}

        </todoContext.Provider>
    )
}

export default TodoState;