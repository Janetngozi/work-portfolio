import { FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3Alt } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { RiNextjsFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";
import { FaGitAlt } from "react-icons/fa";
import { DiResponsive } from "react-icons/di";
import { FaFigma } from "react-icons/fa";
import { TbApi } from "react-icons/tb";

const Skills = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white relative z-2 bg-[#241023]  ">
      <button className="font-[500px] text-[14px] bg-[#47A025] p-2 rounded-2xl">
        Technologies & Expertise
      </button>
      <h1 className="font-[400px] text-[48px]">My Skills</h1>
      <div class="w-34 h-4  rounded-full overflow-hidden pl-5">
        <div class="h-2 w-3/4 bg-gradient-to-r from-teal-400 to-purple-600 rounded-full"></div>
      </div>

      <div className="flex justify-center gap-20 items-center ">
        <div className="p-10 border border-[#47A025] rounded-sm">
          <h1>Frontend Development</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]">
                <FaReact color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>ReactJS</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]">
                <IoLogoJavascript color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>JavaScript(ES6+)</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]">
                <FaHtml5 color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>HTML5</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]">
                <FaCss3Alt color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>CSS3</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]">
                <RiTailwindCssFill color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Tailwind CSS</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]">
                <RiNextjsFill color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Next.js</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]">
                <SiTypescript color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>TypeScript</div>
            </div>
          </div>
        </div>
        <div className="p-10 border border-[#47A025] rounded-sm">
          <h1>Tools & Methodologies</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center items-center bg-[#241023] opacity-70 gap-2">
              <div className="p-4 rounded-full bg-[#47A025]">
                <FaGitAlt color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Git</div>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#241023] opacity-70 gap-2">
              <div className="p-4 rounded-full bg-[#47A025]">
                <DiResponsive color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Responsive Design</div>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#241023] opacity-70 gap-2">
              <div className="p-4 rounded-full bg-[#47A025]">
                <FaFigma color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Figma</div>
            </div>
            <div className="flex flex-col justify-center items-center  bg-[#241023] opacity-70 gap-2">
              <div className="p-4 rounded-full bg-[#47A025]">
                <TbApi color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Restful APIs</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
