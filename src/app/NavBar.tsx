import Link from "next/link";
import React from "react";

const NavBar = () => {
  return (
    <nav className="h-6 w-screen">
      <Link href="/">Title</Link>
      <ul>
        <li>
          <Link href="/works">WORKS</Link>
        </li>
        <li>
          <Link href="/message">MESSAGE</Link>
        </li>
        <li>
          <Link href="/company">COMPANY</Link>
        </li>
        <li></li>
        <li></li>
        <li></li>
        <li>
          <a>CONTACT</a>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
