import clienteAxios from "../config/axios";
import todoContext from "./todoContext"
import { useContext, useState } from "react"

const subscripcionData = () => {

const {usuario, solicitudSubscripcion } = useContext(todoContext)


const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 al mes ya que en JavaScript los meses van de 0 a 11
const day = today.getDate().toString().padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

const subscripcion = async (datos)  => {
try {
     const data  = {
        "accion": "comprarSubscripcion",
        "id_usuario_rest": usuario.id_usuario,
        "idTipoSubs": datos,
        "fechaPago": formattedDate
    }
    solicitudSubscripcion(data)
    
} catch (error) {
    console.log(error)
}
   
}

return {

    subscripcion,
    
  }
}

export default subscripcionData