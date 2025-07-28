import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const toggleMenu = () => setMenuOpen(!menuOpen);
  return (
    <div className="bg-[#241023] fixed px-10 z-20 w-full">
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


        {/* <div className="flex  cursor-pointer">
          <a
            href="#home"
            className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2"
          >
            Home
          </a>
          <a
            href="#about"
            className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2"
          >
            About
          </a>
          <a
            href="#goals"
            className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2"
          >
            Goals
          </a>
          <a
            href="#experience"
            className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2"
          >
            Experience
          </a>
          <a
            href="#projects"
            className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2"
          >
            Projects
          </a>
          <a
            href="#skills"
            className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2"
          >
            Skills
          </a>
          <a
            href="#testimonials"
            className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2"
          >
            Testimonials
          </a>
          <a href="#faq" className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">
            FAQ
          </a>
          <a
            href="#resume"
            className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2"
          >
            Resume
          </a>
          <a
            href="#contact"
            className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2"
          >
            Contact
          </a>
        </div> */}

        {/* Right: Nav Links */}
        {/* <div
          className={`${
            menuOpen ? "flex" : "hidden"
          } absolute top-full left-0 w-full bg-[#241023] flex-col items-start px-6 py-4 gap-2 md:gap-0 md:relative md:flex md:flex-row md:items-center md:bg-transparent md:p-0 md:top-auto md:left-auto`}
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
              className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2 capitalize w-full md:w-auto"
              onClick={() => setMenuOpen(false)} // closes menu on link click (optional)
            >
              {link}
            </a>
          ))}
        </div> */}

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
