import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link } from "react-router-dom";

export const Planets = props => {
	const { title, data } = props;
	const { store, actions } = useContext(Context);
	//below is new-- me trying to get that fetch data into the planets element
	return data.map((item, index) => {
		return (
			<div key={index} className="col-3">
				<div className="card">
					<img src="https://via.placeholder.com/400x200.png" className="card-img-top" alt="..." />
					<div className="card-body">
						<h5 className="card-title">{item.name}</h5>
						<p className="card-text">
							Population: {item.population}
							<br />
							Terrain: {item.terrain}
						</p>
					</div>
					<div className="panel-footer row d-flex justify-content-between m-1">
						<div className="col-xs-6 text-left">
							<Link to={`/planets/${index}/`}>
								<button className="btn btn btn-outline-primary m-1">Learn More!</button>
							</Link>
						</div>
						<div className="col-xs-6 text-right">
							<a
								href="#"
								className="btn btn btn-outline-warning m-1"
								onClick={() => actions.addFavorite(item.name, index, "planets")}>
								<i className="far fa-heart" />
							</a>
						</div>
					</div>
				</div>
			</div>
		);
	});
};

Planets.propTypes = {
	title: PropTypes.string,
	data: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	fave: PropTypes.string,
	image: PropTypes.string
};
