import React from 'react'
import NavBar from '../../../../../components/nabvar/NavBar';
import AdminHomeDsk from './AdminHomeDsk';
import AdminHomeMb from './AdminHomeMb';

const AdminHome = () => {
  return (
    <>
   <div className="hidden md:block  ">
  <AdminHomeDsk/>
   </div>
   <div className="md:hidden">
 <AdminHomeMb/>
   </div>
   </>
  )
}


export default AdminHome;