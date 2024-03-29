import { useParams } from 'react-router-dom'
import NavBar from '../../../../components/nabvar/NavBar'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useContext, useEffect } from 'react';
import todoContext from '../../../../context/todoContext';
import Mensaje from '../../../../components/alertas/Mensaje';

const CrearResenia = () => {

const {id_usuario} = useParams();

const TodoContext = useContext(todoContext)
const {usuario, crearResenia, mensaje, autenticado} = TodoContext

if(autenticado && usuario && usuario.id_usuario){
  console.log(usuario.id_usuario)
console.log(id_usuario)
}

const today = new Date();
const year = today.getFullYear();
const month = (today.getMonth() + 1).toString().padStart(2, '0'); // Sumamos 1 al mes ya que en JavaScript los meses van de 0 a 11
const day = today.getDate().toString().padStart(2, '0');
const formattedDate = `${year}-${month}-${day}`;

  const formik = useFormik({
    initialValues: {
      id_usuario_turista: '',
      id_usuario_rest: '',
      fecha: '',
      calificacion_instalaciones: '',
      calificacion_personal: '',
      calificacion_menu: '',
      calificacion_general: '',
      token: ''
    },

    onSubmit: valores => {
      const data = {
        "accion": "crearResenia",
      id_usuario_turista: usuario.id_usuario,
      id_usuario_rest: id_usuario,
      fecha: formattedDate,
      calificacion_instalaciones: valores.calificacion_instalaciones,
      calificacion_personal: valores.calificacion_personal,
      calificacion_menu: valores.calificacion_menu,
      calificacion_general: valores.calificacion_general,
      token: valores.token
      }
      crearResenia(data)
    }
  });

 
  return (
    <>
  
   <div className='min-h-screen p-6 dark:bg-zinc-800 dark:bg-opacity-80'>
      <NavBar/>
   
      <form onSubmit={formik.handleSubmit} className='w-11/12 space-y-10 flex flex-col justify-center items-center  md:py-6 md:px-6 md:w-3/12 m-auto mt-10 md:mt-24 bg-white border rounded-box p-4 text-black shadow-xl pb-10' method='POST'>
        {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/>}
        <h2 className='text-center font-bold text-2xl '>
          Crear reseña
        </h2>
    <select className="select bg-white border border-red-800 focus:ring-2 focus:ring-red-800  w-full max-w-xs" id='calificacion_instalaciones' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.calificacion_instalaciones} required>
  <option value='' disabled>Instalaciones</option>
  <option value="Excelente">Excelente</option>
  <option value="Medio">Medio</option>
  <option value="Insuficiente">Insuficiente </option>
</select>


  <select className="select bg-white border border-red-800 focus:ring-2 focus:ring-red-800  w-full max-w-xs" id='calificacion_personal' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.calificacion_personal} required>
   <option value='' disabled>Personal</option>
   <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3 </option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8 </option>
  <option value="9">9</option>
  <option value="10">10</option>
</select>

       <select className="select bg-white border border-red-800 focus:ring-2 focus:ring-red-800  w-full max-w-xs" id='calificacion_menu' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.calificacion_menu} required>
  <option value='' disabled>Menú gastronómico</option>
   <option value="1">1</option>
  <option value="2">2</option>
  <option value="3">3 </option>
  <option value="4">4</option>
  <option value="5">5</option>
  <option value="6">6</option>
  <option value="7">7</option>
  <option value="8">8 </option>
  <option value="9">9</option>
  <option value="10">10</option>
  </select>

      <select className="select bg-white border border-red-800 focus:ring-2 focus:ring-red-800  w-full max-w-xs" id='calificacion_general' onChange={formik.handleChange} onBlur={formik.handleBlur} value={formik.values.calificacion_general } required>
  <option value='' disabled>Calificación general</option>
 <option value="Muy bueno">Muy bueno</option>
  <option value="Bueno">Bueno</option>
  <option value="Medio">Medio </option>
  <option value="Malo">Malo </option>
  <option value="Muy malo">Muy malo </option>
</select>

<input type="text" placeholder='Codigo del restaurante' className='bg-white rounded-md p-2  text-black border border-wwe w-72'/>
       
      <button type='submit' className='glass bg-red-800 text-white px-4 py-1 rounded-lg border mt-8 hover:scale-125 transition-all duration-300 delay-150  md:w-40 md:py-1.5 md:text-lg w-64'>Crear</button>
      </form> 
    </div>
   </>
  )
}




export default CrearResenia