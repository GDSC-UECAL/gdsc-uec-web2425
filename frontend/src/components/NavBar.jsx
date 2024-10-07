import { Link } from 'react-router-dom';
import "../assets/common/gdsc_logo.png";
import nav_logo from "../assets/common/gdsc_logo.png";

function Navbar() {
    return (
        <>
            <nav className="navbar navbar-expand-lg fixed-top">
                <div className="container-fluid">
                    <a className="navbar-brand mx-lg-2" href="#">
                        <img src={nav_logo} alt="Logo" />
                    </a>
                    <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="offcanvas offcanvas-end" tabIndex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div className="offcanvas-header">
                            <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div className="offcanvas-body d-flex flex-column align-items-center flex-md-row justify-content-between">
                            {/* Navigation Links */}
                            <ul className="navbar-nav flex-column flex-md-row justify-content-start flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" aria-current="page" to="/home">Home</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" to="/about">About</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" to="/products">Product</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" to="/teams">Teams</Link>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" to="/events">Events</Link>
                                </li>
                            </ul>

                            {/* Register Link */}
                            <div className="register d-flex justify-content-bottom align-items-center justify-content-md-end mt-3 mt-md-0">
                                <Link className="nav-link mx-lg-2" to="/#">Register</Link>
                            </div>
                        </div>

                    </div>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
