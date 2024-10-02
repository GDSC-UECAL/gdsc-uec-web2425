import React from 'react';
import './Footer.css';

function Footer() {
    return (
        <footer className="footer bg-dark text-light mt-auto py-3">
            <div className="footer-content">
                <div className="row text-center">
                    <div className="col-12 col-md-6 mb-2">
                        <h6>Google Developer Student Clubs</h6>
                        <p>University of the East - Caloocan</p>
                        <p>Together, we discover future.</p>
                        <p>105 Samson Road, Caloocan City, 1408</p>
                        <p>Need Help? Contact: gdsc.ue@gmail.com</p>
                    </div>
                    <div className="col-12 col-md-1 mb-2">
                        <h6>Home</h6>
                        <a href="#">Welcome</a> <br />
                        <a href="#">Bulletin</a> <br />
                        <a href="#">Partners</a>
                    </div>
                    <div className="col-12 col-md-1 mb-2">
                        <h6>About</h6>
                        <a href="#">Welcome</a> <br />
                        <a href="#">Bulletin</a> <br />
                        <a href="#">Partners</a>
                    </div>
                    <div className="col-12 col-md-1 mb-2">
                        <h6>Products</h6>
                        <a href="#">Welcome</a> <br />
                        <a href="#">Bulletin</a> <br />
                        <a href="#">Partners</a>
                    </div>
                    <div className="col-12 col-md-1 mb-2">
                        <h6>Team</h6>
                        <a href="#">Welcome</a> <br />
                        <a href="#">Bulletin</a> <br />
                        <a href="#">Partners</a>
                    </div>
                    <div className="col-12 col-md-1 mb-2">
                        <h6>Events</h6>
                        <a href="#">Welcome</a> <br />
                        <a href="#">Bulletin</a> <br />
                        <a href="#">Partners</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}

export default Footer;