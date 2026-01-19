import { useTheme } from "../contexts/ThemeContext";
import BlurText from "./Elements/BlurText";
import WorkExperienceAccordion from "./Elements/WorkExperienceAccordion";
import ProjectCard from "./Elements/ProjectCard";
import { PiNetworkX } from "react-icons/pi";
import { VscGraph } from "react-icons/vsc";
import {
  SiTypescript,
  SiJavascript,
  SiReact,
  SiTailwindcss,
  SiHtml5,
  SiCss3,
  SiMarkdown,
  SiNodedotjs,
  SiNestjs,
  SiDjango,
  SiFlask,
  SiCplusplus,
  SiPostgresql,
  SiMysql,
  SiFirebase,
  SiGit,
  SiDocker,
  SiAmazon,
  SiPostman,
  SiLinux,
  SiPandas,
  SiScikitlearn,
  SiPytorch,
  SiNumpy,
} from "react-icons/si";



const skills = {
  frontend: [
    { name: "TypeScript", icon: SiTypescript },
    { name: "JavaScript", icon: SiJavascript },
    { name: "React.js", icon: SiReact },
    { name: "TailwindCSS", icon: SiTailwindcss },
    { name: "HTML5", icon: SiHtml5 },
    { name: "CSS3", icon: SiCss3 },
    { name: "Markdown", icon: SiMarkdown },
  ],
  backend: [
    { name: "Node.js", icon: SiNodedotjs },
    { name: "Nest.js", icon: SiNestjs },
    { name: "Django", icon: SiDjango },
    { name: "Flask", icon: SiFlask },
    { name: "C++", icon: SiCplusplus },
  ],
  database: [
    { name: "PostgreSQL", icon: SiPostgresql },
    { name: "MySQL", icon: SiMysql },
    { name: "Firebase", icon: SiFirebase },
  ],
  tools: [
    { name: "Git", icon: SiGit },
    { name: "Docker", icon: SiDocker },
    { name: "AWS", icon: SiAmazon },
    { name: "Postman", icon: SiPostman },
    { name: "Linux", icon: SiLinux },
  ],
  aiml: [
    {name:"pytorch",icon:SiPytorch},
    {name:"pandas",icon:SiPandas},
    {name:"sklearn",icon:SiScikitlearn},
    {name:"matplotlib",icon:VscGraph},
    {name:"networkx",icon:PiNetworkX},
    {name:"numpy",icon:SiNumpy},
  ]
};




const Work = () => {

    const {theme} = useTheme();

    const SkillPill = ({ name, icon: Icon }: { name: string; icon: any }) => (
        <span
            className={`
            flex items-center gap-2
            text-sm px-4 py-2 rounded-full
            border transition-all duration-300
            hover:scale-[1.08] hover:shadow-md
            hover:border-neutral-400
            ${
                theme === "dark"
                ? "bg-neutral-500/20 border-neutral-600 text-neutral-200 shadow-neutral-700"
                : "bg-neutral-200/40 border-neutral-300 text-neutral-800 shadow-zinc-600"
            }
            `}
        >
            <Icon className="text-base hover:transition-transform hover:duration-600 hover:rotate-360">
            </Icon>
            {name}
        </span>
    );

    return <div id = "work" className="flex flex-col">
        <div className="flex flex-col justify-center items-center">
            <BlurText
            text="Work-Experience"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="relative px-2 py-1 text-5xl justify-center mb-10 mt-15 
                        transition-all duration-300
                        hover:tracking-wider
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-full after:origin-left
                        after:scale-x-0 after:bg-current
                        after:transition-transform after:duration-300
                        hover:after:scale-x-100"
        />

        <WorkExperienceAccordion
            role="Software Developer Intern"
            company="XYZ Labs"
            duration="May 2024 – July 2024"
            tools={["React", "TypeScript", "Tailwind", "REST APIs"]}
            >
            Built scalable frontend components, improved performance, and collaborated
            closely with backend teams to ship production-ready features.
        </WorkExperienceAccordion>

        <WorkExperienceAccordion
            role="Software Developer Intern"
            company="XYZ Labs"
            duration="May 2024 – July 2024"
            tools={["React", "TypeScript", "Tailwind", "REST APIs"]}
            >
            Built scalable frontend components, improved performance, and collaborated
            closely with backend teams to ship production-ready features.
        </WorkExperienceAccordion>

        </div>
        <div className="flex flex-col justify-center items-center">
            <BlurText
            text="Projects"
            delay={150}
            animateBy="words"
            direction="bottom"
            className="relative px-2 py-1 text-5xl justify-center mb-8 mt-10 
                        transition-all duration-300
                        hover:tracking-wider
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-full after:origin-left
                        after:scale-x-0 after:bg-current
                        after:transition-transform after:duration-300
                        hover:after:scale-x-100"
        />
        <div className="flex gap-15">

            <ProjectCard
                role="Software Developer Intern"
                company="XYZ Labs"
                duration="May 2024 – July 2024"
                tools={["React", "TypeScript", "Tailwind", "REST APIs"]}
                >
                Built scalable frontend components, improved performance, and collaborated
                closely with backend teams to ship production-ready features.
            </ProjectCard>
            <ProjectCard
                role="Software Developer Intern"
                company="XYZ Labs"
                duration="May 2024 – July 2024"
                tools={["React", "TypeScript", "Tailwind", "REST APIs"]}
                >
                Built scalable frontend components, improved performance, and collaborated
                closely with backend teams to ship production-ready features.
            </ProjectCard>
            <ProjectCard
                role="Software Developer Intern"
                company="XYZ Labs"
                duration="May 2024 – July 2024"
                tools={["React", "TypeScript", "Tailwind", "REST APIs"]}
                >
                Built scalable frontend components, improved performance, and collaborated
                closely with backend teams to ship production-ready features.
            </ProjectCard>
        </div>
        </div>
        <div className="flex flex-col justify-center items-center mb-16">
  <BlurText
    text="Skills"
    delay={150}
    animateBy="words"
    direction="bottom"
    className="relative px-2 py-1 text-5xl mb-8 mt-12
               transition-all duration-300
               hover:tracking-wider
               after:absolute after:left-0 after:-bottom-1
               after:h-[2px] after:w-full after:origin-left
               after:scale-x-0 after:bg-current
               after:transition-transform after:duration-300
               hover:after:scale-x-100"
  />

  <div className="flex flex-col w-full max-w-5xl gap-10">

    {[
      { title: "Frontend", key: "frontend" },
      { title: "Backend", key: "backend" },
      { title: "AI-ML Libraries", key: "aiml" },
      { title: "Database", key: "database" },
      { title: "Tools", key: "tools" },
    ].map(({ title, key }) => (
      <div key={key} className="flex flex-col gap-4">
        <h3 className="text-xl font-semibold tracking-wide opacity-90">
          {title}
        </h3>

        <div className="flex flex-wrap gap-3">
          {skills[key as keyof typeof skills].map((skill) => (
            <SkillPill
              key={skill.name}
              name={skill.name}
              icon={skill.icon}
            />
          ))}
        </div>
      </div>
    ))}
  </div>
</div>

    </div>
};


export default Work;