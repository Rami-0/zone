import React from "react";
import css from "./OurServicesAndWorkFlow.module.css";
import Button from "./../../../../components/Button/Button";
import seo from "../../assets/Ourserveses-SEO.svg";
import email from "../../assets/Ourserveses-email.svg";
import search from "../../assets/Ourserveses-search.svg";
import social from "../../assets/Ourserveses-social.svg";
import orangeArrow from "../../assets/orangeArrow.svg";

import Planning from "../../assets/workFlow_planning.svg";
import research from "../../assets/workFlow_research.svg";
import optimization from "../../assets/workFlow_optimization.svg";
import Results from "../../assets/workFlow_analysis.svg";

const arr_OurServices = [
	{
		img: seo,
		h6: "SEO",
		p: "Nunc nonummy metus. Donec elit libero",
	},
	{
		img: email,
		h6: "Email Marketing",
		p: "Nunc nonummy metus. Donec elit libero",
	},
	{
		img: search,
		h6: "Search Engine Oprimization",
		p: "Nunc nonummy metus. Donec elit libero",
	},
	{
		img: social,
		h6: "Social Marketing",
		p: "Nunc nonummy metus. Donec elit libero",
	},
];

const arr_workflow = [
	{
		photo: Planning,
		h5: "Planning",
		color: "#770508",
		background: "#FDAB76",
	},
	{
		photo: research,
		h5: "Research",
		color: "#063963",
		background: "#77F0ED",
	},
	{
		photo: optimization,
		h5: "Optimizing",
		color: "#7A5204",
		background: "#FFE475",
	},
	{
		photo: Results,
		h5: "Results",
		color: "#02665B",
		background: "#69F290",
	},
];

const OurServicesAndWorkFlow = () => {
	return (
		<>
			<section className={css.OurServices + " container"}>
				<div className="sections_title">
					<p className="secondary_text">Our Services</p>
					<h2>We Provide</h2>
					<p className="secondary_mid_text">
						Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
						suscipit non, turpis.
					</p>
				</div>
				<div className={css.cards}>
					{arr_OurServices.map(({ img, h6, p }) => {
						return (
							<div className={css.card}>
								<img src={img} alt="" />
								<span>
									<h6>{h6}</h6>
									<p className="secondary_text">{p} </p>
								</span>
								<Button text={<img src={orangeArrow} alt="" />} />
							</div>
						);
					})}
				</div>
			</section>

			<section className={css.WorkFlow + " container"}>
				<div className="sections_title">
					<p className="secondary_text">Work Flow</p>
					<h2>Working Process</h2>
					<p className="secondary_mid_text">
						Nunc nonummy metus. Donec elit libero, sodales nec, volutpat a,
						suscipit non, turpis.{" "}
					</p>
				</div>
				<div className={css.cards_workflow}>
					{arr_workflow.map(({ photo, h5, color, background }) => {
						return (
							<div
								className={css.card_workFlow}
								style={{ background: background }}>
								<img src={photo} alt="img" />
										<span>
											<h5 style={{ color }}>{h5}</h5>
											<svg
												width="18"
												height="10"
												viewBox="0 0 18 10"
												fill="none"
												xmlns="http://www.w3.org/2000/svg">
												<path
													d="M17.25 5.0752L12.4375 0.262695L11.4654 1.23482L14.6183 4.3877H0.75V5.7627H14.6183L11.4654 8.91557L12.4375 9.8877L17.25 5.0752Z"
													fill={color}
												/>
											</svg>
										</span>
							</div>
						);
					})}
				</div>
			</section>
		</>
	);
};

export default OurServicesAndWorkFlow;
