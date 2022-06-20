import "./Skills.scss";
import cfg from "../../config";
import GetIcon from "./Icons";

function Skills({isMobile}) {
    return (
        <div className="skills">
            <h2 className="skillsTitle">Skills</h2>
            <div className="skillIconDiv">
                {
                    cfg.skills.map((item) => <img src={GetIcon({item})} alt={item} className={isMobile ? "skillIconMobile" : "skillIcon"}/>)
                }
            </div>
        </div>
    )
}

export default Skills