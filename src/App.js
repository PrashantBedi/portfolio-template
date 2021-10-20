import './App.css';
import {ThemeProvider} from "@mui/material";
import {lightTheme} from "./Theme"
import AppBar from "./component/appbar/appbar"

function App() {
  return (
      <ThemeProvider theme={lightTheme}>
          <AppBar/>
          <Profile/>
      </ThemeProvider>
  );
}

export default App;
