import React from 'react'
import project from "./Data/projects.json"
import img1 from "../assets/Project/Food Delivery App.png"
import img2 from "../assets/Project/Prescripto App.png"
import img3 from "../assets/Project/E-commerce App.png"
import img4 from "../assets/Project/food recipe.png"
import img5 from "../assets/Project/movie zone.png"
import img6 from "../assets/Project/pixabay clone.png"
import img7 from "../assets/Project/Government Girls School.png"
import img8 from "../assets/Project/currency converter.png"
import img9 from "../assets/Project/loan calculator.png"
import img10 from "../assets/Project/portfolio.png"
import img11 from "../assets/Project/time and date.png"
import img12 from "../assets/Project/unicode charactor.png"
import img13 from "../assets/Project/counter application.png"
import img14 from "../assets/Project/bmi calculator.png"
import img15 from "../assets/Project/ux ui portfolio.png"
import img16 from "../assets/Project/food court.png"



const images = {
  1: img1,
  2: img2,
  3: img3,
  4: img4,
  5: img5,
  6: img6,
  7: img7,
  8: img8,
  9: img9,
  10: img10,
  11: img11,
  12: img12,
  13: img13,
  14: img14,
  15: img15,
  16: img16
}


const Projects = () => {
  const fullStackProjects = project.slice(0, 3);
  const reactProjects = project.slice(3, 7);
  const jsProjects = project.slice(7, 14);
  const uxuiProjects = project.slice(14, 16);

  const renderProjects = (title, projects) => (
    <div className="project-section my-5">
      <h2 className="section-title">{title}</h2>
      <div className="row d-flex justify-content-center align-content-center">
        {projects.map((data) => (
          <div key={data.key} className="my-4 col-sm-6 col-md-4 col-lg-3 mx-4">
            <div
              className="project-card card bg-dark text-light"
              data-aos="flip-right"
              data-aos-duration="1000"
            >
              <div
                className="img-wrapper d-flex justify-content-center align-content-center p-3"
                data-aos="fade-up-left"
                data-aos-duration="1000"
              >
                <img
                  src={images[data.id]}
                  alt={data.title}
                  className="project-img"
                />
              </div>
              <div className="card-body text-center">
                <h5 className="card-title">{data.title}</h5>
                <p className="card-text">{data.description}</p>
                {data.id !== 1 && data.id !== 2 && (
                  <a
                    href={data.source}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="btn btn-warning"
                  >
                    Live
                  </a>
                )}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );

  return (
    <div className="container projects my-3" id="projects">
      <h1>PROJECTS</h1>
      {renderProjects("💻 Full Stack Projects", fullStackProjects, false)}
      {renderProjects("🚀 React Projects", reactProjects)}
      {renderProjects("💻 HTML, CSS & JavaScript Projects", jsProjects)}
      {renderProjects("🎨 UX/UI Projects", uxuiProjects)}
    </div>
  );
};

export default Projects;
