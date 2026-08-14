import { useTheme } from '../../hooks/useTheme';

const ThemeToggle = () => {
    const { theme, setTheme } = useTheme();

    const toggleTheme = () => {
        setTheme(theme === 'dark' ? 'light' : 'dark');
    };

    return (
        <button
            onClick={toggleTheme}
            className="p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white"
            aria-label="Toggle theme"
        >
            {theme === 'dark' ? '🌙' : '☀️'}
        </button>
    );
};

export default ThemeToggle;