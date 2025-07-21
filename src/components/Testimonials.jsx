import { Quote } from "lucide-react";

let testimonies = [
  {
    words:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae dolor odit nesciunt vel tenetur asperiores enim dolores quas voluptates blanditiis doloremque earum debitis incidunt ullam dolorem culpa magni deserunt omnis adipisci, molestias quaerat .",
    images: "images/janet.jpg",
    name: "Fawas Ajibola",
    role: "Lead, Mobile Development, Faith & Sons",
  },
  {
    words:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae dolor odit nesciunt vel tenetur asperiores enim dolores quas voluptates blanditiis doloremque earum debitis incidunt ullam dolorem culpa magni deserunt omnis adipisci, molestias quaerat .",
    images: "images/janet.jpg",
    name: "Jones Smith",
    role: "Co-founder, Jenny Technologies",
  },
  {
    words:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae dolor odit nesciunt vel tenetur asperiores enim dolores quas voluptates blanditiis doloremque earum debitis incidunt ullam dolorem culpa magni deserunt omnis adipisci, molestias quaerat .",
    images: "images/janet.jpg",
    name: "Ariana Grande",
    role: "Lead HR, Sons Limited",
  },
  {
    words:
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda quae dolor odit nesciunt vel tenetur asperiores enim dolores quas voluptates blanditiis doloremque earum debitis incidunt ullam dolorem culpa magni deserunt omnis adipisci, molestias quaerat .",
    images: "images/janet.jpg",
    name: "Joe Weevil",
    role: "Software MdDeveloperBoard, Bings companies",
  },
];

//  testimonies = [...testimonies, ...testimonies];

const Testimonials = () => {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen text-white relative z-2 bg-[#241023]  ">
      <button className="font-[500px] text-[14px] bg-[#47A025] p-2 rounded-2xl">
        What My Collaborators say
      </button>
      <h1 className="font-[400px] text-[48px]">Testimonials</h1>
      <div class="w-34 h-4  rounded-full overflow-hidden pl-5">
        <div class="h-2 w-3/4 bg-gradient-to-r from-teal-400 to-purple-600 rounded-full"></div>
      </div>
<div className="flex gap-5 ">
  {testimonies.map((testimony, index) => (
    <div key={index} className="border p-5 ">
      <div className="flex flex-col gap-10 ">
        <div>
          <Quote color="#47A025" className="w-10 h-10" />
        </div>
        <div className="">
          <p>{testimony.words}</p>
          <div className="flex mt-5 gap-5">
            <img src={testimony.images} alt="" className="w-20 h-20 rounded-full"/>
            <div>
              <h2>{testimony.name}</h2>
              <p>{testimony.role}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  ))}
</div>





    </div>
  );
};

export default Testimonials;
