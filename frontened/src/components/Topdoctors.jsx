import React, { useContext } from 'react'
//import { doctors } from '../assets/assets'

import { useNavigate } from 'react-router-dom'
import { AppContext } from '../context/AppContext'


 const Topdoctors =()=>{

 const navigate = useNavigate()

 const {doctors} = useContext(AppContext)

 return (
    <div className='flex flex-col items-center gap-4 text-gray-900 md:mx-10'>
<h1 className='text-3xl font-medium'> Top Doctors To Book</h1>
<p className='sm:w-1/3 text-center text-sm'>Simply browse through our exclusive list of trusted doctors.</p>
<div className='w-full grid-cols-auto gap-4 pt-5 gap-y-6 px-3 sm:px-0 grid lg:grid-cols-5'>
    {doctors.slice(0,10).map((item,index)=>(
<div  onClick={()=>navigate(`/appointment/${item._id}`)}className='border border-red-200 rounded-x1 overflow-hidden cursor-pointer hover:translate-y-[10px]  transition-all duration-500' key={index}>
    <img className='bg-pink-200 ' src={item.image}/>
    <div className='p-4'>
        <div className='flex items-center gap-2 text-sm text-center text-green-500'>
        <p className='w-2 h-2 bg-green-500 rounded-full'></p><p>Available</p>
        </div>
        <p className='text-gray-900 text-lg font-medium'>{item.name}</p>
        <p>{item.speciality}</p>
</div>
</div>

    ))}
</div>
<button onClick={()=>{ navigate('/doctors'); scrollTo(0,0) }}  className='bg-blue-50 text-gray-600 px-12 py-3 rounded-full mt-10'>more</button>
   </div>
  )
}
  export default Topdoctors