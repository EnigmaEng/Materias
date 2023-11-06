import { REGISTRO_EXITOSO, PLATO_CREADO,  REGISTRO_ERROR, LIMPIAR_ALERTA, LOGIN_ERROR, LOGIN_EXITOSO, RESENIA_CREADA, USUARIO_AUTENTICADO, CERRAR_SESION, EDITAR_PERFIL,EDITAR_PLATO,  DESCUENTO_CREADO, SOLICITUD_SUBSCRIPCION, ALOJAMIENTO_CREADO, EDITAR_DESCUENTO } from "../types/types.jsx";


export default (state, action) => {
    switch (action.type) {
        case REGISTRO_EXITOSO:
        case REGISTRO_ERROR:
        case LOGIN_ERROR:
        case PLATO_CREADO:
        case DESCUENTO_CREADO:
        case RESENIA_CREADA:
        case SOLICITUD_SUBSCRIPCION:
        case EDITAR_PERFIL:
        case EDITAR_PLATO:
        case ALOJAMIENTO_CREADO:
        case EDITAR_DESCUENTO:
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