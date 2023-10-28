import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom';

const Alojamiento = () => {
  return (
    <div className='min-h-screen'>
        <NavBar/>
        <Link to='/homeAuth' className='px-6 py-1 bg-wwe rounded-lg absolute top-24 left-80 text-white  text-lg'>
        Atras</Link>
        <div className='p-8 rounded-lg shadow-xl  gap-5 mt-28 bg-white max-w-max m-auto'>
            <h2 className='text-3xl font-semibold text-wwe font-aref'>Ingresa donde te estas alojando</h2>
            <form action="" className='mt-5'>
                <div className='form-control '>
                    <label htmlFor="" className='font-semibold font-aref text-wwe text-lg'>Ubicacion: </label>
                    <input type="text" className='border border-wwe input bg-white' placeholder='Direccion' />
                </div>
                <button type='submit' className='px-6 py-1 bg-wwe rounded-lg text-white font-semibold text-lg mt-10 hover:bg-red-700'>Ingresar</button>
            </form>
        </div>
    </div>
  )
}

export default Alojamiento;