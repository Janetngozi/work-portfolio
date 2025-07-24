const Navbar = () => {
  return (
    <div className="bg-[#241023] fixed  z-20 flex justify-between w-full items-center">
      
      <nav className="flex justify-between items-center text-white  w-full px-10 border-b  border-[#241023] shadow-2xl py-3 ">

        <div>
          <h1 className="font-bold text-4xl bg-gradient-to-r from-[#47A025] to-purple-600 bg-clip-text text-transparent">Janet</h1>
        </div>
        <div className="flex  cursor-pointer">
          <a
          href="#home"
           className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">Home</a>
          <a
          href="#about"
           className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">About</a>
          <a 
          href="#goals"
          className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">Goals</a>
          <a
          href="#experience"
           className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">Experience</a>
          <a
          href="#projects"
           className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">Projects</a>
          <a
          href="#skills"
           className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">Skills</a>
          <a
          href="#testimonials"
           className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">Testimonials</a>
          <a
          href="#faq"
           className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">FAQ</a>
          <a
          href="#resume"
           className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">Resume</a>
          <a
          href="#contact"
           className="hover:bg-[#47A025]/50 rounded-sm px-4 py-2">Contact</a>
        </div>

      </nav>
    </div>
  );
};

export default Navbar;
