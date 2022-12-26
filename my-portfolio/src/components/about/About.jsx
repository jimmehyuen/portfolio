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
        <div className="a-desc">
          <p>
            Welcome to my portfolio website! I have alwasy been fascinated by technology and how it has transformed our lives in the past twenty years. Prior to becoming a developer, I worked in the banking industry for 5 years after I completed my Masters Degree in Business Management.
          </p>
          <br />
          <p>
            During COVID-19 lockdown, I started taking online coding courses out of curiousity and it turned out to be a lot more enjoyable than I'd originally anticipated. Eventually, I decided to make a career change by attending <a href="https://www.lewagon.com/london" target="_blank">Le Wagon's</a> Web Development bootcamp in January 2022. I am currently working as a Junior Web Developer at <a href="https://www.3bweb.com" target="_blank">3B Digital</a>.
          </p>
        </div>
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
