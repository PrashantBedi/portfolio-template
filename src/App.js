import './App.css';
import {Box, ThemeProvider} from "@mui/material";
import {theme} from "./Theme"
import AppBar from "./component/appbar/appbar"
import Profile from "./component/profile/profile";
import {Grid} from "@material-ui/core";
import {Helmet} from "react-helmet";
import cfg from "./config";
import Blogs from "./component/blogs/blogs";

function App() {

    return (
        <Box>
            <Helmet>
                <title>{cfg.title}</title>
            </Helmet>
            <ThemeProvider theme={theme}>
                <AppBar/>
                <marquee>This site is under construction</marquee>
                <Box width="100%">
                    <Grid
                        container
                        direction="row"
                        justifyContent="space-evenly"
                        alignItems="center"
                    >
                        <Profile/>
                        <Blogs/>
                    </Grid>
                </Box>
            </ThemeProvider>
        </Box>
    );
}

export default App;
