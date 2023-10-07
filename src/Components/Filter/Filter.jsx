import React from 'react'
import RangeSlider from 'react-range-slider-input';
import 'react-range-slider-input/dist/style.css';

const Filter = () => {
  return (
    <> 
         {/* filter column */}
         <div className="h-full fixed py-4 px-2 md:px-0 md:py-0  left-[-100%]  lg:relative lg:left-[0] top-[0] bg-[#Fefefe] dark:bg-[#1E1E1E] w-full md:w-56">
                  <header className="flex mb-6 gap-8 items-center dark:text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75" />
                    </svg>
                    <h6 className="md:text-xl text-lg">Filters</h6>
                  </header>
                  <div className="mb-6 w-full">
                      <div className="relative">
                          <div className="absolute inset-y-0 left-0 flex items-center pl-3 w-full pointer-events-none">
                              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                              </svg>
                          </div>
                          <input type="text" id="email-address-icon" className="dark:bg-[#232323] bg-[#dddeed] dark:text-white text-sm rounded outline-0 focus:border-indigo-500 block w-full pl-10 p-2.5 dark:placeholder-gray-400" placeholder="Search product"/>
                      </div>
                   </div>

               <div className="mb-8">
                     <h6 className="text-base md:text-lg mb-1">Catergory</h6>
                     <div className="border border-b-1 border-gray-200 dark:border-[#232323] w-full"></div>
                      <div className="mt-2 md:pl-2">
                         <div className="flex gap-4 items-center mb-6">
                              <input id="checkbox" type="checkbox" value="" className="w-4 h-4 dark:appearance-none bg-[#232323] checked:bg-indigo-300 cursor-pointer"/>
                              <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="checkbox">Clothes </label>
                         </div>
                         <div className="flex gap-4 items-center mb-6">
                              <input id="checkbox" type="checkbox" value="" className="w-4 h-4 dark:appearance-none bg-[#232323] checked:bg-indigo-300 cursor-pointer"/>
                              <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="checkbox">Baby</label>
                         </div>
                         <div className="flex gap-4 items-center mb-6">
                              <input id="checkbox" type="checkbox" value="" className="w-4 h-4 dark:appearance-none bg-[#232323] checked:bg-indigo-300 cursor-pointer"/>
                              <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="checkbox">Make up</label>
                         </div>
                         <div className="flex gap-4 items-center mb-6">
                              <input id="checkbox" type="checkbox" value="" className="w-4 h-4 dark:appearance-none bg-[#232323] checked:bg-indigo-300 cursor-pointer"/>
                              <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="checkbox">Shoes</label>
                         </div>
                         <div className="flex gap-4 items-center mb-6">
                              <input id="checkbox" type="checkbox" value="" className="w-4 h-4 dark:appearance-none bg-[#232323] checked:bg-indigo-300 cursor-pointer"/>
                              <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="checkbox">Electronics</label>
                         </div>
                      </div>
               </div>
               <div className="mb-8">
                     <h6 className="text-base md:text-lg mb-1">Sort by</h6>
                     <div className="border border-b-1 border-gray-200 dark:border-[#232323] w-full"></div>
                      <div className="mt-2 md:pl-2">
                         <div className="flex gap-4 items-center mb-6">
                              <input id="checkbox" type="checkbox" value="" className="w-4 h-4 dark:appearance-none bg-[#232323] checked:bg-indigo-300 cursor-pointer"/>
                              <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="checkbox">New</label>
                         </div>
                         <div className="flex gap-4 items-center mb-6">
                              <input id="checkbox" type="checkbox" value="" className="w-4 h-4 dark:appearance-none bg-[#232323] checked:bg-indigo-300 cursor-pointer"/>
                              <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="checkbox">Trending</label>
                         </div>
                         <div className="flex gap-4 items-center mb-6">
                              <input id="checkbox" type="checkbox" value="" className="w-4 h-4 dark:appearance-none bg-[#232323] checked:bg-indigo-300 cursor-pointer"/>
                              <label className="inline-block pl-[0.15rem] hover:cursor-pointer" for="checkbox">Best selling</label>
                         </div>
                      </div>
               </div>
               <div className="mb-8">
                     <h6 className="text-base md:text-lg mb-1">Price Range</h6>
                     <div className="border border-b-1 border-gray-200 dark:border-[#232323] w-full"></div>
                      <div className="mt-2 md:pl-2">
                        <div className="flex gap-2 py-2">
                            <div className="relative">
                                <label htmlFor="" >
                                    min
                                </label>
                                <input type="text" id="email-address-icon" className="dark:bg-[#232323] bg-[#dddeed] dark:text-white text-sm rounded outline-0 focus:border-indigo-500 block w-full p-2.5 dark:placeholder-gray-400" placeholder="ksh 0"/>
                            </div>
                            <div className="relative">
                                <label htmlFor="">
                                    max
                                </label>
                                <input type="text" id="email-address-icon" className="dark:bg-[#232323] bg-[#dddeed] dark:text-white text-sm rounded outline-0 focus:border-indigo-500 block w-full p-2.5 dark:placeholder-gray-400" placeholder="ksh 0"/>
                            </div>
                        </div>
                         <div className="pt-6">
                             <RangeSlider
                                 defaultValue={[20, 500]}
                                 className="bg-[#f7f6f6] dark:bg-[#232323]"
                                 step={100} max={10000}
                                 />
                         </div>
                      </div>
               </div>
              </div>
          {/* filter column */}
        
    </>
  )
}

export default Filter