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
          Hello, my name is Jimmy and I have always been fascinated by how the Internet has transformed our lives in the past twenty years. During COVID-19 lockdown I started taking online coding courses out of curiousity. After completing a few Web Development courses it almost felt like I was Neo in The Matrix! Eventually I decided to leave my banking job to attend <a href="https://www.lewagon.com/london" target="_blank">Le Wagon's</a> Web Development bootcamp in January 2022. I am currently working as a Junior Web Developer at <a href="https://www.3bweb.com" target="_blank">3B Digital</a>.
        </p>
        <h2 className="techstack-title"> Tech Stack</h2>
        <div className="techstack">
          <img className="tech-icons" src="techstack/html5.svg" alt="html" />
          <img className="tech-icons" src="techstack/css3.svg" alt="css" />
          <img className="tech-icons" src="techstack/javascript.svg" alt="javascript" />
          <img className="tech-icons" src="techstack/react.svg" alt="react" />
          <img className="tech-icons" src="techstack/ruby.svg" alt="ruby" />
          <img className="tech-icons" src="techstack/rails.svg" alt="rails" />
          <img className="tech-icons" src="techstack/php.png" alt="php" />
          <img className="tech-icons" src="techstack/bootstrap.svg" alt="bootstrap" />
          <img className="tech-icons" src="techstack/docker.png" alt="docker" />
          <img className="tech-icons" src="techstack/postgresql.svg" alt="postgresql" />

        </div>
      </div>
    </div>
  )
}

export default About
