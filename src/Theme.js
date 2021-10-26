import {green, red} from '@material-ui/core/colors';
import {createTheme} from "@mui/material";

export const lightTheme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
            contrastText: '#f0f0f0'
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
            default: '#f0f0f0',
        },
        cardShadow: {
            default: '5px 5px 8px grey'
        }
    },
});

export const darkTheme = createTheme({
    palette: {
        primary: {
            main: '#556cd6',
            contrastText: '#fff'
        },
        secondary: {
            main: '#198534',
        },
        success: {
            main: green['800']
        },
        error: {
            main: red.A400,
        },
        background: {
            default: '#2eb',
        },
    },
});

