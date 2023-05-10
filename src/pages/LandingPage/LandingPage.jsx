import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LatestPosts from './../../components/LatestPosts/LatestPosts';
import FirstSection from './Components/firstSection/FirstSection';
import SecondSection from './Components/secondSection/SecondSection';
import FAQ from './../../components/FAQ/FAQ';
import OurServicesAndWorkFlow from './Components/OurServicesAndWorkFlow/OurServicesAndWorkFlow';
import OurWork from './Components/OurWork/OurWork';

const LandingPage = () => {
	const navigator = useNavigate();
	return (
		<section>
			<FirstSection/>
			<SecondSection/>
			<FAQ/>
			<OurServicesAndWorkFlow/>
			<OurWork/>
			<LatestPosts/>

		</section>
	);
};

export default LandingPage;
