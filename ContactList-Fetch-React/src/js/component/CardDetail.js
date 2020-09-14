import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";
import { Context } from "../store/appContext";

export const CardDetail = props => {
	const { store, actions } = useContext(Context);
	return (
		<div className="container">
			<div className="card flex-row flex-wrap">
				<div className="card-header border-0">
					<img src="//placehold.it/200" alt="" />
				</div>
				<div className="card-block px-2">
					<h4 className="card-title">Title</h4>
					<p className="card-text">Description</p>
					<a href="#" className="btn btn-primary">
						BUTTON
					</a>
				</div>
				<div className="w-100" />
				<div className="card-footer w-100 text-muted">
					<Link to="/">
						<span className="btn btn-primary btn-lg" href="#" role="button">
							Back home
						</span>
					</Link>
				</div>
			</div>
			<br />
		</div>
	);
};

CardDetail.propTypes = {
	match: PropTypes.object
};
