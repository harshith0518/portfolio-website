"use client";
import { useState,useRef } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { ListChevronsDownUp } from "lucide-react";



interface ProjectCardProps {
  role: string;
  company: string;
  duration?: string;
  tools?: string[];
  children: React.ReactNode;
}

const ProjectCard: React.FC<ProjectCardProps> = ({
  role,
  company,
  duration,
  tools = [],
  children,
}) => {
  const { theme } = useTheme();
  const [even,setEven] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!cardRef.current) return;

    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    const centerX = rect.width / 2;
    const centerY = rect.height / 2;

    const rotateX = -(y - centerY) / 18;
    const rotateY = (x - centerX) / 18;

    cardRef.current.style.transform = `
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
    `;
  };

  const reset = () => {
    if (!cardRef.current) return;
    cardRef.current.style.transform = `rotateX(0deg) rotateY(0deg)`;
  };

  return (
    <div
      onMouseLeave = {reset}
      onMouseMove={(e) => {
        handleMouseMove
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className={`
        transform translate-z-[110px]
        group relative w-100 rounded-3xl overflow-hidden
        border border-neutral-600
        backdrop-blur-[2px]
        transition-all duration-300 ease-out
        hover:scale-[1.02] mb-6
        ${
          theme === "dark"
            ? "bg-neutral-400/15 text-neutral-300 shadow-md shadow-gray-500"
            : "bg-neutral-300/20 text-neutral-700 shadow-md shadow-zinc-950"
        }
      `}
    >
      
      {/* Mouse-follow spotlight */}
      <div
        className="pointer-events-none absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(
            500px at ${mousePos.x}px ${mousePos.y}px,
            ${theme === 'dark'?"rgba(39, 39, 43, 1)":"rgba(210, 210, 210, 1)"},
            transparent 60%
          )`,
        }}
      />

      {/* Header */}
      <button
        onClick={()=>setEven(!even)}
        className="relative z-10 w-full px-6 py-5 flex items-center justify-between text-left transform translate-z-[80px]"
      >
        <div>
          <h3 className="text-lg font-semibold tracking-tight">
            {role}
          </h3>
          <p className="text-sm opacity-80">
            {company}{duration && ` • ${duration}`}
          </p>
        </div>

        {/* Arrow */}
        <ListChevronsDownUp
          className={`
            transition-transform duration-300
            ${even ? "rotate-180" : "rotate-360"}
          `}
        >
        </ListChevronsDownUp>
        
      </button>

      {/* Content */}
      <div className="grid transition-all duration-500 ease-outgrid-rows-[1fr] opacity-100">
        <div className="flex flex-col justify-around relative z-10 overflow-hidden px-6 space-y-4">
          <p className="text-sm leading-relaxed">
            {children}
          </p>

          {tools.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-2 mb-6">
              {tools.map((tool) => (
                <span
                  key={tool}
                  className={`
                    text-xs px-4 py-2 rounded-full
                    border border-neutral-500/40
                    hover:scale-[1.07]
                    hover:shadow-lg
                    duration-500
                    ${
                      theme === "dark"
                        ? "bg-neutral-500/20"
                        : "bg-neutral-200/40"
                    }
                  `}
                >
                  {tool}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
