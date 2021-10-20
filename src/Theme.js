import {green, red} from '@material-ui/core/colors';
import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
            contrastText: '#fff'
        },
        secondary: {
            main: '#19857b',
        },
        success: {
            main: green['800']
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#fff',
        },
    },
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
            contrastText: '#fff'
        },
        secondary: {
            main: '#19857b',
        },
        success: {
            main: green['800']
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#2e2b2b',
        },
    },
});

