import { useFormik } from 'formik'
import * as Yup from 'yup';
import NavBar from '../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import Mensaje from '../../../components/alertas/Mensaje';
import { useContext } from 'react';
import todoContext from '../../../context/todoContext';
const EditarPerfi = () => {

// const {mensaje} = useContext(todoContext)

const formik = useFormik({
    initialValues: {
        alias: '',
        email: '',
        contrasena: '',
        confirmContrasena:'',
        url_img_usuario:''
    },
    validationSchema: Yup.object({
      confirmContrasena: Yup.string().oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir')
    }),

    onSubmit: valores => {

        const data = {
            "accion": "editPerfil",
            "alias": valores.alias,
            "email": valores.email,
            "contrasena": valores.contrasena,
            "url_img_usuario": valores.url_img_usuario
        }

        

    }
})


  return (
  <>
 
    <div className='min-h-screen text-lg text-wwe  dark:bg-zinc-800 dark:bg-opacity-95   '>
       <NavBar/>
        <Link to='/homeAuth' className='absolute  md:left-24 left-4 top-20 bg-wwe text-white rounded-lg px-6 py-2'>  <BiArrowBack/> </Link>
        <div className='flex flex-col  items-center justify-center'> 
             <h3 className='text-5xl text-center font-semibold font-aref mt-24'>Editar perfil</h3>
  <form onSubmit={formik.handleSubmit} className='bg-white mt-24 space-y-5 md:w-3/12 p-8 rounded-lg' method='POST' >
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold md:ml-16'>Alias:</label>
    <input type="text" className='px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='alias' value={formik.values.alias} onChange={formik.handleChange} />
</div>
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold md:ml-16'>Email:</label>
    <input type="text" className='px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='email' value={formik.values.email} onChange={formik.handleChange}  />
</div>
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold md:ml-16'>Contrasena:</label>
    <input type="text" className='px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='contrasena' value={formik.values.contrasena} onChange={formik.handleChange}  />
</div>
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold md:ml-16'>Repetir Contrasena:</label>
    <input type="text" className='px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe'  id='confirmContrasena' onBlur={formik.handleBlur}  />
      {
        formik.touched.confirmContrasena && formik.errors.confirmContrasena ? (
          <div> <p className='text-lg px-5  flex text-wwe'>{formik.errors.confirmContrasena} <span className='py-1.5 px-2'><FiAlertCircle/></span></p></div> ) : (null)
        }
</div>
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold md:ml-16'>Foto de perfil:</label>
    <input type="text" className='px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='url_img_usuario' value={formik.values.url_img_usuario} onChange={formik.handleChange}/>
</div>
<div className='flex items-center justify-center'>
     <button className=' md:w-64 hover:bg-red-600 px-3 py-1 bg-wwe rounded-lg text-white' type='submit'>Editar</button>
</div>
   
  </form> 
        </div>

    </div>
    </>
  )
}

export default EditarPerfi