import React from 'react'
import { Link } from 'react-router-dom'

const AppliedDetails = ({Items , handleRemoveFromCart}) => {

  
  return (
    <div className='flex flex-row px-[100px] gap-20 items-center'>
          <div> 
             <img className='w-[150px]' src={Items.img} alt="" /> 
          </div> 
            <div className='flex flex-row justify-between w-full items-center my-[50px] '> 
                <div>
                    <h1 className='text-2xl font-bold italic'>{Items.title} </h1>
                    <h3 className='text-xl font-medium text-slate-600'>{Items.sub_title }</h3>
                    <button className='text-center  bg-slate-100 text-black font-bold pr-5 pl-2 py-2 flex  rounded ' > Job Type:  {Items.job_Type}</button>
                    <p> Location :{Items.Location }  <span className='font-bold '>   Salary:</span> {Items.salary}</p>
                
                </div>
                <button onClick={()=>handleRemoveFromCart(Items.id)}> Detale</button>
                <Link to={`/jobsDetails/${Items.id}`}><button className='text-center text-white bg-indigo-500 font-bold p-3 flex w-[140px] rounded '> View Details</button> </Link> 
            </div>
      
      
    </div>
  )
}

export default AppliedDetails