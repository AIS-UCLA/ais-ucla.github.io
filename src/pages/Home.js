import React from 'react';
import { useNav } from '../customHooks/useNav';
import './Page.css';
import logo from './images/logo.png';

const Home = () => {
	// useNav takes in a navLinkId and returns a ref
	// this ref is used to register the navLinkId that's
	// currently in view, and apply activeClass styling
	// to the corresponding nav childElement

	const homeRef = useNav('Home');

	return (
		<section ref={homeRef} id='homeContainer'>
			<img
				src={logo}
				alt='AI Safety at UCLA logo'
				height='50%'
			/>
			<div>
				<h3 id='homeTitle'>AI Safety at UCLA4</h3>
				<p id='homeText'>This is the home section</p>
			</div>
		</section>
	);
};

export default Home;
