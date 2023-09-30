
import axios from "axios";
import clienteAxios from "../config/axios"
import { useState } from "react"

const restauranteData = () => {
    
    const URL = axios.get('http://127.0.0.1:8080/controllers/restauranteController.php'); //clienteAxios.get('/restauranteController.php');
    const [pagina, setPagina] = useState(1);
    const [busqueda, setBusqueda] = useState('');
    const [buscando, setBuscando] = useState(false);
    const itemsPorPagina = 4;  //la cantidad de productos que quiero mostrar en una pagina 
    const [product, setProduct] = useState([]);
    const startIndex = (pagina - 1) * itemsPorPagina; //es el primer indice del primer elemento que mostrara
    const endIndex = startIndex + itemsPorPagina;  //el indice del elemento DESPUES del ultimo elemento que mostrara
    const itemsTotales = 4;  //la cantidad de productos totales que trae la api
    
  

    const getProduct = async () => {
    try {
        const res = await URL;  //realiza la solicitud a la api y guarda la respuesta en res
        const datosFiltrados = res.data.filter(item =>
        item.nombre_restaurante.toLowerCase().includes(busqueda.toLowerCase())
    ); //filtra los datos de la api basabdose en la busqueda del usuario
        
        const slicedData = datosFiltrados.slice(startIndex, endIndex);  // crea un nuevo array tomando datosFiltrados que va desde startIndex hasta endIndex

        setProduct(slicedData);    // actualiza el valor product con los datos filtrados y paginados
    } catch (error) {
        console.log(error);
    }


    };

    //pagina es el valor del estado que esta en ese momento 
 
    const handlePaginaSiguiente = () => {
    setPagina(pagina + 1);  //actualiza el valor pagina con el valor pagina + 1
    };    

    const handlePaginaAnterior = () => {
    if (pagina > 1) {    //el valor pagina debe ser mas grande que uno, osea debe haber pasado ya a la siguiente pagina para utilizar esta funcion

        setPagina(pagina - 1); //actualiza la funcion setPagina con el valor pagina - 1
    }
    };

return {
    pagina,
    setPagina,
    busqueda,
    setBusqueda,
    buscando,
    setBuscando,
    itemsPorPagina,
    product,
    itemsTotales,
    getProduct,
    handlePaginaSiguiente,
    handlePaginaAnterior,
};

}

export default restauranteData;