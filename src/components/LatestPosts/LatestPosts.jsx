import React from "react";
import css from "./LatestPosts.module.css";
import Card from "./Components/Card";
import Slider from "react-slick";
import styled from "styled-components";
import SliderComp from "./Components/SliderComp";

const LatestPosts = () => {
	return (
		<section className={css.LatestPostsContainer}>
			<h2 className={css.title}>Latest Posts</h2>
			<Slide className="container-mobile">
				<SliderComp />
			</Slide>
		</section>
	);
};

export default LatestPosts;

const Slide = styled.div`
	.slick-list,
	.slick-track {
		padding: 5rem 0;
	}

	.center .CARD {
		opacity: 0.7;
		pointer-events: none;
		width: 362px;
		height: 482px;
	}
	.slick-dots .slick-active > ::before {
		transform: scale(1.5);
		color: var(--MainOrange) !important;
	}

	.center .slick-center .CARD {
		transform: scale(1.1);
		transition: all 400ms ease-in-out;
		opacity: 1;
		position: relative;
		pointer-events: all;
		color: #fff !important;
	}
	.center .slick-center .CARD > div h4 {
		color: #fff !important;
	}
	.center .slick-center .CARD > div + div p {
		color: #fff !important;
	}

	.center .bkg {
		position: absolute;
		width: 100%;
		height: 100%;
		border-radius: 10px;
		top: 0;
		left: 0;
		right: 0;
		z-index: -1;
	}
	.center .slick-center .CARD > .bkg {
		background: linear-gradient(
			170deg,
			#000 20% 20%,
			hsla(0, 0%, 100%, 0)
		) !important;
	}

	@media (max-width: 1024px) {

		.center .slick-center .CARD {
			transform: scale(1);
			z-index: inherit;
			background-color: inherit;
		}
		.center .CARD {
			opacity: 1;
			pointer-events: all;
		}
	}

	.slick-arrow::before {
		display: none;
	}

	@media min-width: 600) {
		.slick-list{
			padding: 0;
		}
		.slick-slide{
			width: 100px;
		}
	}


`;
