import React, { useState } from 'react';
import Stars2 from '../../components/Stars2/Stars2'

export default function Contact() {
  const [data, setData] = useState({});

  return (
    <div className="h-screen">
      <h1 className="uppercase text-mainColor text-[40px] font-bold mt-3 text-center">
      conatct section
            </h1>
            <Stars2 />

      <form action="" className="w-2/3 mx-auto p-5 ">
        <label htmlFor="name" className="-translate-y-full block"></label>
        <input
          type="text"
          id="name"
          placeholder="userName"
          className="relative w-full px-2 py-2 shadow-xl rounded-xl focus:outline-none focus:border focus:border-b-sky-200 mb-10"
        />

        <label htmlFor="age" className="-translate-y-full block"></label>
        <input
          type="number"
          id="age"
          placeholder="userAge"
          className="relative w-full px-2 py-2 shadow-xl rounded-xl focus:outline-none focus:border focus:border-b-sky-200 mb-10"
        />

        <label htmlFor="email" className="-translate-y-full block"></label>
        <input
          type="email"
          id="email"
          placeholder="userEmail"
          className="relative w-full px-2 py-2 shadow-xl rounded-xl focus:outline-none focus:border focus:border-b-sky-200 mb-10"
        />

        <label htmlFor="pass" className="-translate-y-full block"></label>
        <input
          type="password"
          id="pass"
          placeholder="userPassword"
          className="relative w-full px-2 py-2 shadow-xl rounded-xl focus:outline-none focus:border focus:border-b-sky-200 mb-10"
        />

        <button className="w-36 bg-secColor h-10 text-white rounded-lg" type="submit">send Message</button>
      </form>
    </div>
  );
}
