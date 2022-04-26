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
            <div className="pj-title">
              {item.title}
            </div>

            <div className="pj-image">
            <Project key={item.id} img={item.img} link={item.link} />

            </div>
            <div>{item.desc}</div>

          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
