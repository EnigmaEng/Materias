import React from 'react'
import { Link } from 'react-router-dom'
import ButtonMb from '../Buttons/ButtonMb'
const NavBarMb = () => {
  return (

    <div className='p-4 absolute  bottom-0 backdrop-blur-xl shadow-xl shadow-white w-full  flex items-center justify-center gap-10'>
      
      <Link to='/rolLogin'> 
        <ButtonMb >Ingresar</ButtonMb>
      </Link>
    <Link to='/rolRegistro'> 
        <ButtonMb >Registrarse</ButtonMb>
      </Link>
    </div>
  )
}

export default NavBarMb