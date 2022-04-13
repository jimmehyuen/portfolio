import "./intro.css"
import Me from "../../img/portrait.jpg"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className= "i-intro">Hello, My name is</h2>
          <h1 className="i-name">Jimmy</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Full-stack Developer</div>
              <div className="i-title-item">Front-end Developer</div>
              <div className="i-title-item">Back-end Developer</div>
              <div className="i-title-item">Reader</div>
              <div className="i-title-item">Gamer</div>
            </div>
          </div>
          <div className="i-desc">
            I am a passionate Full-stack Developer based in London
          </div>
        </div>
      </div>
      <div className="i-right">
        <img src={Me} alt="" className="i-img" />
      </div>
    </div>
  )
}

export default Intro