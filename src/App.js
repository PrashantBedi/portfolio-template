import './App.css';
import {ThemeProvider} from "@mui/material";
import {lightTheme} from "./Theme"
import AppBar from "./component/appbar/appbar"
import Profile from "./component/profile/profile";
import {Grid} from "@material-ui/core";

function App() {
    return (
        <ThemeProvider theme={lightTheme}>
            <AppBar/>
                <Grid
                    container
                    direction="row"
                    justifyContent="space-around"
                    alignItems="center"
                >
                    <Profile/>
                </Grid>
        </ThemeProvider>
    );
}

export default App;
