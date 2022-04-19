import { useRef, useState } from "react"
import "./contact.css"
import emailjs from '@emailjs/browser';
// import emailjs from 'emailjs-com';

const Contact = () => {
  const formRef = useRef();
  const [done, setDone] =useState(false)

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
              <img src="phone.svg" alt="" className="c-icon" />
              +77 3000 5429
            </div>
            <div className="c-info-item">
              <img src="email.svg" alt="" className="c-icon" />
              jimmehyuen@gmail.com
            </div>
          </div>
        </div>
        <div className="c-right">
          <p className="c-desc">
            <b>Get in touch</b>
          </p>
          <form ref={formRef} onSubmit={handleSubmit}>
            <input type="text" placeholder="Name" name="user_name" />
            <input type="text" placeholder="Subject" name="user_subject" />
            <input type="text" placeholder="Email" name="user_email" />
            <textarea rows="10" placeholder="Message" name="message"></textarea>
            <button>Submit</button>
            {done && "Thank you for your message"}
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
