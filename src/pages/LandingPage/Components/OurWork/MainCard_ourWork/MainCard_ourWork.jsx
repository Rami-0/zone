import React from "react";
import css from "./MainCard_ourWork.module.css";

const MainCard_ourWork = ({ img, head, title }) => {
	return (
		<div
			className={css.main_card_ourWork}
			style={{ backgroundImage: `url(${img})` }}>
				<p>{head}</p>
				<h6>{title}</h6>
			<div className={css.overlay}>
			</div>
		</div>
	);
};

export default MainCard_ourWork;
