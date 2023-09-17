import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import todoContext from '../../../../context/todoContext'
import Mensaje from '../../../../components/alertas/Mensaje'

const initialValues = {
  alias: '',
  email: '',
  contrasena: '',
  confirmContrasena: '',
  url_img_usuario: '',
  rol: '',
  nombres: '', // turista
  apellidos: '', //  turista
  nacionalidad: '', //  turista
  motivo_alojamiento: '', //  turista
  nombre: '', // restaurante
 
  
};

const validationSchema = Yup.object({
  alias: Yup.string().required('El campo no puede ir vacío'),
  email: Yup.string().email('El campo debe ser de tipo email').required('El campo no puede ir vacío'),
  contrasena: Yup.string().required('El campo no puede ir vacío').min(8, 'La contraseña debe contener 8 caracteres'),
  confirmContrasena: Yup.string().oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir').required('El campo no puede ir vacío'),
  url_img_usuario: Yup.string().required('El campo no puede ir vacío'),
 
});

const RegistroUsuario = () => {
  const [selectedRole, setSelectedRole] = useState('');
 
  
  const {mensaje, registrarTurista, registrarRestaurante} = useContext(todoContext)

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };



  const formik = useFormik({
    initialValues: {
      ...initialValues,
      rol: selectedRole,
    },
    validationSchema,

    onSubmit: (valores, {resetForm}) => {
      let dataUser = {
       
        alias: valores.alias,
        email: valores.email,
        contrasena: valores.contrasena,
        url_img_usuario: valores.url_img_usuario,
        rol: selectedRole,
      }

      if (selectedRole === 'T') {
        dataUser = {
          "accion": "altaTurista",
          ...dataUser,
          nombres: valores.nombres,
          apellidos: valores.apellidos,
          nacionalidad: valores.nacionalidad,
          motivo_alojamiento: valores.motivo_alojamiento,
        }
    
        console.log(dataUser)
        registrarTurista(dataUser)
        resetForm();
      } else if (selectedRole === 'R') {
        dataUser = {
          "accion": "altaRestaurante",
          ...dataUser,
          nombre: valores.nombre,
          
        }
        console.log(dataUser)
        registrarRestaurante(dataUser)
        resetForm();
      }

     
    },
  });

  return (
  <div className='  text-black'>

  <Link to='/'  >
    <button className='bg-white rounded-lg ml-8 px-4 py-1 mt-2 mb-4 top-16 md:absolute md:left-80 md:w-40 md:py-2 md:shadow-xl md:border-gray-400'>Volver</button>
    </Link>
<div className='pb-8  flex justify-center md:block md:w-3/12 md:m-auto md:py-40 '>
 
    <form onSubmit={formik.handleSubmit}  className='text-black p-4 shadow-xl rounded-lg backdrop-blur' method='POST'>
      <p className='md:text-red-800 font-bold text-center text-2xl  mb-2'>Crear una cuenta</p>
 <div> {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/> }</div>
        <div className='flex flex-col mb-4'>
        <label htmlFor="alias" className='font-bold px-4'>Alias</label>
        <input type="text" placeholder='Alias' className='border  rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='alias' value={formik.values.alias} onChange={formik.handleChange}  onBlur={formik.handleBlur}  />
        {formik.touched.alias && formik.errors.alias ? (
          <div> <p className='text-sm px-5 text-black'> {formik.errors.alias}</p></div> ): (
            null
          )
        }
        </div>
        <div className='flex flex-col mb-4'>
        <label htmlFor="email" className='font-bold px-4'>Email</label>
        <input type="text" placeholder='Email' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? (
          <div> <p className='text-sm px-5 text-black'> {formik.errors.email}</p></div> ): (
            null
          )
        }
        </div>
          <div className='flex flex-col mb-4'>
        <label htmlFor="contrasena" className='font-bold px-4'>Contraseña</label>
        <input type="password" placeholder='Contraseña' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='contrasena' value={formik.values.contrasena} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.contrasena && formik.errors.contrasena ? (
          <div> <p className='text-sm px-5 text-black'>{formik.errors.contrasena}</p></div> ) : (null)
        }
        </div>
        <div className='flex flex-col mb-4'>
        <label htmlFor="confirmContrasena" className='font-bold px-4'>Repetir contraseña</label>
        <input type="password" placeholder='Contraseña' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='confirmContrasena' onChange={formik.handleChange} value={formik.values.confirmContrasena} onBlur={formik.handleBlur} />
        {formik.touched.confirmContrasena && formik.errors.confirmContrasena ? (
          <div> <p className='text-sm px-5 text-black'>{formik.errors.confirmContrasena}</p></div> ) : (null)
        }
        </div>

        
    <div className='flex flex-col mb-4'>
        <label htmlFor="url_img_usuario" className='font-bold px-4'>Foto de perfil</label>
        <input type="text" placeholder='foto' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='url_img_usuario' value={formik.values.url_img_usuario} 
        onChange={formik.handleChange} onBlur={formik.handleBlur}  />
         {formik.touched.url_img_usuario && formik.errors.url_img_usuario ? (
          <div> <p className='text-sm px-5 text-black'> {formik.errors.url_img_usuario}</p></div> ): (
            null
          )
        }
        </div>
        <div className='flex flex-col mb-4'>
        <label htmlFor='rol' className='font-bold px-4'>
          Turista o Restaurante
        </label>
        <select
          id='rol'
          className='border rounded-full bg-white border-red-700 p-4 py-2 py-1 focus:outline-none placeholder:italic'
          value={selectedRole}
          onChange={handleRoleChange}
          onBlur={formik.handleBlur}
        >
          <option >Seleccionar </option>
          <option value='T'>Turista</option>
          <option value='R'>Restaurante</option>
        </select>
      </div>
      {/* Campos adicionales para turista */}
      {selectedRole === 'T' && (
        <div className='flex flex-col mb-4'>
           <label htmlFor='nombres' className='font-bold px-4 '>
            Nombre
          </label>
          <input
            type='text'
            id='nombres'
            placeholder='Nombres'
            className='border rounded-full bg-white border-red-700 px-4 py-2 focus:outline-none placeholder:italic'
            value={formik.values.nombres}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.nombres && formik.errors.nombres && (
            <div>
              <p className='text-sm px-5 text-black'>{formik.errors.nombres}</p>
            </div>
          )}
           <label htmlFor='apellidos' className='font-bold px-4 mt-2'>
            Apellidos
          </label>
          <input
            type='text'
            id='apellidos'
            placeholder='Apellidos'
            className='border rounded-full bg-white border-red-700 px-4 py-2 focus:outline-none placeholder:italic'
            value={formik.values.apellidos}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.apellidos && formik.errors.apellidos && (
            <div>
              <p className='text-sm px-5 text-black'>{formik.errors.apellidos}</p>
            </div>
          )}
           <label htmlFor='motivo_alojamiento' className='font-bold px-4 mt-2'>
            Motivo de alojamiento
          </label>
          <input
            type='text'
            id='motivo_alojamiento'
            placeholder='Trabajo, Vacaciones, etc..'
            className='border rounded-full bg-white border-red-700 px-4 py-2 focus:outline-none placeholder:italic'
           value={formik.values.motivo_alojamiento}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur }
          />
          {formik.touched.motivo_alojamiento && formik.errors.motivo_alojamiento && (
            <div>
              <p className='text-sm px-5 text-black'>{formik.errors.motivo_alojamiento}</p>
            </div>
          )}
          <label htmlFor='nacionalidad' className='font-bold px-4 mt-2'>
            Nacionalidad
          </label>
          <input
            type='text'
            id='nacionalidad' placeholder='Nacionalidad..'
            className='border rounded-full bg-white border-red-700 px-4 py-2 focus:outline-none placeholder:italic'
            value={formik.values.nacionalidad}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.nacionalidad && formik.errors.nacionalidad && (
            <div>
              <p className='text-sm px-5 text-black'>{formik.errors.nacionalidad}</p>
            </div>
          )}
        </div>
      )}

{selectedRole === 'R' && (

  <div className='flex flex-col  mb-4'>
   
      <label htmlFor="nombre" className='px-4 font-bold mt-4'>Nombre del restaurante</label>
      <input type="text" id='nombre' placeholder='Nombre...' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic '
      value={formik.values.nombre} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />
      { formik.touched.nombre && formik.errors.nombre && (
        <div> <p className='text-sm px-5 text-black'>{formik.errors.nombre}</p></div>
      )}
  
    
  </div>
)}
<div>
<label htmlFor="" className='md:px-6  px-4 text-black'>Acepta terminos y condiciones?</label> 
     <input type="checkbox" required />
   <br />
      <a className='px-4 md:px-6 underline hover:text-blue-500 text-black'  href="https://www.impo.com.uy/bases/leyes/18331-2008" target='_blank'>Ver terminos</a>
</div>
 
    



        <button type='submit' className='px-6 mb-8 ml-8 md:ml-8 md:w-40 md:shadow-xl md:border-gray-400 md:mt-8 py-2 mt-4 rounded-lg bg-white border font-bold '>Registrar</button>
    </form>
</div>
  </div>
  )
}

export default RegistroUsuario;