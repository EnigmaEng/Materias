import DarkMode from "../../Buttons/DarkMode";
import { Link } from "react-router-dom";
import Image from '../../../assets/logo-white.png'
import { CgProfile } from "react-icons/cg";
import { SlLogout } from "react-icons/sl";
import { BsFilterSquare } from "react-icons/bs";
const TuristaMobile = () => {
    

  return (
<>
<div className="bg-wwe navbar bg-local w-full ">
  <DarkMode/>
     <Link to='/homeAuth' className='m-auto w-14  '>  
    <img src={Image} alt="logo" className=''/>
    </Link>
   <div className="flex-none ">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle avatar w-14">
        <div className="rounded-full ">
          <img src='https://cdn.pixabay.com/photo/2015/10/05/22/37/blank-profile-picture-973460_960_720.png' className='w-14 rounded-full' />
        </div>
      </label>
      <ul tabIndex={0} className="z-10 px-4 py-4 z dropdown-content mt-3 border bg-white rounded-box w-40">
        <li className=' hover:bg-gray-200 rounded-lg p-2'>
          <Link to='/perrfilTurista' className="gap-2 text-center w-40 text-black flex">
         Perfil 
          </Link>
        </li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link to='/configuracionTurista' className='text-black flex gap-4'> Editar perfil</Link></li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><button onClick={() => cerrarSesion()}  className='text-black flex gap-4  w-24'> <div className='mt-1'>
          <SlLogout/> </div> Salir </button></li>
      </ul>
    </div>
  </div>

</div>

      
</>
)
}

export default TuristaMobile;