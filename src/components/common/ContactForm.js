import React from 'react'
import Button from './Button'

const ContactForm = () => {
  return (
    <>
        <form action="" className='px-[50px] py-11 flex flex-col gap-2'>
            <label>
                <p className="mb-1 text-[1rem] font-semibold leading-[1.375rem] text-richblack-5">
                First Name <sup className="text-pink-200">*</sup>
                </p>
                <input required type="text"
                name="firstName"
                placeholder="Enter First name"
                className="form-style w-[80%] rounded-sm py-1 px-3 text-black placeholder-black outline-none"
                />
            </label>
            
            <label>
                <p className="mb-1 text-[1rem] font-semibold leading-[1.375rem] text-richblack-5">
                Email <sup className="text-pink-200">*</sup>
                </p>
                <input required type="email"
                name="email"
                placeholder="Enter Email"
                className="form-style w-[80%] rounded-sm py-1 px-3 text-black placeholder-black outline-none"
                />
            </label>
            
            <label>
                <p className="mb-1 text-[1rem] font-semibold leading-[1.375rem] text-richblack-5">
                Phone <sup className="text-pink-200">*</sup>
                </p>
                <input required type="number"
                name="phone"
                placeholder="Enter First name"
                className="form-style w-[80%] rounded-sm py-1 px-3 text-black placeholder-black outline-none"
                />
            </label>
            
            <div className='flex flex-row flex-wrap mt-3'>
                
                <label className='w-1/2' htmlFor="weightloss">  <input type="checkbox" name="" id="weightloss" /> WEIGHT LOSS</label>
                
                <label className='w-1/2' htmlFor="bodybuilding"> <input type="checkbox" name="" id="bodybuilding" /> BODY BUILDING</label>
                
                <label htmlFor="cardio" className='w-1/2'> <input type="checkbox" name="" id="cardio" /> CARDIO</label>
                
                <label htmlFor="personal-training" className='w-1/2'> <input type="checkbox" name="" id="personal-training" /> PERSONAL TRAINING</label>
            </div>
            
            <label className='mt-4'>
                <p>How Can I Help?</p>
                <textarea name="" id="help" className='px-7 outline-none w-[90%] h-[120px] rounded-sm placeholder-black text-black'></textarea> 
            </label>
                           
            <Button text={'SUBMIT'} wi={''} css={'rounded-lg bg-white text-black font-bold text-[16px]'}/>
        </form>
    </>
  )
}

export default ContactForm