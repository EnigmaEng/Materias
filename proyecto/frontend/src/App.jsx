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
import PerfilCliente from './pages/user/perfil/restaurante/PerfilCliente/PerfilCliente'
import MapContent from './components/maps/MapContent'

import Alojamiento from './pages/user/perfil/turista/Alojamiento/Alojamiento'
import Descuentos from './pages/user/perfil/restaurante/Descuentos/Descuentos'
function App() {





  return (
    <>


    
    <TodoState>
    <BrowserRouter> 
    <Routes>
 {/* Home  */}
<Route path='/' element={<Home/>} />


{/* Registro */}
<Route path='/registro' element={<RegistroUsuario/>}/>
{/* Login */}
<Route path='/login' element={<Login/>} />

<Route path='/' element={<RutaProtegida/>}/>

  <Route  path='/homeAuth' element={<HomeAuth/>}/>
  <Route path='/map' element={<MapContent/>}/>


  {/* Perfiles */}

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

  {/* Restaurante */}


<Route path='/perfilRestaurante' element={<PerfilRestaurante/>}/>

<Route path='/editarPerfil' element={<EditarPerfi/>}/>
<Route path='/crearMenu' element={<CrearMenu/>}/>
<Route path='/menu' element={<Menu/>}/>
<Route path='/subscripcion' element={<Subscripcion/>}/>
<Route path='/configuracionRest' element={<ConfiguracionRest/>}/>
<Route path='/crearDescuentos' element={<CrearDescuentos/>}/>


{/* Switch */}
<Route path="/clientePerfil/:id_usuario" element={<PerfilCliente/>} />



    </Routes>
    
    </BrowserRouter>

     </TodoState>
    </>
  )
}

export default App
