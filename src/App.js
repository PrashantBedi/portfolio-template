import './App.css';
import {ThemeProvider} from "@mui/material";
import {lightTheme} from "./Theme"
import AppBar from "./appbar/appbar"

function App() {
  return (
    <ThemeProvider theme={lightTheme}>
      <AppBar/>
    </ThemeProvider>
  );
}

export default App;
