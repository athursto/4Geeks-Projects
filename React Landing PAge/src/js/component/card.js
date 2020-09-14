import PropTypes from "prop-types";
import React from "react";

export default function Card(props) {
	const { title, body, url, buttonText, image } = props;

	return (
		//should be three of these within Jumbo

		<div className="card">
			<img src={image} className="card-img-top" alt="..." />
			<div className="card-body">
				<h5 className="card-title">{title}</h5>
				<p className="card-text">{body}</p>
				<a href={url} className="btn btn-primary">
					{buttonText}
				</a>
			</div>
		</div>
	);
}

Card.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	buttonText: PropTypes.string,
	image: PropTypes.string
};
