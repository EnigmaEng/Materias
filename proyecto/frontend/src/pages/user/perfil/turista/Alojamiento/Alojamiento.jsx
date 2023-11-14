import { useContext } from 'react';
import NavBar from '../../../../../components/nabvar/NavBar'
import { Link } from 'react-router-dom';
import {useFormik} from 'formik';
import {BiArrowBack} from 'react-icons/bi'
import todoContext from '../../../../../context/todoContext';
import Mensaje from '../../../../../components/alertas/Mensaje';


const Alojamiento = () => {

  const {crearAlojamiento, mensaje, usuario} = useContext(todoContext)


   

  const formik = useFormik({
    initialValues: {
      nombre_alojamiento:'',
      fecha_ini_alojamiento:'',
      fecha_fin_alojamiento:'',
      calle: '',
      nro_puerta: '',
      esquina: ''
    },


    onSubmit: (valores, {resetForm}) => {
      
      const fechaInicio = formik.values.fecha_ini_alojamiento
      const fechaFin = formik.values.fecha_fin_alojamiento
      const data = {
        accion: "crearAlojamiento",
        id_usuario_turista: usuario?.id_usuario,
        nombre_alojamiento : valores.nombre_alojamiento,
        fecha_ini_alojamiento : fechaInicio,
        fecha_fin_alojamiento : fechaFin,
        calle: valores.calle,
        nro_puerta: valores.nro_puerta,
        esquina: valores.esquina
      }
      crearAlojamiento(data)
      resetForm();
    }

    
  })
  return (
    <div className='min-h-screen'>
        <NavBar/>
        <Link to='/homeAuth'>
            <button className='bg-wwe  rounded-lg ml-8 px-4 py-1 mt-2 mb-4 top-8 md:absolute md:left-10 md:p-10 md:py-3 md:shadow-xl md:shadow-gray-700 md:border-gray-400 text-white'><BiArrowBack/></button>
            </Link>
        <div className='p-8 rounded-lg shadow-xl  gap-5 mt-28 bg-white max-w-max m-auto'>
            <h2 className='text-3xl font-semibold text-wwe font-aref'>Ingresa tu alojamiento</h2>
          {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/>}
            <form onSubmit={formik.handleSubmit} className='mt-5' method='POST'>
                <div className='form-control'>
                    <label htmlFor="" className='font-semibold font-aref text-wwe text-lg'>Nombre del alojamiento: </label>
                    <input type="text" id='nombre_alojamiento' value={formik.values.nombre_alojamiento} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border border-wwe input bg-white text-black' placeholder='Nombre..' required />
          
                </div>
                  <div className='form-control'>
                    <label htmlFor="" className='font-semibold font-aref text-wwe text-lg'>Fecha de ingreso: </label>
                    <input type="date" id='fecha_ini_alojamiento' value={formik.values.fecha_ini_alojamiento} onChange={formik.handleChange} onBlur={formik.handleBlur}  className='border border-wwe input bg-white text-black' required />
          
                </div>
                   <div className='form-control'>
                    <label htmlFor="" id='fecha_fin_alojamiento' className='font-semibold font-aref text-wwe text-lg'>Fecha de salida: </label>
                    <input type="date" id='fecha_fin_alojamiento' value={formik.values.fecha_fin_alojamiento} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border border-wwe input bg-white text-black' required />

                </div>
                    <div className='form-control'>
                    <label htmlFor="" id='fecha_fin_alojamiento' className='font-semibold font-aref text-wwe text-lg'>Calle: </label>
                    <input type="text" id='calle' value={formik.values.calle} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border border-wwe input bg-white text-black' required />
          
                </div>
                   <div className='form-control'>
                    <label htmlFor="" id='fecha_fin_alojamiento' className='font-semibold font-aref text-wwe text-lg'>Nro de puerta: </label>
                    <input type="text" id='nro_puerta' value={formik.values.nro_puerta} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border border-wwe input bg-white text-black'  required/>
                                                
  
                </div>
                             <div className='form-control'>
                    <label htmlFor="" id='fecha_fin_alojamiento' className='font-semibold font-aref text-wwe text-lg'>Esquina: </label>
                    <input type="text" id='esquina' value={formik.values.esquina} onChange={formik.handleChange} onBlur={formik.handleBlur} className='border border-wwe input bg-white text-black' required />
                                   
                </div>
                <button type='submit' className=' w-full mt-5   py-1 shadow-xl shadow-gray-400 hover:bg-red-600 bg-wwe rounded-lg text-white text-2xl'>Ingresar</button>
            </form>
        </div>
    </div>
  )
}

export default Alojamiento;