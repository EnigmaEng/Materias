import { useState, useContext } from "react";
import clienteAxios from "../config/axios";
import todoContext from "./todoContext";



const reseniaData = () => {

    const TodoContext = useContext(todoContext)
    const {usuario} = TodoContext

    const [resenia, setResenia] = useState([])

    const getReseniaById = async () => {

        const endpoint = '/reseniaController.php'
        const accion = {
            "accion": "obtenerReseniaPorId",
            "id_usuario_rest": usuario.id_usuario
        }
        const res = await clienteAxios.post(endpoint, accion)
        setResenia(res.data)
    }

  return {
   getReseniaById,
   resenia
  }
}

export default reseniaData;