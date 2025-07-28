import { LuGithub } from "react-icons/lu";
import { FiLinkedin } from "react-icons/fi";
import { CiMail } from "react-icons/ci";
import { FaThreads } from "react-icons/fa6";
import { PiTiktokLogo } from "react-icons/pi";
import { IoIosArrowRoundForward } from "react-icons/io";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import "animate.css";

const Home = () => {
  return (
    <div
      id="home"
      className="bg-[#241023] text-white flex flex-col items-center px-10  justify-center min-h-[80vh] xs:min-h-[90vh] lg:min-h-screen  relative pt-30 lg:pt-0  "
    >
      <div className="bg-[url('./images/download.png')] z-3 fixed h-full w-full bg-cover bg-center top-0 opacity-50"></div>
      <div className="relative z-10 text-center flex flex-col gap-5 md:gap-3  text-[#ffffff] lg:mt-0">
        <h2 className="text-xl sm:text-2xl md:text-2xl lg:text-3xl font-[500px] text-[#47A025] animate__animated animate__bounce">
          Hi, I'm Janet!
        </h2>
        <h1 className="text-3xl sm:text-4xl xl:text-6xl  text-center font-[700px] text-[#47A025] lg:pt-5">
          I build beautiful, responsive websites.
        </h1>

        <p className="text-[12px] sm:text-lg md:text-[18px] lg:pt-5 px-10 font-[400px] text-[#ffffff]">
          A passionate frontend developer with a deep love for building
          user-friendly, responsive web experiences.
        </p>
      </div>
      <div className="flex flex-col gap-3  sm:flex-row lg:gap-15 lg:mt-12 mt-5 animate__animated animate__pulse">
        <a
          href="#projects"
          className="bg-[#47A025]/50 flex rounded-sm p-2 items-center space-x-2 text-white cursor-pointer hover:text-[#47A025] hover:bg-[#d0d4dc] text-[14px] lg:text-[16px]"
        >
          View My Work
          <span>
            <IoIosArrowRoundForward className="text-[20px] lg:text-[30px]" />
          </span>
        </a>
        <a
          href="#contact"
          className="border-solid border-[1px] border-[#ffffff] rounded-sm p-2 items-center text-white cursor-pointer hover:border-[#47A025]/50 text-[14px] lg:text-[16px] text-center"
        >
          Contact me
        </a>
      </div>
      <div className="flex md:space-x-4 mt-5 lg:mt-15 text-[20px] md:text-[24px] z-10 lg:gap-15 gap-8 animate__animated animate__fadeInTopLeft">
        <a
          href="https://github.com/Janetngozi"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full p-2 hover:bg-[#47A025] transition-colors bg-[#d0d4dc] hover:text-[#ffffff] text-[#000000]"
        >
          <LuGithub />
        </a>
        <a
          href="mailto:janetodoemene@gmail.com"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full p-2 hover:bg-[#47A025] transition-colors bg-[#d0d4dc] hover:text-[#ffffff] text-[#000000]"
        >
          <CiMail />
        </a>
        <a
          href="https://x.com/JANETNGOZI1/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full p-2 hover:bg-[#47A025] transition-colors bg-[#d0d4dc] hover:text-[#ffffff] text-[#000000]"
        >
          <FaXTwitter />
        </a>

        <a
          href="https://www.linkedin.com/in/janet-odoemene-0599661aa/"
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer rounded-full p-2 hover:bg-[#47A025] transition-colors bg-[#d0d4dc] hover:text-[#ffffff] text-[#000000]"
        >
          <FiLinkedin />
        </a>
      </div>
      {/* vertical icons */}
      <div className="hidden sm:flex fixed left-2 lg:left-10 z-5 top-80 sm:top-100 xl:top-130 lg:top-120 xs">
        <div className="flex space-x-4 text-[24px] gap-2 flex-col">
          <a
            href="https://github.com/Janetngozi"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full p-2 bg-[#47A025]/50 transition-colors hover:bg-[#d0d4dc] text-[#ffffff] hover:text-[#000000]"
          >
            <LuGithub />
          </a>
          <a
            href="mailto:janetodoemene@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full p-2 bg-[#47A025]/50 transition-colors hover:bg-[#d0d4dc] text-[#ffffff] hover:text-[#000000]"
          >
            <CiMail />
          </a>
          <a
            href="https://x.com/JANETNGOZI1/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full p-2 bg-[#47A025]/50 transition-colors hover:bg-[#d0d4dc] text-[#ffffff] hover:text-[#000000]"
          >
            <FaXTwitter />
          </a>

          <a
            href="https://www.linkedin.com/in/janet-odoemene-0599661aa/"
            target="_blank"
            rel="noopener noreferrer"
            className="cursor-pointer rounded-full h-10 w-10 p-2 bg-[#47A025]/50 transition-colors hover:bg-[#d0d4dc] text-[#ffffff] hover:text-[#000000]"
          >
            <FiLinkedin />
          </a>
        </div>
      </div>
      {/* vertical icons */}
    </div>
  );
};

export default Home;
