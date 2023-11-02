import { useFormik } from 'formik'
import * as Yup from 'yup';
import NavBar from '../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import Mensaje from '../../../components/alertas/Mensaje';
import { useContext } from 'react';
import todoContext from '../../../context/todoContext';
const EditarPerfi = () => {

const {mensaje, editarPerfil ,usuario} = useContext(todoContext)

 const formik = useFormik({
        initialValues: {
            alias: '',
            contrasena: '',
            url_img_usuario: ''
        },
        

       onSubmit: (valores, { resetForm }) => {
    const data = {
        accion: "modificarUsuario",
        id_usuario: usuario?.id_usuario,
    };

    if (valores.alias !== "") {
        data.opcion = "alias";
        data.valor = valores.alias;
    }

    if (valores.contrasena !== "") {
        data.opcion = "contrasena";
        data.valor = valores.contrasena;
    }

    if (valores.url_img_usuario !== "") {
        data.opcion = "url_img_usuario";
        data.valor = valores.url_img_usuario;
    }

    // Enviar solo si hay cambios
    if (data.opcion && data.valor) {
        editarPerfil(data);
         resetForm();
    }
   
}

    });


  return (
  <>



    <div className='min-h-screen text-lg text-wwe  dark:bg-zinc-800 dark:bg-opacity-95   '>
       <NavBar/>
        <Link to='/homeAuth' className='absolute  md:left-24 left-4 top-20 bg-wwe text-white rounded-lg px-6 py-2'>  <BiArrowBack/> </Link>
        <div className='flex flex-col  items-center justify-center'> 

             <h3 className='text-5xl text-center font-semibold font-aref mt-24'>Editar perfil</h3>
             {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/>}
  <form onSubmit={formik.handleSubmit} className='bg-white mt-24 space-y-5 md:w-3/12 p-8 rounded-lg' method='POST' encType="multipart/form-data" autoComplete="off">
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold text md:ml-16'><span className='text-gray-400 text-lg ml-2'>Alias: {usuario?.alias}</span></label>
    <input type="text" placeholder='alias' className='placeholder:italic px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='alias' value={formik.values.alias} onChange={formik.handleChange} autoComplete="off" />
</div>
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold md:ml-16'><span className='text-gray-400 text-lg ml-2'>Contraseña: </span></label>
    <input type="password" placeholder='contraseña' className='placeholder:italic px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='contrasena' value={formik.values.contrasena} onChange={formik.handleChange} autoComplete="off" />
</div>
<div className='form-control'>
    <label htmlFor="" className='text-gray-400 text-lg ml-2 md:ml-16 font-semibold font-aref'>Foto de perfil:</label>
    <input type="file" className='px-3 py-1 ml-12' id='url_img_usuario' name='url_img_usuario' value={formik.values.url_img_usuario} onChange={(event) => {formik.setFieldValue("url_img_usuario", event.currentTarget.files[0]) }} autoComplete="off"/>
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