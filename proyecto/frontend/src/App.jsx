import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom'
import './App.css'
import Home from './pages/HomePublic/Home'
import PerfilTurista from './pages/user/perfil/turista/PerfilTurista'
import CrearResenia from './pages/user/resenias/crearResenias/CrearResenia'
import MisResenias from './pages/user/resenias/misResenias/MisResenias'
import PerfilRestaurante from './pages/user/perfil/restaurante/PerfilRestaurante'
import HomeAuth from './pages/user/auth/home/HomeAuth'
import RegistroUsuario from './pages/user/auth/registro/Registro'
import Login from './pages/user/auth/login/Login'
import TodoState from './context/todoState'
import PerfilAdmin from './pages/user/perfil/admin/PerfilAdmin'
import PerfilTest from './pages/user/perfil/restaurante/PerfilTest'
import todoContext from './context/todoContext'
import { useContext, useEffect } from 'react'
import EditarPerfi from './pages/user/perfil/restaurante/EditarPerfi'
import Menu from './pages/user/perfil/restaurante/Menu/Menu'
import CrearMenu from './pages/user/perfil/restaurante/Menu/CrearMenu'
import Configuracion from './pages/user/perfil/turista/Configuracion'
import Subscripcion from './pages/user/perfil/restaurante/Subscripcion/Subscripcion'
import ConfiguracionRest from './pages/user/perfil/restaurante/Configuracion/ConfiguracionRest'
import CrearDescuentos from './pages/user/perfil/restaurante/Descuentos/CrearDescuentos'



function App() {





  return (
    <>


    
    <TodoState>
    <BrowserRouter> 
    <Routes>
 {/* Home  */}
<Route path='/' element={<Home/>} />
<Route path='/homeAuth' element={<HomeAuth/>}/>

{/* Registro */}
<Route path='/registro' element={<RegistroUsuario/>}/>
{/* Login */}
<Route path='/login' element={<Login/>} />

{/* Perfiles */}

{/* Turista */}
<Route path='/configuracion' element={<Configuracion/>}/>
<Route path='/perfilTurista' element={<PerfilTurista/>}/>
{/* Resenias */}
<Route path='/crearResenia' element={<CrearResenia/>} />
<Route path='/misResenias' element={<MisResenias/>}/>

{/* Admin */}
<Route path='/admin' element={<PerfilAdmin/>} />

{/* Restaurante */}

<Route path='/perfil' element={<PerfilTest/>}/>
<Route path='/perfilRestaurante' element={<PerfilRestaurante/>}/>
<Route path='/perfilRestaurante/:id' element={<PerfilRestaurante/>}/>
<Route path='/editarPerfilRestaurante' element={<EditarPerfi/>}/>
<Route path='/crearMenu' element={<CrearMenu/>}/>
<Route path='/menu' element={<Menu/>}/>
<Route path='/subscripcion' element={<Subscripcion/>}/>
<Route path='/configuracionRest' element={<ConfiguracionRest/>}/>
<Route path='/crearDescuentos' element={<CrearDescuentos/>}/>
    </Routes>
    
    </BrowserRouter>

     </TodoState>
    </>
  )
}

export default App
