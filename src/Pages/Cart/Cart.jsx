import React,{useEffect,useState} from 'react'
import {Link} from 'react-router-dom'
import { useSelector,useDispatch } from 'react-redux';
import { removeProduct,clearCart,addQuantity,reduceQuantity } from '../../Reducers/CartReducer';
import { toast} from "react-toastify";
import Toastify from '../../Components/Toastify/Toastify';

const Cart = () => {
  
  const cart = useSelector(state=>state.cart)

  const dispatch = useDispatch()
  
  const handleRemoveProduct=(id)=>{
    dispatch(removeProduct(id))
    toast.error("Product removed")
  }
  
  const handleReduceQuantity =(id)=>{
       dispatch(reduceQuantity(id))
  }
  
  const handleAddQuantity=(id)=>{
      dispatch(addQuantity(id))
  }


  return (

    <div className="py-4 md:mt-20 md:px-6 px-2 px-0">
      {/* toast notification */}
      <Toastify/>

        <header className="flex justify-between items-center mb-6 py-3 border-b dark:border-b-gray-500 border-b-gray-300">
          <div className="flex items-center gap-2">
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                </svg>
              </span>
              <h1 className="text-2xl">My cart</h1>
          </div>
           <Link to="/products" className='hover:text-gray-500 text-base flex items-center gap-2'>
             Continue shopping
             <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12h15m0 0l-6.75-6.75M19.5 12l-6.75 6.75" />
              </svg>
           </Link>
        </header>
         <div className="min-h-[calc(100vh-475px)]">
        {
          cart.products.length === 0 ? 

            <div className="flex items-center justify-center h-full">
              <h1 className="text-xl text-center text-gray-400">Cart is Empty</h1>
            </div>
           
            :
            (
              cart.products.map((product)=>{
                return  <div className="flex flex-wrap gap-4 mb-4 pb-6 border-b border-gray-200 dark:border-gray-600">
                <img src={product.Image} alt="" srcSet="" className='md:h-32 h-48 w-32 object-cover rounded-md' />
  
                <div className="grid grid-cols-1 gap-2 md:grid-cols-3 flex-1">
                   
                   <div className="">
                     <h1 className="text-lg md:text-xl mb-1">{product.title}</h1>
                      <h3 className="text-sm text-gray-400 dark:text-gray-400 mb-1">Size: {product.size} </h3>
                      <h3 className="text-sm text-gray-400 dark:text-gray-400 mb-1">Color: {product.color} </h3>
                      <h3 className="text-sm text-gray-400 dark:text-gray-400 mb-1">Price: Ksh {product.price}</h3>
                   </div>
  
                   <div className="flex items-center ">
                      <div className="flex items-center w-full gap-2">
                           <button onClick={()=>handleReduceQuantity(product._id)} className='flex justify-center w-full md:w-fit  px-1 py-1 md:px-2 md:py-2 bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white'>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                               </svg>
                           </button>
                           <h3 className="text-lg  dark:text-gray-400 mb-1 bg-[#f7f6f6] dark:bg-[#232323] md:px-4 px-3 py-1 md:py-2 w-fit ">{product.quantity}</h3>
                           <button onClick={()=>handleAddQuantity(product._id)} className='flex justify-center w-full md:w-fit md:px-2 px-1 py-1 md:py-2 bg-indigo-600 hover:bg-indigo-500 cursor-pointer text-white'>
                               <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                   <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                                 </svg>
                           </button>
                      </div>
                   </div>
                   <div className="flex items-center justify-between gap-2">
                       <h2 className="text-base flex items-center">ksh {cart.total}</h2>
                       <span onClick={()=>handleRemoveProduct(product._id)} className='flex items-center gap-2 cursor-pointer hover:text-gray-400'>
                           Remove
                           <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                               <path strokeLinecap="round" strokeLinejoin="round" d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0" />
                           </svg>
                       </span>
                   </div>
                 </div>  
          </div>
            })
            )
          
         } 
         </div>
          <div className="flex justify-end gap-2 w-full  py-4">
             <button onClick={()=>dispatch(clearCart())} className="md:w-44 px-4 py-2 bg-red-600 hover:bg-red-700 text-white">Empty Cart</button>

              {
                cart.products.length > 0 
                   && 
                (
                  <Link to="/checkout" className="flex items-center justify-center gap-2 md:w-44 px-4 py-2 text-white bg-indigo-600 hover:bg-indigo-700">
                      Checkout
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                  </Link>
                )
              }
            

          </div>
    </div>
  )
}

export default Cart