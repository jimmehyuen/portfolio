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
        <p className="a-desc">
          Hello, my name is Jimmy and I used to work in banking. During COVID-19 lockdown, I started learning to code online. I really enjoyed the problem solving aspect of it and eventually decided to attend the Web Development bootcamp at Le Wagon in January 2022. I am currently seeking an entry-level role as a Full Stack Developer.
        </p>
        <h2 className="techstack-title"> Tech Stack</h2>
        <div className="techstack">
          <img className="tech-icons" src="techstack/html5.svg" alt="html" />
          <img className="tech-icons" src="techstack/css3.svg" alt="css" />
          <img className="tech-icons" src="techstack/javascript.svg" alt="javascript" />
          <img className="tech-icons" src="techstack/react.svg" alt="react" />
          <img className="tech-icons" src="techstack/ruby.svg" alt="ruby" />
          <img className="tech-icons" src="techstack/rails.svg" alt="rails" />
          <img className="tech-icons" src="techstack/bootstrap.svg" alt="bootstrap" />
          <img className="tech-icons" src="techstack/postgresql.svg" alt="postgresql" />

        </div>
      </div>
    </div>
  )
}

export default About
