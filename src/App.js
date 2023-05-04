import "./App.css";
// import { useTranslation, Trans } from "react-i18next";
import Header from "./components/Header/Header";
import { useState, createContext } from "react";
import LandingPage from "./pages/LandingPage/LandingPage";
import BlogPage from "./pages/BlogPage/BlogPage";
import CaseStudiesPage from "./pages/CaseStudiesPage-details/CaseStudiesPage-details";
import ContactsPage from "./pages/ContactsPage/ContactsPage";
import AboutUsPage from "./pages/AboutUsPage/AboutUsPage";
import ServicesPage from "./pages/ServicesPage/ServicesPage";
import Footer from "./components/Footer/Footer";
import { Route, Routes } from "react-router-dom";
import NotFoundPage from "./pages/NotFoundPage/NotFoundPage";
import CaseStudiesPage_details from "./pages/CaseStudiesPage-details/CaseStudiesPage-details";
import CaseStudiesPage_list from "./pages/CaseStudiesPage-list/CaseStudiesPage-list";
import BlogPage_details from "./pages/BlogPage-details/BlogPage_details";

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
					<Route path="/Blog/details" element={<BlogPage_details />} />
					<Route path="/CaseStudies/details" element={<CaseStudiesPage_details />} />
					<Route path="/CaseStudies/list" element={<CaseStudiesPage_list />} />
					<Route path="/Contacts" element={<ContactsPage />} />
					<Route path="/AboutUs" element={<AboutUsPage />} />
					<Route path="/Services" element={<ServicesPage />} />
					<Route path="*" element={<NotFoundPage />} />
				</Routes>
				<Footer />
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
