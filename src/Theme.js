import {green, red} from '@material-ui/core/colors';
import {createTheme} from "@mui/material";

export const theme = createTheme({
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
});

