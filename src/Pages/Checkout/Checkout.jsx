import React,{useState,useEffect} from 'react'

import {useFormik} from 'formik';
import { useSelector,useDispatch } from 'react-redux';
import axios from 'axios';
import Loader from '../../Components/Loader/Loader';

import { removeProduct,clearCart,addQuantity,reduceQuantity } from '../../Reducers/CartReducer';

const Checkout = () => {

  const [total,setTotal] = useState(0);
  const [loading,setLoading]=useState(false)
  const Cart = useSelector(state=>state.cart)

  const dispatch = useDispatch()

  useEffect(()=>{
     setTotal(Cart.total);
  },[Cart])

  const onSubmit =(values,action)=>{
    
    setLoading(true)
    axios.post("http://localhost:8000/create/order",values,{
      headers: {
        'Content-Type':'application/json'
      }
    })
    .then((response)=>{
      if(response.status === 200){
        setLoading(false)
        window.location = response.data.url
      }
    })
    .catch((err)=>{
      setLoading(false)
      console.log(err)
    })

    action.resetForm()
  }

  
  const handleRemoveProduct=(id)=>{
    dispatch(removeProduct(id))
  }
  
  const handleReduceQuantity =(id)=>{
       dispatch(reduceQuantity(id))
  }
  
  const handleAddQuantity=(id)=>{
      dispatch(addQuantity(id))
  }

  const formik = useFormik({
    initialValues :Cart,
    onSubmit
  })

  return (
    <div className='py-4 md:mt-20 md:px-6 px-0 h-full'>
    
          <div className="min-h-[calc(100vh-250px)] md:min-h-[calc(100vh-312px)] grid grid-cols-1 md:grid-cols-1 gap-2 md:gap-4"> 

              {
                 loading ? <Loader text="Loading..."/> :

                    <div className="py-2 h-full md:block px-2">
                      <div className="py-4 px-2">
                          <h4 className="text-3xl text-center mb-4">Order Summary</h4>
                          <div className="border-b border-gray-600 mb-6"></div>
                          {
                            Cart.products.length === 0 ? 
                            (
                            <div className="h-96 flex flex-col gap-2 md:gap-4 items-center justify-center">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-14 h-14 stroke-gray-300">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5m6 4.125l2.25 2.25m0 0l2.25 2.25M12 13.875l2.25-2.25M12 13.875l-2.25 2.25M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z" />
                                </svg>
                                <h4 className="text-xl text-gray-400 text-center">Cart is empty</h4>
                            </div>
                            )
                            :
                            (

                              Cart.products.map((product)=>{
                                return    <div key={product._id} className="flex flex-wrap gap-4 mb-4 pb-6 border-b border-gray-200 dark:border-gray-600">
                                <img src={product.Image} alt=""  className='md:h-32 h-48 w-32 object-cover' />
                  
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
                                        <h2 className="text-base flex items-center">ksh {Cart.total}</h2>
                                        <span onClick={()=> handleRemoveProduct(product._id)} className='flex items-center gap-2 cursor-pointer hover:text-gray-400'>
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
                            <p className="text-base px-4 mt-2">Total: Ksh {total}</p>
                      </div>
                      <div className="flex justify-end mt-4">
                        {
                           Cart.products.length > 0 && 
                            <button onClick={formik.handleSubmit}  className="flex items-center justify-center gap-2 md:w-44 px-4 py-2 text-white bg-green-600 hover:bg-green-700 ">
                                Place Order 
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                                </svg>
                             </button>
                        }
                          
                      </div>
                </div>
                 
              }
              

          </div>
     
    </div>
  )
}

export default Checkout