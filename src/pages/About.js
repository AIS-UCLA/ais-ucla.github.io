import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const About = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const aboutRef = useNav('About');

	return (
		<section ref={aboutRef} id='aboutContainer'>

			<div id="aboutDiv">
				<p id="aboutText">We are a UCLA club invested in the development of safe and robust AI systems.
				AI Safety at UCLA provides a wide range of opportunities for students of all
				backgrounds to become involved in the AI Safety community. </p>
			</div>
		</section>
	);
};

export default About;
