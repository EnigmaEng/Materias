import NavBar from "../../../../../components/nabvar/NavBar"
import todoContext from "../../../../../context/todoContext"
import { useContext } from "react"
import Aprobaciones from "./Aprobaciones/Aprobaciones"

const AdminHomeDsk = () => {


  const TodoContext = useContext(todoContext)
  const {usuario} = TodoContext

  
  return (
<div className='min-h-screen bg-white text-5xl flex '>
<NavBar/>
<div className="ml-[22%] p-20 border max-h-max ">
<Aprobaciones/>
 
      </div>
      <div>
       <div className="w-6/12 m-auto flex m-auto justify-center gap-10 absolute top-10 right-10 ">
        <p>Hola</p>
        <img src="" alt="fotela-aqui" className="h-20 w-20 rounded-full border bg-gray-300" />
       </div>
      </div>
</div>
  
  )
}

export default AdminHomeDsk