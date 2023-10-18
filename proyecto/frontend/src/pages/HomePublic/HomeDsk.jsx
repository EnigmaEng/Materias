import DarkMode from "../../components/Buttons/DarkMode";

import { Link } from "react-router-dom";
import Image from "../../assets/logo-white.png";

const HomeDsk = () => {
  return (
  <>
<div className="flex w-full ">

  <video
    autoPlay
    loop
    muted
    className="absolute  inset-0 w-full h-full object-cover"
  >
    <source src='https://vod-progressive.akamaized.net/exp=1697646742~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F4025%2F22%2F570129414%2F2695036822.mp4~hmac=c1395630576783b2cea742fe736a28d6cce0f86773d587ebf0afef73590914c5/vimeo-prod-skyfire-std-us/01/4025/22/570129414/2695036822.mp4?filename=file.mp4' type="video/mp4" />
    
  </video>

  <div className="z-10 flex flex-col w-6/12 flex-grow dark:bg-zinc-800 bg-wwe bg-opacity-50 dark:text-white dark:bg-opacity-60  place-items-center gap-5 py-52 min-h-screen ">
    <div className="absolute top-10 left-10">
       <DarkMode/>
    </div>
   
    <h1 className="text-6xl text-white font-aref mb-4 ">WHERE WE EAT</h1>
        <img src={Image} alt="" className="w-40 mb-20"/>
  <h2 className="text-3xl text-white font-aref">BIENVENIDO!</h2>
  

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