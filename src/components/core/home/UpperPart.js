import React from 'react'
import gymimg from '../../../asset/training4.jpg'
import Button from '../../common/Button'
const UpperPart = () => {
  return (
    <div className='bg-[rgb(15,11,32)]  w-screen'>
        <div className='flex max-w-[1024px] h-[calc(100vh-60px)] w-10/12 mx-auto '>
            <div className='w-[60%] flex flex-col justify-center gap-5 relative'>
                <p className='w-fit border-b-8 border-red-700 inline-block font-semibold text-red-700'>THE FITNESS</p>
                <h1 className='text-white font-bold leading-[60px] text-[45px]'>BUILD PERFECT BODY SHAPE FOR GOOD AND HEALTHY LIFE</h1>
                <Button  text={'BECAME A MEMBER'} css={'bg-red-600 text-white font-semibold py-[10px] px-4 text-sm rounded-none'}/>
            </div>
            <div className='w-[45%] vignette'>
                <img src={gymimg} alt="bodyBuilding" className='fit-cover h-full loading-lazy' />
            </div>
        </div>
    </div>
  )
}

export default UpperPart