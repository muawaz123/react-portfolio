import React from 'react'
import skills from "./Data/skills.json"
import img1 from "../assets/Skills/html.png"
import img2 from "../assets/Skills/css.png"
import img3 from "../assets/Skills/javascript.png"
import img4 from "../assets/Skills/react.png"

const images = {
  1: img1,
  2: img2,  
  3: img3,
  4: img4
}


const Skills = () => {
  return (
    <>
      <div className="container skills" id="skills">
        <h1>Skills</h1>
        <div className="items">
          {skills.map((data) => (
            <>
              <div
                className="item"
                key={data.id}
                data-aos="flip-left"
                data-aos-duration="1000"
              >
                <img src={images[data.id]} alt='' />
                <h3>{data.title}</h3>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Skills;