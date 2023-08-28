import PerfilDsk from "../turista/PerfilDsk"
import PerfilMb from "../turista/PerfilMb"



const PerfilTurista = () => {
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

export default PerfilTurista