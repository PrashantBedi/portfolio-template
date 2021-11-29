import * as React from 'react';
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
import {BrowserRouter as Router, Routes, Route, Navigate} from "react-router-dom";
import Projects from "./component/project/project";

const onHomeClick = () => {
    return <Navigate to='/'/>
}

const onProjectClick = () => {
    return <Navigate to='/project'/>
}

const onBlogClick = () => {
    return <Navigate to='/blog'/>
}

function App() {
    const {isMobile, theme, toggleTheme} = resize()

    const mobileRoutes = () => {
        return <Router>
            <Routes>
                <Route path="/"
                       element={<Profile isMobile={isMobile}
                                         onBlogClick={onBlogClick}
                                         onHomeClick={onHomeClick}
                                         onProjectClick={onProjectClick}
                       />}
                />
                <Route path="/blogs"
                       element={<Blogs isMobile={isMobile}
                                       theme={theme}
                       />}
                />
                <Route path="/project"
                       element={<Projects isMobile={isMobile}
                                          theme={theme}
                       />}
                />
                <Route path="/about"/>
            </Routes>
        </Router>
    }

    const otherRoutes = () => {
        return <Router>
            <Routes>
                <Route path="/"
                       element={<Blogs isMobile={isMobile}
                                       theme={theme}
                       />}
                />
                <Route path="/project"
                       element={<Projects isMobile={isMobile}
                                          theme={theme}
                       />}
                />
                <Route path="/about"/>
            </Routes>
        </Router>
    }

    return (
        <ThemeProvider theme={(theme === LIGHT_THEME) ? lightTheme : darkTheme}>
            <Box width="100%" sx={{bgcolor: 'background.default', height: "105vh"}}>
                <Helmet>
                    <title>{cfg.title}</title>
                </Helmet>
                <AppBar theme={theme} toggleTheme={toggleTheme} onHomeClick={onHomeClick}/>
                <marquee>This site is under construction</marquee>
                {
                    isMobile ? mobileRoutes() :
                        <React.Fragment>
                            <Grid
                                container
                                direction={isMobile ? "column" : "row"}
                                justifyContent="space-evenly"
                                alignItems="flex-start"
                            >
                                {otherRoutes()}
                                <Profile isMobile={isMobile} onBlogClick={onBlogClick} onHomeClick={onHomeClick}
                                         onProjectClick={onProjectClick}/>
                            </Grid>
                        </React.Fragment>
                }
            </Box>
        </ThemeProvider>
    );
}

export default App;
