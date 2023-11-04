import React, { useContext } from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi';
import subscripcionData from '../../../../../context/subscripcionData';
import todoContext from '../../../../../context/todoContext';
import Mensaje from '../../../../../components/alertas/Mensaje';

const Subscripcion = () => {

  const {mensaje} = useContext(todoContext)
  const {subscripcion} = subscripcionData();

  const realizarInsert = (dato) => {
    
    subscripcion(dato);
    
  };
//   <label htmlFor="my_modal_6" className="btn">open modal</label>

{/* Put this part before </body> tag */}

  return (
    <>
   
    <div className="dark:bg-zinc-800 dark:bg-opacity-95  py-4 ">
       <NavBar/>
      <Link to='/homeAuth' className='absolute  md:left-24 left-4 top-20 bg-wwe text-white rounded-lg px-6 py-2'>  <BiArrowBack/> </Link>
      {mensaje && <Mensaje mensaje={mensaje} tipo='alerta'/>}
  <div className="mx-auto max-w-7xl  px-6 lg:px-8">
    <div className="mx-auto max-w-2xl  sm:text-center">
    </div>
    <div className="mx-auto bg-white mt-2 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className=" p-10">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Estándar</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">Contratá esta suscripción y disfrutá de sus servicios</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-wwe">¿Qué incluye?</h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Visualización de tu restaurante a todos los usuarios de Where We Eat
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Soporte con un operador
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Te habla tu crush
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Remera oficial de Where We Eat
          </li>
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-2xl font-semibold text-gray-600">Al mes</p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">$9.99</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
            </p>

      <button className="mt-10 block w-full rounded-md bg-wwe px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwe" onClick={()=>document.getElementById('my_modal_3').showModal()}>Suscribirme</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white text-black">
    <form method="dialog ">
      {/* if there is a button in form, it will close the modal */}
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>
    </form>
    <h3 className="font-bold text-2xl ">¿Estás seguro que quieres suscribirte?</h3>
  <div className='space-y-4 mt-5  text-lg'>
    <p> Para continuar con la suscripción a Where We Eat deberás seguir los siguientes pasos:</p>
    <p> 
        1- Acercarte a una red de cobranza (RedPagos o Abitab).</p>
     <p> 2- En la caja debes mencionar que vas a abonar una suscripción a Where We Eat.</p>
       <p> 3- Una vez abonado el monto, enviar una foto del comprobante de pago al siguiente número a través de Whatsapp: +59899123123.</p>
       <p> Una vez hecho esto la solicitud la aprobará un administrativo de Where We Eat y podrás disfrutar de nuestro servicio.</p>
      </div>
        <button className="mt-10 block w-full rounded-md bg-wwe px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwe" onClick={() => realizarInsert(1)}>Confirmar</button>
  </div>

</dialog>
            <p className="mt-6 text-xs leading-5 text-gray-600">Servicio con devolución.</p>
          </div>
        </div>
      </div>
    </div>
    <div className="mx-auto bg-white mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Premium</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">Contratá esta suscripción y disfrutá de sus servicios</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-wwe">¿Qué incluye?</h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
           Visualización de tu restaurante a todos los usuarios de Where We Eat
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Soporte con un operador
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Te habla tu crush
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Remera oficial de Where We Eat
          </li>
        </ul>
        
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-2xl font-semibold text-gray-600">Al año</p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">$99.99</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
            </p>
             <button className="mt-10 block w-full rounded-md bg-wwe px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwe" onClick={()=>document.getElementById('my_modal_3').showModal()}>Suscribirme</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white text-black">
    <form method="dialog ">
      {/* if there is a button in form, it will close the modal */}
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>
    </form>
    <h3 className="font-bold text-2xl ">¿Estás seguro que quieres suscribirte?</h3>
  <div className='space-y-4 mt-5  text-lg'>
    <p> Para continuar con la suscripción a Where We Eat deberás seguir los siguientes pasos:</p>
    <p> 
        1- Acercarte a una red de cobranza (RedPagos o Abitab).</p>
     <p> 2- En la caja debes mencionar que vas a abonar una suscripción a Where We Eat.</p>
       <p> 3- Una vez abonado el monto, enviar una foto del comprobante de pago al siguiente número a través de Whatsapp: +59899123123.</p>
       <p> Una vez hecho esto la solicitud la aprobará un administrativo de Where We Eat y podrás disfrutar de nuestro servicio.</p>
      </div>
        <button className="mt-10 block w-full rounded-md bg-wwe px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwe" onClick={() => realizarInsert(2)}>Confirmar</button>
  </div>

</dialog>
            <p className="mt-6 text-xs leading-5 text-gray-600">Servicio con devolución.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Dos año */}
    <div className="mx-auto bg-white mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div className="p-8 sm:p-10 lg:flex-auto">
        <h3 className="text-2xl font-bold tracking-tight text-gray-900">VIP</h3>
        <p className="mt-6 text-base leading-7 text-gray-600">Contratá esta suscripción y disfrutá de sus servicios</p>
        <div className="mt-10 flex items-center gap-x-4">
          <h4 className="flex-none text-sm font-semibold leading-6 text-wwe">¿Qué incluye?</h4>
          <div className="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Visualización de tu restaurante a todos los usuarios de Where We Eat
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Soporte con un operador
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Te habla tu crush
          </li>
          <li className="flex gap-x-3">
            <svg className="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fillRule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clipRule="evenodd" />
            </svg>
            Remera oficial de Where We Eat
          </li>
        </ul>
      </div>
      <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div className="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div className="mx-auto max-w-xs px-8">
            <p className="text-2xl font-semibold text-gray-600">Por dos años</p>
            <p className="mt-6 flex items-baseline justify-center gap-x-2">
              <span className="text-5xl font-bold tracking-tight text-gray-900">$149.99</span>
              <span className="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
            </p>
           <button className="mt-10 block w-full rounded-md bg-wwe px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwe" onClick={()=>document.getElementById('my_modal_3').showModal()}>Suscribirme</button>
<dialog id="my_modal_3" className="modal">
  <div className="modal-box bg-white text-black">
    <form method="dialog ">
      {/* if there is a button in form, it will close the modal */}
      <button  className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</button>
    </form>
    <h3 className="font-bold text-2xl ">¿Estás seguro que quieres suscribirte?</h3>
  <div className='space-y-4 mt-5  text-lg'>
    <p> Para continuar con la suscripción a Where We Eat deberás seguir los siguientes pasos:</p>
    <p> 
        1- Acercarte a una red de cobranza (RedPagos o Abitab).</p>
     <p> 2- En la caja debes mencionar que vas a abonar una suscripción a Where We Eat.</p>
       <p> 3- Una vez abonado el monto, enviar una foto del comprobante de pago al siguiente número a través de Whatsapp: +59899123123.</p>
       <p> Una vez hecho esto la solicitud la aprobará un administrativo de Where We Eat y podrás disfrutar de nuestro servicio.</p>
      </div>
        <button className="mt-10 block w-full rounded-md bg-wwe px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwe" onClick={() => realizarInsert(3)}>Confirmar</button>
  </div>

</dialog>
            <p className="mt-6 text-xs leading-5 text-gray-600">Servicio con devolución.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</div>
<FooterDsk/>
</>
  )
}

export default Subscripcion