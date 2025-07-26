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
import { motion } from "motion/react";

const Skills = () => {
  return (
    <div
      id="skills"
      className="flex flex-col items-center justify-center min-h-screen text-white relative z-2 bg-[#241023] pt-20  "
    >
      <button className="font-[500px] text-[14px] bg-[#47A025]/50 px-4 py-2 rounded-2xl">
        Technologies & Expertise
      </button>
      <h1 className="font-[400px] text-[48px]">My Skills</h1>
      <div class="w-34 h-4  rounded-full overflow-hidden pl-5">
        <div className="h-2 w-3/4 bg-gradient-to-r from-[#47A025] to-purple-600 ml-5 rounded-full"></div>
      </div>

      <motion.div
        className="flex justify-center gap-20 items-center pt-10  transition ease-in"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <div className="p-5   bg-[#241023]/50 backdrop-blur shadow-2xl shadow-black/30  border border-[#47A025]/50 rounded-lg overflow-hidden">
          <h1 className="text-[18px] font-bold text-center">Frontend Development</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <FaReact color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>ReactJS</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <IoLogoJavascript color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>JavaScript(ES6+)</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <FaHtml5 color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>HTML5</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <FaCss3Alt color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>CSS3</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <RiTailwindCssFill color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Tailwind CSS</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <RiNextjsFill color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Next.js</div>
            </div>
            <div className="flex flex-col justify-center items-center p-2 rounded-full bg-[#241023] opacity-70">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <SiTypescript color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>TypeScript</div>
            </div>
          </div>
        </div>
        <div className="px-5 pb-15 pt-6 flex flex-col gap-15   bg-[#241023]/50 backdrop-blur shadow-2xl shadow-black/30  border border-[#47A025]/50 rounded-lg overflow-hidden">
          <h1 className="text-[18px] font-bold text-center">Tools & Methodologies</h1>
          <div className="grid md:grid-cols-3 gap-8">
            <div className="flex flex-col justify-center items-center bg-[#241023] opacity-70 gap-5">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <FaGitAlt color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Git</div>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#241023] opacity-70 gap-5">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <DiResponsive color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Responsive Design</div>
            </div>
            <div className="flex flex-col justify-center items-center bg-[#241023] opacity-70 gap-5">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <FaFigma color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Figma</div>
            </div>
            <div className="flex flex-col justify-center items-center mt-8 bg-[#241023] opacity-70 gap-5">
              <div className="p-4 rounded-full bg-[#47A025]/50">
                <TbApi color="[#47A025]" className="h-10 w-10" />
              </div>
              <div>Restful APIs</div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Skills;
