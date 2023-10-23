import React from 'react'
import { useParams } from 'react-router-dom';
import clienteAxios from '../../../../../config/axios';

const PerfilCliente = () => {
const { id_usuario } = useParams(); 

  const [restaurante, setRestaurante] = useState(null);
  
  const getProductById = async() => {
    const endpoint = '/restauranteController.php';
    const accion = {
      "accion": "restauranteById",
      "id_usuario": id_usuario
    }
    const res = await clienteAxios.post(endpoint, accion)
    setRestaurante(res.data)
  }

  useEffect(() => {
    getProductById();
  }, [id_usuario]);

  if (!restaurante) {
    return <p>Cargando...</p>;
  }

  return (
    <div className='bg-wwe min-h-screen'>
      <h2>{restaurante.nombre}</h2>
      
    </div>
  );
}

export default PerfilCliente;