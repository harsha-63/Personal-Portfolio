"use client";

import { useState } from "react";
import Link from "next/link";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="bg-gray-800 text-white p-4 relative z-50">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          Fathima Harsha
        </Link>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? "Close" : "Menu"}
        </button>

        {/* Menu Container */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:static left-0 top-full w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
            <li className="text-xl p-4">
              <Link href="/">Home</Link>
            </li>
            <li className="text-xl p-4">
              <Link href="/about">About</Link>
            </li>
            <li className="text-xl p-4">
              <Link href="/services">Services</Link>
            </li>
            <li className="text-xl p-4">
              <Link href="/contact">Contact</Link>
            </li>
          </ul>

          <a
            href="/Fathima_Harsha_Resume.pdf"
            download
            className="text-xl bg-white text-black px-4 py-2 rounded m-4 md:m-0"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

