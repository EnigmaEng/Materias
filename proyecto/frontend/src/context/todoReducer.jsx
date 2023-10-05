import { REGISTRO_EXITOSO, REGISTRO_ERROR, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO, CERRAR_SESION } from "../types/types.jsx";


export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
      
            return {
                ...state,
                mensaje: action.payload
            }
        case LOGIN_EXITOSO:

            return {
                ...state,
                autenticado: true,
                usuario: action.usuario
                
            }
        case LIMPIAR_ALERTA:
            return {
                ...state,
                mensaje: null 

            }
        case USUARIO_AUTENTICADO:
            return {
                ...state,
                usuario: action.payload,
                autenticado:true
            }
        case CERRAR_SESION:
            localStorage.removeItem('token');
             localStorage.removeItem('usuarioData');
            return {
                ...state,
                usuario: null,
                token: null,
                autenticado: false
            }

        default:
            return state;
    }
}