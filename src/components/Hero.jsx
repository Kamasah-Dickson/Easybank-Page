import React from "react";

export default function Hero() {
	return (
		<div className="container" id="home">
			<div className="right-content">
				<img src="/images/image-mockups.png" alt="easybank" />
			</div>
			<div className="left-content">
				<h1>Next generation digital banking</h1>
				<p>
					Take your financial life online. Your Easybank account will be a
					one-stop-shop for spending, saving, budgeting, investing, and much
					more.
				</p>
				<a href="/">
					<button className="cta">Request Invite</button>
				</a>
			</div>
		</div>
	);
}
