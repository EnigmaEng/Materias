import { useContext, useEffect, useState } from "react";
import subscripcionData from "../../../../../../context/subscripcionData"
import todoContext from "../../../../../../context/todoContext";
import clienteAxios from "../../../../../../config/axios";


const Aprobaciones = () => {

const [solicitudes, setSolicitudes] = useState([])



const {usuario} = useContext(todoContext)
    const obtenerSubscripcion = async () =>
{
try {
     const accion = {
        "accion": "obtenerSubscripciones"
     }
    const respuesta = await clienteAxios.post('/subscripcionController.php', accion)
    setSolicitudes(respuesta.data)

} catch (error) {
    console.log(error)
}
}


    const aprobarSub = async (id_usuario_rest, id_tipo_subscripcion) => {
    
          const accion = {
            "accion": "aprobarRestaurante",
            "id_usuario_rest": id_usuario_rest,
            "id_usuario_admin": usuario.id_usuario,
            "id_tipo_sub": id_tipo_subscripcion
          }
          
          const respuesta = await clienteAxios.post('/subscripcionController.php', accion)
          
          
          
    }

    useEffect(() => {
  
    obtenerSubscripcion();

    },[])
  



   
  return (
    <>
    <div className="grid grid-cols-1 gap-5 ">

   
    {
    solicitudes && solicitudes.length > 0 ?  (
    solicitudes.map((item, index) => ( 
 <div className="lg:flex lg:items-center bg-white lg:justify-between border p-8 shadow-xl rounded-lg" key={index}>
  <div className="min-w-0 flex-1">
    <h2 className="text-lg font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">Restaurante: {item.nombre}</h2>
    <div className="mt-1 flex flex-col sm:mt-0 sm:flex-row sm:flex-wrap sm:space-x-6">

      <div className="mt-2 flex items-center text-sm text-gray-500">
        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path d="M10.75 10.818v2.614A3.13 3.13 0 0011.888 13c.482-.315.612-.648.612-.875 0-.227-.13-.56-.612-.875a3.13 3.13 0 00-1.138-.432zM8.33 8.62c.053.055.115.11.184.164.208.16.46.284.736.363V6.603a2.45 2.45 0 00-.35.13c-.14.065-.27.143-.386.233-.377.292-.514.627-.514.909 0 .184.058.39.202.592.037.051.08.102.128.152z" />
          <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-8-6a.75.75 0 01.75.75v.316a3.78 3.78 0 011.653.713c.426.33.744.74.925 1.2a.75.75 0 01-1.395.55 1.35 1.35 0 00-.447-.563 2.187 2.187 0 00-.736-.363V9.3c.698.093 1.383.32 1.959.696.787.514 1.29 1.27 1.29 2.13 0 .86-.504 1.616-1.29 2.13-.576.377-1.261.603-1.96.696v.299a.75.75 0 11-1.5 0v-.3c-.697-.092-1.382-.318-1.958-.695-.482-.315-.857-.717-1.078-1.188a.75.75 0 111.359-.636c.08.173.245.376.54.569.313.205.706.353 1.138.432v-2.748a3.782 3.782 0 01-1.653-.713C6.9 9.433 6.5 8.681 6.5 7.875c0-.805.4-1.558 1.097-2.096a3.78 3.78 0 011.653-.713V4.75A.75.75 0 0110 4z" clipRule="evenodd" />
        </svg>
        <>
        {
          item.id_tipo_subscripcion === 1 ? 
           <b>Estándar</b>
          : item.id_tipo_subscripcion === 2 ?
          <b>Premium</b>
          : item.id_tipo_subscripcion === 3 ?
          <b>VIP</b>
          :
          <p>Suscripción desconocido</p>
        }
        </>
      </div>
      <div className="mt-2 flex items-center text-sm text-gray-500">
        <svg className="mr-1.5 h-5 w-5 flex-shrink-0 text-gray-400" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M5.75 2a.75.75 0 01.75.75V4h7V2.75a.75.75 0 011.5 0V4h.25A2.75 2.75 0 0118 6.75v8.5A2.75 2.75 0 0115.25 18H4.75A2.75 2.75 0 012 15.25v-8.5A2.75 2.75 0 014.75 4H5V2.75A.75.75 0 015.75 2zm-1 5.5c-.69 0-1.25.56-1.25 1.25v6.5c0 .69.56 1.25 1.25 1.25h10.5c.69 0 1.25-.56 1.25-1.25v-6.5c0-.69-.56-1.25-1.25-1.25H4.75z" clipRule="evenodd" />
        </svg>
        {item.fecha_pago}
      </div>
    </div>
  </div>
  <div className="mt-5 flex lg:ml-4 lg:mt-0">

    <span className="sm:ml-3">
      <label htmlFor="my_modal_6" type='button' className="inline-flex items-center rounded-md bg-wwe px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-red-700">
            <svg className="-ml-0.5 mr-1.5 h-5 w-5" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
          <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
        </svg>
        
        Aprobar</label>
    
    <input type="checkbox" id="my_modal_6" className="modal-toggle" />
<div className="modal">
  <div className="modal-box bg-white text-black">
    <h3 className="font-bold text-2xl">¿Aprobar restaurante?</h3>
    <p className="py-4 text-sm">Estás a punto de confirmar una suscripción para un restaurante, verifica que sea el correcto y tengas todos los datos necesarios para la aprobación.</p>
    <div className="modal-action">
      <label htmlFor="my_modal_6" onClick={() => aprobarSub(item.id_usuario_rest, item.id_tipo_subscripcion)} type="button" className="inline-flex items-center rounded-md bg-wwe px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:bg-red-700" >Confirmar</label>
    </div>
  </div>
</div>
    </span>

  </div>
</div>
    ))
    

 ) :
 <p className="text-center text-2xl text-gray-600 font-semibold dark:text-white">Sin solicitudes pendientes</p>
    
}
 </div>
</>
  )
}

export default Aprobaciones