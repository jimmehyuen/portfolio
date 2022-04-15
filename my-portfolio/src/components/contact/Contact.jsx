import { useRef } from "react"
import "./contact.css"

const Contact = () => {
  const formRef = useRef()

  const handleSubmit = (e)=>{
    e.preventDefault()

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
          </form>
        </div>
      </div>
    </div>
  )
}

export default Contact
