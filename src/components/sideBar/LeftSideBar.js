import "./LeftSideBar.scss"
import {Link} from "react-router-dom";

function LeftSideBar({isMobile}) {

    return (
        <nav className={isMobile ? "sideBarMobile" : "sideBarLeft"}>
            <Link to="/" className="nav-icon-left">Home</Link>
            <Link to="/projects" className="nav-icon-left">Projects</Link>
            <Link to="/blogs" className="nav-icon-left">Blogs</Link>
            <Link to="/about" className="nav-icon-left">About</Link>
            <Link to="/resume" className="nav-icon-left">Resume</Link>
        </nav>
    )
}

export default LeftSideBar