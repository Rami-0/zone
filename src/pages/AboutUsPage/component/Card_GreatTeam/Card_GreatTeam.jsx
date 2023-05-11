import React from "react";
import css from "./Card_GreatTeam.module.css";

import facebook from "../../assets/facebook.svg";
import insta from "../../assets/insta.svg";
import linkedin from "../../assets/linkedin.svg";
import tweeter from "../../assets/tweeter.svg";


const Card_GreatTeam = ({ img, name, department }) => {
	return (
		<span className={css.card}>
			<div className={css.mask}>
				<div className={css.overlay}>
					<span className={css.icons}>
						<img className={css.icon} src={facebook} alt="facebook" />
						<img className={css.icon} src={insta} alt="instagram" />
						<img className={css.icon} src={linkedin} alt="linkedin" />
						<img className={css.icon} src={tweeter} alt="tweeter" />
					</span>
				</div>
				<img src={img} alt={name} />
			</div>
			<article>
				<h6>{name}</h6>
				<p className="secondary_small_text">{department}</p>
			</article>
		</span>
	);
};

export default Card_GreatTeam;
