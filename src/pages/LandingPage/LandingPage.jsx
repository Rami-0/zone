import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LatestPosts from './../../components/LatestPosts/LatestPosts';
import FirstSection from './Components/firstSection/FirstSection';
import SecondSection from './Components/secondSection/SecondSection';

const LandingPage = () => {
	const navigator = useNavigate();
	return (
		<section>
			<FirstSection/>
			<SecondSection/>
			<LatestPosts/>

		</section>
	);
};

export default LandingPage;
