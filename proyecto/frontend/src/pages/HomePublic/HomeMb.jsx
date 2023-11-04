import NavBar from "../../components/nabvar/NavBar";
import '../../App.css'
import { Link } from "react-router-dom";
import Image from "../../assets/logo-white.png";
import DarkMode from "../../components/Buttons/DarkMode";
import Image1 from '../../assets/logo-producto.png'
import Video from '../../assets/video-fondo.mp4'
const HomeMb = () => {
  return (
<>
{/* la clase bg-mb trae una foto del css */}
 <div className="flex min-h-screen relative">
      <video
        autoPlay
        loop
        muted
        className="fixed w-full min-h-screen z-0"
        style={{ objectFit: 'cover' }}
      >
        <source src={Video} type="video/mp4" />
      </video>

      <div className="z-10 flex flex-col flex-grow bg-zinc-800 bg-opacity-60 place-items-center min-h-screen py-24 gap-10">
        <div data-aos="fade-down" className="flex flex-col justify-center items-center">
          <h1 className="text-4xl text-white font-aref font-semibold mb-4">WHERE WE EAT</h1>
        </div>
        <div>
          <img src={Image1} alt="" className="w-40" />
        </div>
        <div data-aos="fade-right">
          <h2 className="text-2xl text-white font-aref font-semibold">BIENVENIDO!</h2>
        </div>
        <div className="flex gap-5">
          <Link to="/login">
            <button className="bg-wwe font-semibold text-white text-2xl px-4 py-1 shadow-xl w-46 rounded-box">
              Iniciar Sesión
            </button>
          </Link>
          <Link to="/registro">
            <button className="font-semibold text-2xl text-white shadow-xl px-4 py-1 rounded-box w-46 bg-wwe">
              Registrarse
            </button>
          </Link>
        </div>
      </div>
    </div>

 
</>
  )
}

export default HomeMb;