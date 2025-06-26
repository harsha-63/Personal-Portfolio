"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { FaBars, FaTimes, FaDownload, FaUser } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle scroll effect
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (isOpen && !event.target.closest('nav')) {
        setIsOpen(false);
      }
    };
    document.addEventListener("click", handleClickOutside);
    return () => document.removeEventListener("click", handleClickOutside);
  }, [isOpen]);

  const navItems = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/services", label: "Services" },
    { href: "/contact", label: "Contact" },
  ];

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled 
        ? 'bg-white/95 backdrop-blur-xl shadow-lg border-b border-yellow-100' 
        : 'bg-transparent backdrop-blur-xl'
    }`}>
      {/* Subtle top accent line */}
      <div className="absolute top-0 left-0 right-0 h-0.5 bg-gradient-to-r from-transparent via-yellow-400 to-transparent"></div>
      
      <div className="container mx-auto px-4 py-4">
        <div className="flex justify-between items-center">
          {/* Enhanced Logo */}
          <Link href="/" className="group relative">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full flex items-center justify-center shadow-lg group-hover:shadow-xl transition-all duration-300">
                  <FaUser className="text-white text-sm group-hover:scale-110 transition-transform duration-300" />
                </div>
                <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-full blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
              </div>
              <span className="text-xl font-bold bg-gradient-to-r from-gray-800 to-gray-600 bg-clip-text text-transparent group-hover:from-yellow-600 group-hover:to-orange-600 transition-all duration-300">
                Fathima Harsha
              </span>
            </div>
          </Link>

          {/* Enhanced Mobile Menu Button */}
          <button 
            onClick={toggleMenu} 
            className="md:hidden relative w-10 h-10 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg flex items-center justify-center shadow-lg hover:shadow-xl transition-all duration-300 focus:outline-none group"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-lg blur opacity-50 group-hover:opacity-75 transition-opacity duration-300"></div>
            <div className="relative text-white">
              {isOpen ? <FaTimes size={16}/> : <FaBars size={16}/>}
            </div>
          </button>

          {/* Desktop Menu */}
          <div className="hidden md:flex  items-center md:items-center md:gap-8 ">
            <ul className="flex items-center gap-8 ">
              {navItems.map((item) => (
                <li key={item.href} className="relative flex  justify-between items-center group ">
                  <Link 
                    href={item.href} 
                    className="text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium text-sm relative py-2 px-1"
                  >
                    {item.label}
                    
                    {/* Hover effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-yellow-400/10 to-orange-400/10 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-300 -z-10"></div>
                    
                    {/* Active indicator */}
                    {pathname === item.href && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-6 h-1 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse"></div>
                    )}
                    
                    {/* Hover underline */}
                    <div className={`absolute -bottom-1 left-0 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 transition-all duration-300 ${
                      pathname === item.href ? 'w-0' : 'w-0 group-hover:w-full'
                    }`}></div>
                  </Link>
                </li>
              ))}
            </ul>

            {/* Enhanced Resume Button */}
            <a
              href="/Harsha_Resume.pdf"
              download
              className="group relative bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center gap-2 overflow-hidden text-sm"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
              <div className="relative flex items-center gap-2">
                <FaDownload className="text-xs group-hover:animate-bounce" />
                <span>Resume</span>
              </div>
              
              {/* Shimmer effect on hover */}
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
            </a>
          </div>
        </div>

        {/* Enhanced Mobile Menu */}
        <div className={`md:hidden transition-all duration-500 ease-in-out overflow-hidden ${
          isOpen ? 'max-h-screen opacity-100 mt-4' : 'max-h-0 opacity-0'
        }`}>
          <div className="bg-white/95 backdrop-blur-xl rounded-2xl shadow-2xl border border-yellow-100 p-6 mx-2">
            {/* Mobile menu background gradient */}
            <div className="absolute inset-0 bg-gradient-to-br from-yellow-50/50 to-orange-50/50 rounded-2xl"></div>
            
            <ul className="relative flex flex-col space-y-2">
              {navItems.map((item) => (
                <li key={item.href} className="relative group">
                  <Link 
                    href={item.href} 
                    className="flex items-center justify-between p-4 rounded-xl text-gray-700 hover:text-yellow-600 transition-all duration-300 font-medium text-lg group-hover:bg-gradient-to-r group-hover:from-yellow-50 group-hover:to-orange-50"
                    onClick={() => setIsOpen(false)}
                  >
                    <span>{item.label}</span>
                    
                    {/* Active indicator for mobile */}
                    {pathname === item.href && (
                      <div className="w-3 h-3 bg-gradient-to-r from-yellow-400 to-orange-500 rounded-full animate-pulse shadow-lg"></div>
                    )}
                  </Link>
                  
                  {/* Animated border on hover */}
                  <div className="absolute bottom-0 left-4 right-4 h-0.5 bg-gradient-to-r from-yellow-400 to-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-full"></div>
                </li>
              ))}
            </ul>

            {/* Mobile Resume Button */}
            <div className="mt-6 pt-4 border-t border-yellow-100">
              <a
                href="/Harsha_Resume.pdf"
                download
                className="group relative w-full bg-gradient-to-r from-yellow-400 to-orange-500 text-white px-4 py-2 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 flex items-center justify-center gap-2 overflow-hidden text-sm"
                onClick={() => setIsOpen(false)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-yellow-500 to-orange-600 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                <div className="relative flex items-center gap-2">
                  <FaDownload className="text-xs group-hover:animate-bounce" />
                  <span>Resume</span>
                </div>
                
                {/* Mobile shimmer effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;