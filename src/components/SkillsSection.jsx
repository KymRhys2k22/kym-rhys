import Marquee from "react-fast-marquee";
import { useHover } from "@uidotdev/usehooks";


const skills = [
  "React-Dark",
  "JavaScript",
  "TypeScript",
  "HTML",
  "CSS",
  "Python-Dark",
  "Vite-Dark",
  "Django",
  "Figma-Dark",
  "Github-Dark",
  "TailwindCSS-Dark",
];

function SkillsSection() {
  const [ref, hovering] = useHover();
  return (
    <section className="py-20 bg-gray-200" id="skills">
      <div className="container  max-w-full mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 ">My Skills</h2>
        <Marquee pauseOnHover={true}>
          <div className="flex items-center justify-center  gap-8 mr-8 ">
            {skills.map((skillSet, index) => (
              <div key={index} className="group ">
                <img

                  src={`https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/${skillSet}.svg`}
                  alt={`Skill ${index + 1}`}
                  className="md:w-32 w-24 hover:scale-110 drop-shadow-lg
                    p-2 transition duration-300"
                />
                <span className="absolute bottom-24 scale-0 transition-all rounded bg-gray-800 p-2 text-xs text-white group-hover:scale-100 ">{skillSet}</span>
              </div>
            ))}
          </div>
        </Marquee>
      </div>
    </section>
  );
}

export default SkillsSection;
