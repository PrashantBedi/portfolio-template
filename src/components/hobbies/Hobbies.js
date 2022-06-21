import "./Hobbies.scss";
import cfg from "../../config";

function Hobbies() {
    return (
        <div className="hobbies">
            <h2 className="hobbiesTitle">Hobbies</h2>
            <ul className="hobbiesList">
                {
                    cfg.hobbies.map((item) => {
                        return (
                                <li>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Hobbies;