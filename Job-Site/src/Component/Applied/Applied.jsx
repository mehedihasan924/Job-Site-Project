import React, { useState } from 'react'
import Vectro_img1 from '../Image/Vector1.png'
import Vectro_img2 from '../Image/Vector2.png'
import { removeFromDb } from '../../utilities/fakedb';
import AppliedDetails from '../AppliedDetails/AppliedDetails';
import { useLoaderData } from 'react-router-dom';
import Cart from '../../Component/Cart/Cart';

const Applied = () => {
      
  const cartData=useLoaderData()
 
   console.log(cartData)
  const [ cart, setCart]=useState(cartData)
  
  const handleRemoveFromCart=(id)=>{
      const remaining=cart.filter(product =>product.id!==id);
      setCart(remaining);
      removeFromDb(id)
  }

  return (
    <div>
        <div  className='flex justify-between items-center z-[-1] bg-indigo-50  mt-[-70px]'>
           <img src={Vectro_img1} alt="" />
          <h1 className=' text-xl font-bold'> Jobs Details{cartData.length}</h1>
          <img  className=' top-0' src={Vectro_img2} alt="" />
       </div> <br />
       <div className='p-[10px]'>
         
          {
             cartData.map(data=>(
                <AppliedDetails
                key={data.id}
                Items={data}
                handleRemoveFromCart={handleRemoveFromCart}
                ></AppliedDetails>
               )) 
            }

       </div>

       <div className="cart-container">
          <Cart cart={cartData}> </Cart>
        </div>
    </div>
  )
}

export default Applied