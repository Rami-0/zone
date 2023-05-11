import React, { useContext } from "react";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import FAQ from "./../../components/FAQ/FAQ";
import TimeLine_2 from "./../../components/TimeLine/TimeLine_2";
import css from "./AboutUsPage.module.css";
import teams from "./assets/illustration_teams.svg";
import lightArrow from "./assets/lightArrow.svg";
import DarkArrow from "./assets/DarkArrow.svg";
import Button from "./../../components/Button/Button";
import { ThemeContext } from "../../App";

import medal_1 from "./assets/icon_1.svg";
import medal_2 from "./assets/icon_2.svg";
import medal_3 from "./assets/icon_3.svg";
import medal_4 from "./assets/icon_4.svg";
import RatioOverlay from "./assets/RatioOverlay.svg";
import PlayIcon from "./assets/PlayIcon.svg";

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

			<section className={css.OurCoreValues + " container"}></section>
			<TimeLine_2 />
			<section className={css.GreatTeamIsTheKey + " container"}></section>
			<section>Testimonials</section>
			<section className={css.OurClients + " container"}></section>
			<LatestPosts />
			<FAQ />
		</section>
	);
};

export default AboutUsPage;
