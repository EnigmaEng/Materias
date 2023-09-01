import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import todoContext from "../../../../context/todoContext";
import { useContext, useEffect } from "react";
import Mensaje from '../../../../components/alertas/Mensaje'
import HomeAuth from "../home/HomeAuth";
const Login = () => {

const Todocontext = useContext(todoContext)
const { iniciarSesion, mensaje, autenticado, usuario } = Todocontext;

    
const formik = useFormik({
  initialValues: {
    email: '',
    contrasena: ''
  },
  validationSchema: Yup.object({
    email: Yup.string().email("El campo debe ser un email.").required("Campo obligatorio."),
    contrasena: Yup.string().required("Campo obligatorio.")
  }),
  onSubmit: async (valores, {resetForm}) => {
   const dataUser =  {
      "accion": "loginTurista",
      email: valores.email,
      contrasena: valores.contrasena
    };

   ;
    const loginExitoso = await iniciarSesion(dataUser);
     if(loginExitoso){
      resetForm();
      history.push('/AuthDesk');
    }
  }
})


  return (
    <>
     {
     autenticado ? (
     <> 
     <HomeAuth/> 
     </>
     ) : ( 
      
      <> 
      <div className=" bg-white fixed h-full w-full flex justify-center ">

      
        <form onSubmit={formik.handleSubmit}>

<div> {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/> }</div>
      <div className="flex flex-col mb-4 mt-40">

      <label htmlFor="email" className="text-black   px-2 font-bold">Email</label>
      <input type="text" name="" id="email" placeholder="Email.." className="text-black rounded-full border border-red-800 bg-white md:w-80 py-2 px-4 placeholder:italic" 
      value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />
      {
        formik.touched.email && formik.errors.email && (
          <div className="px-4"> <p>{formik.errors.email}</p></div>
        ) 
      }
    </div>
    <div className="flex flex-col mb-4">
      <label htmlFor="contrasena" className="px-3 font-bold font-bold text-black">Contraseña</label>
      <input type="password" name="" id="contrasena" placeholder="Contraseña.." className=" text-black rounded-full border border-red-800 bg-white md:w-80 py-2 px-4 placeholder:italic" 
      value={formik.values.contrasena} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />{
        formik.touched.contrasena && formik.errors.contrasena && (
          <div className="px-4"> <p className="">{formik.errors.contrasena}</p></div>
        )
      }
    </div>
    <button type="submit" className="px-4 ml-4 hover:scale-125 transition-all duration-300 delay-150 py-1 border w-40 rounded-lg text-black font-bold shadow-xl">Ingresar</button>
    </form>
    </div>
      </>
      )
     }
     </>
  )
}

export default Login;