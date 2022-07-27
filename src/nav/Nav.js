import React from 'react';
import { ThreeDotsVertical } from 'react-bootstrap-icons'
import NavLink from './NavLink';
import { navLinks } from './navLinks';
import './Nav.css';

const Nav = () => {
	return (

		<nav>
		<div class="lhs">
		AI Safety Group at UCLA
		</div>
		<div class="rhs">
			{navLinks.map(({ navLinkId, scrollToId }, idx) => (
				<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
			))}
		</div>
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
					{navLinks.map(({ navLinkId, scrollToId }, idx) => (
						<NavLink key={idx} navLinkId={navLinkId} scrollToId={scrollToId} />
					))}
          </div>
        </div>
      </div>
    </nav>
		</nav>
	);
};

export default Nav;
