import React, { useContext, useEffect } from 'react'
import todoContext from './todoContext'
import { Outlet, Navigate } from 'react-router-dom'

const RutaProtegida = () => {

  const TodoContext = useContext(todoContext)
  const {usuarioAutenticado, autenticado, usuario, cargando} = TodoContext

  useEffect(()=> {
usuarioAutenticado();
  },[autenticado])



  return (
    <>
    {
      usuario ?  <Outlet/> : <Navigate to='/'/>
    }
    </>
  )
}

export default RutaProtegida;