import Marquee from "react-fast-marquee";
import { motion as m } from "framer-motion"



const skills = [
  { link: "React-Dark", linkName: "React" },
  { link: "JavaScript", linkName: "JavaScript" },
  { link: "TypeScript", linkName: "TypeScript" },
  { link: "HTML", linkName: "HTML" },
  { link: "CSS", linkName: "CSS" },
  { link: "Python-Dark", linkName: "Python" },
  { link: "Vite-Dark", linkName: "Vite" },
  { link: "Figma-Dark", linkName: "Figma" },
  { link: "Github-Dark", linkName: "Github" },
  { link: "TailwindCSS-Dark", linkName: "TailwindCSS" },
];

function SkillsSection() {

  return (
    <section className="py-20 bg-gray-200 dark:bg-slate-700" id="skills">
      <div className="container  max-w-full  border-gray-500  mx-auto">
        <h2 className="text-3xl font-bold text-center mb-12 dark:text-white ">My Skills</h2>
        <div className="flex items-center justify-center  flex-col gap-y-8"  >
          <Marquee pauseOnHover={true} speed={30} direction="right">
            <div className="flex items-center justify-around w-screen  ">
              {skills.filter((_, index) => index % 2 === 0).map((skillSet, index) => (
                <m.div
                  viewport={{ "once": true }}

                  initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1 }}
                  transition={{ duration: 1, delay: index * 0.2, ease: "easeInOut" }}
                  key={index} className="group ">
                  <img

                    src={`https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/${skillSet.link}.svg`}
                    alt={`Skill ${index + 1}`}
                    className="md:w-32 w-24 hover:scale-110 drop-shadow-lg
                      p-2 transition duration-300"
                  />
                  <span className="absolute bottom-24 scale-0 transition-all rounded bg-red-500 p-2 text-xs text-white group-hover:scale-100 ">{skillSet.linkName}</span>
                </m.div>
              ))}
            </div>
          </Marquee>
          <Marquee pauseOnHover={true} speed={30}>
            <div className="flex items-center justify-around w-screen  ">
              {skills.filter((_, index) => index % 2 !== 0).map((skillSet, index) => (
                <m.div

                  viewport={{ "once": true }}
                  initial={{ opacity: 0, }}
                  whileInView={{ opacity: 1 }}
                  transition={{
                    duration: 1, delay: index * 0.2, ease: "easeInOut", repeatType: "reverse"

                  }}
                  key={index} className="group ">
                  <img

                    src={`https://raw.githubusercontent.com/tandpfun/skill-icons/refs/heads/main/icons/${skillSet.link}.svg`}
                    alt={`Skill ${index + 1}`}
                    className="md:w-32 w-24 hover:scale-110 drop-shadow-lg
                      p-2 transition duration-300"
                  />
                  <span className="absolute bottom-24 scale-0 transition-all rounded bg-red-500 p-2 text-xs text-white group-hover:scale-100 ">{skillSet.linkName}</span>
                </m.div>
              ))}
            </div>
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default SkillsSection;
