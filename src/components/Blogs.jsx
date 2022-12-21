import React from "react";
import blogsData from "./articles.json";

export default function Blogs() {
	return (
		<div className="blogs-section" id="blog">
			<div className="container">
				<section>
					<h4>Latest Articles</h4>
					<div className="blogs">
						{blogsData.map((blogs) => {
							return (
								<div key={blogs.title} className="blog">
									<div className="img">
										<img src={blogs.img} alt={blogs.img} />
									</div>
									<div className="content">
										<span>{blogs.span}</span>
										<h5>{blogs.title}</h5>
										<p>{blogs.para}</p>
									</div>
								</div>
							);
						})}
					</div>
				</section>
			</div>
		</div>
	);
}
