import {green, red} from '@material-ui/core/colors';
import {createTheme} from "@mui/material";

export const theme = createTheme({
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
    },
});

