import PerfilDesk from "./PerfilDesk"
import PerfilMb from "./PerfilMb"


const PerfilAdmin = () => {
  return (
   <>
   <div className="hidden md:block">
    <PerfilDesk/>
   </div>
   <div className="md:hidden">
<PerfilMb/>
   </div>
   </>
  )
}

export default PerfilAdmin;