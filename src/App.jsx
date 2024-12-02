/* eslint-disable no-unused-vars */
import React from "react";
import Navbar from "./Components/Navbar";
import LandingPage from "./Components/LandingPage";
import Marquee from "./Components/Marquee";
import About from "./Components/About";
import Eyes from "./Components/Eyes";
import Feature from "./Components/Feature";
import Cards from "./Components/Cards";
import Footer from "./Components/Footer";
import LocomotiveScroll from "locomotive-scroll";
import Featured from "./Components/Featured"
import Ready from "./Components/Ready";
function App() {
	const locomotiveScroll = new LocomotiveScroll();

	return (
		<div className="w-full min-h-screen text-black bg-[#f6f6f6] font-robotoCondensed font-extralight ">
			<Navbar />
			<LandingPage />
			<Marquee />
			<About />
			<Eyes />
			<Feature />
			<Featured/>
			<Cards />
			<Ready />
			<Footer />
		</div>
	);
}

export default App;
