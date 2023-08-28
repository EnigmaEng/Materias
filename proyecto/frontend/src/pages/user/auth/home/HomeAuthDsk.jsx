import React from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import Map from '../../../../components/maps/Map'
import '../../../../App.css';
import { Link } from 'react-router-dom';
import ItemList from '../../../../components/list/ItemList';


const HomeAuthDsk = () => {
  return (

   <>
   <div className='flex flex-col bg-white bg-cover  h-min-screen  items-center'>
<aside className='bg-white '>
    <NavBar />
</aside>
      

        
        <div className='mt-10'> 
                <Map />
        </div>
  

        <div className='mt-48 flex  justify-center gap-10 absolute top-80'>
        <div className='w-60 h-32 relative rounded hover:scale-125 transition-all duration-300 delay-150'>
            <Link to='/'>
              <img
                src='https://us.123rf.com/450wm/siraphol/siraphol1911/siraphol191100626/133199081-abstract-blur-restaurant-and-coffee-shop-cafe-interior-for-background.jpg?ver=6'
                className='w-60 h-32 rounded '
                alt='Imagen 1'
              />
            </Link>
            <p className='absolute  inset-0 flex items-center justify-center text-white'>Texto 1</p>
          </div>
          <div className='w-60 h-32 relative rounded hover:scale-125 transition-all duration-300 delay-150'>
              <Link to='/'>
            <img
              src='https://img.freepik.com/foto-gratis/surtido-plano-deliciosa-comida-brasilena_23-2148739179.jpg?w=2000'
              className='w-60 h-32 rounded hover:scale-125 transition-all duration-300 delay-150'
              alt='Imagen 2'
            />
          </Link>
             <p className='absolute inset-0 flex items-center justify-center text-white'>Texto </p>
          </div>
        <div className='w-60 h-32 relative rounded hover:scale-125 transition-all duration-300 delay-150'>
              <Link to='/'>
            <img
              src='https://img.freepik.com/foto-gratis/surtido-plano-deliciosa-comida-brasilena_23-2148739179.jpg?w=2000'
              className='w-60 h-32 rounded hover:scale-125 transition-all duration-300 delay-150'
              alt='Imagen 3'
            />
          </Link>
          <p className='absolute inset-0 flex items-center justify-center text-white'>Texto </p>
        </div>
      
        </div>
       
        <div className='mt-96  p-4  absolute top-80 w-8/12 border shadow-xl rounded-lg'>
        <input type="text" placeholder='Buscar..' className='placeholder:italic border mb-5 w-6/12 ml-64 px-6 py-2 bg-white  rounded-full' />
          <ItemList/>  
        </div>
     
      </div>
    </>
    
   

    
  )
}

export default HomeAuthDsk