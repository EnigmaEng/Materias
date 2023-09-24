
import { Link } from 'react-router-dom'

const ItemList = () => {
  return (
    <div className='border w-64 rounded-lg'>
        
        <img src="" alt="logo-restaurante" className='border w-full h-40 m-auto '/>
    <h2 className='text-4xl mt-3 text-black text-center'>Nombre</h2>
<p className='text-center mt-2'>Descripcion</p>
<div className='flex justify-center gap-5 mt-5 pb-4 '>
    <Link to='/'>
     <button className='px-4 py-1 w-24 rounded-lg border'>Ver </button>
    </Link>
   <Link to='/'>
       <button className='px-4 py-1 w-24 rounded-lg border'>Calificar</button>
   </Link>

</div>
    </div>
  )
}

export default ItemList