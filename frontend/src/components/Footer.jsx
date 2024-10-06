import React from "react";
import "./Footer.css";
import logo from '../assets/common/gdsc_logo.png';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-dark text-white pt-4" style={{ maxWidth: "100vw" }}>
      <div className="wider-container mx-auto" style={{ maxWidth: "90vw" }}>
        <div className="row">
        <div className="pb-3"><img src={logo} alt="Logo" style={{ maxWidth: "20vw" }}/></div>
          <div className="col-md-7 pb-3">
            <h5>Google Developer Student Clubs</h5>
            <p>University of the East - Caloocan</p>
            <p><i>"Together, we discover future."</i></p>
            <p>105 Samson Road, Caloocan City, 1408</p>
            <p>Need help? Contact: <u>gdsc.ue@gmail.com</u></p>
          </div>
          <div className="col-12 col-md-1 mb-2 pb-2">
            <h6>Home</h6>
            <a href="#">Welcome</a><br />
            <a href="#">Bulletin</a><br />
            <a href="#">Partners</a>
          </div>
          <div className="col-12 col-md-1 mb-2 pb-2">
            <h6>About</h6>
            <a href="#">What is GDSC?</a><br />
            <a href="#">Igma Kadima</a><br />
            <a href="#">Mission & Vision</a><br />
            <a href="">Departments</a> <br />
            <a href="">GDSC Chapters</a>
          </div>
          <div className="col-12 col-md-1 mb-2 pb-2">
            <h6>Products</h6>
            <a href="">Projects</a> <br />
            <a href="">Merchandise</a>
          </div>
          <div className="col-12 col-md-1 mb-2 pb-2">
            <h6>Team</h6>
             <a href="">Executives</a> <br />
             <a href="">Operations</a> <br />
             <a href="">Technology</a> <br />
             <a href="">Creatives</a>
          </div>
          <div className="col-12 col-md-1 mb-2 pb-2">
            <h6>Events</h6>
            <a href="">All Events</a>
          </div>
        </div>

        <hr className="bg-white" />

        <div className="d-flex justify-content-between align-items-center">
          <div>
            <p className="mb-0">
              Google Developer Student Clubs - University of the East @ All rights reserved. 2024
            </p>
          </div>
          <div>
            <a href="https://facebook.com" className="text-white mx-2" aria-label="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href="https://linkedin.com" className="text-white mx-2" aria-label="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href="https://github.com" className="text-white mx-2" aria-label="GitHub">
              <FaGithub size={20} />
            </a>
            <a href="https://instagram.com" className="text-white mx-2" aria-label="Instagram">
              <FaInstagram size={20} />
            </a>
            <a href="https://discord.com" className="text-white mx-2" aria-label="Discord">
              <FaDiscord size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
