import cfg from "../../config";
import "./Education.scss";

function Education() {
    return (
        <div className="education">
            <h2 className="educationTitle">Education</h2>
            {
                cfg.education.map((item) => {
                    return (
                        <>
                            <h3>{item.institution}</h3>
                            <h6>{item.degree} {item.major === "" ? "" : "| " + item.major}</h6>
                            <h5>{item.graduationYear} | {item.place}</h5>
                        </>
                    )
                })
            }
        </div>
    )
}

export default Education