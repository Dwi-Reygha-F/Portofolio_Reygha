export default function Navbar() {
    return (
        <nav className="bg-gradient-to-b from-blue-900 to-blue-700 dark:from-[#0A0F2C] dark:to-[#141933] h-36">
        <div className="max-w-7xl mx-auto flex justify-center">
          {/* Logo */}
          <div className="text-3xl font-bold text-[#ECEFCA] mr-11 mt-11">MY PORTFOLIO</div>
          
          {/* Menu */}
          <ul className="hidden md:flex space-x-6 mr-11 mt-11 text-xl">
          <li className="text-[#6EACDA] hover:text-[#03346E] dark:text-[#A7C7E7] dark:hover:text-[#3B82F6]">
              <a href="">Home</a>
            </li>
            <li className="text-[#6EACDA] hover:text-[#03346E] dark:text-[#A7C7E7] dark:hover:text-[#3B82F6]">
              <a href="">About</a>
            </li>
            <li className="text-[#6EACDA] hover:text-[#03346E] dark:text-[#A7C7E7] dark:hover:text-[#3B82F6]">
              <a href="">Skill</a>
            </li>
            <li className="text-[#6EACDA] hover:text-[#03346E] dark:text-[#A7C7E7] dark:hover:text-[#3B82F6]">
             <a href="">Project</a>
            </li>
            <li className="text-[#6EACDA] hover:text-[#03346E] dark:text-[#A7C7E7] dark:hover:text-[#3B82F6]">
              <a href="">Contact</a>
            </li>
          </ul>
        </div>
      </nav>
    )
}