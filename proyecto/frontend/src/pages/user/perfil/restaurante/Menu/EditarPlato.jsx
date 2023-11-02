import React from 'react'
import { useFormik } from 'formik';
import * as Yup from 'yup';

const EditarPlato = () => {


    
const formik = useFormik({
    initialValues: {
        alias: '',
        email: '',
        contrasena: '',
        confirmContrasena:'',
        url_img_usuario:''
    },
    validationSchema: Yup.object({
      confirmContrasena: Yup.string().oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir')
    }),

   onSubmit: (valores, { resetForm }) => {
    const formData = new FormData();
    formData.append("accion", "editarUsuario");
    formData.append("id_usuario", usuario?.id_usuario); 

    let opcion = "";
    let valor = "";

  
    switch (true) {
        case valores.alias !== usuario?.alias:
            opcion = "alias";
            valor = valores.alias;
            break;
        case valores.email !== usuario?.email:
            opcion = "email";
            valor = valores.email;
            break;
        case valores.contrasena:
            opcion = "contrasena";
            valor = valores.contrasena;
            break;
        case valores.url_img_usuario !== '':
            opcion = "url_img_usuario";
            valor = valores.url_img_usuario;
            break;
        default:
           
            break;
    }

    if (opcion !== '' && valor !== '') {
        formData.append("opcion", opcion);
        formData.append("valor", valor);
      
        editarPerfil(formData);
    }

    
}
})
  return (
    <div className='min-h-screen'>
        <form action="POST" />
            <aside className='py-40'>
<form action="" className='bg-white rounded-lg p-4 w-6/12 m-auto '>
    <div className='flex items-center justify-center'>
        <button className='bg-wwe text-white w-64 text-lg font-aref font-semibold font-border shado-xl  rounded-md p-1' type='submit'>Editar </button>
    </div>

        </form>
        </aside>
    </div>
  )
}

export default EditarPlato