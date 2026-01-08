import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="bg-[#241023] fixed lg:px-10 z-20 w-full px-5 xs:px-10 ">
      <nav className="flex justify-between items-center text-white   border-b  border-[#241023] shadow-2xl py-3 ">

        {/* Left logo & Toggle */}
        <div className="flex justify-between items-center w-full lg:w-auto">
          <h1 className="font-bold text-3xl bg-gradient-to-r from-[#47A025] to-purple-600 bg-clip-text text-transparent">
            Janet
          </h1>
        {/* Togglebutton mobile */}
        <button
          className="lg:hidden text-white text-3xl"
          onClick={toggleMenu}
          aria-label="Toggle Menu"
        >
          {menuOpen ? <FiX /> : <FiMenu />}
        </button>
        {/* Togglebutton mobile */}
        </div>


       

<div
  className={`${menuOpen ? "flex" : "hidden"} 
  cursor-pointer absolute top-full left-0 w-full bg-[#241023] flex-col items-start px-6 py-4 gap-2 lg:gap-0 lg:relative lg:flex lg:flex-row lg:items-center lg:bg-transparent lg:p-0 lg:top-auto lg:left-auto lg:w-auto`}
>
  {[
    "home",
    "about",
    "goals",
    "experience",
    "projects",
    "skills",
    "testimonials",
    "faq",
    "resume",
    "contact",
  ].map((link) => (
    <a
      key={link}
      href={`#${link}`}
      className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2 capitalize w-full lg:w-auto"
      onClick={() => setMenuOpen(false)}
    >
      {link}
    </a>
  ))}
</div>




      </nav>
    </div>
  );
};

export default Navbar;



