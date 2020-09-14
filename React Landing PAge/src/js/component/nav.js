import PropTypes from "prop-types";
import React from "react";

export default function Nav(props) {
	const { brand, links } = props;

	return (
		<nav className="navbar navbar-expand-lg navbar-dark bg-dark">
			<a className="navbar-brand" href="#">
				{brand}
			</a>
			<button
				className="navbar-toggler"
				type="button"
				data-toggle="collapse"
				data-target="#navbarNav"
				aria-controls="navbarNav"
				aria-expanded="false"
				aria-label="Toggle navigation">
				<span className="navbar-toggler-icon" />
			</button>
			<div
				className="collapse navbar-collapse justify-content-end ml-auto"
				id="navbarNav">
				<ul className="navbar-nav ml-auto">
					{links.map((link, index) => (
						<li key={index} className="nav-item active">
							<a className="nav-link" href={link.url}>
								{link.text}
							</a>
						</li>
					))}
				</ul>
			</div>
		</nav>
	);
}
//here jonathan did some mapping but I'm not clear on how to do that
//validate props

Nav.propTypes = {
	brand: PropTypes.string,
	links: PropTypes.array
};
