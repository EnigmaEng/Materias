import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import todoContext from '../../../../context/todoContext'
import Mensaje from '../../../../components/alertas/Mensaje'

const initialValues = {
  alias: '',
  email: '',
  contrasenia: '',
  urlImg: '',
  nombres: '', // turista
  apellidos: '', //  turista
  nacionalidad: '', //  turista
  motivoAlojo: '', //  turista
  nombre: '', // restaurante
  tipoRestaurante: '', // restaurante
  nroLocal: '', // restaurante
  direccionRest: '', // restaurante
  
};

const validationSchema = Yup.object({
  alias: Yup.string().required('El campo no puede ir vacío'),
  email: Yup.string().email('El campo debe ser de tipo email').required('El campo no puede ir vacío'),
  contrasenia: Yup.string().required('El campo no puede ir vacío').min(8, 'La contraseña debe contener 8 caracteres'),
  urlImg: Yup.string().required('El campo no puede ir vacío'),
 
});

const RegistroUsuario = () => {
  const [selectedRole, setSelectedRole] = useState('t');
  const [selectedType, setSelectedType] = useState("Otro")
  const {mensaje, RegistroUsuario} = useContext(todoContext)

  const handleRoleChange = (e) => {
    setSelectedRole(e.target.value);
  };

  const handleTypeChange = (e) => {
    selectedType(e.target.value);
  };

  const formik = useFormik({
    initialValues: {
      ...initialValues,
      rol: selectedRole,
    },
    validationSchema,

    onSubmit: (valores) => {
      let dataUser = {
       
        alias: valores.alias,
        email: valores.email,
        contrasenia: valores.contrasenia,
        urlImg: valores.urlImg,
        rol: valores.rol,
      }

      if (selectedRole === 't') {
        dataUser = {
          ...dataUser,
          nombres: valores.nombres,
          apellidos: valores.apellidos,
          nacionalidad: valores.nacionalidad,
          motivoAlojo: valores.motivoAlojo,
        }
        console.log(dataUser)
      } else if (selectedRole === 'r') {
        dataUser = {
          ...dataUser,
          nombre: valores.nombre,
          tipoRestaurante: valores.tipoRestaurante,
          nroLocal: valores.nroLocal,
          direccionRest: valores.direccionRest,
        }
        console.log(dataUser)
      }

     
    },
  });

  return (
  <div className='bg-white bg-cover  text-black'>

  <Link to='/'  >
    <button className='border rounded-lg ml-8 px-4 py-1 mt-2 mb-4 top-16 md:absolute md:left-80 md:w-40 md:py-2 md:shadow-xl md:border-gray-400'>Volver</button>
    </Link>
<div className='h-min-screen flex justify-center md:block md:w-3/12 md:m-auto md:py-40'>
  <div> {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/> }</div>
    <form onSubmit={formik.handleSubmit}  className='text-black p-4 md:border rounded-lg bg-white' encType='multipart/form-data' method='POST' >

        <div className='flex flex-col mb-4'>
        <label htmlFor="alias" className='font-bold px-4'>Alias</label>
        <input type="text" placeholder='Alias' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='alias' value={formik.values.alias} onChange={formik.handleChange}  onBlur={formik.handleBlur}  />
        {formik.touched.alias && formik.errors.alias ? (
          <div> <p className='text-sm px-5 text-gray-400'> {formik.errors.alias}</p></div> ): (
            null
          )
        }
        </div>
        <div className='flex flex-col mb-4'>
        <label htmlFor="email" className='font-bold px-4'>Email</label>
        <input type="text" placeholder='Email' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.email && formik.errors.email ? (
          <div> <p className='text-sm px-5 text-gray-400'> {formik.errors.email}</p></div> ): (
            null
          )
        }
        </div>
          <div className='flex flex-col mb-4'>
        <label htmlFor="" className='font-bold px-4'>Contraseña</label>
        <input type="password" placeholder='Contraseña' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic' id='contrasenia' value={formik.values.contrasenia} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {formik.touched.contrasenia && formik.errors.contrasenia ? (
          <div> <p className='text-sm px-5 text-gray-400'>{formik.errors.contrasenia}</p></div> ) : (null)
        }
        </div>

        
    <div className='flex flex-col mb-4'>
        <label htmlFor="urlImg" className='font-bold px-4'>Foto de perfil</label>
        <input type="file" placeholder='foto' className='file px-4 w-80 ' id='urlImg' value={formik.values.urlImg} onChange={formik.handleChange} onBlur={formik.handleBlur}  />
         {formik.touched.urlImg && formik.errors.urlImg ? (
          <div> <p className='text-sm px-5 text-gray-400'> {formik.errors.urlImg}</p></div> ): (
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
          <option value='t'>Turista</option>
          <option value='r'>Restaurante</option>
        </select>
      </div>
      {/* Campos adicionales para turista */}
      {selectedRole === 't' && (
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
              <p className='text-sm px-5 text-gray-400'>{formik.errors.nombres}</p>
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
              <p className='text-sm px-5 text-gray-400'>{formik.errors.apellidos}</p>
            </div>
          )}
           <label htmlFor='motivoAlojo' className='font-bold px-4 mt-2'>
            Motivo de alojamiento
          </label>
          <input
            type='text'
            id='motivoAlojo'
            placeholder='Trabajo, Vacaciones, etc..'
            className='border rounded-full bg-white border-red-700 px-4 py-2 focus:outline-none placeholder:italic'
            value={formik.values.motivoAlojo}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.motivoAlojo && formik.errors.motivoAlojo && (
            <div>
              <p className='text-sm px-5 text-gray-400'>{formik.errors.motivoAlojo}</p>
            </div>
          )}
          <label htmlFor='nacionalidad' className='font-bold px-4 mt-2'>
            Nacionalidad
          </label>
          <input
            type='text'
            id='nacionalidad'
            className='border rounded-full bg-white border-red-700 px-4 py-2 focus:outline-none placeholder:italic'
            value={formik.values.nacionalidad}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.nacionalidad && formik.errors.nacionalidad && (
            <div>
              <p className='text-sm px-5 text-gray-400'>{formik.errors.nacionalidad}</p>
            </div>
          )}
        </div>
      )}

{selectedRole === 'r' && (

  <div className='flex flex-col  '>
      <label htmlFor='nroLocal' className='font-bold px-4 mt-2'>
      Numero del local
    </label>
    <input type="text" id='nroLocal' placeholder='Numero del local...' className='border rounded-full bg-white border-red-700  px-6  py-2 focus:outline-none placeholder:italic'
    value={formik.values.nroLocal} onChange={formik.handleChange} onBlur={formik.handleBlur}
    />
    {formik.touched.nroLocal && formik.errors.nroLocal && (
      <div>
        <p className='text-sm px-5 text-gray-400'>{formik.errors.nroLocal}</p>
      </div>
    )}

      <label htmlFor="nombre" className='px-4 font-bold mt-4'>Nombre del restaurante</label>
      <input type="text" id='nombre' placeholder='Nombre...' className='border rounded-full bg-white  border-red-700 px-6 py-2 py-1 focus:outline-none placeholder:italic '
      value={formik.values.nombre} onChange={formik.handleChange} onBlur={formik.handleBlur}
      />
      { formik.touched.nombre && formik.errors.nombre && (
        <div> <p className='text-sm px-5 text-gray-400'>{formik.errors.nombre}</p></div>
      )}
  
    <label htmlFor='tipoRestaurante' className='font-bold px-4 mt-4'>
      Tipo de Restaurante
    </label>
    <select
      id='tipoRestaurante'
      className='border rounded-full bg-white border-red-700  p-2  py-2 focus:outline-none placeholder:italic'
      value={formik.values.tipoRestaurante}
      onChange={formik.handleChange}
      onBlur={formik.handleBlur}>
       <option value="">Selecciona el tipo</option>
      <option value="Buffet">Buffet</option>
      <option value="Comida rapida">Comida rapida</option>
      <option value="Rapida casual">Comida rapida y casual</option>
      <option value="De autor">De autor</option>
      <option value="Gourmet">Gourmet</option>
      <option value="Tematico">Tematico</option>
      <option value="Para llevar">Para llevar</option>
      <option  value="Otro">Otro</option>
      
    </select>
    {formik.touched.tipoRestaurante && formik.errors.tipoRestaurante && (
      <div>
        <p className='text-sm px-5  text-gray-400'>{formik.errors.tipoRestaurante}</p>
      </div>
    )}
  

    <label htmlFor='tipoComida' className='font-bold px-4 mt-4'>
      Direccion
    </label>
    <input type="text" id='direccionRest' placeholder='Direccion...' className='mb-2 border rounded-full px-6 bg-white border-red-700  p-2  py-2 focus:outline-none placeholder:italic'
    value={formik.values.direccionRest} onChange={formik.handleChange} onBlur={formik.handleBlur}
    />
    {formik.touched.direccionRest && formik.errors.direccionRest && (
      <div>
        <p className='text-sm px-5 text-gray-400'>{formik.errors.direccionRest}</p>
      </div>
    )}
  </div>
)}

  <label htmlFor="" className='md:px-6  px-10 '>Acepta terminos y condiciones?</label> 
     <input type="checkbox"  className='' required />
   
      <a className='px-6 underline hover:text-blue-500' href="https://www.impo.com.uy/bases/leyes/18331-2008" target='_blank'>Ver terminos</a>
    
<br />


        <button type='submit' className='px-6 ml-8 md:ml-8 md:w-40 md:shadow-xl md:border-gray-400 md:mt-8 py-2 mt-4 rounded-lg bg-white border font-bold '>Registrar</button>
    </form>
</div>
  </div>
  )
}

export default RegistroUsuario;