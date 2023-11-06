import React, { useContext, useEffect, useState } from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import clienteAxios from '../../../../../config/axios'
import todoContext from '../../../../../context/todoContext'

const TokensTurista = () => {

    const [token, setToken] = useState([])
    const {usuario} = useContext(todoContext)

        const getTokens = async() => {
            const accion = {
                "accion": "obtenerVisitasDeTuristas",
                "id_restaurante": usuario?.id_usuario
            }

            const respuesta = await clienteAxios.post("/restauranteController.php", accion)
            setToken(respuesta.data)
            console.log(respuesta.data)
        }
        

        useEffect(() => {
            if(usuario && usuario.id_usuario){
            getTokens();
            }
                
        },[token])

  return (
    <div className='min-h-screen'>
        <NavBar/>

        <div className='bg-white w-6/12 m-auto mt-24 rounded-lg p-8 flex flex-col gap-10 shadow-xl'>
            <p className='text-2xl font-semibold text-wwe text-center'>Solicitudes de usuario:</p>
            <div className='grid grid-cols-4'>

           
         {
  token === null ? (
    <p className='text-wwe text-center text-2xl'>Sin visitas</p>
  ) : (
  
    token.map((item, index) => (
      <div className='bg-white w-64 rounded-lg text-black border shadow-xl p-8' key={index}>
        <p>Token: <b>{item.token}</b></p>
        <p>Nombre: {item.nombres}</p>
        <p>Apellido : {item.apellidos}</p>
        <p>Nacionalidad: {item.nacionalidad}</p>
        <p className='text-center text-gray-600 mt-5 font-semibold'>{item.fecha_solicitado}</p>
      </div>
    ))
  )
}
 </div>
        </div>
    </div>
  )
}

export default TokensTurista