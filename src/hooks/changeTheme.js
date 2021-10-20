import {useState} from "react";
import {DARK_THEME, LIGHT_THEME} from "../constants";

// eslint-disable-next-line import/no-anonymous-default-export
export default () => {
    const [theme, setTheme] = useState(LIGHT_THEME)

    const toggleTheme = () => {
        (theme === LIGHT_THEME) ? setTheme(DARK_THEME) : setTheme(LIGHT_THEME)
    };

    return {
        theme: theme,
        toggleTheme: toggleTheme
    }
}