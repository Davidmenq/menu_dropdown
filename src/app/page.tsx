"use client"

import Image from "next/image";
import Navbar from "../components/Navbar";
import { Dropdown } from "flowbite-react";

export default function Home() {
  return (
    <body className="h-screen bg-Hero bg-cover font-[Poppins] md:bg-top bg-center">
      <Navbar />
      
      <div className="flex flex-col justify-center text-center items-center bg-lime-500 h-screen">
        <h2 className="text-white text-2xl font-medium ">Fashion Tips</h2>
        <h1 className="md:text-5xl text-3xl text-white font-semibold py-5">
          Items every woman should have
        </h1>
      </div>
    </body>
  );
}
