import PerfilDsk from "./PerfilDsk"
import PerfilMb from "./PerfilMb"


const PerfilRestaurante = () => {
  return (
   <>
   <div className="hidden md:block">
    <PerfilDsk/>
   </div>
   <div className="md:hidden">
<PerfilMb/>
   </div>
   </>
  )
}

export default PerfilRestaurante