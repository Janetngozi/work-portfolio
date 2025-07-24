const About = () => {
  return (
    <div
      id="about"
      className="flex flex-col items-center justify-center min-h-screen text-white relative  bg-[#241023] pt-25 pb-10"
    >
      <button className="font-bold text-[14px] text-[#ffffff] bg-[#47a025]/50 px-4 py-2 rounded-2xl">
        My Journey
      </button>
      <h1 className="font-[400px] text-[48px]">About Me</h1>
      <div className="w-34 h-4  rounded-full overflow-hidden pl-5">
        <div className="h-2 w-3/4 bg-gradient-to-r from-[#47A025] to-purple-600 rounded-full"></div>
      </div>
      <div className="flex justify-center gap-[100px] items-center mt-8">
        <img
          src="./images/janet.jpg"
          alt=""
          className="w-1/4 rounded-xl h-[100%] shadow-2xl"
        />
        <div className="w-2/4  border-solid border px-10 py-5 relative    ease-in-out rounded-xl  bg-[#241023]/50 backdrop-blur shadow-2xl shadow-black/30   border-[#47A025]/50  overflow-hidden transition-all duration-300 hover:border-[#47A025]/50">
          <p className="text-[#ffffff]   text-[20px] pb-5 text-shadow-xl font-bold">
            Hi, I’m Janet, a passionate Frontend Developer who transforms ideas
            into clean, responsive, and user-focused web experiences. My journey
            into tech started after graduation, during a period of uncertainty.
            With curiosity and determination, I taught myself web development,
            starting from tutorials and documentation to building real-world
            projects. That journey shaped not just my skills, but also my
            resilience. I specialize in HTML, CSS, and JavaScript, with growing
            expertise in React. From simple landing pages to interactive
            layouts, I focus on creating websites that are not only visually
            appealing but also accessible and performance-driven. I’m committed
            to lifelong learning and always open to new challenges. Whether
            working independently or on a team, I aim to create meaningful,
            intuitive, and lasting digital experiences. Let’s build something
            great together.
          </p>
          <hr className=" h-[1px] bg-[#ccc;] "></hr>
          <div className="flex flex-col gap-5 mt-5  font-bold">
            <div className="flex items-center justify-between ">
              <p>
                Name
                <br />
                Janet
              </p>
              <p>
                Email
                <br />
                janetodoemene@gmail.com
              </p>
            </div>
            <p className="">
              Availability
              <br />
              Open to opportunities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
