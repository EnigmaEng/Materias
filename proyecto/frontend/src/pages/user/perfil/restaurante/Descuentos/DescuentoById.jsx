import React, { useContext } from 'react'
import { useParams } from 'react-router-dom'
import NavBar from '../../../../../components/nabvar/NavBar';
import clienteAxios from '../../../../../config/axios';
import {useFormik} from 'formik'
import * as Yup from 'yup';
import { Link } from 'react-router-dom';
import Mensaje from '../../../../../components/alertas/Mensaje';
import {BiArrowBack} from 'react-icons/bi'
import todoContext from '../../../../../context/todoContext';

const DescuentoById = () => {

    const {id_descuento} = useParams();
    const {editarDescuento, mensaje} =  useContext(todoContext)

        const imagenBase64 = (file) => {
      return new Promise((resolve, reject) => {
    const reader = new FileReader();

      reader.onload = () => {
      resolve(reader.result);
     };

     reader.onerror = (error) => {
      reject(error);
     };

    reader.readAsDataURL(file);
  });
};


    const formik = useFormik({
        initialValues: {
            titulo_descuento:'',
            descripcion: '',
            url_img_descuento: '',
            costo: '',
            fecha_inicio: '',
            fecha_fin: ''
        },

    onSubmit: async(valores, { resetForm }) => {
    const data = {
    accion: "modificarDescuento",
    id_descuento: id_descuento,
    };

    if (valores.titulo_descuento !== "") {
    data.titulo_descuento = valores.titulo_descuento;
    }

    if (valores.descripcion !== "") {
    data.descripcion = valores.descripcion;
    }

    if (valores.costo !== "") {
    data.costo = valores.costo;
    }
    
    if(valores.fecha_inicio !==""){
        data.fecha_inicio = valores.fecha_inicio;
    }

    if(valores.fecha_fin !==""){
        data.fecha_fin = valores.fecha_fin;
    }


    if (valores.url_img_descuento !== "") {
        const file = valores.url_img_descuento;
        try {
        const base64Image = await imagenBase64(file);
        data.url_img_descuento = base64Image;
        } catch (error) {
            console.log("Error al cargar la foto: " , error)
        }
    }
    if (Object.keys(data).length > 2) {
          editarDescuento(data);
    }
    
}
    })

  return (
   <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95   '>
        <NavBar/>
      <Link to='/configuracionRest' className='absolute py-1.5 top-24 left-24 bg-wwe text-white rounded-lg px-6 py-1'><BiArrowBack/></Link>
<form onSubmit={formik.handleSubmit} method='POST' className='bg-white md:w-3/12 m-auto mt-24 p-8 rounded-box shadow-xl' encType='multipart/form-data'>
 
    <h2 className='text-center text-4xl mb-5 font-bold text-wwe font-aref'>Editar Promoción</h2>
     {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/> }
<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Título de la promoción</label>
  <input type="text" id='titulo_descuento' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' values={formik.values.titulo_descuento} onChange={formik.handleChange}  placeholder='Título'/>

</div>
<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Descripción</label>
<input type="text" id='descripcion' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' values={formik.values.descripcion} onChange={formik.handleChange}  placeholder='Descripción'/>

</div>

<div  className='flex flex-col  justify-center items-center text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Imágen de la promoción</label>
<input
  type="file"
  id="url_img_descuento"
  name="imagen"
  accept="image/*"
  onChange={(event) => {
    formik.setFieldValue("url_img_descuento", event.currentTarget.files[0]);
  }}
  
className="file-input file-input-ghost w-full max-w-xs border border-wwe text-wwe "
/>

</div>

<div  className='flex flex-col text-center font-aref text-black text-lg mb-6'>
  <label htmlFor="">Precio</label>
<input type="text" id='costo' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' values={formik.values.costo} onChange={formik.handleChange} />

</div>

<div  className='flex flex-col text-center font-aref text-black text-lg mb-6'>
  <label htmlFor="">Fecha de inicio</label>
<input type="date" id='fecha_inicio' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' values={formik.values.fecha_inicio} onChange={formik.handleChange} />

</div>

<div  className='flex flex-col text-center font-aref text-black text-lg mb-6' >
  <label htmlFor="">Fecha de fin</label>
<input type="date" id='fecha_fin' className='input w-64 bg-white text-black border border-wwe focus:ring-2 focus:ring-wwe m-auto ' values={formik.values.fecha_fin} onChange={formik.handleChange} />

</div>
<div className='flex justify-center items-center'>
    <button type='submit' className=' w-full mt-5   py-1 shadow-xl shadow-gray-400 hover:bg-red-600 bg-wwe rounded-lg text-white text-2xl'>Crear</button>
</div>

</form>
        
    </div>
  )
}

export default DescuentoById