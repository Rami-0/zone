import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LatestPosts from './../../components/LatestPosts/LatestPosts';
import FirstSection from './Components/firstSection/FirstSection';

const LandingPage = () => {
	const navigator = useNavigate();
	return (
		<section>
			<FirstSection/>
			<LatestPosts/>

		</section>
	);
};

export default LandingPage;
