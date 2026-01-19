import { createContext,useContext,useEffect,useState } from "react";

type Theme = 'dark'|'light';

const ThemeContext = createContext({
    theme:'light' as Theme,
    toggleTheme: () => {},
});

export function ThemeProvider({children} : {children:React.ReactNode}) {
    const [theme,setTheme] = useState<Theme>('light');

    useEffect(() => {
        const savedTheme = localStorage.getItem('theme') as Theme|null;
        if(savedTheme) {
            setTheme(savedTheme);
        } else if(window.matchMedia('(prefers-color-scheme: dark)').matches) {
            setTheme('dark');
        }
    },[])

    useEffect(() => {
        document.documentElement.classList.toggle('dark',theme === 'dark');
        localStorage.setItem('theme',theme);
    })

    return <ThemeContext.Provider
        value = {{
            theme,
            toggleTheme: () => setTheme(t => (t === 'dark'?'light':'dark')),
        }}
    >
        {children}
    </ThemeContext.Provider>
}


export const useTheme = () => useContext(ThemeContext)