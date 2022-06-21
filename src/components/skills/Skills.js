import "./Skills.scss";
import cfg from "../../config";
import icons from "../../icons";

function Skills() {
    return (
        <div className="skills">
            <h2 className="skillsTitle">Skills</h2>
            <div className="skillIconDiv">
                {
                    cfg.skills.map((item) =>
                        <img src={icons[{item}.item.toLowerCase()]} alt={item} className="skillIcon" title={item}/>
                    )
                }
            </div>
        </div>
    )
}

export default Skills