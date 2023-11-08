import React ,{ useContext, useEffect, useState} from 'react'
import Vectro_img1 from '../Image/Vector1.png'
import Vectro_img2 from '../Image/Vector2.png'
import { useLoaderData, useNavigate } from 'react-router-dom'
import Iframe from 'react-iframe';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import { AuthContext } from '../Provider/AuthProviders';


const JobsDetails = () => {
  
  const data=useLoaderData() 

    const {handleAddToCart , cart} =useContext(AuthContext)
 console.log(data)



    //  // Back Page function 
    const navigate=useNavigate()
    const goBack=()=>{
        navigate(-1)
    }
  return (
    <div className=' grid mb-[100px] '>
      <div  className='flex justify-between items-center z-[-1] bg-sky-50 '>
           <img src={Vectro_img1} alt="" />
          <h1 className=' text-xl font-bold'> Jobs Details </h1>
          <img  className=' top-0' src={Vectro_img2} alt="" />
      </div> <br />

      <div className='grid sm:grid-cols-1 px-[10%]  md:grid-cols-2 lg:grid-cols-3 gap-10  mt-[20px]'> 
            <div className='col-span-2  p-5'>

              <h1 className='text-xl font-bold'> Job Description:</h1>
              <p> {data.Job_Description}</p>
              <h1 className='text-xl font-bold'>Job Responsibility:</h1>
              <p> {data.Job_Responsibility} </p>
              <h1 className='text-xl font-bold'>Educational Requirements:</h1>
              <p> {data.Educational_Requirements}</p>
              <h1 className='text-xl font-bold'> Experiences:</h1>
              <p>{data.Experiences} </p>   
              <button className='mt-[100px] underline font-bold' onClick={goBack} > Go Back >>  </button>
              <div className="cart-container">               
            </div>
                     
            </div>
            <div className='col-span-1'>
             <div className='bg-indigo-50 p-5'>
                <h1 className='text-xl font-bold py-2 border-neutral-300 border-b-[1px] mb-5'>Jobs Details  </h1>
                  <p > <span className='font-bold '>Salary: {data.salary}</span> </p>
                  <p><span className='font-bold '> Job Title: {data.title} </span></p>
                
                  <h1 className='text-xl font-bold py-2 border-neutral-300 border-b-[1px] my-5'>Contact Information </h1>
                  <p> <span className='font-bold '>Phone:</span> </p>
                  <p><span className='font-bold '> Email: </span> </p>
                  <p><span className='font-bold '> Address:</span>  </p>
             </div>
                <div>
                  <button onClick={(id) =>handleAddToCart(id)} className='w-full rounded bg-indigo-500 py-3 font-bold mt-4 text-white'>Apply Now </button>
              </div>
            </div>        
      </div>
      <Cart cart={cart}></Cart>
    </div>
  )
}

export default JobsDetails