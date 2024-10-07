import React from 'react'
import { BsFillPlayCircleFill } from "react-icons/bs";
import AboutBackground from '../Assets/About-Section-Background.png'
import AboutSectionFoodImage from '../Assets/About-Background-Food-Image.png'

const About = () => {
	return <div className='about-section-container'>
		<div className="about-background-image-container">		
			<img src={AboutBackground} alt="" />
		</div>

		<div className="about-section-image-container">
			<img src={AboutSectionFoodImage} alt="" />
		</div>

		<div className="about-section-text-container">
			<p className="primary-subheading">About</p>
			<h1 className="primary-heading">
			Food Is An Important Part Of A Balanced Diet
			</h1>
			<p className="primary-text">
			Lorem ipsum dolor sit amet consectetur. Non tincidunt 
magna non et elit. Dolor  turpis molestie dui
magnis facilisis at fringilla quam.
			Non tincidunt magna non et elit. Dolor turpis molestie 
			dui magnis facilisis at fringilla quam.
			</p>
		</div>

		<div className="about-section-button-container">
			<button className="secondary-button">Learn More</button>
			<button className='watch-video-button'> <BsFillPlayCircleFill/> Watch Video</button>
		</div>
	</div>
}

export default About