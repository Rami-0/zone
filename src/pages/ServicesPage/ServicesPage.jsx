import React, { useContext } from "react";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import TimeLine from "./../../components/TimeLine/TimeLine";
import css from "./ServicesPage.module.css";
import Button from "./../../components/Button/Button";

import bkg1 from "./assets/bkg1.svg";
import DB from "./assets/DBicon.svg";
import mail from "./assets/mail.svg";
import Artboard from "./assets/Artboard.svg";
import lightArrow from "./assets/lightArrow.svg";
import DarkArrow from "./assets/DarkArrow.svg";

import { ThemeContext } from "../../App";

const ServicesPage = () => {
	const { themeDark } = useContext(ThemeContext);

	return (
		<section>
			<section className={css.OfflineSEO}>
				<div
					className={css.top + " container"}
					style={{ background: `url(${bkg1}) center/cover no-repeat` }}>
					<article>
						<h1 style={{ color: "white" }}>Offline SEO</h1>
						<p className="secondary_mid_text">
							Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
							sapien, quis venenatis ante odio sit amet eros.
						</p>
					</article>
					<form
						className={css.form}
						onSubmit={(e) => {
							e.preventDefault();
						}}>
						<label className={css.email} htmlFor="">
							<img src={mail} alt="icon" />
							<input type="email" name="" id="" placeholder="Email" />
						</label>
						<hr className={css.divider} />
						<label className={css.url} htmlFor="">
							<img src={DB} alt="icon" />
							<input type="url" name="" id="" placeholder="Website URL" />
						</label>
						<Button text={"Analyse"} type={"orange"} />
					</form>
				</div>

				<main className={css.main + " container"}>
					<img className={css.image} src={Artboard} alt="Artboard" />
					<div className={css.aside}>
						<article>
							<h2>Offline SEO</h2>
							<p className="secondary_mid_text">
								Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
								suscipit non, turpis. Nunc nonummy metus. Donec elit libero,
								sodales nec
							</p>
							<ul className={css.list}>
								<li>First Class Flights</li>
								<li>5 Star Accommodations</li>
								<li>Inclusive Packages</li>
								<li>Latest Model Vehicles</li>
							</ul>
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
				</main>
			</section>

			<section className={css.ServicesInclude}></section>
			<section className={css.BenefitsAchieved}></section>
			<TimeLine />
			<LatestPosts />
		</section>
	);
};

export default ServicesPage;
