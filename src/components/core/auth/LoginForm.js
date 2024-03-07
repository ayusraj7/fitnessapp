import React from 'react'
import {MdEmail,MdLock} from 'react-icons/md'
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { useState } from 'react'
const LoginForm = () => {
    const [showpassword,setShowPassword]=useState(false)
    const changePass=()=>{
        console.log('show password',showpassword)
        console.log('change ',!showpassword)
        setShowPassword(!showpassword)
    }
  return (
    <div className='flex flex-col gap-10 mt-10 px-9 w-full md:w-[90%]'>
        <div className='text-4xl text-gray-600  font-inter'>Login
            <div className='w-[35px] bg-violet-700 h-1'></div>
        </div>
        <div className='flex flex-col gap-3'>
            <div className='text-xl flex gap-2 border-b-2 py-2 items-center'>
                <MdEmail/>
                <input className='[all:unset]' type="email" name="email" id="email" placeholder='Enter your email' />
            </div>
            
            <div className='text-xl flex gap-2 border-b-2 py-2 item-center relative'>
                <MdLock></MdLock>
                <div className='flex justify-between'>
                  <input className='[all:unset] w-full' type={showpassword?'text':'password'} name="password" id="password" placeholder='Enter your password' />
                  {
                      !showpassword ? (
                          <AiOutlineEye className='absolute right-0' onClick={changePass}/>
                      ):(<AiOutlineEyeInvisible className='absolute right-0' onClick={changePass}/>)
                  }
                  
                </div>
                
            </div>
            <p className='text-violet-600 text-md'>Forgot Password?</p>
        </div>
        <button className='bg-violet-700 rounded-md p-3 text-white font-medium transition-all duration-200 hover:bg-violet-600 hover:text-xl'>Login</button>
    </div>
  )
}

export default LoginForm