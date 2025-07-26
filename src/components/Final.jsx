import { MdEmail } from "react-icons/md";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTiktok } from "react-icons/fa";


const Final = () => {
  return (
    <footer className="flex flex-col items-center justify-center  text-white bg-[#241023] overflow-hidden px-5 ">
      <div className="flex">
        <div className="left flex flex-col w-1/4">
          <h1 className="pb-2">Janet</h1>
          <p className="text-gray-300">
            Focused on turning creative ideas into smooth, user-friendly web
            experiences using modern frontend stacks.
          </p>
        </div>
        <div className="right flex justify-between w-3/4">
          {/* nav */}
          <div className="flex flex-col">
            <h1 className="text-[#ffffff] font-bold pb-2">NAVIGATION</h1>
            <ul className="text-gray-500 flex flex-col gap-3">
              <li>Home</li>
              <li>About</li>
              <li>Goals</li>
              <li>Experience</li>
              <li>Projects</li>
              <li>Skills</li>
              <li>Testimonials</li>
              <li>FAQ</li>
              <li>Resume</li>
              <li>Contact</li>
            </ul>
          </div>
          {/* nav */}
          {/* services */}
          <div className="flex flex-col">
            <h1 className="text-[#ffffff] font-bold pb-2">SERVICES</h1>
            <ul className="text-gray-500 flex flex-col gap-3">
              <li>Responsive Web Design</li>
              <li>Web Application Development</li>
              <li>UI/UX Implementation</li>
              <li>Landing Page Development</li>
              <li>Website Maintenance</li>
              <li>PSD/Figma to HTML/React</li>
            </ul>
          </div>
          {/* services */}
          {/* contact */}
          <div className="flex flex-col">
            <h1 className="text-[#ffffff] font-bold pb-2">CONTACT</h1>
            <ul className="text-gray-500 flex flex-col gap-3">
              <li>
                <div className="flex gap-2">
                  <FaGithub className="w-8 h-8 text-bg-gray-500" />
                  <span className="mt-1">https://github.com/Janetngozi</span>
                </div>
              </li>
              <li>
                <div className="flex gap-2">
                  <MdEmail className="w-8 h-8 text-bg-gray-500" />
                  <span className="mt-1">janetodoemene@gmail.com</span>
                </div>
              </li>
              <li>
                <div className="flex gap-2">
                   <FaXTwitter className="w-8 h-8 text-bg-gray-500"/>
                  <span className="mt-1">https://x.com/JANETNGOZI1/</span>
                </div>
              </li>
             
              
              
              <li>
                <div className="flex gap-2">
                  <FaLinkedin className="w-8 h-8 text-bg-gray-500" />
                  <span className="mt-1">https://www.linkedin.com/in/janet-odoemene-0599661aa/</span>
                </div>
              </li>
            </ul>
          </div>
          {/* contact */}
        </div>
      </div>
      <hr className="text-white text-[2px] w-full mt-10 mb-10" />
      <div className="flex justify-between w-full pb-10 items-center">
        <h3 className="text-gray-300">
          Designed & Built by Janet. © 2025 All rights reserved.
        </h3>
        <div className="flex justify-between w-1/4 items-center text-gray-500">
          <p>Privacy Policy</p>
          <p>Terms of Services</p>
          <p>Cookies</p>
        </div>
      </div>
    </footer>
  );
};
export default Final;
