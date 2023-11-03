import { useFormik } from 'formik'
import * as Yup from 'yup';
import NavBar from '../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi'
import Mensaje from '../../../components/alertas/Mensaje';
import { useContext } from 'react';
import todoContext from '../../../context/todoContext';
const EditarPerfi = () => {

const {mensaje, editarPerfil ,usuario, imagenBase64} = useContext(todoContext)


 const formik = useFormik({
        initialValues: {
            alias: '',
            contrasena: '',
            url_img_usuario: ''
        },
        

onSubmit: async(valores, { resetForm }) => {
    const data = {
    accion: "modificarUsuario",
    id_usuario: usuario?.id_usuario,
    };

    if (valores.alias !== "") {
    data.alias = valores.alias;
    }

    if (valores.contrasena !== "") {
    data.contrasena = valores.contrasena;
    }

    if (valores.url_img_usuario !== "") {
        const file = valores.url_img_usuario;
        try {
        const base64Image = await imagenBase64(file);
        data.url_img_usuario = base64Image;
        } catch (error) {
            console.log("Error al cargar la foto: " , error)
        }
    }

    if (Object.keys(data).length > 2) { //ver si hay cambios excepto el accion y el id
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
    <label htmlFor="" className='font-aref font-semibold text-center'><span className='text-gray-400 text-lg '>Alias: {usuario?.alias}</span></label>
    <input type="text" placeholder='alias' className='placeholder:italic px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='alias' value={formik.values.alias} onChange={formik.handleChange} autoComplete="off" />
</div>
<div className='form-control'>
    <label htmlFor="" className='font-aref font-semibold text-center'><span className='text-gray-400 text-lg '>Contraseña: </span></label>
    <input type="password" placeholder='contraseña' className='placeholder:italic px-3 py-1 rounded-md bg-gray-100 md:w-9/12 m-auto text-black border border-wwe' id='contrasena' value={formik.values.contrasena} onChange={formik.handleChange} autoComplete="off" />
</div>
<div className='form-control flex justify-center items-center'>
    <label htmlFor="" className='text-gray-400 text-lg ml-2  font-semibold font-aref'>Foto de perfil:</label>
 <input
  type="file"
  id="url_img_usuario"
  name="imagen"
  accept="image/*"
  onChange={(event) => {
    formik.setFieldValue("url_img_usuario", event.currentTarget.files[0]);
  }}
  onBlur={formik.handleBlur}
  className="file-input file-input-ghost w-full max-w-xs  text-wwe border border-wwe  mt-2"
/>
</div>
<div className='flex items-center justify-center'>
     <button className=' md:w-64 hover:bg-red-600 px-3 py-1 text-3xl bg-wwe rounded-lg text-white' type='submit'>Editar</button>
</div>
   
  </form> 
        </div>

    </div>
  
     
    </>
  )
}

export default EditarPerfi