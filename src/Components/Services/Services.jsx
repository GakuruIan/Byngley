import React from 'react'

const Services = () => {
  return (
    <div className='my-14 px-6'>
        <h6 className="text-lg md:text-2xl text-center mb-4">How it works</h6>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 py-6">

            <div className="px-2 py-4 bg-gray-200 hover:bg-[#dddeed] dark:bg-[#202020] hover:dark:bg-[#242424] duration-500 cursor-pointer">
               <span className="rounded-full p-1 w-8 h-8  flex items-center justify-center block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                    </svg>
               </span>
               <h5 className="text-base md:text-lg mb-4">Shopping</h5>
               <p className="text-sm md:text-base pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis repellendus libero consequatur deserunt eaque atque qui tenetur ullam aut.</p>
            </div>

            <div className="px-2 py-4 bg-gray-200 hover:bg-[#dddeed] dark:bg-[#202020] hover:dark:bg-[#242424] duration-500 cursor-pointer">
               <span className="rounded-full p-1 w-8 h-8  flex items-center justify-center block mb-4">
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                     <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 00.75-.75 2.25 2.25 0 00-.1-.664m-5.8 0A2.251 2.251 0 0113.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25zM6.75 12h.008v.008H6.75V12zm0 3h.008v.008H6.75V15zm0 3h.008v.008H6.75V18z" />
                 </svg>
               </span>
               <h5 className="text-base md:text-lg mb-4">Order</h5>
               <p className="text-sm md:text-base pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis repellendus libero consequatur deserunt eaque atque qui tenetur ullam aut.</p>
            </div>

            <div className="px-2 py-4 bg-gray-200 hover:bg-[#dddeed] dark:bg-[#202020] hover:dark:bg-[#242424] duration-500 cursor-pointer">
               <span className="rounded-full p-1 w-8 h-8  flex items-center justify-center block mb-4">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 8.25h19.5M2.25 9h19.5m-16.5 5.25h6m-6 2.25h3m-3.75 3h15a2.25 2.25 0 002.25-2.25V6.75A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25v10.5A2.25 2.25 0 004.5 19.5z" />
                </svg>
               </span>
               <h5 className="text-base md:text-lg mb-4">Choose payment</h5>
               <p className="text-sm md:text-base pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis repellendus libero consequatur deserunt eaque atque qui tenetur ullam aut.</p>
            </div>

            <div className="px-2 py-4 bg-gray-200 hover:bg-[#dddeed] dark:bg-[#202020] hover:dark:bg-[#242424] duration-500 cursor-pointer">
               <span className="rounded-full p-1 w-8 h-8  flex items-center justify-center block mb-4">
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 18.75a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h6m-9 0H3.375a1.125 1.125 0 01-1.125-1.125V14.25m17.25 4.5a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m3 0h1.125c.621 0 1.129-.504 1.09-1.124a17.902 17.902 0 00-3.213-9.193 2.056 2.056 0 00-1.58-.86H14.25M16.5 18.75h-2.25m0-11.177v-.958c0-.568-.422-1.048-.987-1.106a48.554 48.554 0 00-10.026 0 1.106 1.106 0 00-.987 1.106v7.635m12-6.677v6.677m0 4.5v-4.5m0 0h-12" />
                    </svg>
               </span>
               <h5 className="text-base md:text-lg mb-4">Recieve Delievery</h5>
               <p className="text-sm md:text-base pb-4">Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae debitis repellendus libero consequatur deserunt eaque atque qui tenetur ullam aut.</p>
            </div>

        </div>
    </div>
  )
}

export default Services