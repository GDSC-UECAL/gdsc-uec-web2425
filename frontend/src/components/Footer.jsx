import React from "react";
import "./Footer.css";
import logo from '../assets/common/gdsc_logo.png';
import { FaFacebook, FaLinkedin, FaGithub, FaInstagram, FaDiscord } from "react-icons/fa";

function Footer() {
    return (
        <footer className="footer1">
            <div className="container-fluid">
                <div className="texts row text-center">
                    <div className="col-12 col-md-6 mb-2">
                        <img src="src/assets/common/gdsc_logo.png" alt="" />
                    </div>
                    <div className="col-12 col-md-6 mb-2">

                    </div>
                    <div className="col-12 col-md-6 mb-2">
                        <h6>Google Developer Student Clubs</h6>
                        <p>University of the East - Caloocan</p>
                        <p>Together, we discover future.</p>
                        <p>105 Samson Road, Caloocan City, 1408</p>
                        <p>Need Help? Contact: gdsc.ue@gmail.com</p>
                    </div>
                    <div className="col-12 col-md-1 mb-2 text-start">
                        <h6>Home</h6>
                        <a href="">Welcome</a> <br />
                        <a href="">Bulletin</a> <br />
                        <a href="">Partners</a>
                    </div>
                    <div className="col-12 col-md-1 mb-2 text-start">
                        <h6>About</h6>
                        <a href="">What is GDSC?</a> <br />
                        <a href="">Igma Kadima</a> <br />
                        <a href="">Mission & Vision</a> <br />
                        <a href="">Departments</a> <br />
                        <a href="">GDSC Chapters</a> <br />
                    </div>
                    <div className="col-12 col-md-1 mb-2 text-start">
                        <h6>Products</h6>
                        <a href="">Projects</a> <br />
                        <a href="">Merchandise</a> <br />
                    </div>
                    <div className="col-12 col-md-1 mb-2 text-start">
                        <h6>Team</h6>
                        <a href="">Executives</a> <br />
                        <a href="">Operations</a> <br />
                        <a href="">Technology</a> <br />
                        <a href="">Creatives</a> <br />
                    </div>
                    <div className="col-12 col-md-1 mb-2 text-start">
                        <h6>Events</h6>
                        <a href="">All Events</a> <br />
                        
                    </div>
                    <div className="col-12 col-md-12 mb-2">
                        <hr />
                    </div>
                    <div className="col-12 col-md-12 mb-2">
                        <h6>Google Developer Student Clubs - University of the East Caloocan © All Rights Reserved. <a href="">FB LOGO</a> &nbsp;
                        <a href="">IG LOGO</a>&nbsp;<a href="">DC LOGO</a>
                        <a href="http://localhost:8000/admin/" className='a1'>Manage</a> </h6> 
                    </div>
                </div>
                
            </div>
        </footer>
    )
}
export default Footer