import React, { useContext, useEffect } from 'react'
import NavBar from '../../../../components/nabvar/NavBar'
import FooterDsk from '../../../../components/Footer/FooterDsk'
import {MdOutlineRateReview} from 'react-icons/md'
import reseniaData from '../../../../context/reseniaData'
import todoContext from '../../../../context/todoContext'


const MisReseniasDsk = () => {

  const {getReseniaById, resenia } = reseniaData();
  const {usuario, autenticado} = useContext(todoContext)

  useEffect(() => {
  getReseniaById();
  },[autenticado, usuario])

  return (
    <>
    <div className='min-h-screen dark:bg-zinc-800 dark:bg-opacity-95 '>

      <NavBar/>
    <div className="bg-white w-[60%] mt-28 rounded-box shadow-xl m-auto py-24 sm:py-32 mb-24">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl bg-zinc-100  h-48 p-2 rounded-box shadow-xl  xl:h-80">
          <h2 className="text-3xl font-bold tracking-tight text-black font-aref sm:text-3xl px-5 py-2 flex gap-5 ">Tus reseñas <span className='text-4xl mt-1'><MdOutlineRateReview/></span></h2>
          <p className="mt-6 text-lg leading-8 text-black ">
            Este es el lugar donde veras tus reseñas creadas hacia otros restaurantes concurridos.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
        { 
         Array.isArray(resenia) && resenia.length > 0 ?
         resenia.map((item, index) => (
              <li key={index}>
              <div className="flex items-center gap-x-6 border shadow-xl p-2 rounded-box">
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-wwe"></h3>
                  <p className="text-sm font-semibold leading-6 text-black">Menu gastronómico: {item.calificacion_menu} </p>
                   <p className="text-sm font-semibold leading-6 text-black">Personal: {item.calificacion_personal}</p>
                    <p className="text-sm font-semibold leading-6 text-black">Instalaciones: {item.calificacion_instalaciones}</p>
                    <p className="text-sm font-semibold leading-6 text-black">Calificacion General: {item.calificacion_general}</p>
                    <p className="text-sm font-semibold leading-6 text-black"> {item.fecha}</p>
                </div>
              </div> 
               </li>
         ))
      :
      <div>
        <p>Sin reseñas.</p>
      </div>
        }
            
          
        
        </ul>
      </div>
    </div>
    
    </div>
    <FooterDsk/>
   </>
  )
}

export default MisReseniasDsk