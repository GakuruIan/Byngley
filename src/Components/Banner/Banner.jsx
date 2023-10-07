import React from 'react'
import baby from '../../assets/baby.jpg'
import model from '../../assets/model.jpg'
import shoe from '../../assets/shoe.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Banner = () => {
    const settings = {
        dots: false,
        infinite: true,
        speed: 3500,
        arrows:false,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000
      };
  return (
         <Slider {...settings} className="slider">
                <div className="relative  w-full md:mt-16">
                    <div className="relative  w-full overflow-hidden after:clear-both after:block after:content-['']">
                        <div className="relative h-[60vh]  w-full mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                        <img
                            src={baby}
                            className=" h-full object-cover block w-full "
                            alt="..." />
                        <div className="absolute inset-x-[0%] bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] dark:from-[rgba(0,0,0,0.5)]/50 to-[transparent]  py-10 text-center text-white md:block">
                            <div className="flex items-center flex-col justify-center">
                                <h5 className="text-5xl md:text-8xl">Baby Clothes</h5>
                                <p className='text-base my-6'>
                                Some representative placeholder content for the first slide.
                                </p>
                                <button className="bg-indigo-700 px-4 py-2 w-60 flex items-center gap-4 justify-center  hover:bg-indigo-800 cursor-pointer">Shop now 
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                    </svg>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="relative  w-full md:mt-16">
                    <div className="relative  w-full overflow-hidden after:clear-both after:block after:content-['']">
                        <div className="relative h-[60vh]  w-full mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                        <img
                            src={model}
                            className=" h-full object-cover block w-full "
                            alt="..." />
                        <div className="absolute inset-x-[0%] bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] dark:from-[rgba(0,0,0,0.5)]/50 to-[transparent]  py-10 text-center text-white md:block">
                        <div className="flex items-center flex-col justify-center">
                                <h5 className="text-5xl md:text-8xl">Baby Clothes</h5>
                                <p className='text-base my-6'>
                                Some representative placeholder content for the first slide.
                                </p>
                                <button className="bg-indigo-700 px-4 py-2 w-60 flex items-center gap-4 justify-center  hover:bg-indigo-800 cursor-pointer">Shop now 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
                <div className="relative  w-full md:mt-16">
                    <div className="relative  w-full overflow-hidden after:clear-both after:block after:content-['']">
                        <div className="relative h-[60vh]  w-full mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none">
                        <img
                            src={shoe}
                            className=" h-full object-cover block w-full "
                            alt="..." />
                        <div className="absolute inset-x-[0%] bottom-0 bg-gradient-to-t from-[rgba(0,0,0,0.5)] dark:from-[rgba(0,0,0,0.5)]/50 to-[transparent]  py-10 text-center text-white md:block">
                            <div className="flex items-center flex-col justify-center">
                                <h5 className="text-5xl md:text-8xl">Baby Clothes</h5>
                                <p className='text-base my-6'>
                                    Some representative placeholder content for the first slide.
                                </p>
                                <button className="bg-indigo-700 px-4 py-2 w-60 flex items-center gap-4 justify-center  hover:bg-indigo-800 cursor-pointer">Shop now 
                                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                            <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25a1.125 1.125 0 01-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0zm7.5 0a.375.375 0 11-.75 0 .375.375 0 01.75 0z" />
                                        </svg>
                                </button>
                            </div>
                        </div>
                        </div>
                    </div>
                </div>
          </Slider>
  )
}

export default Banner