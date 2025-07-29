import { Eye, Download } from "lucide-react";

const Resume = () => {
  return (
    <div
      id="resume"
      className="flex flex-col items-center justify-center min-h-screen text-white bg-[#241023] overflow-hidden px-5 pb-10 "
    >
      <button className="font-medium text-[14px] bg-[#47A025]/50 px-4 py-2 mb-3 rounded-2xl">
        My Professional Background
      </button>
      <h1 className="text-[36px] font-normal md:text-[48px] mb-2">Resume</h1>
      <div className="w-34 h-4  rounded-full overflow-hidden ">
        <div className="h-2 w-3/4 bg-gradient-to-r from-[#47A025] to-purple-600 ml-5 rounded-full"></div>
      </div>

      <p className="text-center">
        You can explore my professional experience and skills directly in your
        browser or download a PDF version for easy reference.
      </p>
      <div className="flex flex-col md:flex-row md:gap-0 gap-5 md:space-x-5 mt-8">
        <a
          href="https://janetngozi.github.io/work-portfolio/public/resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="bg-[#47A025]/50 flex rounded-sm px-6 py-2 md:py-1 items-center gap-4 text-white cursor-pointer "
        >
          <span>
            <Eye />
          </span>
          View Online
        </a>
        <a
          href="/resume.pdf"
          download
          className="border-solid flex  border-[1px] border-[#ffffff] rounded-sm px-8 py-2 items-center text-white cursor-pointer gap-4"
        >
          <span>
            <Download />
          </span>
          Download CV (.pdf)
        </a>
      </div>
    </div>
  );
};

export default Resume;
