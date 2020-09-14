import React, { useState } from "react";
import ToDo from "./todo.js";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
export function Home() {
	return (
		<div className="container-fluid">
			<h1>To Do&apos;s</h1>
			<ToDo />
		</div>
	);
}
