import React from 'react'
import { Link } from 'react-router-dom'


const Footer = () => {
  return (
    <div className='bg-[#98583E] dark:bg-[#202020] md:px-6 py-4 px-2'>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 py-2">
              <div className="max-w-sm">
                <h1 className="text-base text-white mb-2">Byngley</h1>
                <p className="text-sm text-white self-center">Lorem ipsum dolor sit, amet consectetur adipisicing elit. Perferendis laboriosam illo rem deserunt ab ad dolores adipisci aut provident! A?</p>
              </div>
              <div className="grid grid-cols-2 gap-2">
                  <div className="">
                      <h2 className="text-lg text-white mb-2">Category</h2>
                        <div className="md:pl-2 pl-0">
                          <Link to="" className="text-sm mb-4 md:mb-2 text-white hover:text-gray-400 block">Product One</Link>
                          <Link to="" className="text-sm mb-4 md:mb-2 text-white hover:text-gray-400 block">Product One</Link>
                          <Link to="" className="text-sm mb-4 md:mb-2 text-white hover:text-gray-400 block">Product One</Link>
                          <Link to="" className="text-sm mb-4 md:mb-2 text-white hover:text-gray-400 block">Product One</Link>
                          <Link to="" className="text-sm mb-4 md:mb-2 text-white hover:text-gray-400 block">Product One</Link>
                        </div>
                    </div>
                  <div className="">
                      <h2 className="text-lg text-white mb-2">Links</h2>
                        <div className="md:pl-2 pl-0">
                          <Link to="" className="text-sm mb-4 md:mb-2 text-white hover:text-gray-400 block">Home</Link>
                          <Link to="" className="text-sm mb-4 md:mb-2 text-white hover:text-gray-400 block">Products</Link>
                          <Link to="" className="text-sm mb-4 md:mb-2 text-white hover:text-gray-400 block">About</Link>
                          <Link to="" className="text-sm mb-4 md:mb-2 text-white hover:text-gray-400 block">Contacts</Link>
                        </div>
                  </div>
              </div>  
          </div>
    </div>
  )
}

export default Footer