import './App.css';
import {Box, ThemeProvider} from "@mui/material";
import {theme} from "./Theme"
import AppBar from "./component/appbar/appbar"
import Profile from "./component/profile/profile";
import {Grid} from "@material-ui/core";
import {Helmet} from "react-helmet";
import cfg from "./config";
import Blogs from "./component/blogs/blogs";
import resize from "./AppHooks"

function App() {
    const {isMobile} = resize()

    return (
        <Box>
            <Helmet>
                <title>{cfg.title}</title>
            </Helmet>
            <ThemeProvider theme={theme}>
                <AppBar/>
                {/* eslint-disable-next-line jsx-a11y/no-distracting-elements */}
                <marquee>This site is under construction</marquee>
                <Box width="100%">
                    {
                        isMobile ?
                            <Grid
                                container
                                direction="column"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <Blogs isMobile={isMobile}/>
                                <Profile isMobile={isMobile}/>
                            </Grid> :
                            <Grid
                                container
                                direction="row"
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <Profile isMobile={isMobile}/>
                                <Blogs isMobile={isMobile}/>
                            </Grid>
                    }
                </Box>
            </ThemeProvider>
        </Box>
    );
}

export default App;
