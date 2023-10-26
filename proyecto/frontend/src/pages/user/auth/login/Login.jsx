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
 <div className="flex min-h-screen dark:bg-opacity-80 dark:bg-zinc-800 flex-col justify-center px-6 py-12 lg:px-8">
  <div className="flex-start absolute top-10">
    <DarkMode/>
  </div>
  <div className="sm:mx-auto sm:w-full sm:max-w-sm">
    {mensaje && <Mensaje mensaje={mensaje} tipo='alerta'/>}
    <img src={Image} alt="logo" className="w-32 m-auto "/>
    <h2 className="mt-10 text-center text-4xl dark:text-white font-bold leading-9 font-aref text-wwe tracking-tight text-gray-900">Inicia sesion</h2>
  </div>

  <div className="mt-10 sm:mx-auto sm:w-full sm:max-w-sm">
    <form className="space-y-6" onSubmit={formik.handleSubmit} method="POST">
      <div>
        <label for="email" className="block text-sm font-medium leading-6 text-white">Correo</label>
        <div className="mt-2">
          <input id="email" name="" type="email" autocomplete="email" required className="block w-full rounded-md ring-wwe py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
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
          <label for="password" className="block text-sm font-medium leading-6 text-white">Contraseña</label>
          <div className="text-sm">
            <a href="#" className="font-semibold text-wwe dark:text-white hover:text-wwe">Olvidaste tu contraseña?</a>
          </div>
        </div>
        <div className="mt-2">
          <input id="contrasena" name="" type="password" autocomplete="current-password" required className="block w-full ring-wwe bg-white  px-3 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6" 
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

    <p className="mt-10 text-center text-xl text-wwe dark:text-white">
      Eres nuevo?
      <Link to='/' className="font-semibold leading-10 font-aref ml-2 text-wwe hover:text-wwe">Registrate</Link>
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