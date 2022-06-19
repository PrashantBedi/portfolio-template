import {Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Projects from "../projects/Projects";
import Blogs from "../Blogs/Blogs";
import About from "../About/About";

function Routing({isMobile}) {
    return (
        <Routes>
            <Route path="/" element={<Home isMobile={isMobile}/>}/>
            <Route path="/projects" element={<Projects/>}/>
            <Route path="/blogs" element={<Blogs/>}/>
            <Route path="/about" element={<About/>}/>
        </Routes>
    )
}

export default Routing