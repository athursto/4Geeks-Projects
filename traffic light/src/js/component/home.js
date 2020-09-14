import React, { useState, useEffect } from "react";
import Interval from "./interval.js";
import TimeChange from "./TimeChange.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component

export function Home() {
	return (
		<div>
			<TimeChange />
		</div>
	);
}
