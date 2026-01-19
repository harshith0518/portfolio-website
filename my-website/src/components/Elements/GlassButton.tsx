
interface GlassButtonProps {
    children: React.ReactNode;
    theme : string;
    onClick?: () => void;
}

export default function GlassButton({children, theme , onClick} : GlassButtonProps) {
    return (
        <button onClick={onClick} className={`
            relative overflow-hidden
            border border-neutral-400/20 rounded-2xl
            px-2 py-1
            backdrop-blur-[2px]

            transition-all duration-300 ease-out
            hover:scale-[1.03]
            active:scale-[0.98]
            focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40

            ${
            theme === 'dark'?
                `bg-neutral-400/20 text-neutral-300
                hover:bg-neutral-400/30
                shadow-lg shadow-black/10`
                : `bg-neutral-300/20 text-neutral-600
                hover:bg-neutral-300/30
                shadow-lg shadow-neutral-400/20`
            }

            before:absolute before:inset-0
            before:bg-gradient-to-r before:from-transparent before:via-white/20 before:to-transparent
            before:opacity-0 before:transition-opacity before:duration-300
            hover:before:opacity-100
        `}
        >
        {children}
        </button>
    );
}
