import React ,{useState,useEffect} from 'react'
import Row from '../../Components/Row/Row'
import { addProducts } from '../../Reducers/CartReducer'
import {useDispatch} from 'react-redux'
import { useParams } from 'react-router-dom';
import axios from 'axios'
import Loader from '../../Components/Loader/Loader'
import { toast} from "react-toastify";
import Toastify from '../../Components/Toastify/Toastify';


const Product = () => {
  let { id } = useParams();

  let [quantity,setQuantity]=useState(1)
  const [product,setProduct]=useState([])

  const [size,setSize] =useState("");
  const [color,setColor] =useState("");

  const [isLoading,setisLoading] = useState(false)

  useEffect(() => {
    setisLoading(true);
    const FetchedProduct =async()=>{ 
        await axios.get(`http://localhost:8000/product/${id}`)
        .then(response=>{
          if(response.status === 200){
            setProduct(response.data)
            setisLoading(false)
          }
        })
        .catch(err=>{
          console.log(err)
          setisLoading(false)
        })
    }
    
    FetchedProduct();
  },[]);
  

  // check if product is empty
  if(product.length === 0 ) return null

  // dispatch 
  const dispatch = useDispatch()

  const handleQuantity=(action)=>{
    if(action === "remove"){
       quantity > 1 && setQuantity(quantity - 1)
    }else{
      setQuantity(quantity + 1)
    }
  }
  
  const handleCart =()=>{
    const {_id,title,price} = product

    const Product = {
      _id,
      title,
      price,
      Image:product.Images[0].path
    }
    
    dispatch(addProducts({...Product,quantity,size,color}))
    toast.success('Product added to cart')
  } 


const handleSize=(e)=>{
  setSize(e.currentTarget.value)
}

const handleColor =(e)=>{
  setColor(e.currentTarget.value)
}

  return (
   <div className='py-4 md:mt-20 md:px-6 px-0 h-full relative'>
        {
          isLoading ? <Loader text="Loading...."/>
             : 
          <div className='' >
            <Toastify/>
               <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-4">
                  <div className="px-2 ">
                      <div className="h-auto w-full mb-4">
                        <img src={product.Images[0]?.path} alt="" srcSet=""className="h-[450px] w-full object-cover"/>
                      </div>
                      <div className="grid grid-cols-4 md:grid-cols-4 gap-2 md:gap-4">
                          {
                            product.Images.map(image=>{
                              return  <img src={image.path} alt="" srcSet=""className='h-28 w-full rounded object-cover'/>
                            })
                          }
                      </div>
                  </div>
                  <div className="px-2">
                      <h1 className="text-3xl md:text-6xl mb-4">{product.title}</h1>

                      <h1 className="text-lg md:text-xl mb-2">Price</h1>
                      <h6 className="text-base md:text-base mb-4">ksh:{product.price}</h6>

                      <h6 className="text-lg md:text-xl mb-2">Description</h6>
                      <p className="text-sm md:text-base mb-4">{product.description}</p>
          
                      <h6 className="text-lg md:text-xl mb-2">Quantity</h6>
                      <div className="flex items-center gap-4 mb-6">
                          <button onClick={()=>handleQuantity("remove")} className="flex items-center justify-center gap-2 px-2  w-full md:w-28 py-2 bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 12h-15" />
                            </svg>
                          </button>
                        
                          <input type="text" name="" id="" className='p-2 w-full md:w-24 bg-[#f7f6f6] dark:bg-[#232323] ring-0 outline-0' value={quantity}/>
                          <button onClick={()=>handleQuantity()} className="flex items-center justify-center gap-2 px-2 w-full md:w-28 py-2 bg-indigo-700 hover:bg-indigo-600 text-white dark:bg-indigo-700 dark:hover:bg-indigo-600">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M12 4.5v15m7.5-7.5h-15" />
                              </svg>
                          </button>
                      </div>
                      
                      {
                        product.size 
                        && 
                        <div className="">
                          <h6 className="text-lg md:text-xl mb-3">Size</h6>
                          <div className="flex items-center gap-4 mb-6">
                              {
                                product.size.map((size,index)=>{
                                  return  <label key={index}  htmlFor={index} className='flex w-fit items-center justify-evely px-3 py-2 relative cursor-pointer'>
                                      <input type="radio" id={index} onClick={handleSize} name="size" className="peer appearance-none relative z-10" value={size} />
                                      <div className="absolute inset-0 border border-1 border-indigo-600 dark:border-white peer-checked:bg-indigo-600 peer-checked:text-indigo-800 peer-checked:border-indigo-800 peer-checked:block z-0"></div>
                                      <span className="relative z-10 peer-checked:text-white ">{size}</span>
                                  </label>
                                })
                              }
                            </div>
                        </div>
                      }
                    
                      {
                        product.color 
                          &&
                          <div className="">
                              <h6 className="text-lg md:text-xl mb-3">Color</h6>
                              <div className="flex items-center gap-4 mb-6">
                              {
                                product.color.map((color,index)=>{
                                  return  <label key={index} htmlFor={color} className='flex w-fit items-center justify-evely rounded px-3 py-2 relative cursor-pointer'>
                                        <input type="radio" id={color} onClick={handleColor} name="color" className="peer appearance-none relative z-10" value={color}/>
                                        <div className="absolute inset-0 border border-1 border-indigo-600 dark:border-white peer-checked:bg-indigo-600 peer-checked:text-indigo-800 peer-checked:border-indigo-800 peer-checked:block z-0"></div>
                                        <span className="relative z-10">{color}</span>
                                    </label>
                                })
                              }
                            </div>
                          </div>
                      }
          
                      <div className="flex flex-wrap items-center w-full gap-4">
          
                        {/* show when user has an account */}
                          <button className="flex items-center justify-center gap-2 px-4 w-full md:w-48 py-2 border border-2  border-indigo-600 dark:text-indigo-300 dark:hover:text-white dark:border-indigo-400 dark:text-white text-indigo-800 hover:bg-indigo-600 hover:text-white dark:hover:bg-indigo-400">
                            Add to wishlist
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z" />
                            </svg>
                          </button>
                        {/* show when user has an account */}
          
                          <button onClick={handleCart} className="flex items-center justify-center gap-2 px-4 w-full md:w-48 py-2 bg-indigo-700 hover:bg-indigo-600 dark:bg-indigo-700 text-white dark:hover:bg-indigo-600">
                            Add to cart
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 00-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 00-16.536-1.84M7.5 14.25L5.106 5.272M6 20.25a.75.75 0 11-1.5 0 .75.75 0 011.5 0zm12.75 0a.75.75 0 11-1.5 0 .75.75 0 011.5 0z" />
                            </svg>
                          </button>
                      </div>
                  </div>
               </div>

            
            {/* related products */}
               <Row title="Related Products"/>
          </div>
        }
   </div>
  )
}

export default Product