import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const SamplePlanet2 = props => {
	const { title, data } = props;
	const { store, actions } = useContext(Context);
	const params = useParams();
	//below is new-- me trying to get that fetch data into the planets element
	return (
		<React.Fragment>
			<div className="container">
				<div className="card p-2">
					<div className="row d-flex justify-content-center">
						<h3 className="title text-center">{store.planets[params.index].name}</h3>
					</div>
					<div className="row">
						<div className="col-sm">
							<img src="https://via.placeholder.com/450x300.png" className="center-block" alt="..." />
						</div>
						<div className="col-sm">
							<p className="text">
								Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
								incididunt ut labore et dolore magna aliqua. A scelerisque purus semper eget duis at
								tellus. Dignissim convallis aenean et tortor at risus viverra adipiscing. Adipiscing
								commodo elit at imperdiet dui accumsan sit amet. Lectus mauris ultrices eros in cursus
								turpis. Pulvinar sapien et ligula ullamcorper malesuada. Enim ut tellus elementum
								sagittis vitae et. In hac habitasse platea dictumst vestibulum rhoncus est pellentesque
								elit. Ipsum suspendisse ultrices gravida dictum. Euismod in pellentesque massa placerat
								duis ultricies. Scelerisque purus semper eget duis. Porta nibh venenatis cras sed.
								Tristique nulla aliquet enim tortor at auctor urna nunc id. Dignissim enim sit amet
								venenatis urna cursus eget nunc scelerisque. Morbi enim nunc faucibus a pellentesque sit
								amet porttitor eget.
							</p>
						</div>
					</div>
					<div className="row">
						<div className="col-sm text-center">
							<p>
								Name:
								<br />
								{store.planets[params.index].name}
							</p>
						</div>
						<div className="col-sm border-left text-center">
							<p>
								Climate:
								<br /> {store.planets[params.index].climate}
							</p>
						</div>
						<div className="col-sm border-left text-center">
							<p>
								Terrain:
								<br />
								{store.planets[params.index].terrain}
							</p>
						</div>
						<div className="col-sm border-left text-center">
							<p>
								Population:
								<br />
								{store.planets[params.index].population}
							</p>
						</div>
						<div className="col-sm border-left text-center">
							<p>
								Diameter:
								<br />
								{store.planets[params.index].diameter}
							</p>
						</div>
					</div>
				</div>
			</div>
		</React.Fragment>
	);
};

SamplePlanet2.propTypes = {
	title: PropTypes.string,
	data: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	fave: PropTypes.string,
	image: PropTypes.string
};
