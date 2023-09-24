import { REGISTRO_EXITOSO, REGISTRO_ERROR, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, USUARIO_AUTENTICADO, CERRAR_SESION } from "../types/types";


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
                mensaje: null,
                
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
            
            }
        case CERRAR_SESION:
            localStorage.removeItem('token');
            return {
                ...state,
                usuario: null,
                token: null,
                autenticado: null
            }
        default:
            return state;
    }
}