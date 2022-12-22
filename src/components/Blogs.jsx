import React from "react";
import currency from "../../public/images/image-currency.jpg";
import restaurant from "../../public/images/image-restaurant.jpg";
import plane from "../../public/images/image-plane.jpg";
import confetti from "../../public/images/image-confetti.jpg";

export default function Blogs() {
	return (
		<div className="blogs-section" id="blog">
			<div className="container">
				<section>
					<h4>Latest Articles</h4>
					<div className="blogs">
						<div className="blog">
							<div className="img">
								<img src={currency} alt="currency" />
							</div>
							<div className="content">
								<span>By Claire Robinson</span>
								<h5>Receive money in any currency with no fees</h5>
								<p>
									The world is getting smaller and we’re becoming more mobile.
									So why should you be forced to only receive money in a single
									…
								</p>
							</div>
						</div>
						<div className="blog">
							<div className="img">
								<img src={restaurant} alt="restaurant" />
							</div>
							<div className="content">
								<span>By Wilson Hutton</span>
								<h5> Treat yourself without worrying about money</h5>
								<p>
									Our simple budgeting feature allows you to separate out your
									spending and set realistic limits each month. That means you …
								</p>
							</div>
						</div>
						<div className="blog">
							<div className="img">
								<img src={plane} alt="plane" />
							</div>
							<div className="content">
								<span>By Wilson Hutton</span>
								<h5> Take your Easybank card wherever you go</h5>
								<p>
									We want you to enjoy your travels. This is why we don’t charge
									any fees on purchases while you’re abroad. We’ll even show you
									…
								</p>
							</div>
						</div>
						<div className="blog">
							<div className="img">
								<img src={confetti} alt="confetti" />
							</div>
							<div className="content">
								<span> By Claire Robinson</span>
								<h5> Our invite-only Beta accounts are now live!</h5>
								<p>
									After a lot of hard work by the whole team, we're excited to
									launch out closed beta. It's easy to request an invite through
									the site...
								</p>
							</div>
						</div>
					</div>
				</section>
			</div>
		</div>
	);
}
