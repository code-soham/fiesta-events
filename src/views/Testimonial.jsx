import data from "../utils/testimonials.json";
export default function Testimonial() {
  window.scrollTo({
    top: 0,
    left: 0,
    behavior: "smooth",
  });
  return (
    <div className="min-h-screen w-full flex flex-col justify-start">
      <div className="text-3xl lg:text-5xl font-light w-11/12 mx-auto text-left mt-32">
        People Said
      </div>
      <div className="flex flex-row flex-wrap items-center justify-center mt-20 ">
        {data.map((item) => (
          <div className="group relative mt-20 transition-all duration-300 min-h-96 w-96 border-4 border-[#ffffffbb] hover:bg-black hover:bg-opacity-40 m-3 flex flex-col justify-evenly">
            <img
              src={item.image}
              alt="bust"
              className="h-40 w-40 rounded-full absolute -top-20 left-28 border-4 border-[#ffffffaa] p-1"
            />
            <div className="text-lg text-center font-semibold mt-20">
              {item.name}
            </div>
            <div className="text-center text-lg leading-tight p-4 justify-center">
              {item.text}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
