import React from "react";
import { Link, useNavigate } from "react-router-dom";
import LatestPosts from './../../components/LatestPosts/LatestPosts';

const LandingPage = () => {
	const navigator = useNavigate();
	return (
		<section>
			<h5>landing Bage</h5>
			<LatestPosts/>

		</section>
	);
};

export default LandingPage;
