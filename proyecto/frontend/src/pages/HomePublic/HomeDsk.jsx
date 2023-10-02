import DarkMode from "../../components/Buttons/DarkMode";
import NavBarDsk from "../../components/nabvar/NavBarDsk";
import { Link } from "react-router-dom";
import Image from "../../assets/logo-white.png";

const HomeDsk = () => {
  return (
  <>
<div className="flex w-full ">
  <div className="flex flex-col w-6/12 flex-grow dark:bg-zinc-800 bg-wwe bg-opacity-75 dark:text-white   place-items-center gap-5 py-52 min-h-screen ">
    <div className="absolute top-10 left-10">
       <DarkMode/>
    </div>
   
    <h1 className="text-6xl text-white font-aref mb-4 italic">Where we eat</h1>
        <img src={Image} alt="" className="w-28 mb-20"/>
  <h2 className="text-3xl text-white font-aref">Bienvenido!</h2>
    {/* <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="" className="w-28" /> */}

    <div className="flex gap-5">
      <Link to='/login'>
      <button className=" bg-white font-bold text-black text-2xl px-4 py-1 shadow-xl  rounded-box w-52 dark:bg-wwe dark:text-white ">Iniciar sesion</button>
      </Link>
      <Link to='/registro'>
        <button className="font-bold text-black bg-white  shadow-xl text-2xl px-4 py-1 rounded-box w-52 dark:bg-wwe dark:text-white">Registrarse</button>
        </Link>
    </div>
  </div>
  
</div>
 
  </>
    
  )
}

export default HomeDsk;