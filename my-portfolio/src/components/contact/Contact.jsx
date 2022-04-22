import { useContext, useRef, useState } from "react"
import "./contact.css"
import emailjs from '@emailjs/browser';
import { ThemeContext } from "../../context";
// import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] =useState(false)
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  const handleSubmit = (e)=>{
    e.preventDefault()
    emailjs.sendForm('service_d3julxg', 'template_vg9nzz6', formRef.current, 'V7-z5ytDokvKfF5hY')
    .then((result) => {
        console.log(result.text);
        setDone(true)
    }, (error) => {
        console.log(error.text);
    });
  }

  return (
    <div className='c'>
      <div className="c-bg"></div>
      <div className="c-wrapper">
        <div className="c-left">
          <h1 className="c-title">
            Contact me
          </h1>
          <div className="c-info">
            <div className="c-info-item">
              <img src="phone.png" alt="" className="c-icon" />
              <a class="noDec" href="tel:+44 77 3000 5429" Text style={{color: darkMode && "white"}}>+44 77 3000 5429</a>
            </div>
            <div className="c-info-item">
              <img src="email.png" alt="" className="c-icon" />
              <a class="noDec" href="mailto:jimmehyuen@gmail.com" Text style={{color: darkMode && "white"}}>jimmehyuen@gmail.com</a>
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Alternatively</b>
            <p>Feel free to leave a message below and I'll try my
best to get back to you!</p>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Name" name="user_name" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Subject" name="user_subject" />
            <input style={{backgroundColor: darkMode && "#333"}} type="text" placeholder="Email" name="user_email" />
            <textarea style={{backgroundColor: darkMode && "#333"}} rows="10" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && "Thank you for your message"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
