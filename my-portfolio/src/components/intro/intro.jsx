import "./intro.css"
import Me from "../../img/mini-golf.jpg"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className= "i-intro">Hello, My name is</h2>
          <h1 className="i-name">Jimmy Yuen</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">HTML</div>
              <div className="i-title-item">CSS</div>
              <div className="i-title-item">JavaScript</div>
              <div className="i-title-item">Ruby</div>
              <div className="i-title-item">React</div>
            </div>
          </div>
          <div className="i-desc">
            I am an aspiring Full-stack Developer based in London
            <a href="https://github.com/jimmehyuen"><i class="fab fa-github"></i></a>
            <a href="https://www.linkedin.com/in/jimmy-yuen"><i class="fab fa-linkedin"></i></a>
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
