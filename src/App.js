import "./App.css";
// import { useTranslation, Trans } from "react-i18next";
import Header from "./components/Header/Header";
import { useState, createContext } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import CaseStudiesPage from "./pages/CaseStudiesPage/CaseStudiesPage";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";

export const ThemeContext = createContext(null);

function App() {
	const [themeDark, setTheme] = useState(true);
	const stylesVars = {
		"--textPraimary": themeDark ? "#fff" : "#212b36",
		"--textSecondary": themeDark ? "#919eab" : "#637381",
		"--MainOrange": "#fa541c",
		"--bkgPraimary": themeDark ? "#161c24" : "#fff",
		"--bkgSecondary": themeDark ? "rgba(145, 158, 171, 0.12)" : "#f9fafb",
	};

	{
		/* <div style={{ height: 10 + "vh" }}>
		<div className="first"></div>
		<div className="second"></div>
	</div> */
	}

	const ToggleTheme = () => {
		setTheme(!themeDark);
	};

	return (
		<ThemeContext.Provider value={{ stylesVars, themeDark, ToggleTheme }}>
			<div className="App" style={stylesVars}>
				<Header />
				<Routes>
					<Route path="/" element={<LandingPage />} />
					<Route path="/Blog" element={<BlogPage />} />
					<Route path="/CaseStudies" element={<CaseStudiesPage />} />
					<Route path="/Contacts" element={<ContactsPage />} />
					<Route path="/AboutUs" element={<AboutUsPage />} />
					<Route path="/Services" element={<ServicesPage />} />
				</Routes>
				<Footer />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
