import { useFormik } from 'formik';
import { useParams } from 'react-router-dom'
import * as Yup from 'yup';

const EditarDescuento = () => {

    const {id_usuario, usuario} = useParams();
    
    
  
const formik = useFormik({
    initialValues: {
     
    },
    validationSchema: Yup.object({
      confirmContrasena: Yup.string().oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir')
    }),

   onSubmit: async(valores, { resetForm }) => {

    const data = {
        "accion": "editarPlato",
        "id_usuario": id_usuario
    }

  

  

    
}
})
    
    return (
    <div className='min-h-screen'>
        <form onSubmit={formik.handleSubmit}></form>
        <p>Editar descuento</p>
    </div>
    )
}

export default EditarDescuento