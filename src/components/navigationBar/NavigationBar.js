import "./NavigationBar.scss"
import {Link} from "react-router-dom";
import cfg from "../../config"


function NavigationBar({isMobile}) {

    return (
        <nav className={isMobile ? "navigationBarMobile" : "navigationBar"}>
            <Link to="/" className="navigationText">Home</Link>
            <Link to="/projects" className="navigationText">Projects</Link>
            <Link to="/blogs" className="navigationText">Blogs</Link>
            <Link to="/about" className="navigationText">About</Link>
            <Link to="/experience" className="navigationText">Experience</Link>
            <a href={cfg.resume} className="navigationText" download>Resume</a>
        </nav>
    )
}

export default NavigationBar