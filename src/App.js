import './App.css';
import {Box, ThemeProvider} from "@mui/material";
import {lightTheme} from "./Theme"
import AppBar from "./component/appbar/appbar"
import Profile from "./component/profile/profile";
import {Grid} from "@material-ui/core";
import {Helmet} from "react-helmet";
import cfg from "./config";
import Blogs from "./component/blogs/blogs";

function App() {
    return (
        <fragment>
            <Helmet>
                <title>{cfg.title}</title>
            </Helmet>
            <ThemeProvider theme={lightTheme}>
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
        </fragment>
    );
}

export default App;
