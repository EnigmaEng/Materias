import { useContext } from 'react'
import { useFormik } from 'formik'
import * as Yup from 'yup'
import Mensaje from '../../../../../components/alertas/Mensaje'
import NavBar from '../../../../../components/nabvar/NavBar'
import todoContext from '../../../../../context/todoContext'

const CrearDescuentos = () => {

  const TodoContext = useContext(todoContext)
  const {mensaje, crearDescuento} = TodoContext


  const formik = useFormik({

    initialValues : {
      activo: '',
      titulo_descuento: '',
      descripcion: '',
      url_img_descuento: '',
      fecha_inicio: '',
      fecha_fin: ''
    },

    validationSchema: Yup.object({
      activo: Yup.string().required('El campo no puede ir vacío'),
      titulo_descuento: Yup.string().required('El campo no puede ir vacío'),
      descripcion: Yup.string().required('El campo no puede ir vacío'),
      url_img_descuento: Yup.string().required('El campo no puede ir vacío'),
      fecha_inicio: Yup.string().required('El campo no puede ir vacío'),
      fecha_fin: Yup.string().required('El campo no puede ir vacío'),
    }),

    onSubmit: (valores, {resetForm}) => {
    const data = {
    "accion": "crearDescuento",
    activo : valores.activo,
    titulo_descuento: valores.titulo_descuento,
    descripcion: valores.descripcion,
    url_img_descuento: valores.url_img_descuento,
    fecha_inicio: valores.fecha_inicio,
    fecha_fin: valores.fecha_fin
  }
  crearDescuento(data)
  resetForm();
}

  })

  return (
    <div className='min-h-screen dark:bg-zinc dark:bg-opacity-95 bg-white bg-opacity-75 '>
        <NavBar/>
      
<form onSubmit={formik.handleSubmit} method='POST' className='bg-white w-3/12 m-auto mt-24 p-8 rounded-box shadow-xl'>
    <h2 className='text-center text-4xl mb-5 text-wwe font-aref'>Crear descuento</h2>
<div className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Activo</label>
  <select name="activo" id="activo" className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto  w-64' value={formik.values.activo} onChange={formik.handleChange} onBlur={formik.handleBlur}>
    <option value="S">Si</option>
    <option value="N">No</option>
  </select>
</div>
<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Titulo del descuento</label>
  <input type="text" id='titulo_descuento' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' value={formik.values.activo} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Titulo'/>
</div>
<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Descripcion</label>
<input type="text" id='descripcion' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' value={formik.values.activo} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Descripcion'/>
</div>
<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Imagen</label>
<input type="text" id='url_img_descuento' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' value={formik.values.activo} onChange={formik.handleChange} onBlur={formik.handleBlur} placeholder='Imagen'/>
</div>
<div  className='flex flex-col text-center font-aref text-black text-lg mb-6'>
  <label htmlFor="">Fecha de inicio</label>
<input type="date" id='fecha_inicio' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' value={formik.values.activo} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
</div>
<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Fecha de fin</label>
<input type="date" id='fecha_fin' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' value={formik.values.activo} onChange={formik.handleChange} onBlur={formik.handleBlur}/>
</div>

  <button type='submit' className='w-52 ml-32 py-1 shadow-xl shadow-gray-400 hover:bg-red-600 bg-wwe rounded-lg text-white text-2xl'>Crear</button>
</form>
        
    </div>
  )
}

export default CrearDescuentos