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
const {crearPlato, mensaje, usuario, usuarioAutenticado, imagenBase64} = TodoContext

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
    costo: Yup.number().typeError('Ingrese un precio válido').required('El campo no puede ir vacio'),
    descripcion: Yup.string().required('El campo no puede ir vacío'),
    url_img_menu: Yup.string().required('El campo no puede ir vacío'),
   
  }),
  onSubmit: async (valores, { resetForm }) => {
    const platoData = {
    accion: "crearPlato",
    id_Plato: null, 
    nombre_plato: valores.nombre_plato,
    costo: valores.costo,
    descripcion: valores.descripcion,
    // url_img_menu: valores.url_img_menu,
    estado_plato: 'S',
    id_usuario_rest: usuario?.id_usuario, 
  };

  if(valores.url_img_menu){
    const file = valores.url_img_usuario;

    try {
      const base64Image = await imagenBase64(file);
      data.url_img_usuario = base64Image;


    crearPlato(platoData);
    
    
    } catch (error) {
      console.log("error al subir la foto: ", error)
    }
      resetForm();
  }

 
  },
});

  return (
    <>
    {

      usuario && usuario.rol.nombre ? 
 <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95  '>
      <NavBar/>

      <form onSubmit={formik.handleSubmit} className='mb-20 flex flex-col  text-black m-auto md:mt-28 mt-10 justify-center items-center py-4 space-y-10 bg-white max-w-lg rounded-box shadow-xl font-aref text-lg ' method='POST' >
        <h2 className='text-center text-5xl text-wwe font-bold  font-aref'>Crear tu plato</h2>
      <div> {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/> }</div> 
      <div className='flex flex-col  '>
<label htmlFor="" className=''>Foto del plato:</label>
<input
  type="file"
  id="url_img_menu"
  name="imagen"
  accept="image/*"
  onChange={(event) => {
    formik.setFieldValue("url_img_menu", event.currentTarget.files[0]);
  }}
  onBlur={formik.handleBlur}
className="file-input file-input-ghost w-full max-w-xs text-wwe border border-wwe text-white"
/>
{
  formik.touched.url_img_menu && formik.errors.url_img_menu ? 
  <div><p className='text-lg px-2 text-wwe'>{formik.errors.url_img_menu}</p></div> : 
  null
}
        </div>
        <div className='flex flex-col'>
<label htmlFor="">Nombre:</label>
<input type="text" id='nombre_plato' value={formik.values.nombre_plato} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-80 px-4 py-1.5 rounded-lg bg-white border border-wwe  placeholder:italic' placeholder='Nombre del plato..'/>
        {
          formik.touched.nombre_plato && formik.errors.nombre_plato ? 
        <div> <p className='text-lg px-2 text-wwe'>{formik.errors.nombre_plato}</p> </div>: null
        }
        </div>
       
        <div className='flex flex-col'>
<div className="form-control">
  <label className="">
    <span className=" ">Precio del plato:</span>
  </label>
  <label className="input-group">
 
    <input type="text" id='costo' values={formik.values.costo} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder="0.00$" className="w-72 px-4 py-1.5 rounded-lg bg-white border border-wwe " />
    <span className='bg-wwe text-white border border-wwe '>$</span>
  </label>
  {formik.touched.costo && formik.errors.costo ? 
<div className=''><p className='text-lg px-2 text-wwe'>{formik.errors.costo}</p></div> : null
}
    
</div>
    </div>
          <div className='flex flex-col'>
<label htmlFor="">Decripcion del plato:</label>
<textarea type="text" id='descripcion' value={formik.values.descripcion} onChange={formik.handleChange} onBlur={formik.handleBlur} className='w-80 md:w-96 h-40 px-4 py-1.5 rounded-lg bg-white border border-wwe placeholder:italic' placeholder='Descripcion'/>
   {
          formik.touched.descripcion && formik.errors.descripcion ? 
          <div><p className='px-2 text-wwe text-lg'>{formik.errors.descripcion}</p></div> : null
        }
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