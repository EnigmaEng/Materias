import { useEffect, useState } from "react"
import clienteAxios from "../../config/axios"
import { shuffle } from 'lodash';
const Descuentos = () => {

const [descuentosRandom, setDescuentosRandom] = useState([])

    const descuentosAleatorios = async () => {
      try {
        const accion = {
          "accion": "obtenerDescuentos"
        }
        const respuesta = await clienteAxios.post("/restauranteController.php", accion )

        
        //mezclar todos los datos de descuento para que no tome siempre los primeros
         const shuffledDescuentos = shuffle(descuentosData);
        //  const descuentoSlice  = shuffledDescuentos.slice(2,4)
         const descuentoAleatorio = Math.floor(Math.random() * descuentoSlice.length);
         setDescuentosRandom(respuesta.data)
        console.log(descuentosRandom)
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() =>{
descuentosAleatorios();
    },[descuentosRandom])

  return (
    <>
    <div className="flex w-2/12 bg-white    m-auto  p-8  text-2xl  text-wwe font-aref font-semibold rounded-lg shadox-xl">
    {
       descuentosRandom[0] === "Error en el tipo de accion, intente nuevamente" ? (
            <p>Sin descuentos</p>
        ) :
        descuentosRandom.map((item, index) => (
            <div key={index} className="">
                <p>{item.titulo_descuento}</p>
                <p>{item.descripcion}</p>
            </div>
        ))
    } 
    </div>
    </>
  )
}

export default Descuentos;