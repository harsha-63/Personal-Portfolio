"use client";

import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const pathname = usePathname();
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <nav className="fixed top-0 left-0 right-0 bg-transparent backdrop-blur-xl text-black p-4 z-50 ">
      <div className="container mx-auto flex justify-between items-center">
        <Link href="/" className="text-xl font-semibold">
          Fathima Harsha
        </Link>

        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <FaTimes size={14}/> : <FaBars size={14}/>}
        </button>

        {/* Menu Container */}
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } md:flex md:items-center md:gap-6 absolute md:static left-0 top-full w-full md:w-auto bg-gray-800 md:bg-transparent transition-all duration-300 ease-in-out`}
        >
          <ul className="flex flex-col md:flex-row md:items-center w-full md:w-auto">
            <li className="text-xl p-4 relative">
              <Link href="/" className="hover:text-yellow-400 transition-colors">Home</Link>
              {pathname === "/" && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
              )}
            </li>
            <li className="text-xl p-4 relative">
              <Link href="/about" className="hover:text-yellow-400 transition-colors">About</Link>
              {pathname === "/about" && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
              )}
            </li>
            <li className="text-xl p-4 relative">
              <Link href="/services" className="hover:text-yellow-400 transition-colors">Services</Link>
              {pathname === "/services" && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
              )}
            </li>
            <li className="text-xl p-4 relative">
              <Link href="/contact" className="hover:text-yellow-400 transition-colors">Contact</Link>
              {pathname === "/contact" && (
                <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
              )}
            </li>
          </ul>

          <a
            href="/Harsha_Resume.pdf"
            download
            className="text-xl bg-white text-black px-4 py-2 rounded m-4 md:m-0 hover:bg-yellow-400 hover:text-black transition-colors duration-300 border border-gray-300"
          >
            Resume
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;