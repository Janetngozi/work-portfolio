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
      <div class="grid md:grid-cols-3 gap-8">
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
                <span class="bg-[#47A025] text-white text-xs px-2 py-1 rounded">
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
        <div class="max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden border border-gray-700 bg-[#241023] transition-colors duration-500 ease-in-out">
          {/* Project Screenshot */}
          <a href="https://food-wagon-psi.vercel.app/" target="_blank">
            <img
              src="/images/foodwagon.png"
              alt="Project Screenshot"
              class="w-full h-52 object-cover"
            />
          </a>
          <div class="p-5 space-y-4">
            <a
              class="text-xl font-semibold text-[#47A025]"
              href="https://food-wagon-psi.vercel.app/"
              target="_blank"
            >
              Food Wagon
            </a>
            <p class="text-gray-300 text-sm">
              A user-focused food delivery frontend application where users can
              explore different dishes, view food details, and simulate the
              ordering process—built to reflect the structure of a real-world
              food delivery platform.
            </p>
            {/* Meta Info */}
            <div class="flex justify-between items-center text-sm text-gray-400">
              <span class="flex items-center gap-1">
                <CalendarDays /> <span>Start: 11 Mar 2025</span>
              </span>
              <span class="flex items-center gap-1 pr-20">
                <Cable />
                status:
                <span class="bg-[#47A025] text-white text-xs px-2 py-1 rounded">
                  Completed
                </span>
              </span>
            </div>
            {/* Tech Stack Badges */}
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-800 text-xs px-2 py-1 rounded cursor-pointer">
                TailwindCSS
              </span>
              <span class="bg-gray-800 text-xs px-2 py-1 rounded cursor-pointer">
                HTML
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
                href="https://github.com/Janetngozi/Food-wagon"
                target="_blank"
                class="flex-1 text-center bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded text-sm transition"
              >
                View Code
              </a>
              <a
                href="https://food-wagon-psi.vercel.app/"
                target="_blank"
                class="flex-1 text-center bg-[#47A025] hover:opacity-90 py-2 px-4 rounded text-sm transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden border border-gray-700 bg-[#241023] transition-colors duration-500 ease-in-out">
          {/* Project Screenshot */}
          <a href="https://virtualr-lac-nu.vercel.app/" target="_blank">
            <img
              src="/images/virtualr.png"
              alt="Project Screenshot"
              class="w-full h-52 object-cover"
            />
          </a>
          <div class="p-5 space-y-4">
            <a
              class="text-xl font-semibold text-[#47A025]"
              href="https://virtualr-lac-nu.vercel.app/"
              target="_blank"
            >
              VirtualR
            </a>
            <p class="text-gray-300 text-sm">
              A sleek, responsive landing page for a VR developer toolkit
              brand—designed to communicate the platform’s value and encourage
              developers to build immersive applications.
            </p>
            {/* Meta Info */}
            <div class="flex justify-between items-center text-sm text-gray-400">
              <span class="flex items-center gap-1">
                <CalendarDays /> <span>Start: 15 Apr 2025</span>
              </span>
              <span class="flex items-center gap-1 pr-20">
                <Cable />
                status:
                <span class="bg-[#47A025] text-white text-xs px-2 py-1 rounded">
                  Completed
                </span>
              </span>
            </div>
            {/* Tech Stack Badges */}
            <div class="flex flex-wrap gap-2">
              <span class="bg-gray-800 text-xs px-2 py-1 rounded cursor-pointer">
                Tailwind
              </span>
              <span class="bg-gray-800 text-xs px-2 py-1 rounded cursor-pointer">
                HTML
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
                href="https://github.com/Janetngozi/virtualr"
                target="_blank"
                class="flex-1 text-center bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded text-sm transition"
              >
                View Code
              </a>
              <a
                href="https://virtualr-lac-nu.vercel.app/"
                target="_blank"
                class="flex-1 text-center bg-[#47A025] hover:opacity-90 py-2 px-4 rounded text-sm transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden border border-gray-700 bg-[#241023] transition-colors duration-500 ease-in-out">
          {/* Project Screenshot */}
          <a href="https://work-portfolio-kappa.vercel.app/" target="_blank">
            <img
              src="/images/portfolio.png"
              alt="Project Screenshot"
              class="w-full h-52 object-cover"
            />
          </a>
          <div class="p-5 space-y-4">
            <a
              class="text-xl font-semibold text-[#47A025]"
              href="https://work-portfolio-kappa.vercel.app/"
              target="_blank"
            >
              My Personal Portfolio Website
            </a>
            <p class="text-gray-300 text-sm">
              A personal, interactive portfolio built to highlight my evolution
              as a web developer, featuring real-world projects, hands-on
              experience, and a passion for clean, responsive design.
            </p>
            {/* Meta Info */}
            <div class="flex justify-between items-center text-sm text-gray-400">
              <span class="flex items-center gap-1">
                <CalendarDays /> <span>Start: 18 Jul 2025</span>
              </span>
              <span class="flex items-center gap-1 pr-20">
                <Cable />
                status:
                <span class="bg-[#47A025] text-white text-xs px-2 py-1 rounded">
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
                href="https://github.com/Janetngozi/work-portfolio"
                target="_blank"
                class="flex-1 text-center bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded text-sm transition"
              >
                View Code
              </a>
              <a
                href="https://work-portfolio-kappa.vercel.app/"
                target="_blank"
                class="flex-1 text-center bg-[#47A025] hover:opacity-90 py-2 px-4 rounded text-sm transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
        <div class="max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden border border-gray-700 bg-[#241023] transition-colors duration-500 ease-in-out">
          {/* Project Screenshot */}
          <a href="https://nexcent-xi-bay.vercel.app/" target="_blank">
            <img
              src="/images/nexcent.png"
              alt="Project Screenshot"
              class="w-full h-52 object-cover"
            />
          </a>
          <div class="p-5 space-y-4">
            <a
              class="text-xl font-semibold text-[#47A025]"
              href="https://nexcent-xi-bay.vercel.app/"
              target="_blank"
            >
              Nexcent
            </a>
            <p class="text-gray-300 text-sm">
              An educational landing page designed to help photographers decide
              whether to grow their business through a personal website or
              social media—complete with clear comparisons, value-driven
              insights, and actionable guidance.
            </p>
            {/* Meta Info */}
            <div class="flex justify-between items-center text-sm text-gray-400">
              <span class="flex items-center gap-1">
                <CalendarDays /> <span>Start: 11 Mar 2025</span>
              </span>
              <span class="flex items-center gap-1 pr-20">
                <Cable />
                status:
                <span class="bg-[#47A025] text-white text-xs px-2 py-1 rounded">
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
                href="https://github.com/Janetngozi/nexcent"
                target="_blank"
                class="flex-1 text-center bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded text-sm transition"
              >
                View Code
              </a>
              <a
                href="https://nexcent-xi-bay.vercel.app/"
                target="_blank"
                class="flex-1 text-center bg-[#47A025] hover:opacity-90 py-2 px-4 rounded text-sm transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* calculator */}

        <div class="max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden border border-gray-700 bg-[#241023] transition-colors duration-500 ease-in-out">
          {/* Project Screenshot */}
          <a
            href="https://calculator-tailwind-nine.vercel.app/"
            target="_blank"
          >
            <img
              src="/images/calculator.png"
              alt="Project Screenshot"
              class="w-full h-52 object-cover"
            />
          </a>
          <div class="p-5 space-y-4">
            <a
              class="text-xl font-semibold text-[#47A025]"
              href="https://calculator-tailwind-nine.vercel.app/"
              target="_blank"
            >
              Calculator
            </a>
            <p class="text-gray-300 text-sm">
              A simple and responsive calculator app built to perform basic
              arithmetic operations with a clean UI and intuitive user
              experience—designed for both desktop and mobile users.
            </p>
            {/* Meta Info */}
            <div class="flex justify-between items-center text-sm text-gray-400">
              <span class="flex items-center gap-1">
                <CalendarDays /> <span>Start: 11 May 2025</span>
              </span>
              <span class="flex items-center gap-1 pr-20">
                <Cable />
                status:
                <span class="bg-[#47A025] text-white text-xs px-2 py-1 rounded">
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
                href="https://github.com/Janetngozi/calculator-tailwind"
                target="_blank"
                class="flex-1 text-center bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded text-sm transition"
              >
                View Code
              </a>
              <a
                href="https://calculator-tailwind-nine.vercel.app/"
                target="_blank"
                class="flex-1 text-center bg-[#47A025] hover:opacity-90 py-2 px-4 rounded text-sm transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Smileschool */}

        <div class="max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden border border-gray-700 bg-[#241023] transition-colors duration-500 ease-in-out">
          <a href="https://school-page-c82u.vercel.app/" target="_blank">
            <img
              src="/images/smileschool.png"
              alt="Project Screenshot"
              class="w-full h-52 object-cover"
            />
          </a>
          <div class="p-5 space-y-4">
            <a
              class="text-xl font-semibold text-[#47A025]"
              href="https://school-page-c82u.vercel.app/"
              target="_blank"
            >
              SmileSchool
            </a>
            <p class="text-gray-300 text-sm">
              A thoughtful and engaging website designed to encourage emotional
              well-being by teaching users the art and science of smiling,
              featuring uplifting content, guided techniques, and mood-boosting
              visuals.
            </p>
            {/* Meta Info */}
            <div class="flex justify-between items-center text-sm text-gray-400">
              <span class="flex items-center gap-1">
                <CalendarDays /> <span>Start: 17 Oct 2024</span>
              </span>
              <span class="flex items-center gap-1 pr-20">
                <Cable />
                status:
                <span class="bg-[#47A025] text-white text-xs px-2 py-1 rounded">
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
                href="https://github.com/Janetngozi/School-page"
                target="_blank"
                class="flex-1 text-center bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded text-sm transition"
              >
                View Code
              </a>
              <a
                href="https://school-page-c82u.vercel.app/"
                target="_blank"
                class="flex-1 text-center bg-[#47A025] hover:opacity-90 py-2 px-4 rounded text-sm transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Get Schooled */}
        <div class="max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden border border-gray-700 bg-[#241023] transition-colors duration-500 ease-in-out">
          {/* Project Screenshot */}
          <a href="https://seren-space.vercel.app/" target="_blank">
            <img
              src="/images/learnpro.png"
              alt="Project Screenshot"
              class="w-full h-52 object-cover"
            />
          </a>
          <div class="p-5 space-y-4">
            <a
              class="text-xl font-semibold text-[#47A025]"
              href="https://seren-space.vercel.app/"
              target="_blank"
            >
              Learn pro
            </a>
            <p class="text-gray-300 text-sm">
              A modern online learning platform designed to provide accessible,
              structured, and engaging educational content across various
              subjects, featuring intuitive navigation, responsive layouts, and
              a student-friendly interface.
            </p>
            {/* Meta Info */}
            <div class="flex justify-between items-center text-sm text-gray-400">
              <span class="flex items-center gap-1">
                <CalendarDays /> <span>Start: 11 Mar 2025</span>
              </span>
              <span class="flex items-center gap-1 pr-20">
                <Cable />
                status:
                <span class="bg-[#47A025] text-white text-xs px-2 py-1 rounded">
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
                href="https://github.com/Janetngozi/Seren-space"
                target="_blank"
                class="flex-1 text-center bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded text-sm transition"
              >
                View Code
              </a>
              <a
                href="https://seren-space.vercel.app/"
                target="_blank"
                class="flex-1 text-center bg-[#47A025] hover:opacity-90 py-2 px-4 rounded text-sm transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>

        {/* Serenspace */}
        <div class="max-w-md mx-auto text-white rounded-xl shadow-lg overflow-hidden border border-gray-700 bg-[#241023] transition-colors duration-500 ease-in-out">
          {/* Project Screenshot */}
          <a href="https://learn-pro2.vercel.app/" target="_blank">
            <img
              src="/images/serenspace.png"
              alt="Project Screenshot"
              class="w-full h-52 object-cover"
            />
          </a>
          <div class="p-5 space-y-4">
            <a
              class="text-xl font-semibold text-[#47A025]"
              href="https://learn-pro2.vercel.app/"
              target="_blank"
            >
              Seren Space
            </a>
            <p class="text-gray-300 text-sm">
              A mental health support platform offering expert resources,
              personalized therapy guidance, self-care tips, and wellness tools,
              all designed to promote emotional well-being within a safe and
              supportive community.
            </p>
            {/* Meta Info */}
            <div class="flex justify-between items-center text-sm text-gray-400">
              <span class="flex items-center gap-1">
                <CalendarDays /> <span>Start: 10 Oct 2024</span>
              </span>
              <span class="flex items-center gap-1 pr-20">
                <Cable />
                status:
                <span class="bg-[#47A025] text-white text-xs px-2 py-1 rounded">
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
                href="https://github.com/Janetngozi/Learn-pro"
                target="_blank"
                class="flex-1 text-center bg-gray-800 hover:bg-gray-700 py-2 px-4 rounded text-sm transition"
              >
                View Code
              </a>
              <a
                href="https://learn-pro2.vercel.app/"
                target="_blank"
                class="flex-1 text-center bg-[#47A025] hover:opacity-90 py-2 px-4 rounded text-sm transition"
              >
                Live Demo
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
