import React from "react";
import css from "./SecondSection.module.css";
import spotify from "../../assets/ourclients/brand_spotify.svg";
import slack from "../../assets/ourclients/brand_slack.svg";
import netflix from "../../assets/ourclients/brand_netflix.svg";
import heroku from "../../assets/ourclients/brand_heroku.svg";
import vimeo from "../../assets/ourclients/brand_vimeo.svg";
import airbnb from "../../assets/ourclients/brand_airbnb.svg";
import ssImg from "../../assets/secondSectionIMG.svg";
import OA from "../../assets/orangeArrow.svg";

const arr = [
	{
		num: "150",
		small_text: "PROJECTS",
		text: "Praesent turpis. Praesent blandit laoreet nibh. Nunc nonummy metus.",
	},
	{
		num: "32k",
		small_text: "HAPPY CLIENTS",
		text: "Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.",
	},
	{
		num: "20",
		small_text: "YEARS OF EXPERIENCE",
		text: "Praesent blandit laoreet nibh. Suspendisse pulvinar, augue ac venenatis condimentum.",
	},
];

const SecondSection = () => {
	return (
		<>
			<section className={css.ourClients}>
				<span>
					<img src={spotify} alt="" />
					<img src={slack} alt="" />
				</span>
				<span>
					<img src={netflix} alt="" />
					<img src={heroku} alt="" />
				</span>
				<span>
					<img src={vimeo} alt="" />
					<img src={airbnb} alt="" />
				</span>
			</section>
			<section className={css.section2 + " container"}>
				<img src={ssImg} alt="photo" />
				<div className={css.main}>
					<article className="sections_title">
						<p className="secondary_text">About Us</p>
						<h2>Who We Are</h2>
						<p className="secondary_mid_text">
							In hac habitasse platea dictumst. Aliquam lobortis. Lorem ipsum
							dolor sit amet, consectetuer adipiscing elit. In dui magna,
							posuere eget, vestibulum et, tempor auctor, justo. Pellentesque
							habitant morbi tristique senectus et netus et malesuada fames ac
							turpis egestas.
						</p>
						<span className={css.learnMore}>
							<p className="secondary_mid_text OrangeText">Learn more</p>
							<img src={OA} alt="" />
						</span>
					</article>
					<article>
						{arr.map(({ num, small_text, text }) => {
							return (
								<>
									<div className={css.infoAboutUs}>
										<div className={css.item_a}>
											<h2>{num}</h2>
											<p className="secondary_small_text">{small_text}</p>
										</div>
										<span className={css.item_b}>
											<hr />
										</span>
										<p className={`${css.item_c} secondary_text`}>{text}</p>
									</div>
								</>
							);
						})}
					</article>
				</div>
			</section>
		</>
	);
};

export default SecondSection;
