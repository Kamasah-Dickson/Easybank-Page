import React from "react";
import darkMode from "../assets/dark_mode_FILL0_wght400_GRAD0_opsz48.svg";
import lightMode from "../assets/light_mode_FILL0_wght400_GRAD0_opsz48.svg";
import lightLogo from "../assets/logo.svg";
import darkLogo from "../assets/logo copy.svg";
import harmburger from "/images/icon-hamburger.svg";
import lightHamburger from "/images/icon-hamburger light.svg";
import { toggleTheme } from "./contexts";
import { useContext } from "react";
import { useEffect } from "react";

export default function Navigation() {
	const [theme, setTheme] = useContext(toggleTheme);
	theme
		? document.body.classList.remove("dark")
		: document.body.classList.add("dark");

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<div className="container">
			<nav>
				<div className="logo">
					<a href="/">
						<img
							src={theme ? lightLogo : darkLogo}
							className="logo"
							alt="easy bank"
						/>
					</a>
				</div>
				<ul className="nav-links">
					<li>
						<a href="#home">Home</a>
					</li>
					<li>
						<a href="#about">About</a>
					</li>
					<li>
						<a href="#contact">Contact</a>
					</li>
					<li>
						<a href=" #blog">Blog</a>
					</li>
					<li>
						<a href="#careers">Careers</a>
					</li>
				</ul>
				<button className="cta">Request Invite</button>
				<div className="group">
					<img
						src={theme ? harmburger : lightHamburger}
						className="menu"
						alt="menu"
					/>
					<img
						onClick={() => setTheme((prev) => !prev)}
						src={theme ? darkMode : lightMode}
						alt={theme ? "darkMode" : "lightMode"}
						className="theme-toggle"
					/>
				</div>
			</nav>
		</div>
	);
}
