"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div>
      <nav className="h-[80px] px-[40px] w-full flex justify-between fixed items-center bg-white">
        <h1 className="font-serif">
          <Link href="/" className="text-4xl">
            Sneakers
          </Link>
        </h1>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className={`h-[60px] flex flex-col gap-1 justify-center items-center z-40`}
        >
          <span
            className={`block bg-gray-600 transition-all duration-300 ease-out h-0.5 w-8 rounded-sm ${openMenu ? "rotate-225 translate-y-1 bg-white" : ""}`}
          ></span>
          <span
            className={`block bg-gray-600 transition-all duration-700 ease-out h-0.5 w-8 rounded-sm my-0.5 ${openMenu ? "hidden" : ""}`}
          ></span>
          <span
            className={`block bg-gray-600 transition-all duration-300 ease-out h-0.5 w-8 rounded-sm ${openMenu ? "-rotate-225 -translate-y-0.5 bg-white" : ""}`}
          ></span>
        </button>
      </nav>
      <div
        className={`h-screen w-[300px] px-6 text-white bg-black fixed z-10 duration-500 ${openMenu ? "" : "-translate-x-64 opacity-0"}`}
      >
        <ul className="py-[60px]">
          <li className="py-[20px] border-t-[1px]">PICK UP</li>
          <li className="py-[20px] border-y-[1px]">FEATURE</li>
          <li className="py-[20px] border-b-[1px]">CONTACT</li>
        </ul>
        <ul className="py-2 flex flex-col gap-3 text-[15px]">
          <li>Twitter</li>
          <li>facebook</li>
          <li>instagram</li>
        </ul>
      </div>
    </div>
  );
}
