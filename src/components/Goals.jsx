import { Rocket, Target, ChartColumnBig } from "lucide-react";

const Goals = () => {
  return (
    <div
      id="goals"
      className="flex flex-col items-center justify-center min-h-screen text-white relative z-2 bg-[#241023] pt-10  "
    >
      <button className="font-[500px] text-[14px] bg-[#47A025]/50 px-4 py-2 rounded-2xl">
        My RoadMap
      </button>
      <h1 className="font-[400px] text-[40px]  lg:text-[48px]">Career Goals</h1>
      <div class="w-34 h-4  rounded-full overflow-hidden pl-5">
        <div className="h-2 w-3/4 bg-gradient-to-r from-[#47A025] to-purple-600 ml-5 rounded-full"></div>
      </div>
      <div className="flex flex-col lg:flex-row justify-between items-center gap-[30px] px-10 font-bold">
        <div className="p-10 flex flex-col  border bg-[#241023]  gap-4 transition-colors duration-500 ease-in-out rounded-xl backdrop-blur shadow-2xl shadow-black/30   border-[#47A025]/50  overflow-hidden  hover:border-[#47A025]/50">
          <div className="flex gap-4">
            <span className="text-[#ffffff]">
              <Rocket />
            </span>
            Short-Term Goal
          </div>
          <p>
            To solidify my frontend development skills by building a diverse
            portfolio of responsive and interactive web projects. I aim to
            secure paid freelance gigs or internship opportunities, grow my
            online presence as a developer, and earn through client work,
            collaborations, or productized services.
          </p>
        </div>
        <div className="p-10 flex flex-col  border bg-[#241023]  gap-4 transition-colors duration-500 ease-in-out rounded-xl backdrop-blur shadow-2xl shadow-black/30   border-[#47A025]/50  overflow-hidden  hover:border-[#47A025]/50">
          <div className="flex gap-4 ">
            <span className="text-[#ffffff]">
              <ChartColumnBig />
            </span>
            Mid-Term Goal
          </div>
          <p>
            To become a highly sought-after frontend developer with advanced
            proficiency in JavaScript frameworks like React and Next.js. I
            intend to contribute to real-world projects, work remotely for a
            reputable tech company or startup, and build digital products or
            templates that generate passive income. I also want to mentor junior
            developers and give back to the tech community.
          </p>
        </div>
        <div className="p-10 flex flex-col  border bg-[#241023]  gap-4 transition-colors duration-500 ease-in-out rounded-xl backdrop-blur shadow-2xl shadow-black/30   border-[#47A025]/50  overflow-hidden  hover:border-[#47A025]/50">
          <div className="flex gap-4">
            <span className="text-[#ffffff]">
              <Target />
            </span>
            Long-Term Goal
          </div>
          <p>
            To establish myself as a full-stack developer and tech entrepreneur,
            leading or co-founding a profitable software product or digital
            agency. I aim to speak at tech events, grow a personal brand that
            inspires other African developers—especially women—and create
            opportunities for others by offering internships, training programs,
            or scholarships.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Goals;
