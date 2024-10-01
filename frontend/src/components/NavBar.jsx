import { Link } from 'react-router-dom';
import "../assets/common/gdsc_logo.png"
import nav_logo from "../assets/common/gdsc_logo.png"


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
                        <div className="offcanvas-body">
                            <ul className="navbar-nav justify-content-first flex-grow-1 pe-3">
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" aria-current="page" href="#">Home</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="#">About</a>
                                </li>
                                <li className="nav-item">
                                    <Link className="nav-link mx-lg-2" to='/products'>Product</Link> {/* Update the route to prodcts*/}
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="#">Teams</a>
                                </li>
                                <li className="nav-item">
                                    <a className="nav-link mx-lg-2" href="#">Events</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar;
