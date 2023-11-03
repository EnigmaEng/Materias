import { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Mensaje from '../../../../../components/alertas/Mensaje'
import NavBar from '../../../../../components/nabvar/NavBar'
import todoContext from '../../../../../context/todoContext'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi';
const CrearDescuentos = () => {

  const TodoContext = useContext(todoContext)
  const {mensaje, crearDescuento, usuario, imagenBase64} = TodoContext



  const formik = useFormik({

    initialValues : {
      activo: '',
      titulo_descuento: '',
      descripcion: '',
      url_img_descuento: '',
      costo : '',
      fecha_inicio: '',
      fecha_fin: '',
      id_usuario_rest: ''
    },

    validationSchema: Yup.object({
    
      titulo_descuento: Yup.string().required('El campo no puede ir vacío'),
      descripcion: Yup.string().required('El campo no puede ir vacío'),
      // url_img_descuento: Yup.string().required('El campo no puede ir vacío'),
      costo: Yup.number('Ingrese un precio valido').required('El campo no puede ir vacío'),
      fecha_inicio: Yup.date().typeError('Ingrese una fecha valida').required('El campo no puede ir vacio'),
      fecha_fin: Yup.date().typeError('Ingrese una fecha valida').required('El campo no puede ir vacio'),
    }),

    onSubmit: async(valores, {resetForm}) => {

      const fechaInicio = formik.values.fecha_inicio
      const fechaFin = formik.values.fecha_fin

    const data = {
    "accion": "crearDescuento",
    activo : "S",
    titulo_descuento: valores.titulo_descuento,
    descripcion: valores.descripcion,
    url_img_descuento: valores.url_img_descuento,
    costo: valores.costo,
    fecha_inicio: fechaInicio,
    fecha_fin: fechaFin,
    id_usuario_rest: usuario.id_usuario
  };

  if(valores.url_img_descuento){
    const file = valores.url_img_descuento;
 try {
      const base64Image = await imagenBase64(file);
      data.url_img_usuario = base64Image;
      crearDescuento(data)
    } catch (error) {
      console.log("error al subir la foto: ", error)
    }

resetForm()
}
  
}
  })

  return (
    <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95   '>
        <NavBar/>
       <Link to='/configuracionRest' className='absolute py-1.5 top-24 left-24 bg-wwe text-white rounded-lg px-6 py-1'><BiArrowBack/></Link> 
<form onSubmit={formik.handleSubmit} method='POST' className='bg-white md:w-3/12 m-auto mt-24 p-8 rounded-box shadow-xl'>
  {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/> }
    <h2 className='text-center text-4xl mb-5 font-bold text-wwe font-aref'>Crear descuento</h2>
<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Titulo del descuento</label>
  <input type="text" id='titulo_descuento' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' values={formik.values.titulo_descuento} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Titulo'/>
  {
    formik.touched.titulo_descuento && formik.errors.titulo_descuento ?
    <div><p className='text-wwe '>{formik.errors.titulo_descuento}</p></div> : null
  }
</div>
<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Descripcion</label>
<input type="text" id='descripcion' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' values={formik.values.descripcion} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Descripcion'/>
{
  formik.touched.descripcion && formik.errors.descripcion ? 
  <div><p className='text-wwe '>{formik.errors.descripcion}</p></div> : null
}
</div>

<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Imagen</label>
<input
  type="file"
  id="url_img_descuento"
  name="imagen"
  accept="image/*"
  onChange={(event) => {
    formik.setFieldValue("url_img_descuento", event.currentTarget.files[0]);
  }}
  onBlur={formik.handleBlur}
className="file-input file-input-ghost w-full max-w-xs border border-wwe text-wwe ml-20"
/>
{
  formik.touched.url_img_descuento && formik.errors.url_img_descuento ? 
  <div><p className='text-wwe'>{formik.errors.url_img_descuento}</p></div> : null
}
</div>

<div  className='flex flex-col text-center font-aref text-black text-lg mb-6'>
  <label htmlFor="">Precio</label>
<input type="text" id='costo' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' values={formik.values.costo} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{
  formik.touched.costo && formik.errors.costo ? 
  <div><p className='text-wwe px-6'>{formik.errors.costo}</p></div> : null
}
</div>

<div  className='flex flex-col text-center font-aref text-black text-lg mb-6'>
  <label htmlFor="">Fecha de inicio</label>
<input type="date" id='fecha_inicio' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' values={formik.values.fecha_inicio} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{
  formik.touched.fecha_inicio && formik.errors.fecha_inicio ? 
  <div><p className='text-wwe px-6'>{formik.errors.fecha_inicio}</p></div> : null
}
</div>

<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Fecha de fin</label>
<input type="date" id='fecha_fin' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' values={formik.values.fecha_fin} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
{
  formik.touched.fecha_fin && formik.errors.fecha_fin ? 
  <div><p className='text-wwe px-4'>{formik.errors.fecha_fin}</p></div> : null
}
</div>

  <button type='submit' className='w-52 mt-5 md:ml-32 ml-12 py-1 shadow-xl shadow-gray-400 hover:bg-red-600 bg-wwe rounded-lg text-white text-2xl'>Crear</button>
</form>
        
    </div>
  )
}

export default CrearDescuentos