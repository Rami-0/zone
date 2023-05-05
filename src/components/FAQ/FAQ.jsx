import React, { useContext, useState } from "react";
import css from "./FAQ.module.css";
import svgFAQ from "./FAQ.svg";
import Question from "./Question/Question";
import { ThemeContext } from "./../../App";

const arr = [
	{
		q: "Sed augue ipsum, egestas nec, vestibulum et",
		a: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,",
	},
	{
		q: "Malesuada adipiscing, dui vestibulum suscipit nulla quis orci.",
		a: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,",
	},
	{
		q: "Ut varius tincidunt libero.",
		a: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,",
	},
	{
		q: "In ut quam vitae odio lacinia tincidunt.",
		a: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,",
	},
	{
		q: "Fusce vel dui Morbi nec metus.",
		a: "Curabitur nisi. Phasellus blandit leo ut odio. Donec posuere vulputate arcu. Donec mi odio, faucibus at, scelerisque quis, convallis in,",
	},
];

const FAQ = () => {
	return (
		<section className={css.sectionFAQ + " container"}>
			<main>
				<header className={css.header}>
					<p className="secondary_small_text">FAQS</p>
					<h2>
						Frequently Asked <br /> Questions
					</h2>
				</header>
				<div>
					{arr.map(({ q, a }) => (
						<Question q={q} a={a} />
					))}
				</div>
			</main>

			<aside>
				<img src={svgFAQ} alt="" />
			</aside>
		</section>
	);
};

export default FAQ;
