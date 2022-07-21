import { ThreeDotsVertical } from 'react-bootstrap-icons'

const AboutUrl = '/about.html';
const ProjectsUrl = '/projects.html';
const JoinUrl = '/join.html';

const Header = () =>
  <header className="pb-5">
    <nav className={"navbar navbar-expand-lg py-3"}>
      <div className="container d-flex">
        <a className="navbar-brand" href="/"><h3>AI Safety Group at UCLA</h3></a>
        {/*Collapsible Button*/}
        <button type="button" className="navbar-toggler border-0"
          data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
          aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation"
        >
          <ThreeDotsVertical className="text-body" />
        </button>
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/*Right Aligned*/}
          <div className="navbar-nav ms-auto">
            <a href={AboutUrl} className="nav-item nav-link"><strong>About</strong></a>
            <a href={ProjectsUrl} className="nav-item nav-link"><strong>Projects</strong></a>
            <a href={JoinUrl} className="nav-item nav-link"><strong>Join Us</strong></a>
          </div>
        </div>
      </div>
    </nav>
  </header>

export default Header;
