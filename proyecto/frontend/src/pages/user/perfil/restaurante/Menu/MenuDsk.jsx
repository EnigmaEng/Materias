import NavBar from '../../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom';
import {MdMenuBook} from 'react-icons/md'
import { useState, useEffect, useContext } from 'react';
import clienteAxios from '../../../../../config/axios';
import todoContext from '../../../../../context/todoContext';
const MenuDsk = () => {

const [platos, setPlatos] = useState([])

const TodoContext = useContext(todoContext)
const {usuario} = TodoContext


console.log(usuario.id_usuario)
const id = usuario.id_usuario

    const getPlatos = async () => {
      const accion = {
        "accion": "obtenerPlatos",
        "id_usuario_rest": id
      }
      const endpoint = '/restauranteController.php'
      const URL = clienteAxios.post(endpoint, accion)
      const res = await URL
      setPlatos(res.data)
    }
    useEffect(() =>{  
    getPlatos();
    },[platos])

  return (
    <div className='min-h-screen space-y-28  dark:bg-zinc-800 dark:bg-opacity-95'> 
    <div className='hidden md:block'>
  <NavBar/>
    </div>
    
    <div className='bg-white w-7/12 m-auto space-y-10 py-8 text-black text-3xl flex flex-col  items-center rounded-box'>
        <div className='flex '>
              <p className='text-5xl text-center text-wwe flex gap-3 font-aref mb-10'>
              
                 <span className='text-wwe'> <MdMenuBook/></span> Tus menus:</p> 
             
        </div>
       
         <div className='grid grid-cols-4 gap-5'>

{
  platos.map((item, index) => (
    <div className='border hover:bg-white bg-zinc-100 shadow-xl w-52 h-72 text-center text-black text-2xl' key={index}>
<p className='text-center py-5  font-aref text-black'>{item.nombre_plato}</p>
<hr />
<img src={item.url_img_menu} alt="foto-plato" className='h-24' />
<div className=' p-2'>
  <p>{item.descripcion}</p>
<p>{item.costo} $</p>
</div>

</div>
  ))
}



         </div>
    </div>
  
   </div>
  )
}

export default MenuDsk;