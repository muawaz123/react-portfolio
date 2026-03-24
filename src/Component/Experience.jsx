import React from 'react'
import experience from "./Data/experience.json"
import img2 from "../assets/Company/Aspire Coaching Center.jpeg"
import img3 from "../assets/Company/Lahore Garrison University.jpg"
import img1 from "../assets/Company/United Software & Technologies.jpg"

const images = {
  1: img1,
  2: img2,
  3: img3, 
}



const Experience = () => {
  return (
    <>
      <div className="container ex" id="experience">
        <h1>EXPERIENCE</h1>
        {experience.map((data) => {
          return (
            <>
              <div
                key={data.id}
                className="ex-items text-center my-5"
                data-aos="zoom-in"
                data-aos-duration="1000"
              >
                <div className="left">
                  <img src={images[data.id]} alt='' />
                </div>
                <div className="right">
                  <h2>{data.role}</h2>
                  <h3 style={{ color: "#00d9ff" }}>{data.organisation}</h3>
                  <h4>
                    <span style={{ color: "yellowgreen" }}>
                      {data.startDate} {data.endDate}{" "}
                    </span>{" "}
                    <span style={{ color: "yellow" }}>{data.location}</span>
                  </h4>
                  <h5 style={{ color: "yellow" }}>{data.experiences[0]}</h5>
                  <h5 style={{ color: "yellow" }}>{data.experiences[1]}</h5>
                </div>
              </div>
            </>
          );
        })}
      </div>
    </>
     
  )
}

export default Experience