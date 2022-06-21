import "./Projects.scss"
import cfg from "../../config";

function Projects({isMobile}) {
    return (
        <div className="projects">
            <div className="projectsPageTitle">
                <h1>Projects</h1>
            </div>
            <div className="projectsContainer">
                {cfg.projects.map((project, index) => {
                    return (
                        <div className={isMobile ? "project projectCardMobile" : "project projectCard"} key={index}>
                            <div className="projectImage">
                                <img src={project.imageUrl} alt={project.title}/>
                            </div>
                            <div className="projectInfo">
                                <div className="projectTitle">
                                    <h2>{project.title}</h2>
                                </div>
                                <div className="projectDescription">
                                    <p>{project.description}</p>
                                </div>
                                <div className="projectLink">
                                    <a href={project.repoUrl} target="_blank" rel="noopener noreferrer">
                                        <i>Github</i>
                                    </a>
                                    <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">
                                        <i>Demo</i>
                                    </a>
                                </div>
                            </div>
                        </div>
                    )
                })
                }
            </div>
        </div>
    )
}

export default Projects