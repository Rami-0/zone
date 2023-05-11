import React, { useContext } from "react";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import FAQ from "./../../components/FAQ/FAQ";
import TimeLine_2 from "./../../components/TimeLine/TimeLine_2";
import css from "./AboutUsPage.module.css";
import Button from "./../../components/Button/Button";
import { ThemeContext } from "../../App";
import Card_GreatTeam from "./component/Card_GreatTeam/Card_GreatTeam";

import teams from "./assets/illustration_teams.svg";
import lightArrow from "./assets/lightArrow.svg";
import DarkArrow from "./assets/DarkArrow.svg";

import medal_1 from "./assets/icon_1.svg";
import medal_2 from "./assets/icon_2.svg";
import medal_3 from "./assets/icon_3.svg";
import medal_4 from "./assets/icon_4.svg";
import RatioOverlay from "./assets/RatioOverlay.svg";
import PlayIcon from "./assets/PlayIcon.svg";

import popularity from "./assets/popularity.svg";
import likePhoto from "./assets/likePhoto.svg";
import transparency from "./assets/transparency.svg";
import agreement from "./assets/agreement.svg";

import img from "./assets/people/IMG-1.svg";
import img2 from "./assets/people/IMG-2.svg";
import img3 from "./assets/people/IMG-3.svg";
import img4 from "./assets/people/IMG-4.svg";
import img5 from "./assets/people/IMG-5.svg";
import img6 from "./assets/people/IMG-6.svg";
import img7 from "./assets/people/IMG-7.svg";
import img8 from "./assets/people/IMG.svg";

import airbnb from "./assets/OurClients/brand_color_airbnb.svg";
import netflix from "./assets/OurClients/brand_color_netflix.svg";
import google from "./assets/OurClients/brand_color_google.svg";
import microsoft from "./assets/OurClients/brand_color_microsoft.svg";
import slack from "./assets/OurClients/brand_color_slack.svg";
import spotify from "./assets/OurClients/brand_color_spotify.svg";
import tripadvisor from "./assets/OurClients/brand_color_tripadvisor.svg";
import vimeo from "./assets/OurClients/brand_color_vimeo.svg";

const cards_OurCoreValues = [
	{
		img: likePhoto,
		h5: "Customer Satisfaction",
	},
	{
		img: transparency,
		h5: "Transparency",
	},
	{
		img: popularity,
		h5: "Reputation",
	},
	{
		img: agreement,
		h5: "Cooperation",
	},
];

const cards_GreatTeamIsTheKey = [
	{
		img: img,
		name: "Eleanor Pena",
		department: "Markiting",
	},
	{
		img: img2,
		name: "Eleanor Pena",
		department: "Markiting",
	},
	{
		img: img3,
		name: "Eleanor Pena",
		department: "Markiting",
	},
	{
		img: img4,
		name: "Eleanor Pena",
		department: "Markiting",
	},
	{
		img: img5,
		name: "Eleanor Pena",
		department: "Markiting",
	},
	{
		img: img6,
		name: "Eleanor Pena",
		department: "Markiting",
	},
	{
		img: img7,
		name: "Eleanor Pena",
		department: "Markiting",
	},
	{
		img: img8,
		name: "Eleanor Pena",
		department: "Markiting",
	},
];

const AboutUsPage = () => {
	const { themeDark } = useContext(ThemeContext);

	return (
		<section>
			<section className={css.WhoWeAre + " container"}>
				<div className={css.top}>
					<img src={teams} alt="illustration_teams" />
					<div>
						<article className="sections_title">
							<h2>Who We Are?</h2>
							<p className="secondary_mid_text">
								Vivamus consectetuer hendrerit lacus. Curabitur a felis in nunc
								fringilla tristique. Nulla neque dolor, sagittis eget, iaculis
								quis, molestie non, velit.
							</p>
							<p className="secondary_mid_text">
								Nam pretium turpis et arcu. Praesent porttitor, nulla vitae
								posuere iaculis, arcu nisl dignissim dolor, a pretium mi sem ut
								ipsum. Praesent venenatis metus at tortor pulvinar varius.
							</p>
						</article>
						<Button
							text={
								<>
									<p>Check Our Work</p>
									<img src={!themeDark ? DarkArrow : lightArrow} alt="arrow" />
								</>
							}
						/>
					</div>
				</div>
				<div className={css.bottom}>
					<span className={css.medal_wrapper}>
						<img src={medal_1} alt="medal_1" />
						<h2>12</h2>
						<p className="secondary_mid_text">Years of experience</p>
					</span>

					<span className={css.medal_wrapper}>
						<img src={medal_2} alt="medal_2" />
						<h2>20</h2>
						<p className="secondary_mid_text">Awards</p>
					</span>

					<span className={css.medal_wrapper}>
						<img src={medal_3} alt="medal_3" />
						<h2>150</h2>
						<p className="secondary_mid_text">Projects</p>
					</span>

					<span className={css.medal_wrapper}>
						<img src={medal_4} alt="medal_4" />
						<h2>32k</h2>
						<p className="secondary_mid_text">Happy clients</p>
					</span>
				</div>
			</section>

			<section className={css.OurVision + " container"}>
				<div className={css.bkg} style={{ background: `url(${RatioOverlay})` }}>
					<h2>Our Vision</h2>
					<div className={css.PlayButton}>
						<img src={PlayIcon} alt="" />
					</div>
					<h4 className={css.content}>
						Our vision offering the best product nulla vehicula tortor
						scelerisque ultrices malesuada.
					</h4>
				</div>
			</section>

			<section className={css.OurCoreValues + " container"}>
				<h2>Our Core Values</h2>

				<div className={css.Wrapper}>
					{cards_OurCoreValues.map(({ img, h5 }) => {
						return (
							<span className={css.card}>
								<img src={img} alt="image" />
								<article>
									<h5>{h5}</h5>
									<p className="secondary_mid_text">
										Aenean urna dictum adipiscing nec, cras quisque.
									</p>
								</article>
							</span>
						);
					})}
				</div>
			</section>

			<TimeLine_2 />

			<section className={css.GreatTeamIsTheKey + " container"}>
				<div className={css.top}>
					<h2>Great Team Is The Key</h2>
					<p className="secondary_mid_text">
						Since wire-frame renderings are relatively simple and fast to
						calculate, they are often used in cases
					</p>
				</div>
				<main className={css.cards}>
					{cards_GreatTeamIsTheKey.map(({ img, name, department }) => {
						return (
							<Card_GreatTeam img={img} name={name} department={department} />
						);
					})}
				</main>
			</section>

			<section>Testimonials</section>

			<section className={css.OurClients + " container"}>
				<h2>Our Clients</h2>
				<div className={css.wrapper}>
					<span>
						<img src={spotify} alt="spotify" />
						<img src={slack} alt="slack" />
						<img src={netflix} alt="netflix" />
						<img src={microsoft} alt="microsoft" />
					</span>
					<span>
						<img src={vimeo} alt="vimeo" />
						<img src={airbnb} alt="airbnb" />
						<img src={google} alt="google" />
						<img src={tripadvisor} alt="tripadvisor" />
					</span>
				</div>
			</section>
			<LatestPosts />
			<FAQ />
		</section>
	);
};

export default AboutUsPage;
