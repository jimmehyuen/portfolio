import "./about.css"
import Me from "../../img/portrait.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card bg"></div>
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>

      </div>
      <div className="a-right">
      <h1 className="a-title">About Me</h1>
      <p className="a-sub">Sub</p>
      <p className="a-desc">Description</p>
      </div>
    </div>
  )
}

export default About
