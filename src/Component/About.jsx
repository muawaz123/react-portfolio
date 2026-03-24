import React from 'react'
import { FaPhoneAlt, FaEnvelope, FaUser } from "react-icons/fa"
import about from "./Data/about.json"
import Pdf from '../Pdf/Muawaz.pdf'
import muawaz from  '../assets/Hero/muawaz1.png'

const About = () => {
  return (
    <div className="container about" id="about">
      <h1>About Me</h1>
      {about.map((data) => {
        return (
          <div
            key={data.id}
            className="about-items text-center my-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="left">
              <img src={muawaz} alt=''/>
            </div>
            <div className="right">
              <h2>{data.title}</h2>
              <p>{data.description}</p>
              <div className="contact-box">
                <h4><FaUser className="icon" /> {data.name}</h4>
                <h5><FaPhoneAlt className="icon phone-icon" /> {data.contact.phone}</h5>
                <h5><FaEnvelope className="icon" /> {data.contact.email}</h5>
                <a
                  href={Pdf}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn btn-outline-warning my-3"
                >
                  View Resume
                </a>

              </div>
            </div>
          </div>
        );
      })}
    </div>
  )
}

export default About
