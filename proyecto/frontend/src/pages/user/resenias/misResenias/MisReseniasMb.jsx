import React, { useContext, useEffect } from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import FooterDsk from '../../../../components/Footer/FooterDsk'
import todoContext from '../../../../context/todoContext'
import reseniaData from '../../../../context/reseniaData'




const MisReseniasMb = () => {

  const {usuario, autenticado} = useContext(todoContext)
  const {resenia, getReseniaById} = reseniaData();


  useEffect(() =>{
getReseniaById();
  },[autenticado, usuario])
  return (
    <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95 '>

      <NavBar/>
    <div className="bg-white w-[90%] mt-28 rounded-box shadow-xl m-auto py-24 sm:py-32 ">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl bg-zinc-100   p-2 rounded-box shadow-xl  ">
          <h2 className="text-3xl font-bold tracking-tight text-black font-aref sm:text-4xl px-5 py-2 ">Tus reseñas</h2>
        
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {
          
          resenia[0] === 'Error en la consulta' ?
          <p>Sin resenas</p> :
          resenia.map((item, index) => (
            <li key={index}>
              <div className="flex items-center gap-x-6 border shadow-xl p-2 rounded-box">
                
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-wwe">Calificaciones:</h3>
                     <p className="text-sm font-semibold leading-6 text-black"> Menu gastronómico:{item.calificacion_menu}</p>
                  <p className="text-sm font-semibold leading-6 text-black"> Personal:{item.calificacion_personal}</p>
                   <p className="text-sm font-semibold leading-6 text-black">Instalaciones: {item.calificacion_instalaciones}</p>
                    <p className="text-sm font-semibold leading-6 text-black">Calificacion general: {item.calificacion_general}</p>
                    <p className="text-sm font-semibold leading-6 text-black">{item.fecha}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
    <FooterDsk/>
    </div>
  )
}

export default MisReseniasMb