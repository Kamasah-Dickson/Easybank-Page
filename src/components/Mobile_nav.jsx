import React from "react";
import { useRef } from "react";

export default function Sidebar({ nav }) {
	const modalRef = useRef(null);
	function closeModal(e) {
		if (e.target !== modalRef.current) {
			nav(false);
		}
	}
	return (
		<div className="light-box" onClick={closeModal}>
			<div className="nav-links">
				<ul ref={modalRef} onClick={(e) => e.stopPropagation()}>
					<li onClick={() => nav(false)}>
						<a href="#home">Home</a>
					</li>
					<li onClick={() => nav(false)}>
						<a href="#about">About</a>
					</li>
					<li onClick={() => nav(false)}>
						<a href="#contact">Contact</a>
					</li>
					<li onClick={() => nav(false)}>
						<a href="#blog">Blog</a>
					</li>
					<li onClick={() => nav(false)}>
						<a href="#career">Careers</a>
					</li>
				</ul>
			</div>
		</div>
	);
}
