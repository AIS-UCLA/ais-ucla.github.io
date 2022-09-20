import { ThreeDotsVertical } from "react-bootstrap-icons";

import Logo from "../assets/logo.png";

const HomeUrl = "/index.html";
const ProjectsUrl = "/projects.html";
const EventsUrl = "/events.html";
const JoinUrl = '/join.html';

const Header = () => (
  <header className="pb-5">
    <nav className="navbar navbar-expand-lg py-3 fixed-top bg-white">
      <div className="container d-flex">
        <a href={HomeUrl}><img src={Logo} style={{ maxHeight: "3.5rem" }}></img></a>
        <a className="ms-3 navbar-brand justify-content-start fw-bold" href={HomeUrl}>
          <h4>AI Safety</h4>
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
            <a href={EventsUrl} className="nav-item nav-link fw-bold">
              Events
            </a>
            <a href={ProjectsUrl} className="nav-item nav-link fw-bold">
              Projects
            </a>
            <a href={JoinUrl} className="nav-item nav-link fw-bold">
              Join
            </a>
          </div>
        </div>
      </div>
    </nav>
  </header>
);

export default Header;
