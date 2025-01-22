import React from 'react';

export default function Cards({ image, handleClick }) {
  return (
    <div>
      <div
        onClick={() => handleClick(image)}
        className="rounded-2xl group overflow-hidden relative cursor-pointer"
      >
        {/* Card Image */}
        <img src={image} alt="Card" className="w-full h-auto" />

        {/* Hover Overlay */}
        <div className="absolute inset-0 bg-secColor/90  translate-y-full group-hover:translate-y-0 duration-500 flex text-white justify-center items-center">
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 448 512"
    className="w-12 h-12 text-slate-300"
    
  >
    <path d="M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32l0 144L48 224c-17.7 0-32 14.3-32 32s14.3 32 32 32l144 0 0 144c0 17.7 14.3 32 32 32s32-14.3 32-32l0-144 144 0c17.7 0 32-14.3 32-32s-14.3-32-32-32l-144 0 0-144z" />
  </svg>
</div>

      </div>
    </div>
  );
}

