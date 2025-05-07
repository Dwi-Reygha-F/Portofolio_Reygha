import { useState } from "react";

export default function Navbar({ scrollToSection }) {
const [menuOpen,setMenuOpen] = useState (false);

const handleClick = (section) => {
  scrollToSection(section);
  setMenuOpen(false); // Tutup menu mobile setelah klik
};
  return (
<nav className="bg-gradient-to-b from-blue-900 to-blue-700 dark:from-[#0A0F2C] dark:to-[#141933] fixed top-0 left-0 right-0 z-50">
      <div className="mx-auto flex justify-center items-center px-4 h-36">
        
        {/* Logo */}
        <div className="text-3xl font-bold text-[#ECEFCA] mr-9">MY PORTFOLIO</div>
        
        {/* Burger Icon */}
        <div 
          className="md:hidden text-[#ECEFCA] text-4xl cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          ☰
        </div>
        
        {/* Menu Desktop */}
        <ul className="hidden md:flex space-x-6 text-xl">
          {["Home", "About", "Skill", "Project", "Contact"].map((item) => (
            <li
              key={item}
              className="text-[#6EACDA] dark:text-[#A7C7E7] transition duration-300"
            >
              <button 
             
                onClick={() => handleClick(item.toLowerCase())}
                className="px-1 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-[#1E3A8A] hover:text-white block transition duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      </div>

      {/* Menu Mobile */}
      {menuOpen && (
        <ul className="md:hidden flex flex-col items-center space-y-4 text-xl py-4 bg-blue-800 dark:bg-[#0A0F2C] w-full">
          {["Home", "About", "Skill", "Project", "Contact"].map((item) => (
            <li
              key={item}
              className="text-[#6EACDA] dark:text-[#A7C7E7] transition duration-300"
            >
              <button 
                onClick={() => handleClick(item.toLowerCase())}
                className="px-4 py-2 rounded-lg hover:bg-blue-600 dark:hover:bg-[#1E3A8A] hover:text-white block transition duration-300"
              >
                {item}
              </button>
            </li>
          ))}
        </ul>
      )}
    </nav>
    )
}