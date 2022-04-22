import "./about.css"
import Me from "../../img/portrait.jpg"

const About = () => {
  return (
    <div className="a">
      <div className="a-left">
        <div className="a-card">
          <img src={Me} alt="" className="a-img" />
        </div>
      </div>
      <div className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub"></p>
        <p className="a-desc">
          Hi there, my name is Jimmy and I used to work in banking. During COVID-19 lockdown, I started learning to code online. I really enjoyed the problem solving aspect of it and eventually decided to attend the Web Development bootcamp at Le Wagon in January 2022. I am currently seeking an entry-level role as a Full Stack Developer.
        </p>
      </div>
    </div>
  )
}

export default About
