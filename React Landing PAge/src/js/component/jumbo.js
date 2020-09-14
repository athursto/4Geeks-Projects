import React from "react";
import PropTypes from "prop-types";

export default function Jumbo(props) {
	const { title, body, url, buttonText } = props;
	//will contain three cards
	return (
		<div className="jumbotron">
			<h1 className="display-4">{title}</h1>
			<p className="lead">{body}</p>
			<a className="btn btn-primary btn-lg" href={url} role="button">
				{buttonText}
			</a>
		</div>
	);
}

Jumbo.propTypes = {
	title: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	buttonText: PropTypes.string
};
