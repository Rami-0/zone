import React, { useContext, useEffect, useMemo, useState } from "react";
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
import MediaQuery from "react-responsive";
import burger_icon_light from "./assets/burger_icon.svg";
import burger_icon_dark from "./assets/burger_icon_dark.svg";

const lngs = {
	en: { nativeName: "EN" },
	ru: { nativeName: "RU" },
};
const options = {
	Home: "/",
	Services: "/Services",
	Blog: "/Blog",
	// Blog_details: "/Blog/details",
	CaseStudies_list: "/CaseStudies/list",
	// CaseStudies_details: "/CaseStudies/details",
	Contacts: "/Contacts",
	AboutUs: "/AboutUs",
};

const Header = () => {
	const { t, i18n } = useTranslation();
	const { stylesVars, themeDark, ToggleTheme } = useContext(ThemeContext);
	const navigate = useNavigate();
	const [PagesOpen, setPagesOpen] = useState(false);
	const [isScrolled, setIsScrolled] = useState(false);
	const { pathname } = useLocation();

	useEffect(() => {
		window.addEventListener("scroll", handleScroll);
		return () => {
			window.removeEventListener("scroll", handleScroll);
		};
	}, []);

	const handleScroll = () => {
		if (window.pageYOffset > 1) {
			setIsScrolled(true);
		} else {
			setIsScrolled(false);
		}
	};

	const handlePagesOpen = () => {
		setPagesOpen(!PagesOpen);
	};

	const isServices = useMemo(() => {
		if (pathname == "/Services") {
			// setService(true);
			return true;
		} else {
			// setService(false);
			return false;
		}
	}, [pathname]);

	return (
		<header
			id="Header"
			className={`${css.header} container ${isScrolled ? "scrolled" : ""}`}>
			<MediaQuery maxWidth={1200}>
				<nav className={css.mobile_header}>
					<img
						src={
							themeDark
								? LogoDark
								: isServices && !isScrolled
								? LogoDark
								: LogoLight
						}
						alt="logo"
					/>
				</nav>
				<div className={css.header_left}>
					<Button
						text={
							<img
								src={
									themeDark
										? burger_icon_dark
										: isServices && !isScrolled
										? burger_icon_dark
										: burger_icon_light
								}
								alt="search"
							/>
						}
					/>
					<Button
						text={
							<img
								src={
									themeDark
										? SearchDark
										: isServices && !isScrolled
										? SearchDark
										: SearchLight
								}
								alt="search"
							/>
						}
					/>
				</div>
			</MediaQuery>
			<MediaQuery minWidth={1201}>
				<nav className={isServices && !isScrolled ? ` ${css.white_text}` : " "}>
					<img
						src={
							themeDark
								? LogoDark
								: isServices && !isScrolled
								? LogoDark
								: LogoLight
						}
						alt="logo"
					/>
					<Link to={"/"} className={css.nav_links}>
						{t("header.Home")}
					</Link>
					<Link to={"/Components"} className={css.nav_links}>
						{t("header.Components")}
					</Link>
					<p className={css.Pages} onClick={handlePagesOpen}>
						{t("header.Pages")}
						<img
							className={PagesOpen ? css.Rotate_180_degree : null}
							src={
								themeDark
									? downArrowDark
									: isServices && !isScrolled
									? downArrowDark
									: downArrowLight
							}
							alt=""
						/>
					</p>
					<Link to={"/Documentation"} className={css.nav_links}>
						{t("header.Documentation")}
					</Link>
				</nav>
				<div className={css.Pages_options + ` ${PagesOpen ? "" : "hide"}`}>
					{Object.keys(options).map((option) => (
						<Button
							key={option}
							href={options[option]}
							text={t(`header.${option}`)}
							onClick={() => {
								navigate(options[option]);
								setPagesOpen(false);
							}}>
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
								src={themeDark ? moon : isServices && !isScrolled ? moon : sun}
								alt="screenMode"
							/>
						}
					/>
					<Button
						text={
							<img
								src={
									themeDark
										? SearchDark
										: isServices && !isScrolled
										? SearchDark
										: SearchLight
								}
								alt="search"
							/>
						}
					/>
					<Button
						onClick={() =>
							i18n.changeLanguage(i18n.resolvedLanguage === "en" ? "ru" : "en")
						}
						text={
							<img
								className={css.darkLightMode_icon}
								src={
									themeDark
										? LanguageDark
										: isServices && !isScrolled
										? LanguageDark
										: LanguageLight
								}
								alt="language"
							/>
						}
					/>
					<Button
						className={isServices && !isScrolled ? css.white_text : " "}
						text={<p className="main_text">{t("header.Login")}</p>}
					/>
					<Button
						className={isServices && !isScrolled ? css.white_Theme_bkg : ""}
						type={
							isServices && !isScrolled ? " " : themeDark ? "dark" : "white"
						}
						text={t("header.JoinUs")}
					/>
				</div>
			</MediaQuery>
		</header>
	);
};

export default Header;
