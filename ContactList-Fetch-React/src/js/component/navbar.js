import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Contact App -- Working with APIs</span>
			</Link>
			<div className="ml-auto">
				<Link to={{ pathname: "https://github.com/athursto/4Geeks-Projects" }} target="_blank">
					<button className="btn btn-outline-info m-1">More 4Geeks Projects</button>
				</Link>
				<Link to="/add">
					<button className="btn btn-success m-1">Add to Contacts</button>
				</Link>
			</div>
		</nav>
	);
};
