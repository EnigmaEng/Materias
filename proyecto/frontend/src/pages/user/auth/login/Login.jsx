import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import todoContext from "../../../../context/todoContext";
import { useContext, useEffect } from "react";
import Mensaje from '../../../../components/alertas/Mensaje'
import HomeAuth from "../home/HomeAuth";
import {BiArrowBack} from 'react-icons/bi';
import DarkMode from "../../../../components/Buttons/DarkMode";
import Image from '../../../../assets/logo-producto.png'
const Login = () => {

const Todocontext = useContext(todoContext)
const { usuario, iniciarSesion, mensaje , autenticado} = Todocontext;

const navigate = useNavigate();

useEffect(()=>{
  if(autenticado){
      navigate('/homeAuth')
    }
},[autenticado])
    

    
const formik = useFormik({
  initialValues: {
    email: '',
    contrasena: ''
  },
  validationSchema: Yup.object({
    email: Yup.string().required("Campo obligatorio."),
    contrasena: Yup.string().required("Campo obligatorio.")
  }),



  onSubmit:  (valores) => {
const userData = {
  "accion": "login",
  email: valores.email,
  contrasena: valores.contrasena
}
iniciarSesion(userData)
  }
})


  return (
    <>
 {
  usuario ? (<HomeAuth/>) : (
  <> 
 <div className="flex min-h-screen dark:bg-opacity-80 dark:bg-zinc-800 flex-col justify-center bg-white bg-opacity-60  px-6 py-12 lg:px-8">
  <div className="flex-start absolute top-10">
    <DarkMode/>
  </div>
   <Link to='/' className="">
    <button className='bg-wwe md:w-24  rounded-lg right-0 absolute top-10 m-5  px-4 py-1 mt-2 mb-4  md:absolute md:left-80 md:p-10 md:py-3 md:shadow-xl md:shadow-gray-700 md:border-gray-400 text-white'><BiArrowBack/></button>
    </Link>
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {mensaje && <Mensaje mensaje={mensaje} tipo='alerta'/>}
    <img src={Image} alt="logo" className="w-32 m-auto "/>
    <h2 className="mt-10 text-center text-4xl dark:text-white font-bold leading-9 font-aref text-wwe tracking-tight text-gray-900">Iniciar Sesión</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={formik.handleSubmit} method="POST">
      <div>
        <label htmlFor="email" className="block text-lg font-semibold leading-6 text-wwe">Correo</label>
        <div className="mt-2">
          <input id="email" name="" type="email" autoComplete="email" required className="block w-full rounded-md ring-wwe py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
           value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
          />
            {
        formik.touched.email && formik.errors.email && (
          <div className="px-4 text-black"> <p className="">{formik.errors.email}</p></div>
        )
      }
        </div>
      </div>

      <div>
        <div className="flex items-center justify-between">
          <label htmlFor="password" className="block text-lg font-semibold leading-6 text-wwe">Contraseña</label>
          
        </div>
        <div className="mt-2">
          <input id="contrasena" name="" type="password" autoComplete="current-password" required className="block w-full ring-wwe bg-white  px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
           value={formik.values.contrasena} onChange={formik.handleChange} onBlur={formik.handleBlur}
          />
          {
        formik.touched.contrasena && formik.errors.contrasena && (
          <div className="px-4 text-black"> <p className="">{formik.errors.contrasena}</p></div>
        )
      }
        </div>
      </div>

      <div>
        <button type="submit" className="flex w-full justify-center rounded-md bg-wwe px-3 py-1.5 text-sm font-semibold leading-6 text-white shadow-sm hover:bg-red-700 focus-visible:outline-none focus:outline-none  focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-red-700">Ingresar</button>
      </div>
    </form>

    <p className="mt-10 text-center text-xl text-wwe dark:text-white ">
      ¿Eres nuevo?
      <Link to='/registro' className="font-semibold leading-10 font-aref ml-2 text-wwe hover:text-wwe">Registrate</Link>
    </p>
  </div>
</div>
    </>
    )
 }

      

   
  
      </>
  )
}

export default Login;