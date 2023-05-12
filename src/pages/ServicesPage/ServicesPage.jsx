import React, { useContext } from "react";
import LatestPosts from "../../components/LatestPosts/LatestPosts";
import TimeLine from "./../../components/TimeLine/TimeLine";
import css from "./ServicesPage.module.css";
import Button from "./../../components/Button/Button";
import { ThemeContext } from "../../App";

import bkg1 from "./assets/bkg1.svg";
import DB from "./assets/DBicon.svg";
import mail from "./assets/mail.svg";
import Artboard from "./assets/Artboard.svg";
import lightArrow from "./assets/lightArrow.svg";
import DarkArrow from "./assets/DarkArrow.svg";

import ic_marketing_checklist from "./assets/icon/ic_marketing_checklist.svg";
import ic_marketing_file from "./assets/icon/ic_marketing_file.svg";
import ic_marketing_real_time from "./assets/icon/ic_marketing_real_time.svg";
import ic_marketing_report from "./assets/icon/ic_marketing_report.svg";
import ic_marketing_social_media from "./assets/icon/ic_marketing_social_media.svg";
import ic_marketing_statistics from "./assets/icon/ic_marketing_statistics.svg";

import illustration_benefits from "./assets/illustration_benefits.svg";

const services = [
	{
		img: ic_marketing_statistics,
		title: "Search Engine Optimization",
	},
	{
		img: ic_marketing_social_media,
		title: "Social Media Strategy",
	},
	{
		img: ic_marketing_real_time,
		title: "Social Media Strategy",
	},
	{
		img: ic_marketing_checklist,
		title: "Online Media Management",
	},
	{
		img: ic_marketing_report,
		title: "Reporting & Analysis",
	},
	{
		img: ic_marketing_file,
		title: "Penalty Recovery",
	},
];

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

			<section className={css.ServicesInclude}>
				<div className={css.top}>
					<h2>Services Include</h2>
					<p className="secondary_mid_text">
						Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
						suscipit non, turpis.
					</p>
				</div>
				<div className={css.cards}>
					{services.map(({ img, title }) => {
						return (
							<span className={css.card}>
								<img src={img} alt={title} />
								<article>
									<h5>{title}</h5>
									<p className="secondary_mid_text">
										Suspendisse enim turpis, dictum sed, iaculis a, condimentum
										nec, nisi.
									</p>
								</article>
							</span>
						);
					})}
				</div>
			</section>

			<section className={css.BenefitsAchieved + " container"}>
				<div className={css.top}>
					<h2>Benefits Achieved</h2>
					<p className="secondary_mid_text">
						Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
						suscipit non, turpis.
					</p>
				</div>

				<div className={css.WrapperCards}>

					<span className={css.card} style={{ gridArea: "s1" }}>
						<h5>Online Media Management</h5>
						<p className="secondary_text">
							Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
							nisi.
						</p>
					</span>

					<span className={css.card} style={{ gridArea: "s2" }}>
						<h5>Online Media Management</h5>
						<p className="secondary_text">
							Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
							nisi.
						</p>
					</span>

					<span className={css.card} style={{ gridArea: "s3" }}>
						<h5>Online Media Management</h5>
						<p className="secondary_text">Suspendisse enim turpis</p>
					</span>

					<span className={css.card} style={{ gridArea: "s4" }}>
						<h5>Online Media Management</h5>
						<p className="secondary_text">Suspendisse enim turpis</p>
					</span>

					<span className={css.card} style={{ gridArea: "s5" }}>
						<h5>Online Media Management</h5>
						<p className="secondary_text">
							Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
							nisi.
						</p>
					</span>

					<span className={css.card} style={{ gridArea: "s6" }}>
						<h5>Online Media Management</h5>
						<p className="secondary_text">
							Suspendisse enim turpis, dictum sed, iaculis a, condimentum nec,
							nisi.
						</p>
					</span>

					<span className={css.img} style={{ gridArea: "img" }}>
						<img src={illustration_benefits} alt="illustration_benefits" />
					</span>

				</div>
			</section>
			<TimeLine />
			<section>Testimonials {/* add component here */}</section>
			<LatestPosts />
		</section>
	);
};

export default ServicesPage;
