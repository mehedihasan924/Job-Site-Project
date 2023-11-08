import React from 'react'
import { Link } from "react-router-dom";
import Logo from '../Image/site-logo.jpg'
const Header = () => {

  return (
    <div className='flex justify-between bg-sky-50 px-[10%] px-auto  z-10 items-center pt-5'>
        <div className=''>
            <img className='w-[200px]' src={Logo} alt="" />
        </div>
          <div>
            <Link className='pr-3' to='/'> Home</Link>
            <Link className='pr-3' to='/satistics'> Statistics </Link>
            <Link className='pr-3' to='/applied'> Applied</Link>
            <Link className='pr-3' to='/blogs'>Blog</Link>       
          </div>
          <div>
          <button className='text-center text-white bg-indigo-500 font-bold p-3 flex w-[140px] rounded '> View Details</button>
          </div>
    </div>
  )
}

export default Header;