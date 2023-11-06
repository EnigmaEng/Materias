import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import todoContext from '../../../../../context/todoContext';
import { Link } from 'react-router-dom';
import Mensaje from '../../../../../components/alertas/Mensaje';
import NavBar from '../../../../../components/nabvar/NavBar';

const EditarPlato = () => {

const {id_Plato} = useParams();
const TodoContext = useContext(todoContext)
const { editarPlato, mensaje} = TodoContext


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
        nombre_plato: '',
        costo: '',
        descripcion:'',
        url_img_menu:'',
        estado_plato:'',
    },


       onSubmit: async(valores, { resetForm }) => {
    const data = {
        accion: "modificarPlato",
        id_Plato: id_Plato,
    };

    if (valores.nombre_plato !== "") {
    data.nombre_plato = valores.nombre_plato;
    }

    if (valores.costo !== "") {
    data.costo = valores.costo;
    }

    if(valores.descripcion !== ""){
        data.descripcion = valores.descripcion;
    }
    
    if(valores.estado_plato !== ""){
        data.estado_plato = valores.estado_plato;
    }

    if (valores.url_img_menu !== "") {
        const file = valores.url_img_menu;
        try {
        const base64Image = await imagenBase64(file);
        data.url_img_menu = base64Image;
        } catch (error) {
            console.log("Error al cargar la foto: " , error)
        }
    }

   if (Object.keys(data).length > 2) {
        editarPlato(data);
    }
   
}


})
  return (
    <div className='min-h-screen'>
       <NavBar/>
        <div className='absolute left-24 top-24 '>
            <Link to='/menu' className='p-2  text-white bg-wwe rounded-md '>Volver</Link>
        </div>
            <aside className='py-40'>
<form onSubmit={formik.handleSubmit} className='bg-white shadow-xl rounded-lg p-4 md:w-3/12  m-auto ' method='POST' encType='multipart/form-data'>
    {mensaje && <Mensaje mensaje={mensaje} tipo="alerta"/>}
<p className='text-2xl text-center font-semibold font-aref text-wwe mb-8'>Editar datos del plato</p>
    <div className='form-control mb-4'>
        <label htmlFor="" className='text-wwe text-lg font-semibold fotn-aref'>Nombre del plato</label>
        <input type="text" id='nombre_plato' placeholder='Nombre' className='rounded-md p-2 border border-wwe bg-gray-200 text-black'
        onChange={formik.handleChange} value={formik.values.nombre_plato}
        />
    </div>
    <div className='form-control mb-4'>
        <label htmlFor="" className='text-wwe text-lg font-semibold fotn-aref'>Costo</label>
        <input type="text" id='costo' placeholder='Costo' className='rounded-md p-2 border border-wwe bg-gray-200 text-black'
        value={formik.values.costo} onChange={formik.handleChange}
        />
    </div>
    <div className='form-control mb-4'>
        <label htmlFor="" className='text-wwe text-lg font-semibold fotn-aref'>Descripcion</label>
        <textarea type="text" id='descripcion' placeholder='Descripcion' className='rounded-md  p-2 h-24 border border-wwe bg-gray-200 text-black'
        onChange={formik.handleChange} value={formik.values.descripcion}
        > </textarea>
    </div>
    <div className='form-control mb-4'>
        <label htmlFor="" className='text-wwe text-lg font-semibold fotn-aref'>Foto:</label>
       <input
  type="file"
  id="url_img_menu"
  name="imagen"
  accept="image/*"
  onChange={(event) => {
    formik.setFieldValue("url_img_menu", event.currentTarget.files[0]);
  }}
  onBlur={formik.handleBlur}
  className="file-input file-input-ghost w-full max-w-xs  text-wwe border border-wwe  mt-2"
/>
    </div>
    {/* <div className='form-control mb-4'>
        <label htmlFor="" className='text-wwe text-lg font-semibold fotn-aref' >Estado del plato</label>
        <select name="" id="estado_plato" className='rounded-md p-2 border border-wwe bg-gray-200 text-black '
        onChange={formik.handleChange} value={formik.values.estado_plato}
        >
            <option value="" disabled>Estado</option>
            <option value="S">Activo</option>
            <option value="N">Desactivado</option>
        </select>
    </div> */}
    <div className='flex items-center justify-center'>
        <button className='bg-wwe text-white w-64 text-lg font-aref font-semibold font-border shado-xl mt-5 rounded-md p-1' type='submit'>Editar </button>
    </div>

        </form>
        </aside>
    </div>
  )
}

export default EditarPlato