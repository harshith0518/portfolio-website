import { useTheme } from '../../contexts/ThemeContext';
import { Moon, Sun } from 'lucide-react'


const ThemeButton = () => {
    const {theme,toggleTheme} = useTheme();

    return (
        <>
        

        <button onClick = {toggleTheme} className={`cursor-pointer my-10 rounded-2xl m-5 border border-neutral-600
            relative overflow-hidden
            backdrop-blur-[2px] px-3 py-2
            transition-all duration-300 ease-out
            hover:scale-[1.08]
            active:scale-[0.92]
            focus:outline-none 
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
            before:bg-gradient-to-r before:from-transparent before:via-white/10 before:to-transparent
            before:opacity-0 before:transition-opacity before:duration-200
            hover:before:opacity-40
        `}>

            {theme === 'dark' ? (<Sun className="text-yellow-400" />)
                                :(<Moon className="text-slate-700" />)}

        </button>
        </>
    )
};


export default ThemeButton;