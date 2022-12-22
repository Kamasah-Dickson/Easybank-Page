import React from "react";
import { toggleTheme } from "./contexts";
import { useContext } from "react";
import online from "../../public/images/icon-online.svg";
import budget from "../../public/images/icon-budgeting.svg";
import onboarding from "../../public/images/icon-onboarding.svg";
import api from "../../public/images/icon-api.svg";
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
						<div className="card">
							<img src={online} alt="online" />
							<h3>Online Banking</h3>
							<p>
								Our modern web and mobile applications allow you to keep track
								of your finances wherever you are in the world.
							</p>
						</div>
						<div className="cards">
							<div className="card">
								<img src={budget} alt="budget" />
								<h3>Simple Budgeting</h3>
								<p>
									See exactly where your money goes each month. Receive
									notifications when you’re close to hitting your limits.
								</p>
							</div>
						</div>
						<div className="card">
							<img src={onboarding} alt="onboarding" />
							<h3>Fast Onboarding</h3>
							<p>
								We don’t do branches. Open your account in minutes online and
								start taking control of your finances right away.
							</p>
						</div>
						<div className="card">
							<img src={api} alt="opem api" />
							<h3>Open API</h3>
							<p>
								Manage your savings, investments, pension, and much more from
								one account. Tracking your money has never been easier.
							</p>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
