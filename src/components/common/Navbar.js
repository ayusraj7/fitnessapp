import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../asset/Logo.png'
import { CgGym } from "react-icons/cg";

const Navbar = () => {
  return (
    <div className='w-full mx-auto z-[100] fixed top-0 h-[60px] bg-gray-900 text-white '>
      <div className='max-w-[1024px] w-10/12 h-full mx-auto text-xl flex justify-around items-center'>
        <div className='flex items-center text-white bg-transparent'>
            <Link to='/'>
               <CgGym size={30}/>
            </Link>
        </div>
        <div className=' w-[65%] flex justify-end gap-4 items-center text-gray-50 sm:flex hidden'>
            <Link to='/' className=' transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2'>Home</Link>
            <Link to='/program' className=' transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2'>Programs</Link>
            <Link className='transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2'>Blogs</Link>
            <Link to='/shop' className=' transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2'>Shop</Link>
            <Link to='/about' className='transition-all duration-300 p-1  hover:scale-95 rounded-md hover:text-gray-400 px-2'>About</Link>
        </div>
        <div className='flex justify-between gap-2'>
          <Link to='/login' className='border border-gray-700 transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 bg-gradient-to-r from-indigo-500 to-pink-500'>Login</Link>
          <Link to='/signup' className='border border-gray-700 transition-all duration-200 p-1  hover:scale-95 rounded-md hover:text-gray-200 px-2 bg-gradient-to-r from-indigo-500 to-pink-500'>SignUp</Link>
        </div>
      </div>

    </div>
  )
}

export default Navbar