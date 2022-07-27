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
		          <a href={"/"} className="nav-item nav-link"><strong>Home</strong></a>
		            <a href={"/"} className="nav-item nav-link"><strong>About</strong></a>
		            <a href={"/"} className="nav-item nav-link"><strong>Projects</strong></a>
		            <a href={"/"} className="nav-item nav-link"><strong>Join Us</strong></a>
		        </div>
        </div>

		</nav>
	);
};

export default Nav;
