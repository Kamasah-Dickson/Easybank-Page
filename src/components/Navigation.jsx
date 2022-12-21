import React from "react";
import darkMode from "../assets/dark_mode_FILL0_wght400_GRAD0_opsz48.svg";
import lightMode from "../assets/light_mode_FILL0_wght400_GRAD0_opsz48.svg";
import { toggleTheme } from "./contexts";
import { useContext } from "react";

export default function Navigation() {
	const [theme, setTheme] = useContext(toggleTheme);

	return (
		<div className="container">
			<nav>
				<div className="logo">
					<img src="/images/logo.svg" className="logo" alt="easy bank" />
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
					<img src="/images/icon-hamburger.svg" className="menu" alt="menu" />
					<img
						onClick={() => setTheme(!theme)}
						src={theme ? darkMode : lightMode}
						alt={theme ? "darkMode" : "lightMode"}
						className="theme-toggle"
					/>
				</div>
			</nav>
		</div>
	);
}
