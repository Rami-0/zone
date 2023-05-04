import React from "react";
import Card from "./Card";
import Slider from "react-slick";
import css from "./Card.module.css";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import nextArrow from "../assets/NextArrow.svg";
import prevArrow from "../assets/pervArrow.svg";
import bkgPostImg from "../assets/bkgPostImg.png";
import pfp1 from "../assets/img-1.png";
import pfp2 from "../assets/img-2.png";
import pfp3 from "../assets/img.png";

const data = [
	{
		date: "15 Dec 2020 • 8 min read",
		mainText: "Any mechanical keyboard enthusiasts in design?",
		img: "",
		pfp: pfp1,
		name: "Maddox Fletcher",
	},
	{
		date: "04 Jul 2021 • 8 min read",
		mainText: "How to design a product that can grow itself 10x in year:",
		img: bkgPostImg,
		pfp:pfp2,
		name: "Cruz Truong",
	},
	{
		date: "19 Apr 2019 • 8 min read ",
		mainText: "Any mechanical keyboard enthusiasts in design?",
		img: "",
		pfp:pfp3,
		name: "Margaret Donnelly",
	},
	{
		date: "15 Dec 2020 . 8 min read",
		mainText: "Any mechanical keyboard enthusiasts in design?",
		img: "",
		pfp: pfp1,
		name: "Maddox Fletcher",
	},
	{
		date: "04 Jul 2021 . 8 min read",
		mainText: "How to design a product that can grow itself 10x in year:",
		img: bkgPostImg,
		pfp:pfp2,
		name: "Cruz Truong",
	},
	{
		date: "19 Apr 2019 . 8 min read ",
		mainText: "Any mechanical keyboard enthusiasts in design?",
		img: "",
		pfp:pfp3,
		name: "Margaret Donnelly",
	},
];

function NextArrow(props) {
	const { className, onClick } = props;
	return (
		<button className={className} onClick={onClick}>
			<img className={css.icon} src={nextArrow} alt="" />
		</button>
	);
}

function PrevArrow(props) {
	const { className, onClick } = props;
	return (
		<button className={className} onClick={onClick}>
			<img src={prevArrow} alt="" />
		</button>
	);
}

const settings = {
	className: "center",
	centerMode: true,
	centerPadding: "0",
	dots: true,
	autoplay: true,
	speed: 2000,
	autoplaySpeed: 4000,
	cssEase: "linear",
	infinite: true,
	speed: 500,
	slidesToShow: 3,
	slidesToScroll: 1,
	initialSlide: 1,
	prevArrow: <PrevArrow />,
	nextArrow: <NextArrow />,
	responsive: [
		{
			breakpoint: 1024,
			settings: {
				centerMode: false,
				slidesToShow: 2,
				slidesToScroll: 1,
				infinite: true,
				dots: false,
			},
		},
		{
			breakpoint: 600,
			settings: {
				slidesToShow: 1,
				centerMode: false,
				autoplay: false,
				slidesToScroll: 1,
				initialSlide: 1,
				arrows: false,
			},
		},
	],
};

const SliderComp = () => {
	return (
		<Slider {...settings}>
			{data.map(({date, mainText, img, pfp, name}) => (
				<Card date={date} mainText={mainText} img={img} pfp={pfp} name={name} />
			))}
		</Slider>
	);
};

export default SliderComp;
