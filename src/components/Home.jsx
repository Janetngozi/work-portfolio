import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import 'animate.css';

const Home = () => {
  return (
    <div className="bg-[#241023] text-white flex flex-col items-center justify-center min-h-screen relative z-2">
      <div className="bg-[url('./images/download.png')] absolute h-full w-full top-0 opacity-50"></div>
      <div className="relative text-center text-[#ffffff]">
        <h2 className="text-[36px] font-bold text-[#47A025] animate__animated animate__bounce">Hi, I'm Janet!</h2>
        <h1 className="text-5xl text-[#47A025]">
          I build beautiful, fast, responsive websites.
        </h1>
        <p className="text-[16px] text-[#ffffff]">
          A passionate frontend developer with a deep love for building
          user-friendly, responsive web experiences.
        </p>
      </div>
      <div className="flex space-x-4 mt-8">
        <button className="bg-[#47A025]/50 flex rounded-sm p-2 items-center space-x-2 text-white cursor-pointer">
          View Projects
          <span>
            <IoIosArrowRoundForward />
          </span>
        </button>
        <button className="border-solid border-[1px] border-[#ffffff] rounded-sm p-2 items-center text-white cursor-pointer">
          Contact me
        </button>
      </div>
      <div className="flex space-x-4 mt-8 text-[24px] gap-4">
        <span className="cursor-pointer rounded-full p-2 hover:bg-[#47A025] transition-colors bg-[#d0d4dc]">
          <LuGithub color="#000000" />
        </span>
        <span className="cursor-pointer rounded-full p-2 hover:bg-[#47A025] transition-colors bg-[#d0d4dc]">
          <FiLinkedin color="#000000" />
        </span>
        <span className="cursor-pointer rounded-full p-2 hover:bg-[#47A025] transition-colors bg-[#d0d4dc]">
          <CiMail color="#000000" />
        </span>
        <span className="cursor-pointer rounded-full p-2 hover:bg-[#47A025] transition-colors bg-[#d0d4dc]">
          <FaThreads color="#000000" />
        </span>
        <span className="cursor-pointer rounded-full p-2 hover:bg-[#47A025] transition-colors bg-[#d0d4dc]">
          <PiTiktokLogo color="#000000" />
        </span>
      </div>
    </div>
  );
};

export default Home;
