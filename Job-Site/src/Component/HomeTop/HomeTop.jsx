import React from 'react'
import Image from '../Image/jobs.png'
const HomeTop = () => {
  return (
    <div className='grid sm:grid-cols-1  px-[10%] px-auto  bg-sky-50 md:grid-cols-2 lg:grid-cols-2 gap-4 py-[60px] mb-[100px]' >
        <div className=' grid gap-5'>
            <h1 className='font-bold text-5xl '>
               <span className='text-slate-950'>One Step Closer <br />
                To Your</span><br />
               <span className='text-indigo-600'> Dream Job</span> 
            </h1>
            <p>Explore thousands of job opportunities with all the information you need. Its your future. Come find it. Manage all your job application from start to finish.</p>
            <button className='text-center text-white bg-indigo-500 font-bold p-3 flex w-[140px] rounded '> View Details</button>
        </div>
        <div className='md:pl-[80px] lg:pl-[80px]'>
            <img className='w-[400px]  h-auto' src={Image} alt="" />
        </div>

    </div>
  )
}

export default HomeTop