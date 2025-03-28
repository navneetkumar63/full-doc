import React, { useContext, useState,useEffect } from 'react'
import { AppContext } from '../context/AppContext'
import { toast } from 'react-toastify'
import axios from 'axios'


const MyAppointments = () => {
  
  const { backendUrl,token,getDoctorsData } = useContext(AppContext)
  const months = ["","Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  const [appointments, setAppointments] = useState([])

   // Function to format the date eg. ( 20_01_2000 => 20 Jan 2000 )
   const slotDateFormat = (slotDate) => {
    const dateArray = slotDate.split('_')
    return dateArray[0] + " " + months[Number(dateArray[1])] + " " + dateArray[2]
}


   // Getting User Appointments Data Using API
   const getUserAppointments = async () => {
    try {

        const { data } = await axios.get(backendUrl + '/api/user/appointments', { headers: { token } })
        setAppointments(data.appointments.reverse())

    } catch (error) {
        console.log(error)
       toast.error(error.message)
    }
}

  // Function to cancel appointment Using API
  const cancelAppointment = async (appointmentId) => {

    try {

        const { data } = await axios.post(backendUrl + '/api/user/cancel-appointments', { appointmentId }, { headers: { token } })

        if (data.success) {
            toast.success(data.message)
            getUserAppointments()
            getDoctorsData()
        } else {
            toast.error(data.message)
        }

    } catch (error) {
        console.log(error)
        toast.error(error.message)
    }

}

 // Function to make payment using razorpay
    const appointmentRazorpay = async (appointmentId) => {
        try {
            const { data } = await axios.post(backendUrl + '/api/user/payment-razorpay', { appointmentId }, { headers: { token } })
            if (data.success) {
                initPay(data.order)
            }else{
                toast.error(data.message)
            }
        } catch (error) {
            console.log(error)
            toast.error(error.message)
        }
    }


useEffect(() => {
  if (token) {
      getUserAppointments()
  }
}, [token])

  return (
    <div>
      <p className='pb-3 mt-12 font-medium text-zinc-700 border-b'>My appointments</p>
      <div>
        {appointments.map((item,index)=>(
          <div className='grid-col-[1fr_2fr] gap-4 sm:flex sm:gap-6 py-2 border-b' key={index}>
            <div>
              <img className='w-32 bg-indigo-50' src={item.docData.image}/>
              </div>
              <div className='flex-1 text-sm text-zinc-600'>
                <p className='text-neutral-800 font-semibold' >{item.docData.name}</p>
                <p>{item.docData.speciality}</p>
                <p className='text-zinc-700 font-medium mt-1'>Address:</p>
                <p className='text-xs' >{item.docData.address.line1}</p>
                <p className='text-xs' >{item.docData.address.line2}</p>
                <p className='text-xs mt-1' ><span className='text-sm text-neutal-700 font-medium' >Date & Time:</span> {slotDateFormat(item.slotDate)} |
                {item.slotTime}</p>
                </div>
                <div>
                  </div>
                  <div className='flex flex-col gap-2 justify-end'>
                  {!item.cancelled && <button onClick={()=>appointmentRazorpay(item._id)} className=' text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-pink-600' >Pay Online</button>}
                   {!item.cancelled && <button onClick={()=>cancelAppointment(item._id) } className=' text-sm text-stone-500 text-center sm:min-w-48 py-2 border rounded hover:bg-pink-600' >Cancel Appointments</button>}
                   {item.cancelled && <button className='sm:min-w-48 py-2 text-red-500 border rounded-2xl red-500 '>Appointment cancelled</button>}
                    </div>
              </div>

              
        ))}
      </div>
      
    </div>
  )
}

export default MyAppointments