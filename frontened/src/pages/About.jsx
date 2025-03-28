import React from 'react'
import { assets } from '../assets/assets'

const About = () => {
  return (
    <div>
      <div className='text-center text-2xl pt-10 text-gray-500'>
        <p>
          ABOUT <span className='text-gray-700 font-medium'>US</span>
        </p>
      </div>
      <div className='my-10 flex flrx-col md:flex-row gap-12'>
        <img className='w-full md:max-w-[360px]' src={assets.about_image} />
        {/*-------------------right side ----------*/}
        <div className='flex flex-col justify-center gap-6 md:w-2/4 text-sm text-gray-900'>
          <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat ab quam quis dolores? Illum sapiente culpa, provident voluptatum, sed aut voluptas commodi aliquam ad saepe, voluptatem ullam impedit ratione enim omnis eum cumque similique!</p>
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Cumque, reiciendis! Saepe natus blanditiis dolor eos! Vel, sed ad. Veniam, temporibus.</p>
          <b className='text-gray-950'>Our Vision</b>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Natus tempore consequatur maiores quos quam ipsam, voluptates voluptas aliquam pariatur quod minus soluta quo enim. Praesentium nemo dolores eum possimus odit.
          </p>
        </div>
      </div>


      <div className='text-xl my-4'>
        <p>Why <span className='text-gray-700 font-semibold'>Choose Us</span></p>
      </div>

      <div className='flex flex-col md:flex-row mb-20'>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flexx flex-col gap-5 text-[15px] hover:bg-pink-500'>
          <b>Efficenecy </b>
          <p> Streamlined appoitment scheduling that fits into your busy lifestyle.</p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flexx flex-col gap-5 text-[15px] hover:bg-pink-500'>
          <b>Conveniece</b>
          <p> Access to a netwoak of trusted healthcare professionals in your area. </p>
        </div>
        <div className='border px-10 md:px-16 py-8 sm:py-16 flexx flex-col gap-5 text-[15px] hover:bg-pink-500'>
          <b> Personalization</b>
          <p> Tailored recommandations and remainders to help yo stay on top of your health.</p>
        </div>
      </div>
    </div>



  )
}
export default About 
