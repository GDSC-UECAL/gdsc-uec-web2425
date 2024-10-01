
function Navbar() {
    return (
        <>
            <nav class="navbar navbar-expand-lg fixed-top">
                <div class="container-fluid">
                    <a class="navbar-brand mx-lg-2" href="#">LOGO</a>
                    <button class="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar" aria-label="Toggle navigation">
                        <span class="navbar-toggler-icon"></span>
                    </button>
                    <div class="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
                        <div class="offcanvas-header">
                            <h5 class="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
                            <button type="button" class="btn-close" data-bs-dismiss="offcanvas" aria-label="Close"></button>
                        </div>
                        <div class="offcanvas-body">
                            <ul class="navbar-nav justify-content-first flex-grow-1 pe-3">
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2 active" aria-current="page" href="#">Home</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">Events</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">Product</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">Teams</a>
                                </li>
                                <li class="nav-item">
                                    <a class="nav-link mx-lg-2" href="#">About</a>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </nav>
        </>
    )
}

export default Navbar