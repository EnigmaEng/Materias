import { useContext } from 'react';
import NavBar from '../../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom';
import {useFormik} from 'formik';
import * as Yup from 'yup';
import todoContext from '../../../../../context/todoContext';
import Mensaje from '../../../../../components/alertas/Mensaje';


const Alojamiento = () => {

  const {crearAlojamiento, mensaje} = useContext(todoContext)


  const formik = useFormik({
    initialValues: {
      nombre_alojamiento:'',
      fecha_ini_alojamiento:'',
      fecha_fin_alojamiento:''
    },

    validationSchema: Yup.object({
      nombre_alojamiento: Yup.string().required("Campo obligatorio"),
      fecha_ini_alojamiento: Yup.date().required('El campo no puede ir vacio'),
      fecha_fin_alojamiento: Yup.date().required('El campo no puede ir vacio'),
      
    }),
    onSubmit: (valores, {resetForm}) => {
      
      const fechaInicio = formik.values.fecha_ini_alojamiento
      const fechaFin = formik.values.fecha_fin_alojamiento
      const data = {
        accion: "",
        nombre_alojamiento : valores.nombre_alojamiento,
        fecha_ini_alojamiento : fechaInicio,
        fecha_fin_alojamiento : fechaFin
      }
      crearAlojamiento(data)
      resetForm();
    }
    
    
  })
  return (
    <div className='min-h-screen'>
        <NavBar/>
        <Link to='/homeAuth' className='px-6 py-1 bg-wwe rounded-lg absolute md:top-24 md:left-80 text-white top-24 left-5 text-lg'>
        Atrás</Link>
        <div className='p-8 rounded-lg shadow-xl  gap-5 mt-28 bg-white max-w-max m-auto'>
            <h2 className='text-3xl font-semibold text-wwe font-aref'>Ingresa tu alojamiento</h2>
          {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/>}
            <form onSubmit={formik.handleSubmit} className='mt-5' method='POST'>
                <div className='form-control'>
                    <label htmlFor="" className='font-semibold font-aref text-wwe text-lg'>Nombre del alojamiento: </label>
                    <input type="text" id='nombre_alojamiento' value={formik.values.nombre_alojamiento} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border border-wwe input bg-white text-black' placeholder='Nombre..' />
                  {
    formik.touched.nombre_alojamiento && formik.errors.nombre_alojamiento ?
    <div><p className='text-wwe '>{formik.errors.nombre_alojamiento}</p></div> : null
  }
                </div>
                  <div className='form-control'>
                    <label htmlFor="" className='font-semibold font-aref text-wwe text-lg'>Fecha de ingreso: </label>
                    <input type="date" id='fecha_ini_alojamiento' value={formik.values.fecha_ini_alojamiento} onChange={formik.handleChange} onBlur={formik.handleBlur}  className='border border-wwe input bg-white text-black'  />
                            {
    formik.touched.fecha_ini_alojamiento && formik.errors.fecha_ini_alojamiento ?
    <div><p className='text-wwe '>{formik.errors.fecha_ini_alojamiento}</p></div> : null
  }
                </div>
                   <div className='form-control'>
                    <label htmlFor="" id='fecha_fin_alojamiento' className='font-semibold font-aref text-wwe text-lg'>Fecha de salida: </label>
                    <input type="date" id='fecha_fin_alojamiento' value={formik.values.fecha_fin_alojamiento} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border border-wwe input bg-white text-black'  />
                                                {
    formik.touched.fecha_fin_alojamiento && formik.errors.fecha_fin_alojamiento ?
    <div><p className='text-wwe '>{formik.errors.fecha_fin_alojamiento}</p></div> : null
  }
                </div>
                <button type='submit' className=' w-full mt-5   py-1 shadow-xl shadow-gray-400 hover:bg-red-600 bg-wwe rounded-lg text-white text-2xl'>Ingresar</button>
            </form>
        </div>
    </div>
  )
}

export default Alojamiento;