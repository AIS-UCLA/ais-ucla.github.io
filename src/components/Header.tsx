import { ThreeDotsVertical } from "react-bootstrap-icons";

import Logo from "../assets/logo.png";

const HomeUrl = "/";
const ProjectsUrl = "/projects";
const JoinUrl = '/join';
const WorkshopsUrl = "/workshops";

const Header = () => (
  <header className="pb-5">
    <nav className="navbar navbar-expand-lg py-3 fixed-top bg-white">
      <div className="container d-flex">
        <a href={HomeUrl}>
          <img
            className="pe-3"
            src={Logo}
            style={{
              maxHeight: "3.5rem"
            }}
          />
        </a>
        <a className="navbar-brand" href={HomeUrl}>
          <h4>
            <b>AI Safety</b>
          </h4>
        </a>
        {/*Collapsible Button*/}
        <button
          type="button"
          className="navbar-toggler"
          data-bs-toggle="collapse"
          data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <ThreeDotsVertical className="text-body" />
        </button>
        <div
          className="collapse navbar-collapse"
          id="navbarSupportedContent"
        >
          {/*Right Aligned*/}
          <div className="navbar-nav ms-auto">
            <a href={ProjectsUrl} className="nav-item nav-link">
              <strong>Projects</strong>
            </a>
            <a href={WorkshopsUrl} className="nav-item nav-link">
              <strong>Workshops</strong>
            </a>
            <a href={JoinUrl} className="nav-item nav-link">
              <strong>Join</strong>
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
