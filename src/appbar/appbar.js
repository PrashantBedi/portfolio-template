import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import DarkModeIcon from '@mui/icons-material/DarkMode';
import BrightModeIcon from '@mui/icons-material/Brightness4';
import {Grid, IconButton} from "@mui/material";

var mode = "lightmode"

export default function CustomAppBar() {
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
                                PrashantB
                            </Typography>
                        </IconButton>
                        <IconButton
                            color="inherit"
                        >
                            {
                                (mode === "darkmode") ? <BrightModeIcon/> : <DarkModeIcon/>
                            }
                        </IconButton>
                    </Grid>
                </Toolbar>
            </AppBar>
        </Box>
    );
}
