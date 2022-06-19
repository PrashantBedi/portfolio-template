import "./Home.scss"
import cfg from "../../config"

function Home({theme}) {
    return (
        <div className="home">
            <div className="hello">
                <h1><span id="text"/></h1>
            </div>
            <div className="descriptionHome">
                <h3>{cfg.description}</h3>
            </div>
        </div>
    )
}

export default Home