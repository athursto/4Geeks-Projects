import React, { useContext, Fragment } from "react";
import { Link } from "react-router-dom";
import { DropDown } from "./dropdown.js";
import { Context } from "../store/appContext";

export const Navbar = () => {
	const { store, actions } = useContext(Context);
	return (
		<nav className="navbar navbar-dark bg-dark mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">
					<img
						className="img-responsive"
						src="https://upload.wikimedia.org/wikipedia/en/thumb/3/36/SW_opening_crawl_logo.svg/1280px-SW_opening_crawl_logo.svg.png"
					/>
				</span>
			</Link>

			<div className="dropdown">
				<button
					className="btn btn-warning dropdown-toggle"
					type="button"
					id="dropdownMenuButton"
					data-toggle="dropdown"
					aria-haspopup="true"
					aria-expanded="false">
					Favorites
					{"   "}
					<span className="badge badge-light">{Object.keys(store.favorites).length}</span>
				</button>

				<div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton ">
					{store.favorites.map((item, index) => {
						return (
							<>
								<Link
									key={index}
									to={`/${item.category === "people" ? "people" : "planets"}/${item.index}`}
									className="dropdown-item">
									{item.name}{" "}
								</Link>

								<span className="delete-icon">
									<i
										key={index}
										onClick={() => actions.handleDelete(index)}
										className="fas fa-recycle"
									/>
								</span>
							</>
							// actually this is going to need to accept people or planets :(((())))
						);
					})}
				</div>
			</div>
		</nav>
	);
};
