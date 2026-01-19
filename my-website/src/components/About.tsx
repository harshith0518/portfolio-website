import { SiCodeforces } from "react-icons/si";
import { useTheme } from "../contexts/ThemeContext";
import BlurText from "./Elements/BlurText";
import { FaGraduationCap, FaLaptopCode } from "react-icons/fa"
import InterestCard from "./Elements/InterestsCard";



const ProfessionalInterests = [
      {
        title: "Mentoring & Teaching",
        desc: "Enjoy guiding peers and juniors by simplifying complex concepts and fostering independent problem-solving.",
      },
      {
        title: "Problem Solving",
        desc: "Strong inclination towards analytical thinking through algorithmic challenges and structured reasoning.",
      },
      {
        title: "Competitive Programming",
        desc: "Actively practice competitive programming to sharpen algorithmic intuition and performance under constraints.",
      },
      {
        title: "Design & Visual Aesthetics",
        desc: "Appreciate clean, functional design and strive to build interfaces that balance clarity with visual elegance.",
      },
      {
        title: "Fitness & NCC Activities",
        desc: "Maintain discipline and physical fitness through structured training and participation in NCC activities.",
      },
    ]


const PersonalInterests = [
      {
        title: "Mentoring & Teaching",
        desc: "Enjoy guiding peers and juniors by simplifying complex concepts and fostering independent problem-solving.",
      },
      {
        title: "Problem Solving",
        desc: "Strong inclination towards analytical thinking through algorithmic challenges and structured reasoning.",
      },
      {
        title: "Competitive Programming",
        desc: "Actively practice competitive programming to sharpen algorithmic intuition and performance under constraints.",
      },
      {
        title: "Design & Visual Aesthetics",
        desc: "Appreciate clean, functional design and strive to build interfaces that balance clarity with visual elegance.",
      },
      {
        title: "Fitness & NCC Activities",
        desc: "Maintain discipline and physical fitness through structured training and participation in NCC activities.",
      },
    ]


const achievements = [
  {
    icon: FaGraduationCap,
    short: "AIR 580 – JEE Advanced 2023",
    long:
      "Secured an All India Rank of 580 among more than 160,000 candidates, demonstrating strong problem-solving skills and mathematical rigor at a national level.",
  },
  {
    icon: FaGraduationCap,
    short: "AIR 342 – JEE Main 2023",
    long:
      "Achieved AIR 342 among 1.1 million+ candidates, placing in the top 0.03% nationwide and qualifying for IIT admission.",
  },
  {
    icon: FaGraduationCap,
    short: "Rank 99 – TS EAPCET 2023",
    long:
      "Secured a top-100 state rank among nearly 200,000 aspirants, reflecting consistent academic excellence.",
  },
  {
    icon: SiCodeforces,
    short: "Codeforces Max Rating: 1359",
    long:
      "Actively participate in competitive programming with a peak rating of 1359, focusing on algorithms, graphs, and problem-solving under constraints.",
  },
  {
    icon: FaLaptopCode,
    short: "AlgoUniversity Accelerator Camp",
    long:
      "Selected among top 50 participants from 50,000+ applicants based on performance in Graph Theory Programming Camp across IITs, NITs and other premier institutes.",
  },
];




const About = () => {
  const { theme } = useTheme();

  return (
    <div id="about" className="flex flex-col space-y-16">


      {/* ACHIEVEMENTS */}
      <div className="flex flex-col justify-center items-center">
        <BlurText
          text="Achievements & Certifications"
          delay={150}
          animateBy="words"
          direction="bottom"
          className="relative px-2 py-1 text-4xl mb-6
                     transition-all duration-300
                     hover:tracking-wider
                     after:absolute after:left-0 after:-bottom-1
                     after:h-[2px] after:w-full after:origin-left
                     after:scale-x-0 after:bg-current
                     after:transition-transform after:duration-300
                     hover:after:scale-x-100"
        />

        <div className="grid gap-5 max-w-4xl px-6">
  {achievements.map(({ icon:Icon,short, long }) => (
    <div
      key={short}
      className={`
        group rounded-xl border px-5 py-5 m-2
        transition-all duration-300 ease-out
        hover:scale-[1.02]

        ${
          theme === "dark"
            ? "bg-neutral-400/20 text-neutral-300 hover:bg-neutral-400/30 shadow-lg shadow-neutral-100/20"
            : "bg-neutral-300/20 text-neutral-700 hover:bg-neutral-300/30 shadow-lg shadow-neutral-600/20"
        }
      `}
    >
      {/* Short description (always visible) */}
      <div
  className="
    group flex justify-between font-medium
    transition-transform duration-500
  "
>
  <span className="text-lg">{short}</span>

  <Icon
    className="text-2xl transition-transform duration-1500
      group-hover:rotate-720
    "
  />
</div>

      {/* Long description (hover reveal) */}
      <div
        className="
          overflow-hidden
          max-h-0 opacity-0
          transition-all duration-500 ease-in-out
          group-hover:max-h-40
          group-hover:opacity-100
        "
      >
        <p className="mt-3 text-sm leading-relaxed opacity-90">
          {long}
        </p>
      </div>
    </div>
  ))}
</div>

      </div>

      {/* INTERESTS */}
      <div className="flex flex-col justify-center items-center">
        <BlurText
          text="Interests"
          delay={150}
          animateBy="words"
          direction="bottom"
          className="relative px-2 py-1 text-4xl mb-6
                     transition-all duration-300
                     hover:tracking-wider
                     after:absolute after:left-0 after:-bottom-1
                     after:h-[2px] after:w-full after:origin-left
                     after:scale-x-0 after:bg-current
                     after:transition-transform after:duration-300
                     hover:after:scale-x-100"
        />

        <div className="flex flex-col gap-6 max-w-4xl px-6">

          {/* Professional */}
          <InterestCard interestArr={ProfessionalInterests} heading="Professional Interests"/>

          {/* Personal */}
                    <InterestCard interestArr={PersonalInterests} heading="Personal Interests"/>


        </div>
      </div>
    </div>
  );
};

export default About;
