import React, { useState } from 'react'
import {Link, NavLink } from 'react-router-dom'

export default function Navbar() {
    const[expanded , setExpanded]=useState(false);
  return (
    <div className="bg-mainColor text-white  font-bold py-8 px-5 md:px-44  lg:flex items-center justify-between  ">
            <Link to={"/Home"} className="text-[35px] font-bold uppercase "> Start Framework </Link>
            <button onClick={()=>{
                setExpanded(!expanded);
            }} className={`text-3xl ${expanded ? "border border-white" : ""} lg:hidden`} ></button>
      <ul className={` ${expanded ? "h-32" : "h-0"} mt-2 overflow-hidden duration-300 lg:flex lg:h-auto`}>
        <li>
            <NavLink to={"/About"} className="px-3 py-2  block w-fit rounded-xl duration-200"> About</NavLink>
            </li>
            <li>
            <NavLink to={"/Portfolio"} className="px-3 py-2  block w-fit rounded-xl duration-200"> Portfoloio</NavLink>
            </li>
            <li>
            <NavLink to={"/Contact"} className="px-3 py-2  block w-fit rounded-xl duration-200"> Contact </NavLink>
            </li>
      </ul>
     
    </div>
  )
}
