import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";
import rigoImage from "../../img/rigo-baby.jpg";
import "../../styles/home.scss";
import { Characters } from "../component/characters.js";
import { Planets } from "../component/planets.js";
import { People } from "../component/people.js";
import { SamplePerson } from "../component/samplepeople.js";
import { SamplePerson2 } from "../component/samplepeople_2.js";

//add favorites-- should be similar to adding to to-do list

/*const cardData = [
	{
		title: "Sample Card",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		image: "https://askthescientists.com/wp-content/uploads/2020/06/AdobeStock_333090694.jpg",
		fave: "www.google.com"
	},
	{
		title: "Sample Card 2",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		fave: "www.google.com",
		image:
			"https://i.guim.co.uk/img/media/d90c21743aef2d06a007add042ad23fb3345dfb4/0_0_3852_2838/master/3852.jpg?width=300&quality=85&auto=format&fit=max&s=ea968412cf8f9a6ef4b36bd33a210562"
	},
	{
		title: "Sample Card 3",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		fave: "www.google.com",
		image:
			"https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/10/2020/04/coronavirus-social-distancing.jpg"
	},
	{
		title: "Sample Card 4",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		fave: "www.google.com",
		image: "https://media.nature.com/lw800/magazine-assets/d41586-020-00660-x/d41586-020-00660-x_17726768.jpg"
	}
];

const planetData = [
	{
		title: "Sample Card",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		image: "https://askthescientists.com/wp-content/uploads/2020/06/AdobeStock_333090694.jpg",
		fave: "www.google.com"
	},
	{
		title: "Sample Card 2",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		fave: "www.google.com",
		image:
			"https://i.guim.co.uk/img/media/d90c21743aef2d06a007add042ad23fb3345dfb4/0_0_3852_2838/master/3852.jpg?width=300&quality=85&auto=format&fit=max&s=ea968412cf8f9a6ef4b36bd33a210562"
	},
	{
		title: "Sample Card 3",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		fave: "www.google.com",
		image:
			"https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/10/2020/04/coronavirus-social-distancing.jpg"
	},
	{
		title: "Sample Card 4",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		fave: "www.google.com",
		image: "https://media.nature.com/lw800/magazine-assets/d41586-020-00660-x/d41586-020-00660-x_17726768.jpg"
	}
];*/

export default function Home() {
	const { store, actions } = useContext(Context);
	return (
		<div className="container-fluid">
			{/* below is what I had before that called placeholders and not from the API */}
			{/* <h3>Characters</h3> */}
			{/* <div className="card-deck"> */}
			{/* {cardData.map((item, index) => ( */}
			{/* <Characters */}
			{/* key={index} */}
			{/* title={item.title} */}
			{/* body={item.body} */}
			{/* url={item.url} */}
			{/* buttonText={item.buttonText} */}
			{/* image={item.image} */}
			{/* fave={item.fave} */}
			{/* /> */}
			{/* ))} */}
			{/* </div> */}
			{/* {{ height: "450 px" }} id="holding"> */}

			<h2 className="text-center">People</h2>
			<div className="container" id="cardholder">
				<div className="card-deck flex-nowrap" style={{ height: "650 px" }}>
					<People data={store.people} />
				</div>
			</div>
			<div style={{ height: "10px" }} />
			<h2 className="text-center">Planets</h2>
			<div className="container" id="cardholder2">
				<div className="card-deck flex-nowrap" style={{ height: "650 px" }}>
					<Planets data={store.planets} />
				</div>
			</div>
		</div>
	);
}
