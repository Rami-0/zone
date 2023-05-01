import logo from "./logo.svg";
import "./App.css";
import { useTranslation, Trans } from "react-i18next";
import Header from "./components/Header/Header";
import { useState, createContext } from "react";

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

	const ToggleTheme = () => {
		setTheme(!themeDark)
	};

	return (
		<ThemeContext.Provider
			value={{ stylesVars, themeDark, ToggleTheme }}>
			<div className="App" style={stylesVars}>
				<Header />
				<div style={{ height: 10 + "vh" }}>
					<div className="first"></div>
					<div className="second"></div>
				</div>
			</div>
		</ThemeContext.Provider>
	);
}

export default App;
