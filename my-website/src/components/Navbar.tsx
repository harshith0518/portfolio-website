import { useTheme } from "../contexts/ThemeContext";
import { smoothScroll } from "../utils/SmoothScroll";
import ThemeButton from "./Elements/ThemeButton";

const Navbar = () => {
    const {theme} = useTheme();
    return (<>
        <div className = "flex justify-between items-center fixed top-0 left-0 w-full z-20">
            {/* <img
            src={logo}
            alt="logo"
            className={`w-10 h-10 rounded-full hover:shadow-2xl ${theme !== "dark"?"hover:shadow-zinc-950":"hover:shadow-gray-200"} ml-10 `}
            /> */}
            <div className={`ml-140 cursor-pointer my-10 rounded-2xl m-5 border border-neutral-600
                relative overflow-hidden
                backdrop-blur-[2px] px-5 py-2
                transition-all duration-300 ease-out
                hover:scale-[1.03]
                active:scale-[0.98]
                focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500/40
                ${
                theme === 'dark'
                ? `bg-neutral-400/20 text-neutral-300 hover:bg-neutral-400/30 shadow-lg shadow-black/10`
                : `bg-neutral-300/20 text-neutral-700 hover:bg-neutral-300/30 shadow-lg shadow-neutral-400/20`
                }
                `}>
                
                <nav className="flex gap-10">
                    {[
                        { label: "Home", ref: "home" },
                        { label: "Work", ref: "work" },
                        { label: "About", ref: "about" },
                        { label: "Connect", ref: "connect" },
                    ].map((item) => (
                        <a
                        key={item.ref}
                        href={"#"+item.ref}
                        onClick={() => smoothScroll(item.ref, 500)}
                        className="relative px-2 py-1 text-sm font-medium
                        transition-all duration-300
                        hover:tracking-wide
                        after:absolute after:left-0 after:-bottom-1
                        after:h-[2px] after:w-full after:origin-left
                        after:scale-x-0 after:bg-current
                        after:transition-transform after:duration-300
                        hover:after:scale-x-100"
                        >
                            {item.label}
                        </a>
                    ))}
                    </nav>
                </div>
            <ThemeButton/>
        </div>
    </>)
};


export default Navbar;