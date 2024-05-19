import { MdDarkMode } from "react-icons/md";
import { IoSunny } from "react-icons/io5";
import { useState, useEffect } from 'react';
import { ThemeDetect } from '../../../../functions/ThemeChange';

const ThemeToggleButton = () => {
    const [darkTheme, setDarkTheme] = useState<boolean>(ThemeDetect);

    useEffect(() => {
        const root = document.documentElement;
        if (darkTheme) {
            root.style.setProperty('--primary-color', '#242424'); // Default color scheme
            root.style.setProperty('--secondary-color', 'rgba(255, 255, 255, 0.87)');
            localStorage.setItem('darkTheme', 'dark');
        } else {
            root.style.setProperty('--primary-color', 'rgba(255, 255, 255, 0.87)');
            root.style.setProperty('--secondary-color', '#242424');
            localStorage.setItem('darkTheme', 'light')
        }
    }, [darkTheme]);
    return (
        <span onClick={() => { setDarkTheme(prevDarkTheme => !prevDarkTheme) }}>
            {darkTheme ? <IoSunny size={25} /> : <MdDarkMode size={25} />}
        </span>
    )
}

export default ThemeToggleButton