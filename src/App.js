import './App.css';
import {ThemeProvider} from "@mui/material";
import {darkTheme} from "./Theme"
import AppBar from "./component/appbar/appbar"

function App() {
  return (
      <ThemeProvider theme={darkTheme}>
          <AppBar/>
      </ThemeProvider>
  );
}

export default App;
