import React, { useContext } from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useParams } from 'react-router-dom';
import todoContext from '../../../../../context/todoContext';
import { Link } from 'react-router-dom';
import Mensaje from '../../../../../components/alertas/Mensaje';

const EditarPlato = () => {

const {id_Plato} = useParams();
const TodoContext = useContext(todoContext)
const { editarPlato, mensaje} = TodoContext





const formik = useFormik({
    initialValues: {
        nombre_plato: '',
        costo: '',
        descripcion:'',
        url_img_menu:'',
        estado_plato:'',
    },


       onSubmit: (valores, { resetForm }) => {
    const data = {
        accion: "modificarPlato",
        id_Plato: id_Plato,
    };

    if (valores.nombre_plato !== "") {
        data.opcion = "nombre_plato";
        data.valor = valores.nombre_plato;
    }

    if (valores.costo !== "") {
        data.opcion = "costo";
        data.valor = valores.costo;
    }

    if (valores.descripcion !== "") {
        data.opcion = "descripcion";
        data.valor = valores.descripcion;
    }

     if (valores.url_img_menu !== "") {
        data.opcion = "url_img_menu";
        data.valor = valores.url_img_menu;
    }

     if (valores.estado_plato !== "") {
        data.opcion = "estado_plato";
        data.valor = valores.estado_plato;
    }



    // Enviar solo si hay cambios
    if (data.opcion && data.valor) {
        editarPlato(data);
         resetForm();
    }
   
}


})
  return (
    <div className='min-h-screen'>
        <p className='text-center text-4xl font-bold text-wwe'> id: {id_Plato}</p>
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
        <input type="number" id='costo' placeholder='Costo' className='rounded-md p-2 border border-wwe bg-gray-200 text-black'
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
        <input type="file" id='url_img_menu' name='url_img_menu'  className='file-input'
        
        />
    </div>
    <div className='form-control mb-4'>
        <label htmlFor="" className='text-wwe text-lg font-semibold fotn-aref' >Estado del plato</label>
        <select name="" id="estado_plato" className='rounded-md p-2 border border-wwe bg-gray-200 text-black '
        onChange={formik.handleChange} value={formik.values.estado_plato}
        >
            <option value="" disabled>Estado</option>
            <option value="S">Activo</option>
            <option value="N">Desactivado</option>
        </select>
    </div>
    <div className='flex items-center justify-center'>
        <button className='bg-wwe text-white w-64 text-lg font-aref font-semibold font-border shado-xl mt-5 rounded-md p-1' type='submit'>Editar </button>
    </div>

        </form>
        </aside>
    </div>
  )
}

export default EditarPlato