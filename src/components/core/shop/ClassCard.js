import React from 'react'
import Button from '../../common/Button'

const ClassCard = ({element}) => {
  return (
    <div className='bg-gray-700 rounded-md h-[150px] border items-center border-gray-800 flex flex-row justify-between pr-3'>
        <img src={element.img} alt="" className='rounded-l-md h-[150px] w-[150px]' />
        <div className='flex flex-col gap-1 items-center'>
            <h1 className='text-slate-300 text-[16px] font-bold'>{element.heading}</h1>
            <p className='text-slate-300 text-sm'>{element.for}</p>
        </div>
        <div className='flex flex-col gap-1 items-center'>
            <p>{element.days}</p>
            <p className='w-[60%] text-center text-sm'>{element.timing}</p>
            <p className='text-sm text-pink-300'>{element.duration}</p>
            <p className='text-lime-500 text-xl'>₹{element.price}</p>
        </div>
        <Button wi={'w-fit'} text={'Book Now'} css={'bg-transparent border border-yellow-300 hover:border-blue-200 hover:text-gray-200 h-fit text-yellow-500 font-bold text-xl'}/>
    </div>
  )
}

export default ClassCard