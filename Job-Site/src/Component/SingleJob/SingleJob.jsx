import React from 'react'
import { Link } from 'react-router-dom'

const SingleJob = ({jobData}) => {

      const { id,img,title, sub_title,Location ,salary}=jobData
     
  return (
    <div 
    className='bg-gray-100 p-5 grid gap-2 mb-5 rounded shadow-lg'
   >
      {/* <span className='p-2 bg-gray-200  grid justify-items-center rounded' >
        
       </span>   */}
       <img  className='h-[30px] ' src={img} alt="" /> 
       <h1 className='text-2xl font-medium italic '>{ title}</h1>
       <h3>{sub_title}</h3>
       <span className=' flex gap-4'> 
       <button className='text-center text-sky-400 border-sky-400  border-2 font-bold py-1 px-3 flex w-auto rounded'> Job Type</button>
       <button className='text-center text-sky-400 border-sky-400 border-2 font-bold py-1 px-3 flex w-auto rounded'> View Details</button>
       </span>
       <p>{Location }  {salary }</p>
      <Link to={`/jobsDetails/${id}`}><button className='text-center text-white bg-indigo-500 font-bold p-3 flex w-[140px] rounded '> View Details</button> </Link> 
   </div> 
  )
}

export default SingleJob