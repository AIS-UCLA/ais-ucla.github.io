import { ThreeDotsVertical } from "react-bootstrap-icons";

import Logo from "../assets/banner.png";

const ProjectsUrl = "#projects";
const IntroProgramUrl = "#intro";
const WorkshopsUrl = "#workshops";

const Header = () =>
  <header className="pb-5">
    <nav className="navbar navbar-expand-lg py-3 fixed-top bg-white">
      <div className="container d-flex">
        <a className="navbar-brand" href="/">


          <h4><b>AI Safety</b></h4>
        </a>
        {/*Collapsible Button*/}
        <button type="button" className="navbar-toggler"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
          <ThreeDotsVertical className="text-body" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/*Right Aligned*/}
          <div className="navbar-nav ms-auto">
            <a href={ProjectsUrl} className="nav-item nav-link"><strong>Projects</strong></a>
            <a href={IntroProgramUrl} className="nav-item nav-link"><strong>Intro to AI Safety Program</strong></a>
            <a href={WorkshopsUrl} className="nav-item nav-link"><strong>Workshops</strong></a>
          </div>
        </div>
      </div>
    </nav>
  </header>

export default Header;
