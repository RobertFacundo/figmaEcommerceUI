import { createContext, useState, useEffect, type ReactNode } from 'react';
import type { Dispatch, SetStateAction } from 'react';

type Theme = 'light' | 'dark'

interface ThemeContextType {
    theme: string;
    setTheme: Dispatch<SetStateAction<Theme>>
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType>({
    theme: 'light',
    setTheme: () => { },
    toggleTheme: () => { },
});

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [theme, setTheme] = useState<Theme>(() => {
        return (localStorage.getItem('theme') as Theme || 'light')
    });

    useEffect(() => {
        const body = document.body;
        body.classList.toggle('dark', theme === 'dark');
        
        localStorage.setItem('theme', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(prev => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ theme, setTheme, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    )
}

export default ThemeContext;