"use client";

import { useState } from "react";
import Link from "next/link";

export default function Navbar() {
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div>
      <nav className="h-[80px] px-[40px] w-full flex justify-between fixed items-center bg-blue-200">
        <h1 className="font-serif">
          <Link href="/" className="text-4xl">
            Sneakers
          </Link>
        </h1>
        <button
          onClick={() => setOpenMenu(!openMenu)}
          className="h-[60px] text-white flex flex-col gap-1 justify-center items-center"
        >
          <span
            className={`bg-gray-500 block transition-all duration-300 ease-out h-0.5 w-8 rounded-sm ${openMenu ? "rotate-225 translate-y-1" : ""}`}
          ></span>
          <span
            className={`bg-gray-500 block transition-all duration-300 ease-out 
h-0.5 w-8 rounded-sm my-0.5 ${openMenu ? "hidden" : ""}`}
          ></span>
          <span
            className={`bg-gray-500 block transition-all duration-300 ease-out 
h-0.5 w-8 rounded-sm ${openMenu ? "-rotate-225 -translate-y-0.5" : ""}`}
          ></span>
        </button>
      </nav>
      <div
        className={`h-screen w-64 text-white bg-gray-900 relative duration-300 ${openMenu ? "" : "-translate-x-64"}`}
      >
        <ul>
          <li>PICK UP</li>
          <li>FEATURE</li>
          <li>CONTACT</li>
        </ul>
        <ul>
          <li>Twitter</li>
          <li>facebook</li>
          <li>instagram</li>
        </ul>
      </div>
    </div>
  );
}
