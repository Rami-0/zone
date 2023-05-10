import React from "react";
import css from "./Card.module.css";

const Card_OurWork = ({ src, zagolovka, title, text }) => {
	return (
		<div className={css.Big_Card_OurWork}>
			<img src={src} alt="image" />
			<span>
				<article className="sections_title">
					<p className="secondary_small_text OrangeText">{zagolovka}</p>
					<h4>{title}</h4>
					<p className="secondary_text">{text}</p>
				</article>
				<button>
					Learn more{" "}
					<svg
						width="18"
						height="10"
						viewBox="0 0 18 10"
						fill="none"
						xmlns="http://www.w3.org/2000/svg">
						<path
							d="M17.25 5.0752L12.4375 0.262695L11.4654 1.23482L14.6183 4.3877H0.75V5.7627H14.6183L11.4654 8.91557L12.4375 9.8877L17.25 5.0752Z"
							fill="var(--textSecondary)"
						/>
					</svg>
				</button>
			</span>
		</div>
	);
};

export default Card_OurWork;
