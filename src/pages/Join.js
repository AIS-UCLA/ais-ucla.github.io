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
				<h3 id='joinTitle'>Get Involved</h3>
				<p id='joinText'>Every month we hold weekend long workshops
				to deeply engage with important topics in AI Safety.
				The topics of workshops change with each event; previously we ran one focusing on AI Timelines.
				These events include many attendees beyond the LA area and provide a great opportunity
				to network in the broader AI Safety community
				</p>
				<p id='joinText'>
				Space for these workshops is limited, so if you are interested in attending please apply here [application link]
				</p>
				<p id='joinText'>
				[application link]
				</p>
			</div>
		</section>
	);
};

export default Join;
