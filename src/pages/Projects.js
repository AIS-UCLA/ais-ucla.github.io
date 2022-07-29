import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Projects = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const projRef = useNav('Projects');

	return (
		<section ref={projRef} id='projContainer'>
			<div id='projLHS'>
				<h3 id='projTitle'>Our Projects</h3>
				<p id='projText'>Our club has the funding and hardware to help facilitate
				almost any kind of AI Safety research you may be interested in conducting.
				We can compensate our researchers up to $1,000 depending on the scope of their project. </p>
				<p id='projText'>
				This position requires a large time investment in addition to past experience
				with machine learning or AI safety principles.
				</p>
			</div>
			<div id='projRHS'>
				<h3 id='projTitle'>Current Contest</h3>
				<p id='projText'>Submit an answer to our contest!
				We hope to give you a taste of what working on the difficult problems in AI Safety is like,
				so if you enjoy working on these questions you are likely a good fit for the club.
				Doubly so if you have good answers.</p>
				<p id='projText'>
				[Submission Portal]
				</p>
				<p  id='projText'>
				We will review your responses shortly. Prices for this contest are:
				</p>
				<ul>
				<li id='projText'>$50 for one correct response</li>
				<li id='projText'>$100 if both responses are correct</li>
				</ul>

			</div>
		</section>
	);
};

export default Projects;
