import {useState, useEffect} from 'react'
import NavBar from '../../../../../components/nabvar/NavBar';
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom';
import clienteAxios from '../../../../../config/axios';

const DescuentosDsk = () => {


const [descuentos, setDescuentos] = useState([])

    const getDescuentos = async () => {
      try {
        const accion = {
          "accion": "obtenerDescuentos"
        }
        const respuesta = await clienteAxios.post("/restauranteController.php", accion )
        
        setDescuentos(respuesta.data)
        
      } catch (error) {
        console.log(error)
      }
    }

    useEffect(() =>{
getDescuentos();

    },[])


  return (
    <div className='min-h-screen'>
        <NavBar/>
        <Link to='/homeAuth'>
            <button className='bg-wwe  rounded-lg ml-8 px-4 py-1 mt-2 mb-4 top-8 md:absolute md:left-10 md:p-10 md:py-3 md:shadow-xl md:shadow-gray-700 md:border-gray-400 text-white'><BiArrowBack/></button>
            </Link>
            <div className='bg-white bg-opacity-80 shadow-xl w-[80%] h-auto m-auto rounded-lg mt-24 py-8'>
        
      <p className='text-center  text-3xl font-aref text-wwe font-semibold'>Promociones</p>  
        <div className=' grid grid-cols-2 gap-5  m-auto p-4 '> 
        {
          
              descuentos.map((item,index) => (
                <div className='bg-white h-auto text-center text-black font-aref d w-full text-2xl border rounded-lg rounded-lg flex p-4 ' key={index}>
                  <img src={item.url_img_descuento} alt='foto' className='w-40 border border-white shadow-xl  rounded-box m-auto mt-2 h-40 bg-gray-800 flex '/>
                      <div className='card-body '>
                        <h2 className='text-wwe font-semibold'>Restaurante: {item.nombre}</h2>
                            <h4 className='text-2xl font-semibold '>{item.titulo_descuento}</h4>
                          
                      <p className='text-lg font-aref'>{item.descripcion}</p>
                       <p className='mt-5 font-semibold'>${item.costo}</p>
                       <Link to={`/clientePerfil/${item.id_usuario}`} className='bg-wwe px-3 py-1 text-white font-semibold rounded-lg'>Ver restaurante</Link>
                      </div>
                </div>
              ))
        }

        </div>
       </div>
    </div>
  )
}

export default DescuentosDsk