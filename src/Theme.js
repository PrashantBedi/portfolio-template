import {green, red} from '@material-ui/core/colors';
import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#646464',
            contrastText: '#f0f0f0'
        },
        secondary: {
            main: '#3B3B3B',
        },
        success: {
            main: green['800']
        },
        error: {
            main: red.A400,
        },
        background: {
                default: '#f0f0f0',
        },
    },
    typography: {
        fontFamily: [
            'Lato'
        ]
    }
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#3B3B3B',
            contrastText: '#f0f0f0'
        },
        secondary: {
            main: '#f1f1f1',
        },
        success: {
            main: green['800']
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#646464',
        },
    },
});

