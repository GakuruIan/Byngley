import React,{useEffect,useState} from 'react'

import Banner from '../../Components/Banner/Banner'
import Filter from '../../Components/Filter/Filter'
import {Link} from 'react-router-dom'

import axios from 'axios'

const Products = () => {

  const [products,setProducts] = useState([])

  useEffect(() => {
      axios.get('http://localhost:8000/products')
      .then(response=>{
        if(response.status === 200){
           setProducts(response.data)
        }
      })
      .catch(err=>{
        console.log(err)
      })
    return () => {
    
    };
  }, [products]);

  return (
    <div>
       <Banner/>
       <div className="relative my-8 flex gap-6 px-4">
        
         <Filter/>

          {/* products wrapper */}
          <div className="flex-1 w-full">
              <div className="flex justify-between items-center px-1 md:px-4 mb-6">
                <span className='cursor-pointer lg:hidden block'>
                   <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                </span>
                <div className="relative">
                      <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                          </svg>
                      </div>
                     <input type="text" id="email-address-icon" className="dark:bg-[#232323] bg-[#dddeed] dark:text-white text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400" placeholder="Search product"/>
                  </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">

                {
                  products.map((product)=>{
                     return <div className="w-full" key={product._id}>
                              <img className="w-full h-48 object-cover" src={product.Images[0].path} alt="Sunset in the mountains"/>
                              <div className="py-2 px-1 flex justify-between items-center">
                                  <Link to={`/product/${product.title}`} className="text-lg ">{product.title}</Link>
                                  <h6 className="text-base text-gray-400">{product.price}</h6>
                              </div>
                       </div>
                  })
                }

              </div>
              {/* pagination */}
              <div className="py-4 w-full mt-6 flex justify-end">
                 <nav aria-label="Page navigation example">
                    <ul class="inline-flex items-center -space-x-px">
                        <li>
                          <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 rounded-l-lg hover:bg-[#f7f6f6] hover:text-gray-700 dark:bg-[#232323] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-[#262626] dark:hover:text-white">
                            <span class="sr-only">Previous</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M12.707 5.293a1 1 0 010 1.414L9.414 10l3.293 3.293a1 1 0 01-1.414 1.414l-4-4a1 1 0 010-1.414l4-4a1 1 0 011.414 0z" clip-rule="evenodd"></path></svg>
                          </a>
                        </li> 
                        {/* link */}
                        <li>
                             <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-[#232323]  dark:text-gray-400 dark:hover:bg-[#262626] dark:hover:text-white">1</a>
                        </li> 
                         {/* link */}  
                          {/* link */}
                        <li>
                             <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-[#232323]  dark:text-gray-400 dark:hover:bg-[#262626] dark:hover:text-white">2</a>
                        </li> 
                         {/* link */}  
                          {/* link */}
                        <li>
                             <a href="#" class="px-3 py-2 leading-tight text-gray-500 bg-white hover:bg-gray-100 hover:text-gray-700 dark:bg-[#232323]  dark:text-gray-400 dark:hover:bg-[#262626] dark:hover:text-white">3</a>
                        </li> 
                         {/* link */}  
                        <li>
                        <a href="#" class="block px-3 py-2 ml-0 leading-tight text-gray-500 rounded-r-lg hover:bg-[#f7f6f6] hover:text-gray-700 dark:bg-[#232323] dark:border-gray-700 dark:text-gray-400 dark:hover:bg-[#262626] dark:hover:text-white">
                            <span class="sr-only">Next</span>
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z" clip-rule="evenodd"></path></svg>
                          </a>
                        </li>
                    </ul>
                  </nav>
              </div>
          </div>
           {/* products wrapper*/}
       </div>
    </div>
  )
}

export default Products