import React,{useState} from 'react'
import {useSelector} from 'react-redux';
import { Link } from 'react-router-dom'
const Navbar = () => {
  const [isOpen,setIsopen] = useState(false);
  // !create badge for the cart
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    
    <div className='md:fixed top-0 left-0 w-full bg-[#98583E] md:py-4 dark:bg-[#202020] z-40'>
       <div className="flex justify-between items-center text-gray-800 dark:text-white h-16 md:px-6 px-2">
          <h6 className="text-lg text-gray-700 text-white">Byngley</h6>
          <div className={`md:static absolute bg-[#98583E] dark:bg-[#202020] px-6 py-4 left-[0%] md:min-h-fit min-h-fit md:w-auto w-full gap-4 z-40 duration-700 ${isOpen ?  "top-12" : "top-[-500px]"} `}>
              <div className="relative flex flex-col md:flex-row md:gap-4 gap-8">
                  <Link to="/" className="text-base text-white mr-2 hover:text-gray-400">Home</Link>
                  <Link to="/products" className="text-base text-white mr-2 hover:text-gray-400">Products</Link>
                  <Link to="" className="text-base text-white mr-2 hover:text-gray-400">About</Link>
                  <Link to="" className="text-base text-white mr-2 hover:text-gray-400">Service</Link>
                  <Link to="" className="text-base text-white mr-2 hover:text-gray-400">Contact us</Link>
                </div>
          </div>
            <div className="flex gap-2 md:gap-4">
                <Link to="/" className='mx-1 cursor-pointer text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M12 3v2.25m6.364.386l-1.591 1.591M21 12h-2.25m-.386 6.364l-1.591-1.591M12 18.75V21m-4.773-4.227l-1.591 1.591M5.25 12H3m4.227-4.773L5.636 5.636M15.75 12a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0z" />
                    </svg>
                </Link>
                <Link to="/" className='mx-1 cursor-pointer text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                </Link>
                <Link to="/login" className='mx-1 cursor-pointer text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                    </svg>
                </Link>
                <Link to="/cart" className='mx-1 cursor-pointer text-white'>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
                </Link>

                {
                  isOpen ? ( 
                  <span className='mx-1 cursor-pointer md:hidden text-white transition-transform duration-500' onClick={()=>setIsopen(false)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                        <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
                      </svg>
                   </span>
                   ) 
                   :
                   ( 
                   <span className='mx-1 cursor-pointer md:hidden text-white' onClick={()=>setIsopen(true)}>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                      </svg>
                   </span>
               )
                }
               
               
            </div>
       </div>
    </div>
  )
}

export default Navbar