import React from 'react';
import { ThreeDotsVertical } from 'react-bootstrap-icons'
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';

const Nav = () => {
	return (

		<nav className={"navbar navbar-expand-lg py-3"}>
      <div className="container d-flex">
        <a className="navbar-brand" href="/"><div className="lhs">AI Safety Group at UCLA</div></a>
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
					{navLinks.map(({ navLinkId, scrollToId }, idx) => (
						<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
					))}
          </div>
        </div>
      </div>
    </nav>
	);
};

export default Nav;
