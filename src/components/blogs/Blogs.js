import "./Blogs.scss"
import cfg from "../../config";

function Blogs({theme}) {
    return (
        <div className="blogs">
            <div className="blogsTitle">
                <h1>Blogs</h1>
            </div>
            {
                cfg.blogs.map(value => {
                    return <div class="blogCard">
                        <div className="part1">
                            <h2 className="blogTitle">
                                {value.topic}
                            </h2>
                            <a href={value.repoUrl} target="_blank" rel="noopener noreferrer">
                                {
                                    value.repoUrl === "" ? "" :
                                        <h6>Open Blog</h6>
                                }
                            </a>
                        </div>
                        <div className="part2">

                        </div>
                    </div>
                })
            }
        </div>
    )
}

export default Blogs