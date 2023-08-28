import NavBarDsk from "../../components/nabvar/NavBarDsk";
import { Link } from "react-router-dom";
const HomeDsk = () => {
  return (
  <>
<div className="bg-[url(https://img.freepik.com/premium-photo/mix-vegetables-food-isolated-grey-background_429553-176.jpg?w=2000)]  bg-cover absolute h-full w-full ">

<div className="flex justify-center flex-col">
  <h1 className="text-center text-5xl font-bold text-red-800 mb-8 mt-40">Where We Eat</h1>
 <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo" className='w-28 m-auto rounded-full' />


 
 <div className="flex justify-center mt-8 gap-10 ">

  <Link to='/login'>
  <button className=" bg-white w-60 border border-red-800 px-4  py-2 shadow-xl text-black font-bold rounded-full ">Iniciar sesion</button>
  </Link>
  <Link to='/registro'> 
   <button className="w-60 bg-white border border-red-800 px-4 py-2 shadow-xl text-black font-bold rounded-full ">Registrarse</button>
  </Link>

 </div>
</div>

</div>
    
 
  </>
    
  )
}

export default HomeDsk;