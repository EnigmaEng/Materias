import NavBar from "../../../../../components/nabvar/NavBar"
import todoContext from "../../../../../context/todoContext"
import { useContext } from "react"
import Aprobaciones from "./Aprobaciones/Aprobaciones"

const AdminHomeDsk = () => {


  const TodoContext = useContext(todoContext)
  const {usuario} = TodoContext

  
  return (
<div className='min-h-screen bg-white text-5xl flex justify-center'>
  <div>
    <NavBar/>
  </div>

<div className=" w-8/12 m-10 p-7 flex justify-center shadow-xl rounded-lg">
  <div className="w-8/12">
    <Aprobaciones/>
  </div>

 
      </div>
     
</div>
  
  )
}

export default AdminHomeDsk