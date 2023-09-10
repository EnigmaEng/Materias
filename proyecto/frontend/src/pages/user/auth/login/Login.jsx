import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import todoContext from "../../../../context/todoContext";
import { useContext, useEffect } from "react";
import Mensaje from '../../../../components/alertas/Mensaje'
import HomeAuth from "../home/HomeAuth";
const Login = () => {

const Todocontext = useContext(todoContext)
const { iniciarSesion, mensaje , autenticado} = Todocontext;

const navigate = useNavigate();

useEffect(() => {
if(autenticado){
  navigate("/homeAuth");
}
},[autenticado])
    
const formik = useFormik({
  initialValues: {
    email: '',
    contrasena: ''
  },
  validationSchema: Yup.object({
    email: Yup.string().email("El campo debe ser un email.").required("Campo obligatorio."),
    contrasena: Yup.string().required("Campo obligatorio.")
  }),
  onSubmit: async (valores) => {
   
const userData = {
  "accion": "loginTurista",
  email: valores.email,
  contrasena: valores.contrasena
}
iniciarSesion(userData)

  }
})


  return (
    <>
  
  
  
      <div className=" flex   justify-center h-screen">
<Link to='/'>
<button className="bg-white absolute md:left-96 left-5 md:top-24 top-10 w-20 py-1 border rounded-lg text-black shadow-xl"> Volver
      </button>
</Link>

        <form onSubmit={formik.handleSubmit} className="backdrop-blur   p-4 mt-40 mb-4 h-80 rounded-lg shadow-xl ">

<h2 className="text-center font-bold text-red-800 text-2xl mb-4">Iniciar sesion</h2>
      <div className="flex flex-col mb-4  ">
<div className="" > {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/> }</div>
      <label htmlFor="email" className="text-red-800   px-2 font-bold">Email</label>
      <input type="text" name="" id="email" placeholder="Email.." className="focus:outline-none focus:ring-2 focus:ring-red-800 text-black rounded-full border border-red-800 bg-white md:w-80 py-2 px-4 placeholder:italic" 
      value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />
      {
        formik.touched.email && formik.errors.email && (
          <div className="px-4 text-black"> <p>{formik.errors.email}</p></div>
        ) 
      }
    </div>
    <div className="flex flex-col mb-4">
      <label htmlFor="contrasena" className="px-3 font-bold font-bold text-red-800">Contraseña</label>
      <input type="password" name="" id="contrasena" placeholder="Contraseña.." className="focus:outline-none focus:ring-2 focus:ring-red-800 text-black rounded-full border border-red-800 bg-white md:w-80 py-2 px-4 placeholder:italic" 
      value={formik.values.contrasena} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />{
        formik.touched.contrasena && formik.errors.contrasena && (
          <div className="px-4 text-black"> <p className="">{formik.errors.contrasena}</p></div>
        )
      }
    </div>

    <button type="submit" className="px-4 ml-4 bg-white  py-1 border w-40 rounded-lg text-black font-bold shadow-xl">Ingresar</button>
    </form>
    </div>
   
 
      </>
 
   
    
  )
}

export default Login;