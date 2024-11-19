import Profile from "../assets/Profile.png";

const HeroSection = () => {
  return (
    <section className="bg-gradient-to-r from-purple-500 to-indigo-600 text-white py-20 ">
      <div className="container mx-auto px-4 pt-8">
        <div className="flex flex-col-reverse   md:flex-row items-center justify-between">
          <div className="md:w-1/2 mb-8 md:mb-0 text-center md:text-start">
            <h1 className="text-4xl md:text-6xl font-bold mb-4 font-lexend">
              Kym Rhys {"\n"} Mallari
            </h1>
            <p className="text-xl md:text-2xl mb-6">
              Front-End & Mobile Developer
            </p>
            <p className="text-lg md:text-xl mb-8">
              Crafting beautiful, responsive, and user-friendly digital
              experiences
            </p>
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
              <button className="bg-white text-purple-600 hover:bg-gray-100 px-6 py-2 rounded-md transition duration-300">
                View My Work
              </button>
              <button className="border border-white text-white hover:bg-white hover:text-purple-600 px-6 py-2 rounded-md transition duration-300">
                Download Resume
              </button>
            </div>
          </div>
          <div className="md:w-1/2 flex justify-center md:justify-end">
            <img
              src={Profile}
              alt="Kym Rhys"
              className="rounded-full w-64 h-64 object-cover border-4 border-white shadow-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
