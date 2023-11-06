import { useEffect, useContext, useState } from 'react';
import NavBar from '../../../../../components/nabvar/NavBar';
import clienteAxios from '../../../../../config/axios';
import todoContext from '../../../../../context/todoContext';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const DescuentoByIdUsuario = () => {

      const {usuario, autenticado} = useContext(todoContext)

    const [descuentoUser, setDescuentoUser] = useState([])

    const getDescuentosById = async() => {

    const accion = {
        'accion': 'obtenerDescuentosByIdUsuario',
        'id_usuario': usuario?.id_usuario
    }
    const respuesta = await clienteAxios.post('/restauranteController.php', accion);
    setDescuentoUser(respuesta.data);
    console.log(respuesta.data)
    }
    
    useEffect(() => {
        if(usuario && usuario.id_usuario && autenticado){
            getDescuentosById();
        }
        
       
    },[descuentoUser, usuario, autenticado])

const settings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 4,
  slidesToScroll: 3,
};

    return (
    <>
 <div className='min-h-screen'>
    <NavBar/>
      <div className='bg-white p-8 w-8/12 m-auto mt-24 shadow-xl rounded-lg'>
        <p className='text-center text-wwe font-aref font-semibold text-2xl'>Tus promociones:</p>
        <Slider {...settings}>
          {descuentoUser.map((item, index) => (
            <div key={index} className='bg-white  shadow-xl mt-5 text-center'>
              <img src={item.url_img_descuento} alt="foto-descuento" className='w-64 m-auto h-24 ' />
              <div className='card-body  p-2'>
            <p className='text-wwe'>{item.id_descuento}</p>
                <p className='text-wwe text-xl font-semibold'>{item.titulo_descuento}</p>
                <p className='text-wwe text-sm '>{item.descripcion}</p>
                <p className='text-wwe font-aref font-semibold'>${item.costo}</p>
              </div>
              <Link to={`/descuentoById/${item.id_descuento}`} className='block bg-wwe w-28 text-white py-1 rounded-lg mx-auto mt-2'>Editar</Link>
            </div>
          ))}
        </Slider>
      </div>
    </div>
    </>
  )
}

export default DescuentoByIdUsuario;