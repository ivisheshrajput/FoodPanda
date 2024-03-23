import React from "react";
import Logo from "../utils/LogoWhite.png";
import { FaGithub, FaLink, FaLinkedin, FaMailBulk } from "react-icons/fa";

const Footer = () => (
  <>
    <footer className="bg-black bg-gradient-to-l from-[#940b0b] text-white pt-2 ">
      <div className="container flex justify-around mb-4">
        <div className="mt-10">
          <img className="w-48  h-12    " src={Logo} alt="Logo of Food App" />
          <p className="text-sm text-gray-500 ml-6">Food Delivery Website</p>
        </div>
        <div>
          {" "}
          <h2 className="font-semibold tracking-widest text-md mb-3">
            WE DELIVER TO
          </h2>
          <nav className="list-none text-sm">
            <li>Delhi</li>
            <li>Pune</li>
            <li>Banglore</li>
            <li>Gurugram</li>
            <li>Mumbai</li>
          </nav>
        </div>
        <div>
          <h2 className="font-semibold tracking-widest text-md mb-3">
            SOCIAL MEDIA
          </h2>
          <a
            href="https://www.linkedin.com/in/ivisheshrajput/"
            rel="noopener noreferrer"
            className="text-white space-x-2 flex mb-1 "
            target="_blank"
          >
            <FaLinkedin size={18} />
            <span className="text-sm">LinkedIn</span>
          </a>

          <a
            href="https://github.com/ivisheshrajput"
            rel="noopener noreferrer"
            className="text-white space-x-2 flex mb-1"
            target="_blank"
          >
            <FaGithub size={18} />
            <span className="text-sm">Github</span>
          </a>

          <a
            rel="noopener noreferrer"
            className="text-white space-x-2 flex mb-1"
            target="_blank"
            href={
              "mailto:ivisheshrajput@gmail.com?subject=Portfolio%20Inquiry&body=Hello%20there!"
            }
          >
            <FaMailBulk size={18} />
            <span className="text-sm">Mail</span>
          </a>

          <a
            href="https://ivisheshrajput.com/"
            rel="noopener noreferrer"
            className="text-white space-x-2 flex"
            target="_blank"
          >
            <FaLink size={18} />
            <span className="text-sm">Portfolio</span>
          </a>
        </div>
        <div>
          {" "}
          <h2 className="font-semibold tracking-widest text-md mb-3">
            TECHNOLOGY USED
          </h2>
          <nav className="list-none text-sm space-y-1">
            <li>ReactJS</li>
            <li>Redux</li>
            <li>JavaScript</li>
            <li>TailwindCSS</li>
          </nav>
        </div>
      </div>
    </footer>
  </>
);

export default Footer;
