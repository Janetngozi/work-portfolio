import { Send } from "lucide-react";
import { MdEmail } from "react-icons/md";
import { BsFillThreadsFill } from "react-icons/bs";
import { FaGithub } from "react-icons/fa";
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { GrStatusGoodSmall } from "react-icons/gr";
import { useState, useEffect, use } from "react";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  useEffect(() => {
    const savedData = localStorage.getItem("contactForm");
    if (savedData) {
      setFormData(JSON.parse(savedData));
    }
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    const updatedData = { ...formData, [name]: value };

    setFormData(updatedData);
    localStorage.setItem("contactForm", JSON.stringify(updatedData));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    const { name, email, message } = formData;

    if (!name.trim() || !email.trim() || !message.trim()) {
      alert("Please fill in all fields.");
      return;
    }

    alert(`Thank you, ${name}! Your message has been sent.`);

    console.log(`Name: ${name}`);
    console.log(`Email: ${email}`);
    console.log(`Message: ${message}`);

    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div
      id="contact"
      className="flex flex-col pt-25 items-center justify-center min-h-screen text-white bg-[#241023] overflow-hidden px-5 pb-10 "
    >
      <button className="font-medium text-[14px] bg-[#47A025]/50 px-4 py-2 mb-3 rounded-2xl">
        Let's work together
      </button>
      <h1 className="text-[36px] font-normal md:text-[48px] mb-2">
        Get in Touch
      </h1>
      <div className="w-34 h-4  rounded-full overflow-hidden ">
        <div className="h-2 w-3/4 bg-gradient-to-r from-[#47A025] to-purple-600 ml-5 rounded-full"></div>
      </div>

      <div className="lg:flex mx-10 gap-10 mt-10 justify-center items-start ">
        <div className="flex flex-col text-left justify-left gap-10 items-start p-5 rounded-xl  w-1/2  border-solid border px-10 py-5 relative    ease-in-out   bg-[#241023]/50 backdrop-blur shadow-2xl shadow-black/30   border-[#47A025]/50  overflow-hidden transition-all duration-300">
          <h1 className="text-[30px] font-[400px]">Contact Information</h1>
          <div className="flex flex-col gap-5">
            <div className="flex gap-5">
              <div>
                <MdEmail className="w-8 h-8 text-[#47A025]/50" />
              </div>
              <div>
                <p>Email</p>
                <a
                  href="mailto:janetodoemene@gmail.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] text-[14px]"
                >
                  janetodoemene@gmail.com
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <BsFillThreadsFill className="w-8 h-8 text-[#47A025]/50" />
              </div>
              <div>
                <p>Threads</p>
                <a
                  href="https://www.threads.net/@janetoluwanifemi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] text-[14px]"
                >
                  https://www.threads.net/@janetoluwanifemi
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <FaGithub className="w-8 h-8 text-[#47A025]/50" />
              </div>
              <div>
                <p>GitHub</p>
                <a
                  href="https://github.com/Janetngozi"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] text-[14px]"
                >
                  https://github.com/Janetngozi
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <FaInstagramSquare className="w-8 h-8 text-[#47A025]/50" />
              </div>
              <div>
                <p>Instagram</p>
                <a
                  href="https://www.instagram.com/janetoluwanifemi/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] text-[14px] "
                >
                  https://www.instagram.com/janetoluwanifemi/
                </a>
              </div>
            </div>
            <div className="flex gap-5">
              <div>
                <FaLinkedin className="w-8 h-8 text-[#47A025]/50" />
              </div>
              <div>
                <p>LinkedIn</p>
                <a
                  href="https://www.linkedin.com/in/janet-odoemene-0599661aa/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-[#ffffff] text-[14px]"
                >
                  https://www.linkedin.com/in/janet-odoemene-0599661aa/
                </a>
              </div>
            </div>
          </div>
          <hr className="text-[#47A025]/50 w-full" />
          <div className="flex flex-col gap-2">
            <h1 className="pl-6">Current Status</h1>
            <p className="flex gap-2 jutify-center items-center">
              <span>
                <GrStatusGoodSmall className="text-[#47A025]" />
              </span>
              Available for freelance work and full-time opportunities
            </p>
          </div>
        </div>
        <div className=" pl-10 pr-25 pt-5 pb-10 flex flex-col justify-center text-center items-start  w-1/2  border-solid border relative    ease-in-out rounded-xl  bg-[#241023]/50 backdrop-blur shadow-2xl shadow-black/30    border-[#47A025]/50  overflow-hidden transition-all duration-300">
          <form
            action=""
            onSubmit={handleSubmit}
            className="flex flex-col  gap-5  justify-center w-full   items-start "
          >
            <h1 className="text-[28px] font-[400px]">Send Me a Message</h1>
            <div className="flex flex-col gap-5">
              <label htmlFor="">
                <p className="font-bold text-[22px] text-left text-[#ffffff]">
                  Full Name<span class="text-red-500">*</span>
                </p>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Enter your name"
                  className="rounded-sm font-normal text-[16px] border border-[#47A025]/50 px-3 py-2 w-[300px] md:w-[500px]"
                />
              </label>
              <label htmlFor="">
                <p className="font-bold text-[22px] text-left text-[#ffffff]">
                  Email Address<span class="text-red-500">*</span>
                </p>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="youremail@gmail.com"
                  className="rounded-sm font-normal text-[16px] border border-[#47A025]/50 px-3 py-2 w-[300px] md:w-[500px]"
                />
              </label>
              <label htmlFor="">
                <p className="font-bold text-[22px] text-left text-[#ffffff]">
                  Message<span class="text-red-500">*</span>
                </p>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  id=""
                  placeholder="Type your detailed message here"
                  onInput={(e) => {
                    e.target.style.height = "";
                    e.target.style.height = `${e.target.scrollHeight}px`;
                  }}
                  className="rounded-sm font-normal text-[16px] border border-[#47A025]/50 px-3 py-2 w-[300px] md:w-[500px] min-h-[170px] resize-none"
                />
              </label>
            </div>
            <button
              type="submit"
              className="bg-[#47A025]/50 rounded-sm flex gap-4 justify-center items-center  
              text-[#ffffff] text-[16px] font-normal w-[300px] md:w-[500px] px-3 py-2 cursor-pointer
              "
            >
              <span className="text-[#ffffff]">
                <Send />
              </span>
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
