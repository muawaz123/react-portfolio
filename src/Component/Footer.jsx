import React from "react"
import { FaGithub, FaLinkedin } from "react-icons/fa"

const Footer = () => {
  return (
    <footer>
      <div className="footer">
        <div className="social">
          <a 
            href="https://github.com/muawaz123" 
            target="_blank" 
            rel="noreferrer"
          >
            <FaGithub />
          </a> 
          <a 
            href="https://www.linkedin.com/in/muhammad-muawaz-36507a215/" 
            target="_blank" 
            rel="noreferrer"
          >
            <FaLinkedin />
          </a>
        </div>
      </div>

      <div className="copyright">
        <p>
          Created By <span>Muhammad Muawaz Developer</span> | All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
