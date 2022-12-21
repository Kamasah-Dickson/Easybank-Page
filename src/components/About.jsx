import React from "react";
import cardData from "./cardData.json";
import { toggleTheme } from "./contexts";
import { useContext } from "react";

export default function About() {
	const [theme] = useContext(toggleTheme);
	return (
		<div className={theme ? "about" : "about dark"} id="about">
			<div className="container">
				<section>
					<div className="title">
						<h2>Why choose Easybank?</h2>
						<p>
							We leverage Open Banking to turn your bank account into your
							financial hub. Control your finances like never before.
						</p>
					</div>
					<div className="cards">
						{cardData.map((data) => {
							return (
								<div key={data.title} className="card">
									<img src={data.img} alt={data.title} />
									<h3>{data.title}</h3>
									<p>{data.para}</p>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		</div>
	);
}
