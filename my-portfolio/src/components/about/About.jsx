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
      <p className="a-sub"></p>
      <p className="a-desc">A succesful banking professional with 5 years of experience working for various leading global banks. Recently completed Le Wagon’s intensive Web Development bootcamp. I am a highly motivated self-starter with strong time management and skills. Proven ability to work in high-pressure environments and has an excellent track record of meeting deadlines consistently.
       </p>
      </div>
    </div>
  )
}

export default About
