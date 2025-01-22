import React from 'react'
import img1 from "../../assets/images/avataaars.svg"
import Stars from '../Stars/Stars'

export default function Home() {
  return (
   
      <div className="flex justify-center items-center bg-secColor h-screen ">
        <div className="w-2/3">
        <div className="w-64 md:w-96 mx-auto">
            <img src={img1} alt="" />
        </div>
        <h1 className="uppercase text-[40px]  font-bold text-center mt-3 text-white">Start Framework</h1>
       <Stars/>
        <div className="text-white text-center text-lg mt-5">
        Graphic Artist - Web Designer - Illustrator
        </div>
        </div></div>
    
  )
}
