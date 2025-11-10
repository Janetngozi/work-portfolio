// const About = () => {
//   return (
//     <div
//       id="about"
//       className="flex flex-col  items-center justify-center min-h-screen text-white relative  bg-[#241023] pt-25 pb-10"
//     >
//       <button className="font-bold text-[14px] text-[#ffffff] bg-[#47a025]/50 px-4 py-2 rounded-2xl">
//         My Journey
//       </button>
//       <h1 className="font-[400px] text-[48px] animate__animated animate__tada">
//         About Me
//       </h1>
//       <div className="w-34 h-4  rounded-full overflow-hidden pl-5">
//         <div className="h-2 w-3/4 bg-gradient-to-r from-[#47A025] to-purple-600 rounded-full"></div>
//       </div>
//       <div className="lg:flex lg:justify-center lg:gap-[100px] lg:items-center mt-8">
//         <img
//           src="./images/jenny.png"
//           alt=""
//           className="lg:w-1/4 rounded-xl lg:h-[100%] w-[250px] xs:w-[300px]  ml-15 sm:ml-20 md:ml-45  md:w-[400px] mb-10 lg:mb-0 lg:ml-0 shadow-2xl"
//         />
//         <div className="lg:w-2/4  border-solid border lg:px-10 px-5 py-5 relative    ease-in-out rounded-xl animate__animated animate__pulse  bg-[#241023]/50 backdrop-blur shadow-2xl shadow-black/30   border-[#47A025]/50  overflow-hidden transition-all duration-300 hover:border-[#47A025]/50 mx-10 md:mx-15 lg:mx-0">
//           <p className="text-[#ffffff] text-[12px]  md:text[18px] lg:text-[20px] pb-5 text-shadow-xl font-normal">
//             Hi, I’m Janet, a passionate Frontend Developer who transforms ideas
//             into clean, responsive, and user-focused web experiences. My journey
//             into tech started after graduation, during a period of uncertainty.
//             With curiosity and determination, I taught myself web development,
//             starting from tutorials and documentation to building real-world
//             projects. That journey shaped not just my skills, but also my
//             resilience. I specialize in HTML, CSS, and JavaScript, with growing
//             expertise in React. From simple landing pages to interactive
//             layouts, I focus on creating websites that are not only visually
//             appealing but also accessible and performance-driven. I’m committed
//             to lifelong learning and always open to new challenges. Whether
//             working independently or on a team, I aim to create meaningful,
//             intuitive, and lasting digital experiences. Let’s build something
//             great together.
//           </p>
//           <hr className=" h-[1px] bg-[#ccc;] "></hr>
//           <div className="flex flex-col gap-5 mt-5  font-normal">
//             <div className="hidden lg:flex items-center justify-between ">
//               <p>
//                 Name
//                 <br />
//                 Janet
//               </p>
//               <p>
//                 Email
//                 <br />
//                 janetodoemene@gmail.com
//               </p>
//             </div>
//             <div className="flex text-[12px] flex-col items-start gap-5 lg:hidden">
//               <p>Name: Janet</p>
//               <p>Email: janetodoemene@gmail.com</p>
//             </div>
//             <p className="text-[12px] lg:text-[16px]">
//               Availability: Open to opportunities
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default About;

const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen text-white bg-[#241023] py-20 px-6"
    >
      {/* Header Section */}
      <button className="font-bold text-sm text-white bg-[#47A025]/50 px-4 py-2 rounded-2xl mb-3">
        My Journey
      </button>
      <h1 className="text-4xl md:text-5xl font-semibold animate__animated animate__tada mb-3">
        About Me
      </h1>
      <div className="w-32 h-2 rounded-full overflow-hidden mb-10">
        <div className="h-full w-3/4 bg-gradient-to-r from-[#47A025] to-purple-600 rounded-full"></div>
      </div>

      {/* Content Section */}
      <div className="lg:flex lg:justify-center lg:items-center lg:gap-20 w-full max-w-6xl">
        <img
          src="./images/jenny.png"
          alt="Janet portrait"
          className="w-[250px] sm:w-[300px] md:w-[350px] lg:w-[300px] rounded-xl shadow-2xl mb-10 lg:mb-0 mx-auto lg:mx-0"
        />

        <div className="lg:w-2/4 bg-[#2D132C]/60 border border-[#47A025]/40 rounded-2xl shadow-2xl shadow-black/40 p-6 md:p-8 backdrop-blur-sm transition-all duration-300 hover:border-[#47A025]/70">
          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6 text-gray-100">
            Hi, I’m <span className="text-[#47A025] font-semibold">Janet</span>,
            a passionate Frontend Developer who transforms ideas into clean,
            responsive, and user-focused web experiences. My journey into tech
            started after graduation, driven by curiosity and determination to
            build real-world projects. That journey shaped not just my skills
            but also my resilience.
          </p>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed mb-6 text-gray-100">
            I specialize in{" "}
            <span className="text-purple-400 font-medium">
              HTML, CSS, and JavaScript
            </span>
            , with growing expertise in{" "}
            <span className="text-purple-400 font-medium">React</span>. From
            landing pages to interactive layouts, I focus on creating websites
            that are both visually appealing and performance-driven. I’m
            committed to lifelong learning and always open to new challenges.
          </p>
          <p className="text-sm md:text-base lg:text-lg leading-relaxed text-gray-100">
            Whether working independently or with a team, I aim to create
            meaningful, intuitive, and lasting digital experiences. Let’s build
            something great together.
          </p>

          {/* Divider */}
          <hr className="my-6 border-[#ffffff]/20" />

          {/* Contact Section */}
          <div className="flex flex-col lg:flex-row lg:justify-between text-sm md:text-base text-gray-200 space-y-3 lg:space-y-0">
            <div>
              <p className="font-medium text-gray-400">Name</p>
              <p>Janet</p>
            </div>
            <div>
              <p className="font-medium text-gray-400">Email</p>
              <p>janetodoemene@gmail.com</p>
            </div>
            <div>
              <p className="font-medium text-gray-400">Availability</p>
              <p className="text-green-400 font-semibold">
                Open to opportunities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
