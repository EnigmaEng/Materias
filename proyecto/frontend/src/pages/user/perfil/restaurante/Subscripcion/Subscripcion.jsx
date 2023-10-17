import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar'
import FooterDsk from '../../../../../components/Footer/FooterDsk'
import { Link } from 'react-router-dom'
import {BiArrowBack} from 'react-icons/bi';

const Subscripcion = () => {
  return (
    <>
   
    <div class="dark:bg-zinc-800 dark:bg-opacity-95 bg-opacity-75 bg-white py-4 ">
       <NavBar/>
      <Link to='/configuracionRest' className='absolute  md:left-24 left-4 top-20 bg-wwe text-white rounded-lg px-6 py-2'>  <BiArrowBack/> </Link>
  <div class="mx-auto max-w-7xl  px-6 lg:px-8">
    <div class="mx-auto max-w-2xl  sm:text-center">
      <h2 class="text-4xl text-center font-bold tracking-tight text-wwe sm:text-4xl py-10">Subscribete </h2>
   
    </div>
    <div class="mx-auto bg-white mt-2 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div class=" p-10">
        <h3 class="text-2xl font-bold tracking-tight text-gray-900">Mensual</h3>
        <p class="mt-6 text-base leading-7 text-gray-600">Contrata esta subscripcion y disfruta de sus servicios</p>
        <div class="mt-10 flex items-center gap-x-4">
          <h4 class="flex-none text-sm font-semibold leading-6 text-wwe">Que incluye</h4>
          <div class="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Visualizacion de tu restaurante a todos los usuarios de Where We Eat
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Soporte con un operador
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Te habla tu crush
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Remera oficial de Where We Eat
          </li>
        </ul>
      </div>
      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div class="mx-auto max-w-xs px-8">
            <p class="text-2xl font-semibold text-gray-600">Al mes</p>
            <p class="mt-6 flex items-baseline justify-center gap-x-2">
              <span class="text-5xl font-bold tracking-tight text-gray-900">$9.99</span>
              <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
            </p>
            <a href="#" class="mt-10 block w-full rounded-md bg-wwe px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwe">Contratar</a>
            <p class="mt-6 text-xs leading-5 text-gray-600">Servicio con devolucion.</p>
          </div>
        </div>
      </div>
    </div>
    <div class="mx-auto bg-white mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div class="p-8 sm:p-10 lg:flex-auto">
        <h3 class="text-2xl font-bold tracking-tight text-gray-900">Anual</h3>
        <p class="mt-6 text-base leading-7 text-gray-600">Contrata esta subscripcion y disfruta de sus servicios</p>
        <div class="mt-10 flex items-center gap-x-4">
          <h4 class="flex-none text-sm font-semibold leading-6 text-wwe">Que incluye</h4>
          <div class="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
           Visualizacion de tu restaurante a todos los usuarios de Where We Eat
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Soporte con un operador
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Te habla tu crush
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Remera oficial de Where We Eat
          </li>
        </ul>
      </div>
      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div class="mx-auto max-w-xs px-8">
            <p class="text-2xl font-semibold text-gray-600">Al año</p>
            <p class="mt-6 flex items-baseline justify-center gap-x-2">
              <span class="text-5xl font-bold tracking-tight text-gray-900">$99.99</span>
              <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
            </p>
            <a href="#" class="mt-10 block w-full rounded-md bg-wwe px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwe">Contratar</a>
            <p class="mt-6 text-xs leading-5 text-gray-600">Servicio con devolucion.</p>
          </div>
        </div>
      </div>
    </div>

    {/* Dos año */}
    <div class="mx-auto bg-white mt-16 max-w-2xl rounded-3xl ring-1 ring-gray-200 sm:mt-20 lg:mx-0 lg:flex lg:max-w-none">
      <div class="p-8 sm:p-10 lg:flex-auto">
        <h3 class="text-2xl font-bold tracking-tight text-gray-900">Premiun</h3>
        <p class="mt-6 text-base leading-7 text-gray-600">Contrata esta subscripcion y disfruta de sus servicios</p>
        <div class="mt-10 flex items-center gap-x-4">
          <h4 class="flex-none text-sm font-semibold leading-6 text-wwe">Que incluye</h4>
          <div class="h-px flex-auto bg-gray-100"></div>
        </div>
        <ul role="list" class="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-600 sm:grid-cols-2 sm:gap-6">
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Visualizacion de tu restaurante a todos los usuarios de Where We Eat
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Soporte con un operador
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Te habla tu crush
          </li>
          <li class="flex gap-x-3">
            <svg class="h-6 w-5 flex-none text-wwe" viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
              <path fill-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" clip-rule="evenodd" />
            </svg>
            Remera oficial de Where We Eat
          </li>
        </ul>
      </div>
      <div class="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
        <div class="rounded-2xl bg-gray-50 py-10 text-center ring-1 ring-inset ring-gray-900/5 lg:flex lg:flex-col lg:justify-center lg:py-16">
          <div class="mx-auto max-w-xs px-8">
            <p class="text-2xl font-semibold text-gray-600">Por dos años</p>
            <p class="mt-6 flex items-baseline justify-center gap-x-2">
              <span class="text-5xl font-bold tracking-tight text-gray-900">$149.99</span>
              <span class="text-sm font-semibold leading-6 tracking-wide text-gray-600">USD</span>
            </p>
            <a href="#" class="mt-10 block w-full rounded-md bg-wwe px-3 py-2 text-center text-sm font-semibold text-white shadow-sm hover:bg-red-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-wwe">Contratar</a>
            <p class="mt-6 text-xs leading-5 text-gray-600">Servicio con devolucion.</p>
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