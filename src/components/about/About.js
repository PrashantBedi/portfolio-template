import "./About.scss"
import Education from "../education/Education";
import Skills from "../skills/Skills";

function About({isMobile}) {
    return (
        <div className="about">
            <div className="aboutTitle">
                <h1>About</h1>
            </div>
            <div className={isMobile ? "column" : "row"}>
                <div className={isMobile ? "sectionMobile" : "section"}>
                    <Education/>
                </div>
                <div className="section">
                    <Skills isMobile={isMobile}/>
                </div>
            </div>
            <div className={isMobile ? "column" : "row"}>
                <div className="section">
                    <h2 className="subHeading">Strengths</h2>
                </div>
                <div className="section">
                    <h2 className="subHeading">Hobbies</h2>
                </div>
            </div>
        </div>
    )
}

export default About