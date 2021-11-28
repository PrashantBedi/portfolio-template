import {useEffect, useState} from "react";
import {DARK_THEME, LIGHT_THEME} from "./constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [width, setWidth] = useState(window.innerWidth);
    const [theme, setTheme] = useState(LIGHT_THEME)

    const toggleTheme = () => {
        (theme === LIGHT_THEME) ? setTheme(DARK_THEME) : setTheme(LIGHT_THEME)
    };

    function handleWindowSizeChange() {
        setWidth(window.innerWidth);
    }
    useEffect(() => {
        window.addEventListener('resize', handleWindowSizeChange);
        return () => {
            window.removeEventListener('resize', handleWindowSizeChange);
        }
    }, []);

    let isMobile = (width <= 768);

    return {
        isMobile: isMobile,
        theme: theme,
        toggleTheme: toggleTheme
    }
}