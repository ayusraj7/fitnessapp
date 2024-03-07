import React from 'react'
import { useNavigate } from 'react-router-dom'

const Button = ({linkto,text,css,wi}) => {
    
    const navigate=useNavigate();
    const goto=()=>{
        console.log('clicked')
        navigate(linkto);
    }
  return (
    <div className={`${wi?'w-[width]':'w-fit'} transition-200 duration-200 px-3 py-1 rounded-md ${css}  `}>
        <div onClick={goto}>{text}</div>
    </div>
  )
}

export default Button