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
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>Projects</h3>
				<p>Our Projects</p>
			</div>
		</section>
	);
};

export default Projects;
