import NavBar from "../../components/nabvar/NavBar";
import '../../App.css'
import { Link } from "react-router-dom";
import ButtonMb from "../../components/Buttons/ButtonMb";
const HomeMb = () => {
  return (
<>

 <div className="">
      <video autoPlay muted loop playsInline preload='none' >
        <source src="https://vod-progressive.akamaized.net/exp=1691995830~acl=%2Fvimeo-prod-skyfire-std-us%2F01%2F242%2F15%2F376213843%2F1569722379.mp4~hmac=d892f51645aac9211e081deae83786bd4b657091b2c7963a7067bca235bf2388/vimeo-prod-skyfire-std-us/01/242/15/376213843/1569722379.mp4" type='video/mp4' />
      </video>
      
      <div className="absolute  top-5 left-1/2 transform -translate-x-1/2 z-10 text-center">
        <h1 className="font-bold text-white text-3xl mb-2">WHERE WE EAT</h1>
        <Link to='/'>
          <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo" className='w-28 m-auto rounded-full' />
        </Link>
      </div>
      
      <div className="absolute top-56 left-1/2 transform -translate-x-1/2 z-10 w-full text-center ">
       
        
        <div className="flex items-center justify-center mt-3 gap-5">
          <Link to='/login'>
            <button className="rounded-full border hover:bg-gray-300  py-1 shadow-xl shadow-gray-900 w-40 bg-white active:outline-none active:ring-1 active:ring-red-800 font-bold text-black">Iniciar sesion</button>
          </Link>
          
          <Link to='/registro'>
            <button className="font-bold bg-white rounded-full border  py-1 shadow-xl shadow-gray-900  hover:bg-gray-300 w-40 active:outline-none active:ring-1 active:ring-red-800 text-black">Registrarse</button>
          </Link>
        </div>
      </div>
      
  
    </div>

 
</>
  )
}

export default HomeMb;