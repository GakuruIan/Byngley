import React,{useRef} from 'react'
import pic from '../../assets/pic.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Row = ({title,data}) => {
    const slider = useRef(null)
    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        arrows:false,
        slidesToShow: 4,
        slidesToScroll: 1,
        responsive: [
            {
              breakpoint: 1024,
              settings: {
                slidesToShow: 3,
                slidesToScroll: 3,
                infinite: true,
                dots: true
              }
            },
            {
              breakpoint: 600,
              settings: {
                slidesToShow: 2,
                slidesToScroll: 2,
                initialSlide: 2
              }
            },
            {
              breakpoint: 480,
              settings: {
                slidesToShow: 1,
                slidesToScroll: 1
              }
            }
          ]
      };
      const cards =[1,2,3,4,5,6,7]
  return (
    <div className='px-6 my-8'>
         <div className="flex items-center justify-between">
            <span className='cursor-pointer' onClick={()=> slider.current.slickPrev()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
                </svg>
            </span>
            <h6 className="text-lg md:text-2xl">{title}</h6>
            <span className='cursor-pointer' onClick={()=> slider.current.slickNext()}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                 <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
            </span>
         </div>
        <Slider ref={slider} {...settings} className="mb-4">
           {
            cards.map((card,key)=>{
             return <div className="max-w-sm mx-8 mt-5 px-2  overflow-hidden" key={key}>
                <img className="w-full" src={pic} srcSet="" alt="Sunset in the mountains"/>
                <div className="py-2 px-1 flex justify-between items-center">
                    <h6 className="text-lg ">product name</h6>
                    <h6 className="text-base text-gray-400">ksh 1500</h6>
                </div>
            </div>
            })
           }
            
        </Slider>
    </div>
  )
}

export default Row