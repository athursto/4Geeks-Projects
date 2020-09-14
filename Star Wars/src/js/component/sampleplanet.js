import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const SamplePlanet = props => {
	const { title, data } = props;
	const { store, actions } = useContext(Context);
	const params = useParams();
	//below is new-- me trying to get that fetch data into the planets element
	return (
		<div className="col-3">
			<div className="card">
				<img src="https://via.placeholder.com/400x200.png" className="card-img-top" alt="..." />
				<div className="card-body">
					<h3 className="card-title">{store.planets[params.index].name}</h3>
					{/* <h3 className="card-title">{params.whatever}</h3> */}
					<p className="card-text">
						Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
						labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
						laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in
						voluptate velit esse cillum dolore eu fugiat nulla pariatur.
					</p>
				</div>
			</div>
		</div>
	);
};

SamplePlanet.propTypes = {
	title: PropTypes.string,
	data: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	fave: PropTypes.string,
	image: PropTypes.string
};
