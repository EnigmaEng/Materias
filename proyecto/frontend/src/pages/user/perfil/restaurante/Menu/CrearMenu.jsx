import {useState, useEffect, useContext} from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import todoContext from '../../../../../context/todoContext';
import Mensaje from '../../../../../components/alertas/Mensaje';
import FooterDsk from '../../../../../components/Footer/FooterDsk';
import Home from '../../../../HomePublic/Home';

const CrearMenu = () => {



const TodoContext = useContext(todoContext)
const {crearPlato, mensaje, usuario, usuarioAutenticado} = TodoContext

useEffect(() => {
  usuarioAutenticado()
},[])


const formik = useFormik({
  initialValues: {
    id_Plato: null, 
    nombre_plato: '',
    costo: '',
    descripcion: '',
    url_img_menu: '',
    estado_plato: '',
    id_usuario_rest: '', 
  },
  validationSchema: Yup.object({
    nombre_plato: Yup.string().required('El campo no puede ir vacío'),
    costo: Yup.number().required('Ingrese un precio válido'),
    descripcion: Yup.string().required('El campo no puede ir vacío'),
    url_img_menu: Yup.string().required('El campo no puede ir vacío'),
    estado_plato: Yup.string().required('El campo no puede ir vacío'),
  }),
  onSubmit: (valores, { resetForm }) => {
    const platoData = {
    accion: "crearPlato",
    id_Plato: null, 
    nombre_plato: valores.nombre_plato,
    costo: valores.costo,
    descripcion: valores.descripcion,
    url_img_menu: valores.url_img_menu,
    estado_plato: 'S',
    id_usuario_rest: usuario.id_usuario, 
  };

    crearPlato(platoData);
    resetForm();
  },
});

  return (
    <>
    {

      usuario && usuario.rol.nombre ? 
 <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95 bg-white bg-opacity-70 '>
      <NavBar/>

      <p>Hola {usuario.id_usuario}</p>
      <h2 className='text-center  text-5xl text-wwe font-bold md:mt-28 mt-20 font-aref'>Crear tu plato</h2>
      <form onSubmit={formik.handleSubmit} className='mb-20 flex flex-col  text-black m-auto md:mt-4 mt-5 justify-center items-center md:py-4 py-4 space-y-10 bg-white max-w-lg rounded-box shadow-xl font-aref text-lg' method='POST' >
      <div> {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/> }</div> 
      <div className='flex flex-col space-y-2 '>
<label htmlFor="" className=''>Foto del plato:</label>
<input type="text" id='url_img_menu' value={formik.values.url_img_menu} onChange={formik.handleChange} onBlur={formik.handleBlur} className='text-black w-80 rounded-lg bg-white border border-wwe ring-2 ring-wwe py-1.5 px-4 ' placeholder='Foto..' />
        </div>
        <div className='flex flex-col'>
<label htmlFor="">Nombre:</label>
<input type="text" id='nombre_plato' value={formik.values.nombre_plato} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-80 px-4 py-1.5 rounded-lg bg-white border border-wwe ring-2 ring-wwe italic' placeholder='Nombre del plato..'/>
        </div>
        <div className='flex flex-col'>
<label htmlFor="" className='ml-14'>Precio del plato:</label>
<div className='flex '>
  <input type="text" id='costo' value={formik.values.costo} onChange={formik.handleChange} onBlur={formik.handleBlur} className='appearance-none w-80 ring-2 ring-wwe border border-wwe py-2 px-4 border border-gray-300 rounded-lg leading-5 ml-14 transition duration-150 ease-in-out sm:text-sm sm:leading-5 custom-number-input bg-white' placeholder='Precio..'/>
<span className='relative right-16 text-white text-lg py-2 px-7 bg-wwe w-16 rounded-md'>$</span>
</div>
        </div>
          <div className='flex flex-col'>
<label htmlFor="">Decripcion del plato:</label>
<textarea type="text" id='descripcion' value={formik.values.descripcion} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-80 md:w-96 h-40 px-4 py-1.5 rounded-lg bg-white border border-wwe ring-2 ring-wwe italic' placeholder='Descripcion'/> 
        </div>
        <button type='submit' className='w-64 md:w-64  px-6  md:py-1 py-2 text-2xl rounded-lg bg-wwe text-white hover:bg-red-700'>Guardar menu</button>
      </form>
            <FooterDsk/>
      </div>
      : 

      <Home/>
    }
   
</>
  )
}

export default CrearMenu;