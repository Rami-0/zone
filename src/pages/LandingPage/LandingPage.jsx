import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LatestPosts from './../../components/LatestPosts/LatestPosts';
import FirstSection from './Components/firstSection/FirstSection';
import SecondSection from './Components/secondSection/SecondSection';
import FAQ from './../../components/FAQ/FAQ';
import OurServicesAndWorkFlow from './Components/OurServicesAndWorkFlow/OurServicesAndWorkFlow';

const LandingPage = () => {
	const navigator = useNavigate();
	return (
		<section>
			<FirstSection/>
			<SecondSection/>
			<LatestPosts/>
			<FAQ/>
			<OurServicesAndWorkFlow/>

		</section>
	);
};

export default LandingPage;
