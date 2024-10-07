import React from 'react'
import Navbar from './Navbar'
import BannerBackground from '../Assets/Banner-Background.png'
import BannerImage from '../Assets/Home-Banner-Food-Image.png'
import { FiArrowRight } from "react-icons/fi";
import About from './About'
import Work from './Work';
import Testimonials from './Testimonials';
import Contact from './Contact';
import Footer from '../Components/Footer'


const Home = () => {
  return (
    <div className='home-container'>
        <Navbar/>

		<div className="home-banner-container">

			<div className="home-bannerImage-container">
				<img src={BannerBackground} alt="" />
			</div>

			<div className="home-text-section">
				<h1 className="primary-heading">
					Your Favourite Food Delivered Hot & Fresh
				</h1>
				<p className="primary-text">
					Healthy switcher chefs do all the prep work, like peeding, chopping
					& marinating, so you can cook a fresh food.
				</p>
				<button className="secondary-button">
					Order Now <FiArrowRight />{" "}
				</button>
			</div>
			<div className="home-image-section">
				<img src={BannerImage} alt="" />
			</div>
      </div>

	<About/>
	<Work />
	<Testimonials />
	<Contact />
	<Footer />
    </div>
  )
}

export default Home