
import { useParams } from 'react-router-dom'

const EditarDescuento = () => {

    const {id_usuario, usuario} = useParams();
    
    
  
const formik = useFormik({
    initialValues: {
     
    },
    validationSchema: Yup.object({
      confirmContrasena: Yup.string().oneOf([Yup.ref('contrasena'), null], 'Las contraseñas deben coincidir')
    }),

   onSubmit: (valores, { resetForm }) => {
    const formData = new FormData();
    formData.append("accion", "editarPlato");
    formData.append("id_usuario", id_usuario); 

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
        <p>Editar descuento</p>
    </div>
    )
}

export default EditarDescuento