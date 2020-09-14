import PropTypes from "prop-types";
import React from "react";
import Jumbo from "./jumbo.js";
import Nav from "./nav.js";
import Card from "./card.js";
import Footer from "./footer.js";

const navData = [
	{
		url: "#",
		text: "Home"
	},
	{
		url: "#",
		text: "About"
	},
	{
		url: "#",
		text: "Services"
	},
	{
		url: "#",
		text: "Contact"
	}
];

const cardData = [
	{
		title: "Sample Card",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		buttonText: "Press",
		image:
			"https://askthescientists.com/wp-content/uploads/2020/06/AdobeStock_333090694.jpg"
	},
	{
		title: "Sample Card 2",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		buttonText: "Press",
		image:
			"https://i.guim.co.uk/img/media/d90c21743aef2d06a007add042ad23fb3345dfb4/0_0_3852_2838/master/3852.jpg?width=300&quality=85&auto=format&fit=max&s=ea968412cf8f9a6ef4b36bd33a210562"
	},
	{
		title: "Sample Card 3",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		buttonText: "Press",
		image:
			"https://quincy-network.s3.ca-central-1.amazonaws.com/wp-content/uploads/sites/10/2020/04/coronavirus-social-distancing.jpg"
	},
	{
		title: "Sample Card 4",
		body:
			"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua",
		url: "www.facebook.com",
		buttonText: "Press",
		image:
			"https://media.nature.com/lw800/magazine-assets/d41586-020-00660-x/d41586-020-00660-x_17726768.jpg"
	}
];

export default function Home(props) {
	return (
		<>
			<Nav brand="Start Bootstrap" links={navData} />
			<Jumbo
				title="A Warm Welcome!"
				body="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                eiusmod tempor incididunt ut labore et dolore magna aliqua"
				buttonText="Call to action!"
				url="www.google.com"
			/>
			<div className="card-deck">
				{cardData.map((item, index) => {
					return (
						<Card
							key={index}
							title={item.title}
							body={item.body}
							url={item.url}
							buttonText={item.buttonText}
							image={item.image}
						/>
					);
				})}
			</div>

			<Footer />
		</>
	);
}

/*let cards = [
		image: "",
		title: "",
		body: "",
		buttonText: "",
		url: ""
];*/
