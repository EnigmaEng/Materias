import React, { useContext } from 'react'
import todoContext from './todoContext'

const ProtectedRoute = () => {

  const TodoContext = useContext(todoContext)
  const {autenticado} = TodoContext

  return (
    <>
    {
       !autenticado ? <p>Logueate</p> : <Oulet/>
    }
    </>
  )
}

export default ProtectedRoute;