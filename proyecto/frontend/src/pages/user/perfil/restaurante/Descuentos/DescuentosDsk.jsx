import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar';
import {BiArrowBack} from 'react-icons/bi'
import { Link } from 'react-router-dom';

const DescuentosDsk = () => {
  return (
    <div className='min-h-screen'>
        <NavBar/>
        <Link to='/homeAuth'>
            <button className='bg-wwe  rounded-lg ml-8 px-4 py-1 mt-2 mb-4 top-8 md:absolute md:left-10 md:p-10 md:py-3 md:shadow-xl md:shadow-gray-700 md:border-gray-400 text-white'><BiArrowBack/></button>
            </Link>
        <div className='bg-white w-[40%] m-auto p-2 mt-24 shadow-xl rounded-lg h-64'>      <p className='text-center text-4xl  text-wwe font-semibold'>Descuentos Desktop</p>

        </div>
  
    </div>
  )
}

export default DescuentosDsk