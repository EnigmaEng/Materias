import todoContext from "./todoContext"
import { useState, useContext } from "react"
import clienteAxios from "../config/axios"


const menuData = () => {

const [platos, setPlatos] = useState([])

const TodoContext = useContext(todoContext)
const {usuario} = TodoContext

    const getPlatos = async () => {
      const accion = {
        "accion": "obtenerPlatos",
        "id_usuario_rest": usuario.id_usuario
      }
      const endpoint = '/restauranteController.php'
      const URL = clienteAxios.post(endpoint, accion)
      const res = await URL
      setPlatos(res.data)
    }


  return {
getPlatos,
platos,

};
}

export default menuData;