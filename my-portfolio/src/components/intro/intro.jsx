import "./intro.css"
import bgImage from "../../video/matrix.mp4"
import React from "react"

const Intro = () => {
  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className= "i-intro">Hello, My name is</h2>
          <h1 className="i-name">Jimmy Yuen</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-end Developer</div>
              <div className="i-title-item">Back-end Developer</div>
              <div className="i-title-item">UI/UX Designer</div>
            </div>
          </div>
          <div className="i-desc">
            I am an aspiring Full-stack Developer based in London
          </div>
          <div className="i-icon-wrapper">
            <a href="https://github.com/jimmehyuen" target="_blank" rel="noreferrer"><img src="github.png" class="i-icon" alt="" /></a>
            <a href="https://www.linkedin.com/in/jimmy-yuen" target="_blank" rel="noreferrer"><img src="linkedin.png" class="i-icon" alt="" /></a>
          </div>
        </div>
      </div>
      <div className="i-right">
        {/* <img src={Me} alt="" className="i-img" /> */}
        <video autoPlay loop muted>
        <source
         src={bgImage} type="video/mp4" className="i-bg"
        />
        </video>
      </div>
    </div>
  )
}

export default Intro
