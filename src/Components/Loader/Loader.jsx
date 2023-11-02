import React from 'react'
import PuffLoader from "react-spinners/PuffLoader";

const Loader = ({text}) => {
  return (
     <div className="h-[calc(100vh-200px)] dark:bg-[#212121] absolute top-0 left-0 w-full flex items-center justify-center flex-col gap-2">
        <PuffLoader color="#98583E" />
        <h6 className="text-base text-center mt-4">{text}</h6>
     </div>
  )
}

export default Loader