import { BrowserRouter, Routes, Route  } from 'react-router-dom'
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

import EditarPerfi from './pages/user/perfil/EditarPerfil'
import Menu from './pages/user/perfil/restaurante/Menu/Menu'
import CrearMenu from './pages/user/perfil/restaurante/Menu/CrearMenu'
import Map from './components/maps/Map'
import Subscripcion from './pages/user/perfil/restaurante/Subscripcion/Subscripcion'
import ConfiguracionRest from './pages/user/perfil/restaurante/Configuracion/ConfiguracionRest'
import ConfiguracionTurista from './pages/user/perfil/turista/Configuracion/ConfiguracionTurista'
import CrearDescuentos from './pages/user/perfil/restaurante/Descuentos/CrearDescuentos'
import RutaProtegida from './context/RutaProtegida'

import MisReseniasTurista from './pages/user/resenias/misResenias/MisReseniasTurista'
import PerfilClienteDsk from './pages/user/perfil/restaurante/PerfilCliente/PerfilClienteDsk'
import MapContent from './components/maps/MapContent'
import PerfilCliente from './pages/user/perfil/restaurante/PerfilCliente/PerfilCliente'
import Alojamiento from './pages/user/perfil/turista/Alojamiento/Alojamiento'
import Descuentos from './pages/user/perfil/restaurante/Descuentos/Descuentos'

import todoContext from './context/todoContext'
import { useContext, useEffect } from 'react'
import EditarPlato from './pages/user/perfil/restaurante/Menu/EditarPlato'
import DescuentoByIdUsuario from './pages/user/perfil/restaurante/Descuentos/DescuentoByIdUsuario'
import DescuentoById from './pages/user/perfil/restaurante/Descuentos/DescuentoById'
import TokensTurista from './pages/user/perfil/restaurante/Configuracion/TokensTurista'

function App() {



  return (
    <>
<TodoState>
    <BrowserRouter> 
    <Routes>


<Route path='/' element={<Home/>} />


<Route path='/registro' element={<RegistroUsuario/>}/>

<Route path='/login' element={<Login/>} />

<Route path='/' element={<RutaProtegida/>}/>

  <Route  path='/homeAuth' element={<HomeAuth/>}/>
  <Route path='/map' element={<MapContent/>}/>




{/* Turista */}
<Route path='/descuentos' element={<Descuentos/>}/>
<Route path='/alojamiento' element={<Alojamiento/>}/>
<Route path='/configuracionTurista' element={<ConfiguracionTurista/>}/>
<Route path='/perfilTurista' element={<PerfilTurista/>}/>

{/* Resenias */}
<Route path='/crearResenia/:id_usuario' element={<CrearResenia/>} />
<Route path='/misResenias' element={<MisResenias/>}/>
<Route path='/misReseniasTurista' element={<MisReseniasTurista/>}/>
{/* Admin */}
<Route path='/admin' element={<PerfilAdmin/>} />
<Route path='/perfilRestaurante' element={<PerfilRestaurante/>}/>
<Route path='/editarPerfil' element={<EditarPerfi/>}/>
<Route path='/crearMenu' element={<CrearMenu/>}/>
<Route path='/menu' element={<Menu/>}/>
<Route path='/subscripcion' element={<Subscripcion/>}/>
<Route path='/configuracionRest' element={<ConfiguracionRest/>}/>
<Route path='/crearDescuentos' element={<CrearDescuentos/>}/>
<Route path='/descuentos' element={<Descuentos/>}/>
<Route path='/editarPlato/:id_Plato' element={<EditarPlato/>}/>
<Route path="/clientePerfil/:id_usuario" element={<PerfilCliente/>} />
<Route path="/verTokens" element={<TokensTurista/>} />
<Route path="/descuentoByIdUsuario" element={<DescuentoByIdUsuario/>} />
<Route path="/descuentoById/:id_descuento" element={<DescuentoById/>} />

    </Routes>
    
    </BrowserRouter>

     </TodoState>
   
    </>
  )
}

export default App
