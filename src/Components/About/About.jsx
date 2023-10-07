import React from 'react'
import pic from '../../assets/baby.jpg'
const About = () => {
  return (
    <div className='px-6 my-8'>
        <h6 className="text-center text-lg md:text-2xl mb-6">About us</h6>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
          <h3 className="text-5xl">Lorem ipsum dolor sit amet consectetur.</h3>
          <p className="text-base ">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae esse modi omnis laudantium animi. Consequatur?.</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 md:gap-4 gap-2 mb-6">
              <img clasName="h-full w-full object-cover" src={pic} alt="" srcset="" />
              <div className="justify-self-center">
                <p className='text-base md:text-base mb-4'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quaerat pariatur consequatur voluptates sint ducimus similique dicta odit, sequi omnis unde expedita ad, laboriosam a corporis facilis ullam, deserunt provident sed suscipit deleniti voluptatum fugit libero. Aut molestias, itaque esse corrupti officia recusandae tempore vel fugiat reiciendis eligendi perferendis consectetur voluptatem.</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-4 ">
                   <div className="flex flex-col justify-center">
                       <h4 className="mb-2 text-3xl">1000+</h4>
                      <h4 className="text-base">Delieveries</h4>
                   </div>
                   <div className="flex flex-col justify-center">
                       <h4 className="mb-2 text-3xl">1000+</h4>
                      <h4 className="text-base">Orders</h4>
                   </div>
                   <div className="flex flex-col justify-center">
                       <h4 className="mb-2 text-3xl">1000+</h4>
                      <h4 className="text-base">Shipping</h4>
                   </div>
                   <div className="flex flex-col justify-center">
                       <h4 className="mb-2 text-3xl">1000+</h4>
                      <h4 className="text-base">Customers</h4>
                   </div>
                   </div>
              </div>
        </div>
    </div>
  )
}

export default About