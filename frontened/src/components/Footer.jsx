import React from 'react'
import { assets } from '../assets/assets'

 const Footer = () => {
  return (
    <div className='md:mx-10'>
<div className='flex flex-col sm:grid grid-cols-[3fr_1fr_3fr] gap-14 my-10 mt-40 text-sm'>
   
        {/*-------------LEFT SECTION-----------*/}
        <div>
<img  className='mb-5 w-40' src={assets.logo}/>
<p className='w-full md:2/3 text-gray-600 leading-6'>eligendi soluta quod accusantium ipsum ea totam repudiandae temporibus ut rem, dolorem iusto, commodi est nostrum molestiae nam? Dignissimos quaerat odit, officiis placeat ad explicabo culpa.</p>

    </div>
    
         {/*-------------MIDDLE  SECTION-----------*/}
         <div>
<p className='text-xl font-medium mb-5'>COMPANY</p>
<ul className='flex flex-col gap-2 text-gray-600'>
    <li>Home</li>
    <li>About us</li>
    <li>Contact us</li>
    <li>Privacy policy </li>
</ul>
    </div>
   
    {/*-------------RIGHT  SECTION-----------*/}
    <div>
<p className='text-xl font-medium mb-5'>GET IN TOUCH</p>
 <ul className='flex flex-col gap-2 text-gray-600'>
    <li>
        +1-222-453-8752
    </li>
    <li>navneetkumar991713@gmail.com</li>
 </ul>
    </div>

</div>
{/*--------copyright Text-----------*/}
    <div>
<hr/>
<p className='py-5 text-sm text-center'>Copyright2025@ navneet--All Right Reserved</p>
</div>


    </div>
  )
}
export default Footer