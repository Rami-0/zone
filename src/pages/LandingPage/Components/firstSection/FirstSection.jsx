import React from "react";
import css from "./FirstSection.module.css";
import illustration from "../../assets/illustration_marketing.svg";
import playIcon from "../../assets/playIcon.svg";
import Button from "./../../../../components/Button/Button";
const FirstSection = () => {
	return (
		<section className={css.section + " container"}>
			<main className={css.main}>
				<p className="secondary_text OrangeText">Digital Marketing</p>
				<h1>
					Boosts Your <br /> Website Traffic
				</h1>
				<p className="secondary_mid_text">
					Etiam sollicitudin, ipsum eu pulvinar rutrum, tellus ipsum laoreet
					sapien, quis venenatis ante odio sit amet eros.{" "}
				</p>
				<div className={css.buttons}>
					<Button text={"Try For Free"} type={"orange"} />
					<span>
						<img src={playIcon} alt="" />
            <p className={css.playIcon_text}>See Our Work</p>
					</span>
				</div>
			</main>
			<aside className={css.aside}>
				<img src={illustration} alt="" />
			</aside>
		</section>
	);
};

export default FirstSection;
