import "./Strength.scss";
import cfg from "../../config";

function Strength() {
    return (
        <div className="strengths">
            <h2 className="strengthTitle">Strengths</h2>
            <ul className="strengthList">
                {
                    cfg.strengths.map((item) => {
                        return (
                                <li>{item}</li>
                        )
                    })
                }
            </ul>
        </div>
    )
}

export default Strength;