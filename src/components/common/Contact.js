import React from 'react'
import Button from './Button'
import ContactForm from './ContactForm'

const Contact = () => {
  return (
    <div className='relative h-screen box-border'>
        <div className='absolute top-[-7%] -z-10 bg-indigo-950 h-[55%] w-full '></div>

        <div className='z-50 mt-[50px] flex sm:w-[60%]  mx-auto rounded-md shadow-sm shadow-black  '>

            <div className='flex flex-col items-center gap-3 py-3 px-4 w-[45%] bg-white text-black rounded-l-md'>
                <h1 className='text-5xl text-red-700 font-bold '>CONTACT US </h1>
                <h1 className='text-black text-2xl font-bold '>FITNESS <span className='text-red-700'>WORKOUT</span></h1>
                <p className='font-semibold text-[18px] text-black mt-3'>workouts are designed to overcome all plateaus.</p>

                <p className='font-semibold text-[18px] text-black mt-3'>In our Gym we provide best training for people for their money and try our best to give 100%. In a nutshell, I leave nothing to chance and cover every single 
                    variable vital to achieving rapid growth. It's not easy, in fact if you want to make great gains or lose weight it can be extremely hard work, but if you work 
                    it properly it always delivers. 
                </p>
                <p className='font-semibold text-[18px] text-black mt-3'>Get started with a CONSULATION</p>
            </div>
            
            <div className='bg-red-700 text-white text-[16px] w-[60%] rounded-r-md '>
                <ContactForm/>
            </div>
        </div>
    </div>
  )
}

export default Contact