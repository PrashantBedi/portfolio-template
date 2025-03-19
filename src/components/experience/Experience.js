import "./Experience.scss";
import cfg from "../../config";

function Experience({ isMobile }) {
    return (
        <div className="experience">
            <div className="experiencePageTitle">
                <h1>Experience</h1>
            </div>
            <div className="timeline">
                {cfg.experience.map((exp, index) => {
                    return (
                        <div key={index} className="timelineItem">
                            <div className="timelineContent">
                                <h2 className="experienceTitle">{exp.orgName}</h2>
                                <h5 className="experienceSubTitle">
                                    <span>{exp.position}</span>
                                </h5>
                                <h5 className="experienceDuration">
                                    {exp.from} - {exp.to}
                                </h5>
                                <div className="experienceDesc">
                                    {exp.description.map((point, idx) => (
                                        <p key={idx} className="experienceDescItem">{point}</p>
                                    ))}
                                </div>
                            </div>
                        </div>
                    );
                })}
            </div>
        </div>
    );
}

export default Experience;