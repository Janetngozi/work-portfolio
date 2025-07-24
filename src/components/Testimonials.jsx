import { Quote } from "lucide-react";
import { useEffect, useRef } from "react";
import { motion } from "motion/react";

let testimonies = [
  {
    words:
      "Janet pushes for best practices and delivers on every project with excellence. I recommend working with her in your web development projects.",
    images: "images/juwon.png",
    name: "Olajuwon Rasheed",
    role: "Tech Analyst, BOFA",
  },
  {
    words:
      "I've had the pleasure of working closely with Janet, and I can confidently say she’s one of the most talented and reliable frontend developers I've met. Her attention to detail, clean and scalable code, and sharp eye for user experience consistently elevate every project she's on. Whether she's building complex UI components or collaborating across teams, she brings clarity, consistency, and creativity to the table. Any team would be lucky to have her.",
    images: "images/joseph.jpg",
    name: "Joseph Akinwole",
    role: "Software Developer, Precise Financial Systems",
  },
  {
    words:
      "Janet is a skilled and collaborative programmer who consistently delivers high-quality work. I've had the pleasure of working with her on several projects, and her strong technical expertise, attention to detail, and excellent communication skills make her a valuable asset to any team. I highly recommend her for any programming or software development project.",
    images: "images/janet.jpg",
    name: "Emmanuel Damilola",
    role: "Software Engineer, BethelLabs",
  },
  {
    words:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo perferendis pariatur expedita officia beatae temporibus ipsum suscipit error vel saepe hic aliquid perspiciatis at quis ipsam consequuntur rerum asperiores, voluptate possimus maiores similique ab est? Debitis corporis molestiae dolore, maxime itaque cupiditate vel possimus provident placeat. Odit id labore eos?",
    images: "images/janet.jpg",
    name: "Ariana Grande",
    role: "Lead HR, Sons Limited",
  },
];

testimonies = [...testimonies, ...testimonies];

const Testimonials = () => {
  const scrollRef = useRef(null);
  useEffect(() => {
    const interval = setInterval(() => {
      if (scrollRef.current) {
        scrollRef.current.scrollLeft += 1;
      }
    }, 20); // Adjust speed here
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      id="testimonials"
      className="flex flex-col items-center justify-center min-h-screen text-white relative z-2 bg-[#241023] pt-25 "
    >
      <button className="font-medium text-[14px] bg-[#47A025]/50 px-4 py-2 mb-3 rounded-2xl">
        What My Collaborators say
      </button>
      <h1 className="text-[36px] font-normal md:text-[48px] mb-2">
        Testimonials
      </h1>
      <div class="w-34 h-4  rounded-full overflow-hidden ">
        <div className="h-2 w-3/4 bg-gradient-to-r from-[#47A025] to-purple-600 ml-5 rounded-full"></div>
      </div>
      <div
        ref={scrollRef}
        className="flex gap-5 w-full overflow-x-auto  no-scrollbar  pb-10"
      >
        {testimonies.map((testimony, index) => (
          <motion.div
            key={index}
            className="border p-5 bg-[#2D1B31] min-w-[380px] max-w-[400px] h-[440px] rounded-2xl shadow-md transition mt-10 hover:scale-[1.02]  md:bg-[#241023]/50 backdrop-blur md:shadow-2xl shadow-black/30  border-[#47A025]/50 overflow-hidden"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <div className="w-full  h-full flex flex-col ">
              <Quote color="#47A025" className="w-8 h-8 mb-4" />

              <div className="text-[15px] italic mb-6 flex-grow overflow-hidden flex justify-center items-center">
                <p className=" leading-relaxed">{testimony.words}</p>
              </div>

              <div className="flex gap-4  items-center mt-auto">
                <img
                  src={testimony.images}
                  alt={testimony.name}
                  className="w-14 h-14 rounded-full object-cover flesh-shrink-0"
                />
                <div className="min-w-0 flex-1">
                  <h2 className="font-semibold text-[#47A025] truncate">
                    {testimony.name}
                  </h2>
                  <p className="text-sm text-[#ffffff]/80 line-clamp-2">
                    {testimony.role}
                  </p>
                </div>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Testimonials;
