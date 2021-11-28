import './App.css';
import {Box, ThemeProvider} from "@mui/material";
import {lightTheme, darkTheme} from "./Theme"
import AppBar from "./component/appbar/appbar"
import Profile from "./component/profile/profile";
import {Grid} from "@material-ui/core";
import {Helmet} from "react-helmet";
import cfg from "./config";
import Blogs from "./component/blogs/blogs";
import resize from "./AppHooks"
import {LIGHT_THEME} from "./constants";

function App() {
    const {isMobile, theme, toggleTheme} = resize()

    return (
        <ThemeProvider theme={(theme === LIGHT_THEME) ? lightTheme : darkTheme}>
            <Box width="100%" sx={{bgcolor: 'background.default', height: "100vh"}}>
                <Helmet>
                    <title>{cfg.title}</title>
                </Helmet>
                <AppBar theme={theme} toggleTheme={toggleTheme} />
                {/*<marquee>This site is under construction</marquee>*/}
                {
                    isMobile ? <Profile isMobile={isMobile}/> :
                        <fragment>
                            <Grid
                                container
                                direction={isMobile ? "column" : "row"}
                                justifyContent="space-evenly"
                                alignItems="center"
                            >
                                <Blogs isMobile={isMobile} theme={theme}/>
                                <Profile isMobile={isMobile}/>
                            </Grid>
                        </fragment>
                }
            </Box>
        </ThemeProvider>
    );
}

export default App;
