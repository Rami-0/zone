import React, { useContext, useState } from "react";
import css from "./Footer.module.css";
import messageDark from "./assets/Message-dark.svg";
import messageLight from "./assets/Message-light.svg";
import MapMarkerDark from "./assets/Mapmarker-dark.svg";
import MapMarkerLight from "./assets/Mapmarker-light.svg";
import { ThemeContext } from "./../../App";
import Button from "../Button/Button";
import { useTranslation } from "react-i18next";
import Mail from "./assets/Mail.svg";
import logodark from "./assets/Logo-dark.svg";
import logolight from "./assets/Logo-light.svg";
import instaLight from "./assets/insta.svg";
import instaDark from "./assets/insta-dark.svg";
import LinkedInDark from "./assets/linkedIn-dark.svg";
import LinkedInLight from "./assets/LinkedIn.svg";
import FacebookLight from "./assets/Facebook.svg";
import FacebookDark from "./assets/facebook-dark.svg";
import tweeterDark from "./assets/tweeter-dark.svg";
import tweeterLight from "./assets/tweeter.svg";

const Footer = () => {
	const { t } = useTranslation();

	const [nameValue, setNameValue] = useState("");
	const [emailValue, setEmailValue] = useState("");
	const [phoneValue, setPhoneValue] = useState("");
	const [urlValue, setUrlValue] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();

		setNameValue("");
		setEmailValue("");
		setPhoneValue("");
		setUrlValue("");
	};

	const { themeDark } = useContext(ThemeContext);
	return (
		<footer className={`${css.footer}`}>



			<section className={`container ${css.SEO_Analysis_bkg}`}>
				<div className={`${css.SEO_Analysis}`}>
					<section>
						<h1>
							{t("footer.SEOAnalysis.SEO1")}
							<br />
							{t("footer.SEOAnalysis.SEO2")}
						</h1>
						<span>
							<img src={messageDark} alt="" />{" "}
							<p>{t("footer.SEOAnalysis.email")}</p>
						</span>
						<span>
							<img src={MapMarkerDark} alt="" />
							<p>{t("footer.SEOAnalysis.address")}</p>
						</span>
					</section>

					<form onSubmit={handleSubmit}>
						<input
							type="text"
							className={css.input}
							placeholder={t("footer.SEOAnalysis.name-placeholder")}
							value={nameValue}
							onChange={(e) => setNameValue(e.target.value)}
							required
						/>
						<input
							type="email"
							className={css.input}
							placeholder={t("footer.SEOAnalysis.email-placeholder")}
							value={emailValue}
							onChange={(e) => setEmailValue(e.target.value)}
							required
						/>
						<input
							type="number"
							className={css.input}
							placeholder={t("footer.SEOAnalysis.phone-placeholder")}
							value={phoneValue}
							onChange={(e) => setPhoneValue(e.target.value)}
							required
						/>
						<input
							type="url"
							className={css.input}
							placeholder={t("footer.SEOAnalysis.website-placeholder")}
							value={urlValue}
							onChange={(e) => setUrlValue(e.target.value)}
							required
						/>

						<Button text={t("footer.SEOAnalysis.SendRequest")} type="orange" />
					</form>
				</div>
			</section>



			<section className={css.NewsletterSection + " container"}>
				<div>
					<img src={Mail} alt="" />
					<div className={css.forText}>
						<h4>Sign Up For Newsletter</h4>
						<p className="secondary_text">
							Receive 50% discount on first project
						</p>
					</div>
				</div>
				<form onSubmit={handleSubmit}>
					<input type="email" placeholder="Enter your email" className={css.input} />
					<Button text={"sign Up"} type={"orange"} />
				</form>
			</section>


			<section className={`${css.infoSection} container`}>

				<div className={css.top}>
					<div className={css.main}>
						<img src={themeDark ? logodark : logolight} alt="" />
						<p className="secondary_text">
							The starting point for your next project based on
							easy-to-customize Material-UI © helps you build apps faster and
							better.
						</p>
						<span className={css.iconsContainer}>
							<img src={themeDark ? FacebookDark : FacebookLight} alt="" />
							<img src={themeDark ? instaDark : instaLight} alt="" />
							<img src={themeDark ? LinkedInDark : LinkedInLight} alt="" />
							<img src={themeDark ? tweeterDark : tweeterLight} alt="" />
						</span>
					</div>
					<div className={css.contacts}>
						<span>
							<img src={themeDark ? messageDark : messageLight} alt="" />
							<p className="secondary_text mainColorText">info@example.com</p>
						</span>
						<span>
							<img src={themeDark ? MapMarkerDark : MapMarkerLight} alt="" />
							<p className="secondary_text mainColorText">655 Schaefer Dale</p>
						</span>
					</div>
					<div className={css.last}>
						<form>
							<input type="email" className={css.input} placeholder="Email address" />
							<Button
								text={
									<svg
										width="7"
										height="12"
										viewBox="0 0 7 12"
										fill="none"
										xmlns="http://www.w3.org/2000/svg">
										<path
											d="M6.4125 6.24902L0.7875 11.874L0 11.0865L4.8375 6.24902L0 1.41152L0.7875 0.624023L6.4125 6.24902Z"
											fill="white"
										/>
									</svg>
								}
                type={"orange"}
							/>
						</form>
					</div>
				</div>

				<div className={css.bottom}>
					<p className="secondary_text">© 2021. All rights reserved</p>
					<div>
						<a className="secondary_text">Help Center</a>
						<a className="secondary_text">Terms of Service</a>
					</div>
				</div>
			</section>


		</footer>
	);
};

export default Footer;
