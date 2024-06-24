import React, { useState } from 'react';
import { FaCode } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa6";
import About from "./About";

const Navbar = () => {
  const [redirecting, setRedirecting] = useState(false);

  const handleLinkedInClick = () => {
    setRedirecting(true);
    setTimeout(() => {
      window.location.href = "https://www.linkedin.com/in/harish-sridhar-3027a6243/";
    }, 2000); // Adjust the timeout as needed
  };

  const handleGithubClick = () => {
    setRedirecting(true);
    setTimeout(() => {
      window.open("https://github.com/harishbyte-spec", "_blank");
    }, 2000); // Adjust the timeout as needed
  };

  return (
    <nav className=" mb-20 m-8 flex items-center justify-between py-6">
        <div className="flex flex-shrink-0 items-center">
            <a href="" className=" text-3xl"> <FaCode/></a>
        </div>
        <div>
          <div className=" m-8 flex items-center justify-center gap-4 text-2xl">
            {redirecting ? (
              <div>Here We go...</div> // Replace with your loader component if needed
            ) : (
              <>
                <a onClick={handleLinkedInClick} style={{ cursor: 'pointer' }}> <FaLinkedin/></a>
                <a onClick={handleGithubClick} style={{ cursor: 'pointer' }}> <FaGithub/> </a>
              </>
            )}
          </div>
        </div>
    </nav>
  )
}

export default Navbar;