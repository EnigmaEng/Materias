import DarkMode from "../../Buttons/DarkMode";
import { Link } from "react-router-dom";
import Image from '../../../assets/logo-white.png'
import { CgProfile } from "react-icons/cg";
import { SlLogout } from "react-icons/sl";
import { BsFilterSquare } from "react-icons/bs";
import { useContext } from "react";
import todoContext from "../../../context/todoContext";
const TuristaMobile = () => {
    
  const {usuario, cerrarSesion} = useContext(todoContext)
  return (
<>
<div className="bg-wwe rounded-full relative top-3 flex justify-between  w-[80%] m-auto  shadow-xl ">
  <div className="px-3 py-3">
     <DarkMode/>
  </div>
 
     <Link to='/homeAuth' className='m-auto w-14 ml-14  '>  
    <img src={Image} alt="logo" className=''/>
    </Link>
   <div className="mr-2 ">
    <div className="dropdown dropdown-end">
      <label tabIndex={0} className="btn btn-ghost btn-circle mt-2 shadow-xl">
        <div className="rounded-full ">
          <img src={usuario.url_img_usuario} className='w-12  h-12 rounded-full' />
        </div>
      </label>
      <ul tabIndex={0} className="z-10 px-4 py-4 z dropdown-content mt-3 border bg-white rounded-box w-40">
        <li className=' hover:bg-gray-200 rounded-lg p-2'>
          <Link to='/perfilTurista' className="gap-2 text-center w-40 text-black flex">
         Perfil 
          </Link>
        </li>
        <li className=' hover:bg-gray-200 rounded-lg p-2'><Link to='/editarPerfil' className='text-black flex gap-4'> Editar perfil</Link></li>
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