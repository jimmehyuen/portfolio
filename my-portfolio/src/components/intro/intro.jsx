import "./intro.css"
import bgImage from "../../video/matrix.mp4"
import React, { useEffect, useRef } from "react"
import { init } from 'ityped'


const Intro = () => {

  const textRef = useRef();

  useEffect(()=>{
    init(textRef.current, {
      showCursor: true,
      backDelay: 1500,
      backSpeed: 60,
      strings: ['Front-end Developer', 'Back-end Developer', 'UI/UX Designer' ] })
  },[])

  return (
    <div className="i">
      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className= "i-intro">Hi there, My name is</h2>
          <h1 className="i-name">Jimmy Yuen</h1>
          <div className="i-title">
            <div className="i-title-wrapper">
            <span className="i-title-text" ref={textRef}></span>
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
