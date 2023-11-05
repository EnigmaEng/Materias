
import clienteAxios from "../config/axios"
import { useState } from "react"

const restauranteData = () => {
  const endpoint = '/restauranteController.php';
  const data = {
    "accion": "obtenerRestaurantes"
  }
  const URL = clienteAxios.post(endpoint, data)
     
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
        if(res.data){

        const datosFiltrados = res.data.filter(item =>
        item.nombre_restaurante.toLowerCase().includes(busqueda.toLowerCase())
    ); //filtra los datos de la api basabdose en la busqueda del usuario

        const slicedData = datosFiltrados.slice(startIndex, endIndex);  // crea un nuevo array tomando datosFiltrados que va desde startIndex hasta endIndex

        setProduct(slicedData);  // actualiza el valor product con los datos filtrados y paginados 
    }else{
        console.log("Error para leer los datos de restaurante")
    }
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
    };
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