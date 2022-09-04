import {Route, Routes} from "react-router-dom";
import Home from "../home/Home";
import Projects from "../projects/Projects";
import Blogs from "../blogs/Blogs";
import About from "../about/About";
import Experience from "../experience/Experience";

function Routing({isMobile}) {
    return (
        <Routes>
            <Route path="/" element={<Home isMobile={isMobile}/>}/>
            <Route path="/projects" element={<Projects isMobile={isMobile}/>}/>
            <Route path="/blogs" element={<Blogs isMobile={isMobile}/>}/>
            <Route path="/about" element={<About isMobile={isMobile}/>}/>
            <Route path="/experience" element={<Experience isMobile={isMobile}/>}/>
        </Routes>
    )
}

export default Routing