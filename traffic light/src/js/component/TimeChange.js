import React, { useState, useEffect } from "react";

export default function TimeChange() {
	const [color, setColor] = useState("");
	let redLight = "";
	let yellowLight = "";
	let greenLight = "";

	if (color == "red") {
		redLight = "glow";
	}

	if (color == "yellow") {
		yellowLight = "glow";
	}

	if (color == "green") {
		greenLight = "glow";
	}
	//in this case bgred would be existing class of div
	return (
		<>
			<div className="row mt-5">
				<div className="col-sm" />
				<div className="col-sm">
					<div id="trafficcontainer">
						<div
							id="square"
							className={`bgred ${redLight}`}
							onClick={() => setColor("red")}
						/>
						<br />
						<div
							id="square2"
							className={"bgyellow " + yellowLight}
							onClick={() => setColor("yellow")}
						/>
						<br />
						<div
							id="square3"
							className={"bggreen " + greenLight}
							onClick={() => setColor("green")}
						/>
					</div>
				</div>
				<div className="col-sm" />
			</div>
		</>
	);
}
