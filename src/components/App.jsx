import React from "react";
import Navigation from "./Navigation";
import { toggleTheme } from "./contexts";
import { useState } from "react";
import Hero from "./Hero";
export default function App() {
	const [theme, setTheme] = useState(true);
	return (
		<>
			<toggleTheme.Provider value={[theme, setTheme]}>
				<header>
					<Navigation />
				</header>
				<main>
					<Hero />
				</main>
			</toggleTheme.Provider>
		</>
	);
}
