import "./Experience.scss"
import cfg from "../../config";

function Experience({isMobile}) {
    return (
        <div className="experience">
            <div className="experiencePageTitle">
                <h1>Experience</h1>
            </div>
            <div className="experienceContainer">
                {cfg.experience.map((exp, index) => {
                    return (
                        <div className="experiences">
                            <div className="experienceTitle">
                                <h2>{exp.orgName}</h2>
                            </div>
                            <div className="experienceSubTitle">
                                <h5>
                                    <text> {exp.position} | </text>
                                    <text className="experienceDuration"> {exp.duration} </text>
                                </h5>
                            </div>
                            <div className="experienceDesc">
                                {exp.description.map((point, index) => {
                                    return <li>{point}</li>
                                })}
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Experience