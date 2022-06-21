import "./About.scss"
import Education from "../education/Education";
import Skills from "../skills/Skills";
import Strength from "../strength/Strength";
import Hobbies from "../hobbies/Hobbies";

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
                <div className={isMobile ? "sectionMobile" : "section"}>
                    <Skills/>
                </div>
            </div>
            <div className={isMobile ? "column" : "row"}>
                <div className={isMobile ? "sectionMobile" : "section"}>
                    <Strength/>
                </div>
                <div className={isMobile ? "sectionMobile" : "section"}>
                    <Hobbies/>
                </div>
            </div>
        </div>
    )
}

export default About