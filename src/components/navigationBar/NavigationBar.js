import "./NavigationBar.scss"
import {Link} from "react-router-dom";

function NavigationBar({isMobile}) {

    return (
        <nav className={isMobile ? "navigationBarMobile" : "navigationBar"}>
            <Link to="/" className="navigationText">Home</Link>
            <Link to="/projects" className="navigationText">Projects</Link>
            <Link to="/blogs" className="navigationText">Blogs</Link>
            <Link to="/about" className="navigationText">About</Link>
            <Link to="/resume" className="navigationText">Resume</Link>
        </nav>
    )
}

export default NavigationBar