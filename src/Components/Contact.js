import React from 'react'
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdOutlineAttachEmail } from "react-icons/md";
import { FaWhatsapp } from "react-icons/fa";

const Contact = () => {
  return (
      <div className='contact-container'>
          <div className='contact'>
              <h3>Contact Me</h3>
              <div className='contact-info'>
                  <BsFillTelephoneFill />
                  <p>+234 803 587 9166</p>
              </div>

              <div className='contact-info'>
                  <FaWhatsapp />
                  <p>+234 803 587 9166</p>
              </div>

              <div className='contact-info'>
                  <MdOutlineAttachEmail />
                  <p>Oyelamioluwaseunp@yahoo.com</p>
              </div>
          </div>
      </div>
  )
}

export default Contact
