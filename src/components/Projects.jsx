import { Cable, CalendarDays } from "lucide-react";

const Projects = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white relative z-2 bg-[#241023]  ">
      <button className="font-[500px] text-[14px] bg-[#47A025] p-2 rounded-2xl">
        My Recent work
      </button>
      <h1 className="font-[400px] text-[48px]">Featured Projects</h1>
      <div class="w-34 h-4  rounded-full overflow-hidden pl-5">
        <div class="h-2 w-3/4 bg-gradient-to-r from-teal-400 to-purple-600 rounded-full"></div>
      </div>
      {/* cards */}
      <div class="grid md:grid-cols-2 gap-8">
        {/* first project */}
        <div class="max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden border border-gray-700 bg-[#241023] transition-colors duration-500 ease-in-out">
          {/* Project Screenshot */}
          <a href="https://productcart-six.vercel.app/" target="_blank">
            <img
              src="/images/productlist.png"
              alt="Project Screenshot"
              class="w-full h-52 object-cover"
            />
          </a>
          <div class="p-5 space-y-4">
            <a
              class="text-xl font-semibold text-[#47A025]"
              href="https://productcart-six.vercel.app/"
              target="_blank"
            >
              Product List with Cart
            </a>
            <p class="text-gray-300 text-sm">
              A frontend shopping cart app where users can add items to their
              cart and see the total price update in real-time. Built to
              stimulate e-commerce experience
            </p>
            {/* Meta Info */}
            <div class="flex justify-between items-center text-sm text-gray-400">
              <span class="flex items-center gap-1">
                <CalendarDays /> <span>Start: 11 Mar 2025</span>
              </span>
              <span class="flex items-center gap-1 pr-20">
                <Cable />
                status:
                <span class="bg-green-600 text-white text-xs px-2 py-1 rounded">
                  Completed
                </span>
              </span>
            </div>
            {/* Tech Stack Badges */}
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-800 text-xs px-2 py-1 rounded cursor-pointer">
                HTML
              </span>
              <span class="bg-gray-800 text-xs px-2 py-1 rounded cursor-pointer">
                CSS
              </span>
              <span class="bg-gray-800 text-xs px-2 py-1 rounded cursor-pointer">
                Javascript
              </span>
              <span class="bg-gray-800 text-xs px-2 py-1 rounded cursor-pointer">
                React.Js
              </span>
            </div>
            {/* Buttons  */}
            <div class="flex gap-4 pt-3">
              <a
                href="https://github.com/Janetngozi/productcart"
                target="_blank"
                class="flex-1 text-center bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded text-sm transition"
              >
                View Code
              </a>
              <a
                href="https://productcart-six.vercel.app/"
                target="_blank"
                class="flex-1 text-center bg-[#47A025] hover:opacity-90 py-2 px-4 rounded text-sm transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* second project */}
      </div>
    </div>
  );
};

export default Projects;
