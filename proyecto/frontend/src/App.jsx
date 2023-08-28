import { BrowserRouter, Routes, Route } from 'react-router-dom'
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




function App() {


  return (
    <>
    <TodoState>
    

     
    <BrowserRouter> 
    <Routes>
 {/* Home  */}
<Route path='/' element={<Home/>} />
<Route path='/authDesk' element={<HomeAuth/>}/>
{/* Registro */}

<Route path='/registro' element={<RegistroUsuario/>}/>

{/* Login */}
<Route path='/login' element={<Login/>} />
{/* Perfiles */}
<Route path='/perfilTurista' element={<PerfilTurista/>}/>
<Route path='/perfilRestaurante' element={<PerfilRestaurante/>} />
{/* Resenias */}
<Route path='/crearResenia' element={<CrearResenia/>} />
<Route path='/misResenias' element={<MisResenias/>}/>
    </Routes>
    </BrowserRouter>
  
     </TodoState>
    </>
  )
}

export default App
