"use client"

import React, { useState } from "react";
import Link from 'next/link'
import NavLinks from './NavLinks'
import Image from 'next/image'

const Navbar = () => {
  const [open, setOpen] = useState(false);
  return (
    <nav className="bg-white">
      <div className="flex items-center font-medium justify-around">
        <div className="z-50 p-5 md:w-auto w-full flex justify-between">
          <div className="text-3xl md:hidden" onClick={() => setOpen(!open)}>
            {`${open ? "X" : "☰"}`}
          </div>
          <Image src="/Logo.png" width={100} height={24} alt="logo" className="md:cursor-pointer h-8 w-20" />

        </div>
        <ul className="md:flex hidden uppercase items-center gap-8 font-[Poppins]">
          <li><Link href="/" className="py-7 px-3 inline-block">Home</Link></li>
          <NavLinks />
        </ul>
       
        {/* Mobile nav */}
        <ul className={`md:hidden bg-white fixed w-full top-10 overflow-y-auto bottom-0 py-24 pl-4 duration-500 ${open ? "left-0" : "left-[-100%]"}`}>
          <li><Link href="/" className="py-7 px-3 inline-block">Home</Link></li>
          <NavLinks />
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
