import React, { useState } from 'react';
import Stars2 from '../Stars2/Stars2';
import img1 from "../../assets/images/poert1.png";
import img2 from '../../assets/images/port2.png';
import img3 from '../../assets/images/port3.png';
import Cards from '../Cards/Cards';

const paths = [
  { user: img1 },
  { user: img2 },
  { user: img3 }
];

export default function Portfolio() {
  const [model, setModel] = useState("");

  function handleClick(image) {
    setModel(image);
  }

  return (
    <div className="h-screen py-12 mb-40">
      <h1 className="uppercase text-mainColor text-[40px] font-bold text-center">
        Portfolio Component
      </h1>
      <Stars2 />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 px-24 gap-5 ">
        {[...paths, ...paths].map((el, index) => (
          <Cards key={index} handleClick={handleClick} image={el.user} />
        ))}
      </div>
      {model && (
        <div
          className="fixed inset-0 bg-emerald-500/50 flex justify-center items-center"
          onClick={(e) => {
            if (e.target.tagName === "DIV") {
              setModel("");
            }
          }}
        >
          <img className="w-2/3" src={model} alt="Selected Portfolio Item" />
        </div>
      )}
    </div>
  );
}
