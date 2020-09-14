import React, { Component } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

export const Characters = props => {
	const { title, body, url, image, fave } = props;
	return (
		<div className="card">
			<img src={image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{body}</p>
			</div>
			<div className="panel-footer row d-flex justify-content-between m-1">
				<div className="col-xs-6 text-left">
					<a href={url} className="btn btn btn-outline-primary">
						Learn More!
					</a>
				</div>
				<div className="col-xs-6 text-right">
					<a href={fave} className="btn btn btn-outline-warning">
						<i className="far fa-heart" />
					</a>
				</div>
			</div>
		</div>
	);
};

Characters.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	fave: PropTypes.string,
	image: PropTypes.string
};
