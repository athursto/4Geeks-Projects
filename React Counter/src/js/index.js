//import react into the bundle
import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";

//include bootstrap npm library into the bundle
import "bootstrap";

//include your index.scss file into the bundle
import "../styles/index.scss";

//import your own components
function Counter(props) {
	return (
		<div className="bigCounter">
			<div className="clock">
				<i className="far fa-clock" />
			</div>
			<div className="four">{props.digitFour % 10}</div>
			<div className="three">{props.digitThree % 10}</div>
			<div className="two">{props.digitTwo % 10}</div>
			<div className="one">{props.digitOne % 10}</div>
		</div>
	);
}

Counter.propTypes = {
	digitFour: PropTypes.number,
	digitThree: PropTypes.number,
	digitTwo: PropTypes.number,
	digitOne: PropTypes.number
};

let counting = 0;
setInterval(function() {
	const four = Math.floor(counting / 1000);
	const three = Math.floor(counting / 100);
	const two = Math.floor(counting / 10);
	const one = Math.floor(counting / 1);
	console.log(four, three, two, one);
	counting++;

	ReactDOM.render(
		<Counter
			digitOne={one}
			digitTwo={two}
			digitThree={three}
			digitFour={four}
		/>,
		document.querySelector("#app")
	);
}, 1000);

//render your react application
