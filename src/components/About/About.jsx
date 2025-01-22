import React from 'react'
import Stars from '../Stars/Stars'
export default function About() {
  return (
    <div className="bg-secColor h-screen flex justify-center items-center text-white">
     <div className="w-2/3">
        <h1 className="text-center text-[40px] font-bold uppercase">about component</h1>
        <Stars/>
        <div className="flex justify-center space-x-8 mt-4">
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
          <p>Freelancer is a free bootstrap theme created by Route. The download includes the complete source files including HTML, CSS, and JavaScript as well as optional SASS stylesheets for easy customization.</p>
        </div>

     </div>
    </div>
  )
}
