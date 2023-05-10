import React from "react";
import css from "./OurWork.module.css";
import MediaQuery from "react-responsive";
import Card_OurWork from "./Card/Card_OurWork";
import img_1Bigcard from "../../assets/ourWork/IMG.png";
import orangeArrow from "../../assets/orangeArrow.svg";
import img_2Bigcard from "../../assets/ourWork/IMG2.png";
import Gillette from "../../assets/ourWork/Gillette.svg";
import Gillette2 from "../../assets/ourWork/Gillette2.svg";
import LouisVuitton from "../../assets/ourWork/LouisVuitton.svg";
import General_Electric from "../../assets/ourWork/GeneralElectric.svg";
import MainCard_ourWork from "./MainCard_ourWork/MainCard_ourWork";

const arr = [
	{
		head: "marketing",
		title: "General Electric",
		img: General_Electric,
	},
	{
		head: "branding",
		title: "Bank of America",
		img: img_1Bigcard,
	},
	{
		head: "SEO",
		title: "LouisVuitton",
		img: LouisVuitton,
	},
	{
		head: "SOCIAL",
		title: "Louis Vuitton",
		img: img_2Bigcard,
	},
	{
		head: "WEB",
		title: "Gillette",
		img: Gillette2,
	},
	{
		head: "marketing",
		title: "Gillette",
		img: Gillette,
	},
];
const OurWork = () => {
	return (
		<section className={css.OurWork + " container"}>
			<div className="sections_title">
				<p className="secondary_text">Our Work</p>
				<h2>Case Studies</h2>
			</div>

			<main className={css.Wrapper}>
				<MediaQuery minWidth={768}>
					<div>
						<MainCard_ourWork
							head={"MARKETING"}
							title={"General Electric"}
							img={General_Electric}
						/>
					</div>
					<div>
						<span>
							<Card_OurWork
								src={img_1Bigcard}
								zagolovka={"branding"}
								title={"Bank of America"}
								text={
									"Quisque id odio. Nunc egestas, augue at pellentesque laoreet, felis eros vehicul"
								}
							/>
							<MainCard_ourWork
								head={"SEO"}
								title={"Louis Vuitton"}
								img={LouisVuitton}
							/>
						</span>
						<span>
							<MainCard_ourWork
								head={"marketing"}
								title={"Gillette"}
								img={Gillette}
							/>

							<Card_OurWork
								src={img_2Bigcard}
								zagolovka={"SOCIAL"}
								title={"Louis Vuitton"}
								text={
									"Quisque id odio. Nunc egestas, augue at pellentesque laoreet, felis eros vehicul"
								}
							/>
						</span>
					</div>
					<div>
						<MainCard_ourWork head={"WEB"} title={"Gillette"} img={Gillette2} />
					</div>
				</MediaQuery>
				<MediaQuery maxWidth={767}>
					{arr.map(({ head, img, title }) => {
						return <MainCard_ourWork head={head} img={img} title={title} />;
					})}
				</MediaQuery>
			</main>

			<button className="OrangeText">
				View All
				<img src={orangeArrow} alt="" />
			</button>
		</section>
	);
};

export default OurWork;
