import { ThreeDotsVertical } from "react-bootstrap-icons";

import Logo from "../assets/banner.png";

const Header = () => (
    <header className=" sticky-top px-3">
        <nav className={"navbar navbar-expand-lg"}>
            <img src={Logo} style={{ maxHeight: "5rem" }}></img>
            <button
                type="button"
                className="navbar-toggler border-0"
                data-bs-toggle="collapse"
                data-bs-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded="false"
                aria-label="Toggle navigation"
            >
                <span className="navbar-toggler-icon"></span>
            </button>
            <div
                className="collapse navbar-collapse"
                id="navbarSupportedContent"
            >
                {/*Right Aligned*/}
                <div className="navbar-nav ms-auto">
                    <a href={"#fellowship"} className="nav-item nav-link">
                        <strong>Fellowship</strong>
                    </a>
                    <a href={"#projects"} className="nav-item nav-link">
                        <strong>Projects</strong>
                    </a>
                    <a href={"#workshops"} className="nav-item nav-link">
                        <strong>Workshops</strong>
                    </a>
                    <a href={"#join"} className="nav-item nav-link">
                        <strong>Join</strong>
                    </a>
                </div>
            </div>
        </nav>
    </header>
);

export default Header;
