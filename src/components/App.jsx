import React from "react";
import Navigation from "./Navigation";
import { toggleTheme } from "./contexts";
import { useState } from "react";
import Hero from "./Hero";
import About from "./About";

export default function App() {
	const [theme, setTheme] = useState(
		JSON.parse(localStorage.getItem("theme")) && true
	);
	return (
		<>
			<toggleTheme.Provider value={[theme, setTheme]}>
				<header className={theme ? "" : "dark"}>
					<Navigation />
				</header>
				<main>
					<Hero />
					<About />
				</main>
			</toggleTheme.Provider>
		</>
	);
}
