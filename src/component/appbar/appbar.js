import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BrightModeIcon from '@mui/icons-material/Brightness4';
import {Grid, IconButton} from "@mui/material";
import {DARK_THEME} from "../../constants";
import cfg from "../../config";
import changeTheme from "../hooks/changeTheme";

const CustomAppBar = () => {
    const {theme, toggleTheme} = changeTheme()

    return (
        <Box sx={{flexGrow: 1}}>
            <AppBar position="static">
                <Toolbar>
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-between"
                        alignItems="baseline"
                    >
                        <IconButton
                            color="inherit"
                        >
                            <Typography
                                variant="h6"
                                component="div"
                                sx={{flexGrow: 1}}
                            >
                                {cfg.name}
                            </Typography>
                        </IconButton>
                        <IconButton
                            color="inherit"
                            onClick={toggleTheme}
                        >
                            {
                                (theme === DARK_THEME) ? <BrightModeIcon/> : <DarkModeIcon/>
                            }
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}

export default CustomAppBar
