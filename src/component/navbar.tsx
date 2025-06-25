"use client";

import { useState, useEffect} from "react";
import Link from "next/link";
import { FaBars, FaTimes } from "react-icons/fa";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  
  const toggleMenu = () => setIsOpen(!isOpen);

  // Handle smooth scrolling to sections
  const handleSectionClick = (e: React.MouseEvent<HTMLAnchorElement>, sectionId: string) => {
      e.preventDefault();
      const element = document.getElementById(sectionId);
      if (element) {
        element.scrollIntoView({ 
          behavior: 'smooth',
          block: 'start'
        });
      }
      setIsOpen(false); // Close mobile menu after clicking
    };

  // Track active section on scroll
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'contact'];
      const scrollPosition = window.scrollY + 100; // Offset for navbar height

      for (let i = sections.length - 1; i >= 0; i--) {
        const section = document.getElementById(sections[i]);
        if (section && section.offsetTop <= scrollPosition) {
          setActiveSection(sections[i]);
          break;
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll(); // Call once to set initial active section

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { name: 'Home', id: 'home' },
    { name: 'About', id: 'about' },
    { name: 'Services', id: 'services' },
    { name: 'Contact', id: 'contact' }
  ];

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
            {navItems.map((item) => (
              <li key={item.id} className="text-xl p-4 relative">
                <a
                  href={`${item.id}`}
                  onClick={(e) => handleSectionClick(e, item.id)}
                  className="hover:text-yellow-400 transition-colors cursor-pointer"
                >
                  {item.name}
                </a>
                {activeSection === item.id && (
                  <div className="absolute bottom-2 left-1/2 transform -translate-x-1/2 w-2 h-2 bg-yellow-400 rounded-full"></div>
                )}
              </li>
            ))}
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