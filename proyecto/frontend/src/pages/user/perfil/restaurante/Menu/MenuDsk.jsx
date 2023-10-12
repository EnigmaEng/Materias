import NavBar from '../../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom';

const MenuDsk = () => {
  const images = [
  { nombre: "Bolognesa", desc: 'Ravioles con salsa Bolognesa' , precio: 300},
  { nombre: "Americana", desc: 'Pizza de 30 cm, panceta, cheddar', precio: 400 },
  { nombre: "Sushi", desc: '5 rollos Panko', precio: 300 },
  { nombre: "Napolitana con fritas", desc: 'Napolitana para dos personas con papas fritas o rusticas', precio: 600 },
];

  return (
    <div className='min-h-screen space-y-28 bg-white bg-opacity-60 dark:bg-zinc-800 dark:bg-opacity-95'> 
    <div className='hidden md:block'>
      <NavBar/>
    </div>
    
    <div className='bg-white w-7/12 m-auto space-y-10 py-8 text-black text-3xl flex flex-col  items-center rounded-box'>
        <div className=' flex flex-col'>
              <p className='text-5xl text-center font-aref mb-10'>Tus menus:</p> 
              <Link to='/crearMenu' className='w-48  h-12 hover:bg-red-700 ml-5 rounded-lg px-5  mt-2  text-white py-0.5 bg-wwe '>Crear Plato </Link>
        </div>
       
         <div className='grid grid-cols-4 gap-5'>

{
  images.map((item, index) => (
    <div className='border hover:bg-white bg-zinc-100 shadow-xl w-52 h-72 text-center text-black text-2xl' key={index}>
<p className='text-center py-5  font-aref text-black'>{item.nombre}</p>
<hr />
{/* <img src="" alt="foto-plato" className='h-24' /> */}
<div className=' p-2'>
  <p>{item.desc}</p>
<p>{item.precio} $</p>
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