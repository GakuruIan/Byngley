import React from 'react'
import model from '../../assets/model.jpg'
import model2 from '../../assets/model2.jpg'
import model3 from '../../assets/model3.jpg'
import baby from '../../assets/baby.jpg'
import makeup from '../../assets/makeup.jpg'

const Catergory = () => {
  return (
    <div className='my-8 px-6'>
        <h6 className="text-lg md:text-2xl text-center mb-4">Category</h6>
         <div className="grid grid-cols-2 md:grid-cols-3 gap-4 pt-6">
            <div className="relative overflow-hidden group cursor-pointer bg-[#292929] ">
                <img src={model} alt="" srcset="" className='h-full w-full  object-cover bg-opacity-25 group-hover:mix-blend-overlay duration:700'/>
                <div className="absolute bottom-5 inset-x-[5%] ">
                   <div className="bg-white flex items-center justify-between px-6 px-2 h-12 rounded w-full translate-y-[200px] group-hover:translate-y-[0px] duration-700">
                      <h4 className="text-base text-gray-900">Category</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                   </div>
                 
                </div>
             </div>
             <div className="relative overflow-hidden group cursor-pointer bg-[#292929] ">
                <img src={model2} alt="" srcset="" className='h-full w-full  object-cover bg-opacity-25 group-hover:mix-blend-overlay duration:700'/>
                <div className="absolute bottom-5 inset-x-[5%] ">
                   <div className="bg-white flex items-center justify-between px-6 px-2 h-12 rounded w-full translate-y-[200px] group-hover:translate-y-[0px] duration-700">
                      <h4 className="text-base text-gray-900">Category</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                   </div>
                 
                </div>
             </div>
             <div className="relative overflow-hidden group cursor-pointer bg-[#292929] ">
                <img src={baby} alt="" srcset="" className='h-full w-full  object-cover bg-opacity-25 group-hover:mix-blend-overlay duration:700'/>
                <div className="absolute bottom-5 inset-x-[5%] ">
                   <div className="bg-white flex items-center justify-between px-6 px-2 h-12 rounded w-full translate-y-[200px] group-hover:translate-y-[0px] duration-700">
                      <h4 className="text-base text-gray-900">Category</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                   </div>
                 
                </div>
             </div>
             <div className="relative overflow-hidden group cursor-pointer bg-[#292929] ">
                <img src={makeup} alt="" srcset="" className='h-full w-full  object-cover bg-opacity-25 group-hover:mix-blend-overlay duration:700'/>
                <div className="absolute bottom-5 inset-x-[5%] ">
                   <div className="bg-white flex items-center justify-between px-6 px-2 h-12 rounded w-full translate-y-[200px] group-hover:translate-y-[0px] duration-700">
                      <h4 className="text-base text-gray-900">Category</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                   </div>
                 
                </div>
             </div>
             <div className="relative overflow-hidden group cursor-pointer bg-[#292929] ">
                <img src={model3} alt="" srcset="" className='h-full w-full  object-cover bg-opacity-25 group-hover:mix-blend-overlay duration:700'/>
                <div className="absolute bottom-5 inset-x-[5%] ">
                   <div className="bg-white flex items-center justify-between px-6 px-2 h-12 rounded w-full translate-y-[200px] group-hover:translate-y-[0px] duration-700">
                      <h4 className="text-base text-gray-900">Category</h4>
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5 text-indigo-700">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 15l3-3m0 0l-3-3m3 3h-7.5M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                   </div>
                 
                </div>
             </div> 
         </div>
    </div>
  )
}

export default Catergory