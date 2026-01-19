import { useTheme } from "../contexts/ThemeContext";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { SiCodechef, SiCodeforces } from "react-icons/si";
import ConnectWay from "./Elements/ConnectWay";
import { type ConnectionProps } from "./Elements/ConnectWay";
import EmailLine from "./Elements/EmailLine";
// Actively exploring opportunities and building interesting projects. I enjoy learning problem-solving, especially when tackling real-world constraints and design trade-offs. If you have a technical problem that could benefit from a fresh perspective - or simply an interesting idea worth exploring-I'd love to connect. My work primarily spans Web Apps, Desktop Apps, Mobile Apps, AI/ML projects and Game Dev, and I'm always open to stepping into new domains and unfamiliar territory.


const connectWaysArr = [
  {
    href:"https://github.com/yourusername",
    ariaLabel:"GitHub",
    icon:FaGithub
  },{
    href:"https://github.com/yourusername",
    ariaLabel:"LinkedIn",
    icon:FaLinkedin
  },{
    href:"https://github.com/yourusername",
    ariaLabel:"CodeForces",
    icon:SiCodeforces
  },{
    href:"https://github.com/yourusername",
    ariaLabel:"CodeChef",
    icon:SiCodechef
  }

]



const Connect = () => {
  const { theme } = useTheme();

  return (
    <div id = "connect"
      className={`
        mt-24 border-t
        ${
                theme === 'dark'
                ? `bg-neutral-400/20 text-neutral-300 hover:bg-neutral-400/21 shadow-lg shadow-black/10`
                : `bg-neutral-300/20 text-neutral-700 hover:bg-neutral-300/30 shadow-lg shadow-neutral-400/20`
                }
      `}
    >
      <div className="mx-auto max-w-screen-xl px-6 py-12">
        {/* Top section */}
        <div className="flex flex-col items-center text-center gap-4">
          <h2 className="text-3xl font-semibold text-heading">
            Let’s Connect
          </h2>
          <p className="max-w-xl text-xl font-light text-body">
            Interested in collaborating, discussing ideas, or just saying hi?
            Feel free to reach out.
          </p>

      <EmailLine toShow="Personal Email" mailId="bsharshith1808@gmail.com"/>
      <EmailLine toShow="College Email" mailId="cs23b010@smail.iitm.ac.in"/>


        </div>

        {/* Social links */}
        <div className="mt-10 flex justify-center gap-6">
          {connectWaysArr.map(({href,ariaLabel,icon}:ConnectionProps) => (<ConnectWay href={href} ariaLabel = {ariaLabel} icon = {icon} />))}
        </div>

        {/* Bottom */}
        <div className="mt-10 text-center text-xs text-neutral-500">
          © {new Date().getFullYear()} Surya Harshith Balla. Built with React & Tailwind.
        </div>
      </div>
      
    </div>
  );
};

export default Connect;
