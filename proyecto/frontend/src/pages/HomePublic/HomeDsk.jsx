import DarkMode from "../../components/Buttons/DarkMode";
import { Link } from "react-router-dom";
import Image from "../../assets/logo-white.png";
import AOS from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from "react";
import Video from '../../assets/video-fondo.mp4'
const HomeDsk = () => {


  useEffect(() => {
    AOS.init({ 
      duration: 1700, // Duración de la animación en milisegundos
    });
  }, []);

  return (
  <>
<div className="flex w-full ">

  <video
    autoPlay
    loop
    muted
    className="absolute  inset-0 w-full h-full object-cover"
  >
    <source src={Video}  type="video/mp4" />
    
  </video>

  <div className="z-10 flex flex-col w-6/12 flex-grow bg-zinc-800 bg-opacity-60 place-items-center gap-5 py-52 min-h-screen ">
   
   <div data-aos="fade-down" className="flex flex-col justify-center items-center">
     <h1 className="text-6xl text-white font-aref font-semibold mb-4 ">WHERE WE EAT</h1>
     </div>
     <div>
           <img src={Image} alt="" className="w-40 mb-20"/>
     </div>
   
   
   <div data-aos="fade-right">
      <h2 className="text-4xl text-white font-aref font-semibold">BIENVENIDO!</h2>
   </div>

  

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