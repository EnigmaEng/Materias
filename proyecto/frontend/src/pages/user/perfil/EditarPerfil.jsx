import { useFormik } from 'formik'
import * as Yup from 'yup';
import NavBar from '../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import Mensaje from '../../../components/alertas/Mensaje';
import { useContext } from 'react';
import todoContext from '../../../context/todoContext';
const EditarPerfi = () => {

const {mensaje, editPerfil ,usuario} = useContext(todoContext)

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

   onSubmit: (valores, { resetForm }) => {
    const formData = new FormData();
    formData.append("accion", "editarUsuario");
    formData.append("id_usuario", usuario?.id_usuario); 

    let opcion = "";
    let valor = "";

  
    switch (true) {
        case valores.alias !== usuario?.alias:
            opcion = "alias";
            valor = valores.alias;
            break;
        case valores.email !== usuario?.email:
            opcion = "email";
            valor = valores.email;
            break;
        case valores.contrasena:
            opcion = "contrasena";
            valor = valores.contrasena;
            break;
        case valores.url_img_usuario !== '':
            opcion = "url_img_usuario";
            valor = valores.url_img_usuario;
            break;
        default:
           
            break;
    }

    if (opcion !== '' && valor !== '') {
        formData.append("opcion", opcion);
        formData.append("valor", valor);
      
        editPerfil(formData);
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
             {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/>}
  <form onSubmit={formik.handleSubmit} className='bg-white mt-24 space-y-5 md:w-3/12 p-8 rounded-lg' method='POST' encType="multipart/form-data" >
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold text md:ml-16'><span className='text-gray-400 text-lg ml-2'>{usuario?.alias}</span></label>
    <input type="text" placeholder='alias' className='placeholder:italic px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='alias' value={formik.values.alias} onChange={formik.handleChange} />
</div>
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold text-lg md:ml-16'>
    <span className='text-gray-400 text-lg ml-2'>{ usuario?.email}</span>
    </label>
    <input type="text" placeholder='email' className='placeholder:italic px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='email' value={formik.values.email} onChange={formik.handleChange}  />
</div>
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold md:ml-16'><span className='text-gray-400 text-lg ml-2'>********</span></label>
    <input type="text" placeholder='contraseña' className='placeholder:italic px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='contrasena' value={formik.values.contrasena} onChange={formik.handleChange}  />
</div>
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold md:ml-16'> <span className='text-gray-400 text-lg ml-2'>Confirmar contraseña</span></label>
    <input type="text" placeholder='confirmar contraseña ' className='placeholder:italic px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe'  id='confirmContrasena' onBlur={formik.handleBlur}  />
      {
        formik.touched.confirmContrasena && formik.errors.confirmContrasena ? (
          <div> <p className='text-lg px-5  flex text-wwe'>{formik.errors.confirmContrasena} <span className='py-1.5 px-2'><FiAlertCircle/></span></p></div> ) : (null)
        } 
</div>
{/* <div className='form-control'>
    <label htmlFor="" className='text-gray-400 text-lg ml-2 md:ml-16 font-semibold font-aref'>Foto de perfil:</label>
    <input type="file" className='px-3 py-1 ml-12' id='url_img_usuario' name='imagen' value={formik.values.url_img_usuario} onChange={(event) => {formik.setFieldValue("imagen", event.currentTarget.files[0]) }}/>
</div> */}
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