//this was my attempt to make the stoplight change every 3 seconds. it's not done.
import React, { useState, useEffect } from "react";
export default function Interval() {
	const IntervalExample = () => {
		const [seconds, setSeconds] = useState(0);

		useEffect(() => {
			const interval = setInterval(() => {
				setSeconds(seconds => seconds + 1);
				//if (color==green) {color ==yellow}
				//would be easier to put inside TimeChange component
			}, 3000);
			return () => clearInterval(interval);
		}, []);

		return (
			<div className="App">
				<header className="App-header">
					{seconds} seconds have elapsed since mounting.
				</header>
			</div>
		);
	};
}
