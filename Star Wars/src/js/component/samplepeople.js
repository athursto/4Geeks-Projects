import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import { Link, useParams } from "react-router-dom";

export const SamplePerson = props => {
	const { title, data } = props;
	const { store, actions } = useContext(Context);
	const params = useParams();
	//below is new-- me trying to get that fetch data into the planets element
	return (
		<React.Fragment>
			<div className="container">
				<div className="col-sm" />
				<div className="col-sm">
					<div className="card flex-row flex-wrap m-2">
						<div className="card-header border-0 text-center">
							<h3 className="title">{store.people[params.index].name}</h3>

							<img
								src="https://via.placeholder.com/800x600.png"
								className="card-img-top center-block"
								alt="..."
							/>
						</div>

						{/* <h3 className="card-title">{params.whatever}</h3> */}
						<p className="card-text m-2">
							Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
							labore et dolore magna aliqua. A scelerisque purus semper eget duis at tellus. Dignissim
							convallis aenean et tortor at risus viverra adipiscing. Adipiscing commodo elit at imperdiet
							dui accumsan sit amet. Lectus mauris ultrices eros in cursus turpis. Pulvinar sapien et
							ligula ullamcorper malesuada. Enim ut tellus elementum sagittis vitae et. In hac habitasse
							platea dictumst vestibulum rhoncus est pellentesque elit. Ipsum suspendisse ultrices gravida
							dictum. Euismod in pellentesque massa placerat duis ultricies. Scelerisque purus semper eget
							duis. Porta nibh venenatis cras sed. Tristique nulla aliquet enim tortor at auctor urna nunc
							id. Dignissim enim sit amet venenatis urna cursus eget nunc scelerisque. Morbi enim nunc
							faucibus a pellentesque sit amet porttitor eget.
						</p>
						<div className="w-100" />

						<div className="card-footer w-100 text-muted">
							<div className="row">
								<div className="col-sm">
									<p>Name: {store.people[params.index].name}</p>
								</div>
								<div className="col-sm">
									<p>Height: {store.people[params.index].height}</p>
								</div>
								<div className="col-sm">
									<p>Gender: {store.people[params.index].gender}</p>
								</div>
								<div className="col-sm">
									<p>Hair Color: {store.people[params.index].hair_color}</p>
								</div>
								<div className="col-sm">
									<p>Birth Year: {store.people[params.index].birth_year}</p>
								</div>
							</div>
						</div>
					</div>
				</div>
				<div className="col-sm" />
			</div>
		</React.Fragment>
	);
};

SamplePerson.propTypes = {
	title: PropTypes.string,
	data: PropTypes.string,
	body: PropTypes.string,
	url: PropTypes.string,
	fave: PropTypes.string,
	image: PropTypes.string
};
