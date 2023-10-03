import NavBar from "../../components/nabvar/NavBar";
import '../../App.css'
import { Link } from "react-router-dom";
import Image from "../../assets/logo-white.png";
import DarkMode from "../../components/Buttons/DarkMode";
const HomeMb = () => {
  return (
<>
{/* la clase bg-mb trae una foto del css */}
 <div className="min-h-screen   py-32 dark:bg-opacity-95 dark:bg-zinc-800 bg-wwe bg-opacity-75">
  <div className="absolute top-5 right-5">
        <DarkMode/>
  </div>

    <aside className="w-full p-6 ">

  
      
        <h1 className="text-center  font-bold text-white text-4xl mb-8 font-aref  ">WHERE WE EAT</h1>
        <Link to='/'>
        <img src={Image} alt="logo" className="w-24 m-auto mb-10" />
        </Link>
    
      
      <div className="text-center ">
       
        <h3 className="text-2xl text-white font-bold font-aref">
          BIENVENIDO
        </h3>
        <div className="flex items-center justify-center mt-3 gap-5">
          <Link to='/login'>
            <button className="rounded-full border hover:bg-gray-300  py-1 shadow-xl shadow-gray-900 w-40 bg-white active:outline-none active:ring-1 active:ring-red-800 font-bold text-black">Iniciar sesion</button>
          </Link>
          
          <Link to='/registro'>
            <button className="font-bold bg-white rounded-full border  py-1 shadow-xl shadow-gray-900  hover:bg-gray-300 w-40 active:outline-none active:ring-1 active:ring-red-800 text-black">Registrarse</button>
          </Link>
        </div>
      </div>
      
      </aside>
    </div>

 
</>
  )
}

export default HomeMb;