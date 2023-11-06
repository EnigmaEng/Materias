import clienteAxios from "../config/axios"
import { useState } from "react";
const perfilData = () => {


  const [restaurante, setRestaurante] = useState([]);
const [resenia, setResenia] = useState([]);

const [menu, setMenu] = useState([]);

    const getProductById = async (id_usuario) => {
        const accion = {
    "accion": "obtenerRestauranteById",
    "id_usuario": id_usuario
  }
  try {
  const res = await clienteAxios.post('/restauranteController.php', accion)
  
 setRestaurante(res.data);
  } catch (error) {
    console.log(error)
  }
}

const getMenuById = async(id_usuario) => {

  const accion = {
    "accion": "obtenerPlatos",
    "id_usuario_rest": id_usuario
  }
  try {
    const res = await clienteAxios.post('/restauranteController.php',accion)
    setMenu(res.data)
    console.log(res.data)
  } catch (error) {
    console.log(error)
  }
}

const getReseniaById = async (id_usuario) => {
  const endpoint = '/reseniaController.php'
  const accion = {
    "accion": "obtenerReseniaPorId",
    "id_usuario_rest": id_usuario
  }
  try {
    const res = await clienteAxios.post(endpoint, accion)
    setResenia(res.data)
    
  } catch (error) {
    console.log(error)
  }
}


  return{
getProductById,
getReseniaById,
getMenuById,
resenia,
menu,
restaurante
  }
}

export default perfilData;