import React, { useContext, useState } from "react";
import css from "../FAQ.module.css";
import minusDark from "../minusDark.svg";
import minus from "../minus.svg";
import plus from "../plus.svg";
import plusDark from "../plusDark.svg";
import { ThemeContext } from "../../../App";

const Question = ({ q, a }) => {
	const [isOpen, setOpen] = useState(true);

	const { themeDark } = useContext(ThemeContext);
	const ToggleOpen = () => {
		setOpen(!isOpen);
	};
	return (
		<>
			<div className={css.QestionWrapper}>
				<span className={css.question}>
					<h6>{q}</h6>
					<span className={css.button} onClick={ToggleOpen}>
						<img
							src={
								!isOpen
									? themeDark
										? minusDark
										: minus
									: themeDark
									? plusDark
									: plus
							}
							alt=""
						/>
					</span>
				</span>
				<article className={`${css.answer} ${isOpen ? css.hide : ""}`}>
					{" "}
					<p className="secondary_mid_text">{a}</p>
				</article>
				<hr />
			</div>
		</>
	);
};

export default Question;
