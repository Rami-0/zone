import React from "react";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import FAQ from './../../components/FAQ/FAQ';
import TimeLine_2 from './../../components/TimeLine/TimeLine_2';

const AboutUsPage = () => {
	return (
		<section>
			<h5>AboutUsPage</h5>
			<TimeLine_2/>
      <LatestPosts/>
			<FAQ/>
		</section>
	);
};

export default AboutUsPage;
