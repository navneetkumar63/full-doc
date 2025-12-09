import React, { useContext } from 'react'
import Login from './pages/Login'

import { ToastContainer, toast } from 'react-toastify';
// import{ AppContext} from './context/AppContext'
import { AdminContext } from './context/AdminContext';
import Navbar from './components/Navbar';
import Sidebar from './components/Sidebar';
import { Route,Routes } from 'react-router-dom';
import Dashboard from './pages/Admin/Dashboard';
import AllAppoitnmnet from './pages/Admin/AllAppoitnmnet'
import DoctorList from './pages/Admin/DoctorList';
import AddDoctor from './pages/Admin/AddDoctor';
import { DoctorContext } from './context/DoctorContext';
import DoctorDashBoard from './pages/Doctor/DoctorDashBoard';
import DoctorAppointment from './pages/Doctor/DoctorAppointment';
import DoctorProfile from './pages/Doctor/DoctorProfile';


const App = () => {

  const{aToken} = useContext(AdminContext)
  const{dToken} = useContext(DoctorContext)


  return aToken || dToken ? (
    <div className='bg-[#F8F9Fd]'>
     
      <ToastContainer/>
<Navbar/>
<div className='flex items-start'>
  <Sidebar/>
  <Routes>
    <Route path='/' element ={<></>}/>
    <Route path='/admin-dashboard' element ={<Dashboard/>}/>
    <Route path='/all-appointment' element ={<AllAppoitnmnet/>}/>
    <Route path='/all-doctor' element ={<AddDoctor/>}/>
    <Route path='/doctor-list' element ={<DoctorList/>}/>

        {/* Doctor Route */}
          <Route path="/doctor-dashboard" element={<DoctorDashBoard/>} />
          <Route path="/doctor-appointments" element={<DoctorAppointment/>}/>
          <Route path="/doctor-profile" element={<DoctorProfile/>}/>
  </Routes>
</div>

    </div>
  ) :(
    <>
    <Login/>
    <ToastContainer/>
    </>
  )
}

export default App
