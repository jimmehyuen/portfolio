import "./projectList.css"
import Project from "../project/Project"
import {projects} from "../../data"

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
       <h1 className="pl-title">My Projects</h1>
       {/* <p className="pl-desc">Description</p> */}
      </div>

      <div className="pl-list">
        {projects.map((item) => (
          <div className="pl-wrapper">
            <div className="pj-card">
              <div className="pj-title">
                {item.title}
              </div>

              <div className="pj-image">
              <Project key={item.id} img={item.img} link={item.link} />

              </div>
              <div className="pj-desc">{item.desc}</div>

              <a href={item.github} target="_blank" rel="noreferrer">
                <img src="github.png" alt="" className="pj-github" />
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
