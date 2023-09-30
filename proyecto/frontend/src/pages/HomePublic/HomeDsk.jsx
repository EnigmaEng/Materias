import NavBarDsk from "../../components/nabvar/NavBarDsk";
import { Link } from "react-router-dom";
const HomeDsk = () => {
  return (
  <>
<div className="flex w-full ">
  <div className="flex flex-col w-6/12  flex-grow  bg-gradient-to-b from-red-900 to-red-700 place-items-center gap-5 py-52">
    <h1 className="text-6xl text-white font-aref mb-24 italic">Where we eat</h1>
  <h2 className="text-3xl text-white font-aref">Bienvenido!</h2>
    {/* <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="" className="w-28" /> */}
    <div className="flex gap-5">
      <Link to='/login'>
      <button className=" bg-white font-bold text-black text-2xl px-4 py-1 shadow-xl border rounded-box w-52  ">Iniciar sesion</button>
      </Link>
      <Link to='/registro'>
        <button className="font-bold text-black bg-white border shadow-xl text-2xl px-4 py-1 rounded-box w-52">Registrarse</button>
        </Link>
    </div>
  </div>
  <div className="grid min-h-screen flex-grow w-6/12 bg-mb place-items-center ">
  
  </div>
</div>
 
  </>
    
  )
}

export default HomeDsk;