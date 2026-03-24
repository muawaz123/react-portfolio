import Pdf from '../Pdf/Muawaz.pdf'
import Typed from "typed.js"
import React, { useEffect, useRef } from "react"
import muawaz from  "../assets/Hero/muawaz1.png"

const Home = () => {
  const typedRef = useRef(null)
  useEffect(() => {
    const options = {
      strings: [
        "Welcome to my Profile",
        "My Name is Muhmmad Muawaz",
        "I'm Frontend Developer",
        "I'm UX/UI Designer",
      ],
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    };

    const typed = new Typed(typedRef.current, options);

    return () => {
      typed.destroy();
    };
  }, [])

  return (
    <>
      <div className="container Home">
        <div className="Left" data-aos="fade-up-right" data-aos-duration="1000">
          <h1 ref={typedRef}>Welcome to My Profile</h1>
          <a href={Pdf} download="muawaz.pdf" className="btn btn-outline-warning my-3">Download Resume</a>
        </div>
        <div className="right">
          <div className="img" data-aos="fade-up-left" data-aos-duration="1000">
            <img src={muawaz} alt='' />
          </div>
        </div>
      </div>
    </>
  )
}

export default Home