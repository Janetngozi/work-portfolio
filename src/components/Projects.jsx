const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white relative z-2 bg-[#47A025]  ">
      <button className="font-[500px] text-[14px] bg-[#241023] p-2 rounded-2xl">
        My Recent work
      </button>
      <h1 className="font-[400px] text-[48px]">Featured Projects</h1>
      <div class="w-34 h-4  rounded-full overflow-hidden pl-5">
        <div class="h-2 w-3/4 bg-gradient-to-r from-teal-400 to-purple-600 rounded-full"></div>
      </div>
    </div>
  );
};


export default Projects;
