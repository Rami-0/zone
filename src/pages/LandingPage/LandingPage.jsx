import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LatestPosts from './../../components/LatestPosts/LatestPosts';
import FirstSection from './Components/firstSection/FirstSection';
import SecondSection from './Components/secondSection/SecondSection';
import FAQ from './../../components/FAQ/FAQ';

const LandingPage = () => {
	const navigator = useNavigate();
	return (
		<section>
			<FirstSection/>
			<SecondSection/>
			<LatestPosts/>
			<FAQ/>

		</section>
	);
};

export default LandingPage;
