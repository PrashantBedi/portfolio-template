import "./App.scss"
import {BrowserRouter} from "react-router-dom";
import NavigationBar from "./components/navigationBar/NavigationBar";
import Routing from "./components/routing/Routing";
import SocialBar from "./components/socialBar/SocialBar";
import size from "./AppHooks"

function App() {
    const {isMobile} = size()

    return (
        <div
            className="box">
            <BrowserRouter>
                <NavigationBar isMobile={isMobile}/>
                <SocialBar isMobile={isMobile}/>
                <Routing isMobile={isMobile}/>
            </BrowserRouter>
        </div>
    );
}

export default App;
