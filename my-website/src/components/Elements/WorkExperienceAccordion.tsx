import { useState } from "react";
import { useTheme } from "../../contexts/ThemeContext";
import { ListChevronsDownUp } from "lucide-react";

interface WorkAccordionProps {
  role: string;
  company: string;
  duration?: string;
  tools?: string[];
  children: React.ReactNode;
}

const WorkExperienceAccordion: React.FC<WorkAccordionProps> = ({
  role,
  company,
  duration,
  tools = [],
  children,
}) => {
  const { theme } = useTheme();
  const [open, setOpen] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  return (
    <div
      onMouseMove={(e) => {
        const rect = e.currentTarget.getBoundingClientRect();
        setMousePos({
          x: e.clientX - rect.left,
          y: e.clientY - rect.top,
        });
      }}
      className={`
        group relative w-300 rounded-3xl overflow-hidden
        border border-neutral-600
        backdrop-blur-[2px]
        transition-all duration-300 ease-out
        hover:scale-[1.02] mb-6
        ${
          theme === "dark"
            ? "bg-neutral-400/15 text-neutral-300 shadow-md shadow-neutral-700"
            : "bg-neutral-300/20 text-neutral-700 shadow-md shadow-zinc-600"
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
        onClick={() => setOpen(!open)}
        className="relative z-10 w-full px-6 py-5 flex items-center justify-between text-left"
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
            ${open ? "rotate-180" : "rotate-0"}
          `}
        >
        </ListChevronsDownUp>
        
      </button>

      {/* Content */}
      <div
        className={`
          grid transition-all duration-500 ease-out
          ${open ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"}
        `}
      >
        <div className="relative z-10 overflow-hidden px-6 space-y-4">
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
                    hover:scale-[1.05]
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

export default WorkExperienceAccordion;
