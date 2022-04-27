import "./projectList.css"
import Project from "../project/Project"
import {projects} from "../../data"

const ProjectList = () => {
  return (
    <div className="pl">
      <div className="pl-text">
       <h1 className="pl-title">My Projects</h1>
      </div>
      <div className="pl-list">
        {projects.map((item) => (
          <div className="pj-cards">
            <div className="pj-card">
              <div className="pj-main">
                <div className="pj-title">{item.title}</div>
                <div className="pj-image">
                  <Project key={item.id} img={item.img} link={item.link} />
                </div>
                <div className="pj-desc">{item.desc}</div>
              </div>
              <div className="button-wrapper">

                <a class="btn btn-gradient" href={item.github}target="_blank" rel="noreferrer">Code</a>

                <a class="btn btn-gradient" href={item.link}target="_blank" rel="noreferrer">Website</a>

              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
