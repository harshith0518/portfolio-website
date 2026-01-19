import React from "react";
import { useTheme } from "../../contexts/ThemeContext";

type Variant = "software" | "aiml" | "others";

interface DomainCardProps {
  children: React.ReactNode;
  variant?: Variant;
  icon?: React.ReactNode;
  className?: string;
}

const VARIANT_STYLES: Record<
  Variant,
  { gradientDark: string; gradientLight: string ; glow: string }
> = {
  software: {
    gradientDark: "from-indigo-900 via-zinc-800 to-cyan-900",
    gradientLight: "from-indigo-200 via-gray-300 to-cyan-200",
    glow: "shadow-indigo-500/60",
  },
  aiml: {
    gradientDark: "from-emerald-900 via-zinc-800 to-teal-900",
    gradientLight: "from-emerald-200 via-zinc-300 to-teal-300",
    glow: "shadow-emerald-500/60",
  },
  others: {
    gradientDark: "from-fuchsia-900 via-zinc-800 to-pink-900",
    gradientLight: "from-fuchsia-200 via-zinc-300 to-pink-300",
    glow: "shadow-fuchsia-500/60",
  },
};

export const DomainCard: React.FC<DomainCardProps> = ({
  children,
  variant = "software",
  icon,
  className = "",
}) => {
  const { theme } = useTheme();
  const { gradientDark,gradientLight, glow } = VARIANT_STYLES[variant];

  return (
    <div
      className={`
        group relative flex flex-col w-full rounded-3xl overflow-hidden
        transition-all duration-300 ease-out
        hover:-translate-y-2 hover:scale-[1.04]
        ${className}
      `}
    >
      {/* Gradient halo */}
      <div
        className={`
          absolute inset-0 rounded-3xl opacity-0 group-hover:opacity-100
          bg-gradient-to-br ${theme==="dark"?gradientDark:gradientLight}
          blur-2xl transition-opacity duration-300
        `}
      />

      {/* Glass surface */}
      <div
        className={`
          relative z-10 rounded-3xl p-6 border m-0.5
          backdrop-blur-xl transition-all duration-300
          ${
            theme === "dark"
              ? "bg-neutral-400/15 border-white/10 text-neutral-200"
              : "bg-neutral-300/20 border-black/10 text-neutral-800"
          }
          shadow-lg ${glow}
        `}
      >
        {/* Icon container */}
        {icon && (
          <div className="flex justify-center mb-4">
            <div
              className={`
                relative flex items-center justify-center
                h-14 w-14 rounded-2xl
                bg-gradient-to-br ${theme==="dark"?gradientDark:gradientLight}
                shadow-lg ${glow}
              `}
            >
              <div className="absolute inset-0 rounded-2xl bg-white/20 backdrop-blur-md" />
              <span className="relative z-10 text-white">
                {icon}
              </span>
            </div>
          </div>
        )}

        {/* Content */}
        <div className="text-center space-y-2">
          {children}
        </div>
      </div>
    </div>
  );
};
