import "./Home.scss"
import cfg from "../../config"

function Home({isMobile}) {
    return (
        <div className="home">
            <div className={isMobile ? "helloMobile" : "hello"}>
                <h1><span id="text"/></h1>
            </div>
            <div className={isMobile ? "imageMobile" : "image"}>
                <img src={cfg.imageURL} alt="Not Loaded"/>
            </div>
            <div className={isMobile ? "descriptionHomeMobile" : "descriptionHome"}>
                <h3>{cfg.description}</h3>
            </div>
        </div>
    )
}

export default Home