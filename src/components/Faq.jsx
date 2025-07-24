import { useState } from "react";
import { ChevronDown, ChevronUp } from "lucide-react";

const Faq = () => {
  const [openItemId, setOpenItemId] = useState(null);

  const faqData = [
    {
      id: 1,
      question:
        "Are you currently available for freelance projects or full-time opportunities?",
      answer:
        "Yes, I’m currently open to both freelance projects and full-time opportunities. I’m especially interested in roles that allow me to collaborate on innovative, user-focused web solutions, contribute meaningfully to a team, and continue sharpening my frontend development skills. Whether it's a short-term project or a long-term engagement, I’m committed to delivering high-quality work with professionalism and attention to detail.. Please feel free to reach out via the contact form below.",
    },
    {
      id: 2,
      question: "What is your preferred technology stack?",
      answer:
        "My preferred technology stack centers around frontend development. I work primarily with HTML, CSS (Tailwind CSS or plain CSS), and JavaScript, and I enjoy building dynamic user interfaces using React. For styling, I appreciate the flexibility of Tailwind CSS, and I’m comfortable integrating APIs to bring functionality to life. As I continue growing, I’m exploring more tools and frameworks within the frontend ecosystem, and I’m open to adapting to project-specific needs. Ultimately, I enjoy working with technologies that empower me to build clean, responsive, and accessible web applications.",
    },
    {
      id: 3,
      question: "What does your typical development process look like?",
      answer:
        "I follow agile methodologies with a focus on clean, maintainable code. My process typically includes understanding the requirements, planning the structure, setting up the environment, building the UI, adding interactivity, comprehensive testing & debugging, and thorough documentation. I believe in transparent communication throughout the entire project lifecycle.",
    },
    {
      id: 4,
      question: "Are you open to working remotely or considering relocation?",
      answer:
        "Yes, I'm fully equipped for remote work with a dedicated home office setup and excellent communication skills. I'm also open to relocation for the right opportunity, especially for roles that offer growth potential and align with my career goals.",
    },
    {
      id: 5,
      question: "What’s your approach to deadlines and time management?",
      answer:
        "I take deadlines seriously and approach projects with a clear plan from the start. I break tasks into manageable steps, set personal milestones, and prioritize high-impact work to stay on track. I use tools like Trello or Notion to stay organized and monitor progress, and I communicate proactively if timelines shift. My goal is always to deliver quality work on time without compromising attention to detail.",
    },
  ];

  const toggleItem = (id) => {
    setOpenItemId((prev) => (prev === id ? null : id));
  };

  return (
    <div
      id="faq"
      className="flex flex-col items-center pt-25 justify-center min-h-screen text-white bg-[#241023] overflow-hidden px-5 pb-10 "
    >
      <button className="font-medium text-[14px] bg-[#47A025]/50 px-4 py-2 mb-3 rounded-2xl">
        Got Questions? Let's have it
      </button>
      <h1 className="text-[36px] font-normal md:text-[48px] mb-2">
        Frequently Asked Questions
      </h1>
      <div className="w-34 h-4  rounded-full overflow-hidden ">
        <div className="h-2 w-3/4 bg-gradient-to-r from-[#47A025] to-purple-600 ml-5 rounded-full"></div>
      </div>

      <div className="max-w-4xl mx-auto pt-5">
        <div className="space-y-4">
          {faqData.map((item) => (
            <div
              key={item.id}
              className="bg-[#241023]/50 backdrop-blur shadow-xl shadow-black/30  border border-[#47A025]/50 rounded-lg overflow-hidden transition-all duration-300 hover:border-[#47A025]/50"
            >
              {/* Question Header */}
              <button
                onClick={() => toggleItem(item.id)}
                className="w-full px-6 py-5 text-left flex items-center justify-between hover:bg-[#47A025]/50 transition-colors duration-200 cursor-pointer"
              >
                <h3 className="text-white text-lg font-medium pr-4">
                  {item.question}
                </h3>
                <div className="text-cyan-400 flex-shrink-0">
                  {openItemId === item.id ? (
                    <ChevronUp size={20} color="#47A025" />
                  ) : (
                    <ChevronDown size={20} color="#47A025" />
                  )}
                </div>
              </button>

              {/* Answer Content */}
              <div
                className={`overflow-hidden transition-all duration-300 ease-in-out ${
                  openItemId === item.id
                    ? "max-h-96 opacity-100"
                    : "max-h-0 opacity-0"
                }`}
              >
                <div className="px-6 pb-5 text-slate-300 text-base leading-relaxed border-t border-slate-700/50">
                  <p className="pt-4">{item.answer}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Faq;
