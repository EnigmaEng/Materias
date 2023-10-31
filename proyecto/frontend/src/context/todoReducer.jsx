import { REGISTRO_EXITOSO, PLATO_CREADO,  REGISTRO_ERROR, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, RESENIA_CREADA, USUARIO_AUTENTICADO, CERRAR_SESION, DESCUENTO_CREADO, SOLICITUD_SUBSCRIPCION } from "../types/types.jsx";


export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
        case PLATO_CREADO:
        case DESCUENTO_CREADO:
        case RESENIA_CREADA:
        case SOLICITUD_SUBSCRIPCION:
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