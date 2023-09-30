import React from 'react'

const PerfilDesk = () => {
  return (
    <div className='min-h-screen bg-gray-100'>
        <div className='absolute left-0 h-full glass p-8 w-80 text-black space-y-2 py-10'>
          <div>
             <img src="https://images-breno.s3.sa-east-1.amazonaws.com/logoproducto+(2).png" alt="logo" className='w-14 rounded-full m-auto mb-8' />
          </div>
          <div className='border px-6 py-2 rounded-box'>
            <p>Home</p>
          </div>
           <div className='border px-6 py-2 rounded-box'>
            <p>Solicitudes </p>
          </div>
           <div className='border px-6 py-2 rounded-box'>
            <p>Mas solicitudes </p>
          </div>
        </div>
    </div>
  )
}

export default PerfilDesk;