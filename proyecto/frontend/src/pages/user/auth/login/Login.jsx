import { Link } from "react-router-dom";
import { useFormik } from "formik";
import * as Yup from 'yup';
import todoContext from "../../../../context/todoContext";
import { useContext } from "react";


const Login = () => {

const Todocontext = useContext(todoContext)
const { iniciarSesion } = Todocontext;


    
const formik = useFormik({
  initialValues: {
    email: '',
    contrasenia: ''
  },
  validationSchema: Yup.object({
    email: Yup.string().email("El campo debe ser un email.").required("Campo obligatorio."),
    contrasenia: Yup.string().required("Campo obligatorio.")
  }),
  onSubmit: valores => {

    console.log(valores);
  }
})


  return (
    <div className="bg-white h-screen ">
      <Link to='/'>
        <button className="px-4 ml-8 mt-5 text-black font-bold border py-2 rounded-lg shadow-xl">Volver</button>
      </Link>
      <main className="flex flex-col md:w-3/12 mt-24 m-auto justify-center border p-4">
        <form onSubmit={formik.handleSubmit}>
        <div className="flex flex-col mb-4">
        <label htmlFor="email" className="text-black   px-2 font-bold">Email</label>
        <input type="text" name="" id="email" placeholder="Email.." className="rounded-full border border-red-800 bg-white md:w-80 py-2 px-4 placeholder:italic" 
        value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur}
        />
        {
          formik.touched.email && formik.errors.email && (
            <div className="px-4"> <p>{formik.errors.email}</p></div>
          ) 
        }
      </div>
      <div className="flex flex-col mb-4">
        <label htmlFor="contrasenia" className="px-3 font-bold font-bold text-black">Contraseña</label>
        <input type="password" name="" id="contrasenia" placeholder="Contraseña.." className="rounded-full border border-red-800 bg-white md:w-80 py-2 px-4 placeholder:italic" 
        value={formik.values.contrasenia} onChange={formik.handleChange} onBlur={formik.handleBlur}
        />{
          formik.touched.contrasenia && formik.errors.contrasenia && (
            <div className="px-4"> <p className="">{formik.errors.contrasenia}</p></div>
          )
        }
      </div>
      <button type="submit" className="px-4 ml-4 hover:scale-125 transition-all duration-300 delay-150 py-1 border w-40 rounded-lg text-black font-bold shadow-xl">Ingresar</button>
      </form>
      </main>
      
    </div>
  )
}

export default Login;