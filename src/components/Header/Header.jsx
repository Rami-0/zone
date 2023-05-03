import React, { useContext, useState } from "react";
import { useTranslation, Trans } from "react-i18next";
import { ThemeContext } from "../../App";
import css from "./Header.module.css";
import LogoLight from "./assets/logo-light.svg";
import LogoDark from "./assets/logo-dark.svg";
import { Link, useLocation, useNavigate } from "react-router-dom";
import downArrowLight from "./assets/DownArrow-light.svg";
import downArrowDark from "./assets/DownArrow-Dark.svg";
import SearchLight from "./assets/search-light.svg";
import SearchDark from "./assets/search-dark.svg";
import LanguageLight from "./assets/language-light.svg";
import LanguageDark from "./assets/language-dark.svg";
import sun from "./assets/lightMode.svg";
import moon from "./assets/darkMode.svg";
import Button from "./../Button/Button";

const lngs = {
	en: { nativeName: "EN" },
	ru: { nativeName: "RU" },
};
const options = {
	Home: "/",
	Services: "/Services",
	Blog: "/Blog",
	CaseStudies: "/CaseStudies",
	Contacts: "/Contacts",
	AboutUs: "/AboutUs",
};

const Header = () => {
	const { t, i18n } = useTranslation();
	const { stylesVars, themeDark, ToggleTheme } = useContext(ThemeContext);
	const [PagesStatus, setPagesStatus] = useState(false);
	const location = useLocation();
	const navigate = useNavigate();
	const [PagesOpen, setPagesOpen] = useState(false);
	const handlePagesOpen = () => {
		setPagesOpen(!PagesOpen);
	};

	console.log(i18n.resolvedLanguage);

	{
		/* {Object.keys(lngs).map((lng) => (
		<button
			type="submit"
			key={lng}
			onClick={() => i18n.changeLanguage(lng)}
			disabled={i18n.resolvedLanguage === lng}>
			{lngs[lng].nativeName}
		</button>
	))}
	<button onClick={ToggleTheme}> ToggleTheme </button> */
	}
	return (
		<header className={`${css.header} container`}>
			<nav>
				<img src={themeDark ? LogoDark : LogoLight} alt="" />
				<Link to={"/"} className={css.nav_links}>
					Home
				</Link>
				<Link to={"/Components"} className={css.nav_links}>
					Components
				</Link>
				<p className={css.Pages} onClick={handlePagesOpen}>
					Pages
					<img
						className={PagesOpen ? css.Rotate_180_degree : null}
						src={themeDark ? downArrowDark : downArrowLight}
						alt=""
					/>
				</p>
				<Link to={"/Documentation"} className={css.nav_links}>
					Documentation
				</Link>
			</nav>
			<div className={css.Pages_options + ` ${PagesOpen ? "" : "hide"}`}>
				{Object.keys(options).map((option) => (
					<Button key={option} href={options[option]} text={option}>
						{option}
					</Button>
				))}
			</div>

			<div className={css.header_left}>
				<Button
					onClick={ToggleTheme}
					text={
						<img
							style={{ width: "18px", height: 18 + "px" }}
							src={themeDark ? moon : sun}
							alt="screenMode"
						/>
					}
				/>
				<Button
					text={<img src={themeDark ? SearchDark : SearchLight} alt="search" />}
				/>
				<Button
					onClick={() =>
						i18n.changeLanguage(i18n.resolvedLanguage === "en" ? "ru" : "en")
					}
					text={
						<img
							className={css.darkLightMode_icon}
							src={themeDark ? LanguageDark : LanguageLight}
							alt="language"
						/>
					}
				/>
				<Button text={"Login"} />
				<Button type={!themeDark ? "dark" : "white" }  text={"Join Us"} />
			</div>
		</header>
	);
};

export default Header;
