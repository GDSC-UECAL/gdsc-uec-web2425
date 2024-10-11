import { Link } from 'react-router-dom';
import nav_logo from '../assets/common/gdsc_logo.png'; 

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg fixed-top">
      <div className="container-fluid">
        {/* Logo Link */}
        <Link to="/home" className="navbar-brand mx-lg-2">
          <img
            src={nav_logo}
            alt="Logo"
            style={{ width: 'clamp(6rem, 100%, 5.7vw)', marginRight: "20px"}}
          />
        </Link>

        {/* Navbar toggle button for mobile */}
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Offcanvas Menu */}
        <div
          className="offcanvas offcanvas-end"
          tabIndex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div className="offcanvas-header">
            <h5 className="offcanvas-title" id="offcanvasNavbarLabel"></h5>
            <button
              type="button"
              className="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div className="offcanvas-body d-flex flex-column align-items-center flex-md-row justify-content-between">
            {/* Navigation Links */}
            <ul className="navbar-nav flex-column flex-md-row justify-content-start flex-grow-1 pe-3">
              <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/home">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/about">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/products">
                  Product
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/teams">
                  Teams
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link mx-lg-2" to="/events">
                  Events
                </Link>
              </li>
            </ul>

            {/* Register Button */}
            <div className="register d-flex align-items-center justify-content-md-end mt-3 mt-md-0">
              <button className="registerbtn">Register</button>
            </div>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
