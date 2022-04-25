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
            <Project key={item.id} img={item.img} link={item.link} />
            <div>{item.desc}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

export default ProjectList
