import React, { useContext } from "react";
import { useTranslation, Trans } from "react-i18next";
import { ThemeContext } from "../../App";
import css from "./Header.module.css"


const lngs = {
	en: { nativeName: "English" },
	ru: { nativeName: "Russian" },
};

const Header = () => {
	const { t, i18n } = useTranslation();
	const { stylesVars, themeDark, ToggleTheme } = useContext(ThemeContext);

	return (
		<header>
			{Object.keys(lngs).map((lng) => (
				<button
					type="submit"
					key={lng}
					onClick={() => i18n.changeLanguage(lng)}
					disabled={i18n.resolvedLanguage === lng}>
					{lngs[lng].nativeName}
				</button>
			))}
			<button onClick={ToggleTheme}> ToggleTheme </button>
			<h5>{t("header.description")}</h5>
			<h1 className={css.h1}>{t("header.learn")}</h1>
		</header>
	);
};

export default Header;
