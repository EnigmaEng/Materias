import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'

const MenuMb = () => {


      const images = [
  { nombre: "Bolognesa", desc: 'Ravioles con salsa Bolognesa' , precio: 300},
  { nombre: "Americana", desc: 'Pizza de 30 cm, panceta, cheddar', precio: 400 },
  { nombre: "Sushi", desc: '5 rollos Panko', precio: 300 },
  { nombre: "Napolitana con fritas", desc: 'Napolitana para dos personas con papas fritas o rusticas', precio: 600 },
];

  return (
    <div className='min-h-screen space-y-10 pb-10  dark:bg-zinc-800 dark:bg-opacity-95'>
        <div className='fiex w-full '>
          <NavBar/>
        </div>
        
        
        <div className='p-4 bg-white m-4  rounded-box shadow-xl'>
            <p className='text-center text-wwe  font-aref font-bold text-3xl mb-5'>Menu</p>
      
        <div className='grid grid-cols-1 gap-4'>
{
    images.map((item, index) => (
        <div className='border w-64 m-auto p-4 text-black shadow-xl rounded-box text-center' key={index}>
        <p className='font-bold mb-2'>{item.nombre}</p>
      
          <p> {item.precio}$</p>
        <p>{item.desc}</p>  
        
        
        </div>
    ))
}
        </div>
          </div>
        </div>
  )
}

export default MenuMb