import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';

const Join = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const joinRef = useNav('Join');

	return (
		<section ref={joinRef} id='joinContainer'>
			<img
				src='https://source.unsplash.com/random/600x600/?nature,water'
				alt='unsplash-img'
			/>
			<div>
				<h3>Get Involved</h3>
				<p>This is the get involved section</p>
			</div>
		</section>
	);
};

export default Join;
