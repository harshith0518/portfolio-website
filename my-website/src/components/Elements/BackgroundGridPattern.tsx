import { useTheme } from "../../contexts/ThemeContext";

const BackgroundGridPattern = () =>{
  const {theme} = useTheme();

    return (
        <div className="absolute inset-0">
        <div
          className={`
            ${theme === 'dark'?`relative h-full w-full
            [&>div]:absolute
            [&>div]:inset-0
            bg-zinc-950
            [&>div]:bg-[linear-gradient(to_right,#6a6a6a2e_1px,transparent_1px),linear-gradient(to_bottom,#d6d6d60a_1px,transparent_1px)]
            [&>div]:bg-[size:30px_30px]`:`
            relative h-full w-full
            [&>div]:absolute
            [&>div]:inset-0
            bg-gray-200
            [&>div]:bg-[linear-gradient(to_right,#b8b8b82e_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)]
            [&>div]:bg-[size:30px_30px]
  `}
          `}
        >
          <div />
        </div>
      </div>
    )
};


export default BackgroundGridPattern;