import React from 'react'
import { assets } from '../assets/assets'

const Contact = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
<p>CONTACT US</p>
</div>


<div className='my-10 flex flex-col justify-center md:flex-row gap-10 mb-28 text-sm'>
  <img className='w-full md:max-w-[360px]'src={assets.contact_image}/>



<div className='flex flex-col justify-center items-start gap-6'>
  <p className='font-semibold text-lg text-gray-700'>OUR OFFICE</p>
  <p className='text-gray-500'>3403 city Ghaziabad State-U.P,INDIA</p>
  <p className='text-gray-500'>Tel:(+91)6382-832-282 <br/> Email:navneetkumar991713@gmail.com</p>
  <p className='font-semibold text-lg text-gray-600'> Carrers at Doctors</p>
  <p className='text-gray-500'> Learn  more about our team and job opening .</p>
  <button className='border border-black px-8 py-4 text-sm rounded-full hover:bg-pink-500 hover:text-white'> Explore Jobs</button>
</div>
    </div>
    </div>
  )
}
export default Contact 
