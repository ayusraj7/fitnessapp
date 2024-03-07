import React from 'react'
import { FaInstagram,FaYoutube,FaFacebookF,FaTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import logo from '../../asset/target.png'
import { CgGym } from 'react-icons/cg';


const Footer = () => {
  return (
    <div className='h-[500px] text-white bg-[#0a0a0a] '>
        <div className='h-full pt-12 flex justify-between  w-[calc(100vw-17vw)] mx-auto '>
            <div className='w-[300px] flex flex-col gap-7 '>
                <Link to='/'>
                   <CgGym size={30}/>
                </Link>
                <div className='flex flex-col text-[#b2b2b2] '>
                    <p className='text-[15px]'>© 2020 The Limit</p>
                    <p className='text-[15px]'>All Rights Reserved</p>
                </div>
            </div>
            <div className='w-[300px] '>
                {/* first */}
                <div className='flex flex-col gap-4'>
                    <h2 className='text-[#ffffff] text-2xl font-semibold'>Contact Us</h2>
                    <div className='flex gap-4'>
                        <Link><FaInstagram size={24} /></Link>
                        <Link><FaYoutube size={24} /></Link>
                        <Link><FaFacebookF size={24} /></Link>
                        <Link><FaTwitter size={24} /></Link>
                    </div>
                    <p className='text-[#b2b2b2] bg-transparen w-[170px] text-[15px]'>
                        The fitness
                        Ekta Vihar, Badarpur
                        New Delhi-44, India
                    </p>

                    <Link to='#' className=' text-[#b2b2b2] underline text-[15px]'>info@fitness.com</Link>
                    <p className='text-[16px] text-[#b2b2b2]'>(212) 287-9252</p>

                    <div className='text-[15px] text-[#b2b2b2]'>
                        <p className='text-[15px] '>Terms and Conditions</p>
                        <p className='text-[15px]'>Liability Waiver</p>
                    </div>
                    <Link to='/privacy' className='text-[15px] text-[#b2b2b2]'>Privacy Policy</Link>
                </div>
            </div>
            <div className='w-[300px] h-fit flex flex-col gap-2 '>
                <h2 className='text-[#d6b85f] text-2xl font-semibold'>Menu</h2>
                <div className='border-[1px] border-[#3b3b3b] flex flex-col '>
                    <Link to='/' className='text-[#b2b2b2] text-sm px-3 py-2 hover:bg-[#2e2d2e] hover:text-[#96804a]'>HOME</Link>
                    <Link to='/program' className=' text-[#b2b2b2] text-sm px-3 py-2 hover:bg-[#2e2d2e] hover:text-[#96804a]'>PROGRAMS</Link>
                    <Link to='/blogs' className=' text-[#b2b2b2] text-sm px-3 py-2 hover:bg-[#2e2d2e] hover:text-[#96804a]'>BLOGS</Link>
                    <Link to='/shop' className=' text-[#b2b2b2] text-sm px-3 py-2 hover:bg-[#2e2d2e] hover:text-[#96804a]'>SHOP</Link>
                    <Link to='/about' className='text-[#b2b2b2] text-sm px-3 py-2 hover:bg-[#2e2d2e] hover:text-[#96804a]'>ABOUT</Link>
                </div>
            </div>

        </div>
    </div>
  )
}

export default Footer