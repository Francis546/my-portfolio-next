import { useEffect, useState } from 'react';

const useTheme = () => {
    const [theme, setTheme] = useState('dark');

    useEffect(() => {
        const root = window.document.documentElement;
        root.classList.add(theme);
        
        return () => {
            root.classList.remove(theme);
        };
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'dark' ? 'light' : 'dark'));
    };

    return { theme, toggleTheme };
};

export default useTheme;