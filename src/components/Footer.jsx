import { FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import { SiLeetcode } from "react-icons/si";
import { SiGmail } from "react-icons/si";

const Footer = () => {
  return (
    <div>
      <hr />
      <h2 className="text-secondary d-flex justify-content-center fs-5">
        Design and Develop by Rohit Jangid
      </h2>
      
      <div className="d-flex justify-content-center gap-2 py-3">
        <button className="btn btn-primary">
          <a target= "_blank" className="text-black text-decoration-none" href="https://linkedin.com/in/rohit-jangid-831149402"><FaLinkedin /></a>
        </button>
        <button className="btn btn-dark">
          <a target= "_blank" className="text-white text-decoration-none" href="https://x.com/rohit_janggid"><FaXTwitter /></a>
        </button>
        <button className="btn btn-warning">
          <a target= "_blank" className="text-black text-decoration-none" href="https://leetcode.com/u/Rohitkhati004/"><SiLeetcode /> </a>
        </button>
        <button className="btn btn-light">
          <a target= "_blank" className="text-black text-decoration-none" href="https://github.com/rohitjanggid"><FaGithub /> </a>
        </button>
        <button className="btn btn-info">
          <a target= "_blank" className="text-black text-decoration-none" href="mailto:rohitjangid.work0@gmail.com"><SiGmail /> </a>
        </button>
        
      </div>
    </div>
  );
};

export default Footer;
