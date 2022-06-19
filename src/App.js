import "./App.scss"
import {BrowserRouter} from "react-router-dom";
import LeftSideBar from "./components/sideBar/LeftSideBar";
import Routing from "./components/routing/Routing";
import RightSideBar from "./components/sideBar/RightSideBar";
import size from "./AppHooks"

function App() {
    const {isMobile} = size()

    return (
        <div
            className="box">
            <BrowserRouter>
                <LeftSideBar isMobile={isMobile}/>
                <RightSideBar isMobile={isMobile}/>
                <Routing isMobile={isMobile}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
