import "./App.scss"
import {BrowserRouter} from "react-router-dom";
import LeftSideBar from "./components/sideBar/LeftSideBar";
import Routing from "./components/routing/Routing";
import RightSideBar from "./components/sideBar/RightSideBar";


function App() {
    return (
        <div
            className="box">
            <BrowserRouter>
                <LeftSideBar/>
                <RightSideBar/>
                <Routing/>
            </BrowserRouter>
        </div>
    );
}

export default App;
