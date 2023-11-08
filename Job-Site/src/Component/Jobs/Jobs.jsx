import React, { useContext, useEffect, useState } from 'react'
import SingleJob from '../SingleJob/SingleJob'
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import { AuthContext } from '../Provider/AuthProviders';

const Jobs = () => {

  
    const {products} =useContext(AuthContext)


  return (
    <div className='text-center px-[10%] mb-[100px]'>
        <div >
            <h1 className='font-medium text-5xl my-5 mt-[100px]'>Featured Jobs</h1>
            <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Provident, molestiae architecto. Nemo at officiis nulla . </p>
        </div>
       <div className=' grid sm:grid-cols-1  md:grid-cols-2 lg:grid-cols-2 gap-4 mt-5 text-left'>
           {
           products.slice( 0,4).map( jobData=> 
               <SingleJob 
               key={jobData.id}
               jobData={jobData}
               > </SingleJob>
              )
           }
       </div>

    </div>
  )
}

export default Jobs