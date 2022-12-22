import React from "react";
import darkMode from "../assets/dark_mode_FILL0_wght400_GRAD0_opsz48.svg";
import lightMode from "../assets/light_mode_FILL0_wght400_GRAD0_opsz48.svg";
import lightLogo from "../assets/logo.svg";
import darkLogo from "../assets/logo copy.svg";
import { toggleTheme } from "./contexts";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import Mobile from "./Mobile_nav";

export default function Navigation() {
	const [theme, setTheme] = useContext(toggleTheme);
	const [nav, setNav] = useState(false);

	function handleMenu() {
		setNav((prev) => !prev);
	}

	theme
		? document.body.classList.remove("dark")
		: document.body.classList.add("dark");

	useEffect(() => {
		localStorage.setItem("theme", theme);
	}, [theme]);

	return (
		<>
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
					<a href="/">
						<button className="cta">Request Invite</button>
					</a>
					<div className="group">
						<div className="menu" onClick={handleMenu}>
							{!nav ? (
								<svg xmlns="http://www.w3.org/2000/svg" width="50" height="20">
									<g fill={theme ? "#2D314D" : "#fff"} fillRule="evenodd">
										<path d="M0 0h24v1H0zM0 5h24v1H0zM0 10h24v1H0z" />
									</g>
								</svg>
							) : (
								<svg xmlns="http://www.w3.org/2000/svg" width="18" height="19">
									<g fill={theme ? "#2D314D" : "#fff"} fillRule="evenodd">
										<path d="M.868.661l16.97 16.97-.706.708L.162 1.369z" />
										<path d="M.161 17.632L17.131.662l.708.706-16.97 16.97z" />
									</g>
								</svg>
							)}
						</div>

						<img
							onClick={() => setTheme((prev) => !prev)}
							src={theme ? darkMode : lightMode}
							alt={theme ? "darkMode" : "lightMode"}
							className="theme-toggle"
						/>
					</div>
				</nav>
			</div>
			{nav && <Mobile nav={setNav} />}
		</>
	);
}
