import React from "react";
import LatestPosts from './../../components/LatestPosts/LatestPosts';
import FirstSection from './Components/firstSection/FirstSection';
import SecondSection from './Components/secondSection/SecondSection';
import FAQ from './../../components/FAQ/FAQ';
import OurServicesAndWorkFlow from './Components/OurServicesAndWorkFlow/OurServicesAndWorkFlow';
import OurWork from './Components/OurWork/OurWork';


const LandingPage = () => {
	return (
		<section>
			<FirstSection/>
			<SecondSection/>
			<OurServicesAndWorkFlow/>
			<OurWork/>
			<FAQ/>
			<LatestPosts/>

		</section>
	);
};

export default LandingPage;
