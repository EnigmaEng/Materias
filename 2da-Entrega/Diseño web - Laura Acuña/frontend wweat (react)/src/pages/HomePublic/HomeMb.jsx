import NavBar from "../../components/nabvar/NavBar";
import '../../App.css'
import { Link } from "react-router-dom";
import ButtonMb from "../../components/Buttons/ButtonMb";
const HomeMb = () => {
  return (
<>

 <div className="h-screen bg-mb py-40 ">
    <aside className="w-full backdrop-blur shadow-xl p-6">

    
      
        <h1 className="text-center  font-bold text-red-800 text-3xl mb-2">WHERE WE EAT</h1>
        <Link to='/'>
          <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo" className='w-28 m-auto rounded-full' />
        </Link>
    
      
      <div className="text-center ">
       
        
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