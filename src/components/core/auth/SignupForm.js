import React from 'react'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from 'react'

const SignupForm = () => {
    const [showpassword,setShowPassword]=useState(false)
    const [confirmpassword,setConfirmPassword]=useState(false)
    const [type,setType]=useState('student');   
    const changePass=()=>{
        
        setShowPassword(!showpassword)
    }
    const changeConfirmPass=()=>{
      
        setConfirmPassword(!confirmpassword);
    }
    const changetab=(e)=>{
        
        if(type!==e)
        {
            setType(e);
        }
    }
  return (
    <div className='flex flex-col gap-0 px-6 w-[100%] overflow-hidden'>
        <div className='flex justify-between items-center gap-3'>
            <div className='text-2xl sm:text-4xl text-gray-600  font-inter'>SignUp
                <div className='w-[35px] bg-violet-700 h-1'></div>
            </div>
            <div className='flex border-2 border-slate-500 text-gray-300 bg-slate-500  gap-x-1 my-5 rounded-full '>
                <label htmlFor="student" className={`text-[16px] sm:text-[18px] border-slate-500 border-2   px-2 rounded-full ${type==='student' && 'bg-slate-600 rounded-full'}`} onClick={(e)=>changetab('student')}>Student
                <input type="radio" name="student" id="student" className='[all:unset]'/></label>
                <label htmlFor="instructor" className={`text-[16px] sm:text-[18px] border-l border-2 border-slate-500 rounded-full bg-slate-500 px-2 ${type==='instructor' && 'bg-slate-600 rounded-full'}`} onClick={(e)=>changetab('instructor')}>Instructor
                <input type="radio" name="instructor" id="student" className='[all:unset]' /></label>
                
            </div>
        </div>
        <div className='flex flex-col gap-3 w-full '>
            <div className='flex sm:flex-row flex-col gap-5 w-full'>
                <div className='border-b-2 sm:w-1/2 flex flex-col'>
                    <label htmlFor="name">Name<sup className="text-pink-600">*</sup></label>
                    <input type="text" name="name" id="name" placeholder='Enter your name' className='[all:unset]'/>
                </div>
                <div className='border-b-2 sm:w-1/2 flex flex-col'>
                    <label htmlFor="mobileno">Mobile No<sup className="text-pink-600">*</sup></label>
                    <input type="number" name="mobileno" id="mobileno" placeholder='Enter your mobile no' className='[all:unset]'/>
                </div>
            </div>
            
            <div className='flex flex-col border-b-2 '>
                <label htmlFor="email">Email<sup className="text-pink-600">*</sup></label>
                <input type="email" name="email" id="email" placeholder='Enter your email..' className='[all:unset] '/>
            </div>
            <div className='flex flex-col sm:flex-row gap-5 w-full'>
                <div className='sm:w-1/2 flex border-b-2 py-2 item-center relative'>
                    
                    <div className='flex flex-col justify-between '>
                        <label htmlFor="password">Password<sup className="text-pink-600">*</sup></label>
                        <input className='[all:unset] w-full' type={showpassword?'text':'password'} name="password" id="password" placeholder='Enter password' />
                        {
                            !showpassword ? (
                                <AiOutlineEye className='absolute right-0 top-[60%]' onClick={changePass}/>
                            ):(<AiOutlineEyeInvisible className='absolute right-0 top-[60%]' onClick={changePass}/>)
                        }
                    </div>
                    
                </div>
                
                <div className='sm:w-1/2 flex border-b-2 py-2 item-center relative'>
                    
                    <div className='flex flex-col justify-between '>
                        <label htmlFor="confirm-password">Confirm Password<sup className="text-pink-600">*</sup></label>
                        <input className='[all:unset] w-full' type={confirmpassword?'text':'password'} name="password" id="confirm-password" placeholder='Confirm password' />
                        {
                            !confirmpassword ? (
                                <AiOutlineEye className='absolute right-0 top-[60%]' onClick={changeConfirmPass}/>
                            ):(<AiOutlineEyeInvisible className='absolute right-0 top-[60%]' onClick={changeConfirmPass}/>)
                        }
                    </div>
                    
                </div>
            </div>

        </div>
        <button className='bg-violet-700 rounded-md p-3 text-white font-medium transition-all duration-200 hover:bg-violet-600 hover:text-xl mt-2 '>Sign Up</button>
    </div>
  )
}

export default SignupForm