import React from 'react'
import tools from "./Data/tools.json"
import img1 from "../assets/Tool/microsoft office.png"
import img2 from "../assets/Tool/vs code.png"
import img3 from "../assets/Tool/figma.png"
import img4 from "../assets/Tool/cisco packet tracer.png"
import img5 from "../assets/Tool/sql server.png"
import img6 from "../assets/Tool/canva.png"


const images = {
  1: img1,
  2: img2,  
  3: img3,
  4: img4,
  5: img5,
  6: img6
}

const Tools = () => {
  return (
    <>
      <div className="container tools" id="tools">
        <h1>Tools</h1>
        <div className="items">
          {tools.map((data) => (
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

export default Tools;