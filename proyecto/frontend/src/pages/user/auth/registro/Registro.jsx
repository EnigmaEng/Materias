import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { useFormik } from 'formik'
import * as Yup from 'yup';
import todoContext from '../../../../context/todoContext'
import Mensaje from '../../../../components/alertas/Mensaje'
import {BiArrowBack} from 'react-icons/bi'
import {FiAlertCircle} from 'react-icons/fi'
import axios from 'axios';
import DarkMode from '../../../../components/Buttons/DarkMode';

//api publica para traer todos los datos de los paises
const API_COUNTRY = 'https://restcountries.com/v3.1/all'

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
  esquina: '',
  calle: '',
  nro_puerta:'',
  descripcion: '',
  tipo_restaurantes: '',
  nro_local: '',
  // id_tipo_rest
  // nro_local

};

const validationSchema = Yup.object({
  alias: Yup.string().required('El campo no puede ir vacío'),
  email: Yup.string().email('El campo debe ser de tipo email').required('El campo no puede ir vacío'),
  contrasena: Yup.string().required('El campo no puede ir vacío').min(8, 'La contraseña debe contener 8 caracteres'),
  confirmContrasena: Yup.string().oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir').required('El campo no puede ir vacío')
 
});

const RegistroUsuario = () => {
  const [selectedRole, setSelectedRole] = useState('');
  const [nacionalidad, setNacionalidad] = useState('');
  
  const getFlags = async () => {
    try {
      const res = await axios.get(API_COUNTRY)
     setNacionalidad(res.data);

    } catch (error) {
      console.log(error)
    }
   
  }

  useEffect(() => {
    getFlags()
  },[])

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

  onSubmit: (valores, { resetForm }) => {
    const data = {
      alias: valores.alias,
      email: valores.email,
      contrasena: valores.contrasena,
      url_img_usuario: valores.url_img_usuario,
      rol: selectedRole,
    };

    if (selectedRole === 'T') {
      data.accion = 'altaTurista';
      data.nombres = valores.nombres;
      data.apellidos = valores.apellidos;
      data.nacionalidad = valores.nacionalidad;
      data.motivo_alojamiento = valores.motivo_alojamiento;
    } else if (selectedRole === 'R') {
      data.accion = 'altaRestaurante';
      data.nombre = valores.nombre;
      data.nro_local = valores.nro_local;
      data.nro_puerta = valores.nro_puerta;
      data.descripcion = valores.descripcion;
      data.calle = valores.calle;
      data.esquina = valores.esquina;
    }

    // Aquí tendrás todos los datos dentro del objeto `data` según el rol seleccionado.
    console.log(data); // Verificar los datos antes de enviarlos

    // Luego puedes llamar a la función correspondiente para registrar con los datos en `data`.
    if (selectedRole === 'T') {
      registrarTurista(data);
    } else if (selectedRole === 'R') {
      registrarRestaurante(data);
    }

    resetForm();
  },


  });

  return (
  <div className=' dark:bg-opacity-90 dark:bg-zinc-800'>
    <div className='absolute md:top-16 md:right-28 top-2 right-5'>
      <DarkMode/>
      </div>
    <Link to='/' >
    <button className='bg-wwe  rounded-lg ml-8 px-4 py-1 mt-2 mb-4 top-16 md:absolute md:left-80 md:p-10 md:py-3 md:shadow-xl md:shadow-gray-700 md:border-gray-400 text-white'><BiArrowBack/></button>
    </Link>

<div className='pb-8  flex justify-center md:block md:w-3/12 md:m-auto md:py-40 '>
    <form onSubmit={formik.handleSubmit}  className='text-black dark:bg-zinc-800 dark:text-white p-4 bg-white rounded-lg  ' method='POST' encType="multipart/form-data">
      <p className='text-wwe font-semibold font-aref py-4 text-center text-3xl mb-2'>Crear una cuenta</p>
 <div> {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/> }</div>
        <div className='flex flex-col mb-4'>
        <label htmlFor="alias" className='font-bold px-4 '>Alias</label>
        <input type="text" placeholder='Alias' className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe   focus:outline-none placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 " id='alias' value={formik.values.alias} onChange={formik.handleChange}  onBlur={formik.handleBlur}  />
        {formik.touched.alias && formik.errors.alias ? (
          <div> <p className='text-lg px-5  flex text-wwe'> {formik.errors.alias}  <span className='py-1.5 px-2'><FiAlertCircle/></span></p></div> ): (
            null
          )
        }
        </div>
        <div className='flex flex-col mb-4'>
        <label htmlFor="email" className='font-bold px-4 '>Email</label>
        <input type="text" placeholder='Email' className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none" id='email' value={formik.values.email} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {
        formik.touched.email && formik.errors.email ? (
          <div> <p className='text-lg px-5  flex text-wwe'> {formik.errors.email}  <span className='py-1.5 px-2'><FiAlertCircle/></span></p></div> ): (
            null
          )
        }
        </div>
          <div className='flex flex-col mb-4'>
        <label htmlFor="contrasena" className='font-bold px-4 '>Contraseña</label>
        <input type="password" placeholder='Contraseña' className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none" id='contrasena' value={formik.values.contrasena} onChange={formik.handleChange} onBlur={formik.handleBlur} />
        {
        formik.touched.contrasena && formik.errors.contrasena ? (
          <div> <p className='text-lg px-5  flex text-wwe'>{formik.errors.contrasena} <span className='py-1.5 px-2'><FiAlertCircle/></span></p></div> ) : (null)
        }

        </div>
        <div className='flex flex-col mb-4'>
        <label htmlFor="confirmContrasena" className='font-bold px-4 '>Repetir contraseña</label>
        <input type="password" placeholder='Contraseña' className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none" id='confirmContrasena' onChange={formik.handleChange} value={formik.values.confirmContrasena} onBlur={formik.handleBlur} />
        {
        formik.touched.confirmContrasena && formik.errors.confirmContrasena ? (
          <div> <p className='text-lg px-5  flex text-wwe'>{formik.errors.confirmContrasena} <span className='py-1.5 px-2'><FiAlertCircle/></span></p></div> ) : (null)
        }
        
        </div>
    <div className='flex flex-col mb-4 px-2'>
        <label htmlFor="url_img_usuario" className='font-bold px-4 '>Foto de perfil</label>
       <input
  type="file"
  id="url_img_usuario"
  name="url_img_usuario"
  onChange={(event) => {
    if (event.target.files.length > 0) {
      const file = event.target.files[0];
      formik.setFieldValue("url_img_usuario", file); // No almacenar el archivo directamente en el campo de Formik
    }
  }}
  onBlur={formik.handleBlur}
/>

         {formik.touched.url_img_usuario && formik.errors.url_img_usuario ? (
          <div> <p className='text-lg px-5 flex '> {formik.errors.url_img_usuario}</p></div> ) : (
            null
          )
        }
        </div>
        <div className='flex flex-col mb-4'>
        <label htmlFor='rol' className='font-bold px-4 '>
          Turista o Restaurante
        </label>
        <select
          id='rol'
          className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"
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
           <label htmlFor='nombres' className='font-bold px-4  '>
            Nombre
          </label>
          <input
            type='text'
            id='nombres'
            placeholder='Nombres'
           className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"
            value={formik.values.nombres}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.nombres && formik.errors.nombres && (
            <div>
              <p className='text-sm px-5  '>{formik.errors.nombres} </p>
            </div>
          )}
           <label htmlFor='apellidos' className='font-bold px-4  mt-2'>
            Apellidos
          </label>
          <input
            type='text'
            id='apellidos'
            placeholder='Apellidos'
            className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"
            value={formik.values.apellidos}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur}
          />
          {formik.touched.apellidos && formik.errors.apellidos && (
            <div>
              <p className='text-sm px-5 text-black'>{formik.errors.apellidos}</p>
            </div>
          )}
           <label htmlFor='motivo_alojamiento' className='font-bold px-4  mt-2'>
            Motivo de alojamiento
          </label>
          <select name="motivo_alojamiento" id="motivo_alojamiento"  
           value={formik.values.motivo_alojamiento}
            onChange={formik.handleChange}
            onBlur={formik.handleBlur } className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"  >
                  <option value="Vacaciones" >Vacaciones</option>
            <option value="Trabajo">Trabajo</option>
            <option value="Otro">Otro</option>
          </select>
          {formik.touched.motivo_alojamiento && formik.errors.motivo_alojamiento && (
            <div>
              <p className='text-sm px-5 text-black'>{formik.errors.motivo_alojamiento}</p>
            </div>
          )}
          <label htmlFor='nacionalidad' className='font-bold px-4  mt-2'>
            Nacionalidad
          </label>
         <select
          id='nacionalidad'
          name='nacionalidad'
          className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"
          value={formik.values.nacionalidad}
          onChange={formik.handleChange}
          onBlur={formik.handleBlur}
            required>
          <option value='' disabled>Seleccionar Nacionalidad</option>
          {nacionalidad.map((item, index) => (
            <option key={index} value={item.translations.spa.common}>
            {item.translations.spa.common}
          </option>
            ))}
          </select>
          {formik.touched.nacionalidad && formik.errors.nacionalidad && (
            <div>
              <p className='text-sm px-5 text-black'>{formik.errors.nacionalidad}</p>
            </div>
          )}
        </div>
      )}

{selectedRole === 'R' && (
<>
  <div className='flex flex-col  mb-4'>
   
      <label htmlFor="nombre" className='  px-4 font-bold mt-4'>Nombre del restaurante</label>
      <input type="text" id='nombre' placeholder='Nombre' className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"
      value={formik.values.nombre} onChange={formik.handleChange} required
      />
    
  </div>

      <div className='flex flex-col  mb-4'>
      <label htmlFor="calle" className='  px-4 font-bold mt-4'>Calle</label>
      <input type="text" id='calle' placeholder='Calle..' className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"
      value={formik.values.calle} onChange={formik.handleChange}  required
      />
     
      </div>
       <div className='flex flex-col  mb-4'>
      <label htmlFor="nro_puerta" className='  px-4 font-bold mt-4'>Nro de puerta</label>
      <input type="text" id='nro_puerta' placeholder='Nro de puerta' className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"
      value={formik.values.nro_puerta} onChange={formik.handleChange} required
      />
      </div>

      <div className='flex flex-col mb-4'>
      <label htmlFor="nro_local" className='px-4 font-bold mt-4'>Nro de local</label>
      <input type="text" id='nro_local' placeholder='Nro de puerta' className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"
      value={formik.values.nro_local} onChange={formik.handleChange}  required
      />
    
      </div>
      <div className='flex flex-col mb-4'>
      <label htmlFor="descripcion" className='  px-4 font-bold mt-4'>Tipo de restaurante</label>
      <select type="text" id='descripcion' placeholder='Descripcion..' className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"
      value={formik.values.descripcion} onChange={formik.handleChange}  required>
        <option value='' disabled>Tipo de restaurante</option>
        <option value='Restaurante para llevar'>Restaurante para llevar</option>
        <option value='Comida italiana'>Comida italiana</option>
        <option value='Comida francesa'>Comida francesa</option>
        <option value='Comida japonesa'>Comida japonesa</option>
        <option value='Comida china'>Comida china</option>
        <option value='Comida mexicana'>Comida mexicana</option>
        <option value='Comida gourmet'>Comida gourmet</option>
        <option value='Restaurante de autor'>Restaurante de autor</option>
        <option value='Restaurante de comida rapida y casual'>Restaurante de comida rapida y casual</option>
        <option value='Restaurante de comida rapida'>Restaurante de comida rapida</option>
        <option value='Restaurante buffet'>Restaurante buffet</option>
         </select>
     
      </div>
        <div className='flex flex-col  mb-4'>
      <label htmlFor="esquina" className='  px-4 font-bold mt-4'>Esquina</label>
      <input type="text" id='esquina' placeholder='Esquina' className="block w-full rounded-md ring-wwe  py-1.5 px-3 bg-white text-gray-900 shadow-sm ring-1 ring-inset ring-wwe  placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-wwe  sm:text-sm sm:leading-6 focus:outline-none"
      value={formik.values.esquina} onChange={formik.handleChange}  required
      />
    
      </div>

  </>
)}
<div>
<label htmlFor="" className='md:px-6  px-4 '>Acepta términos y condiciones?</label> 
     <input type="checkbox" required />
   <br />
      <a className='px-4 md:px-6 underline hover:text-blue-500 '  href="https://www.impo.com.uy/bases/leyes/18331-2008" target='_blank'>Ver términos</a>
</div>
 
    



        <button type='submit' className='px-6 mb-8 ml-8 md:ml-8 md:w-40 md:shadow-xl  md:mt-8 py-2 mt-4 rounded-lg bg-white bg-wwe text-white font-bold text-black '>Registrar</button>
    </form>
</div>
  </div>
  )
}

export default RegistroUsuario;