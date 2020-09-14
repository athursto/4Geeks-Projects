import React, { useState, createRef } from "react";
import PropTypes from "prop-types";

export default function ToDo() {
	const todoInput = createRef();
	const [list, setList] = useState([]);
	const [item, setItem] = useState("");

	const getList = () => {
		return list.map((item, index) => (
			<li key={index}>
				{item} &emsp;
				<i class="fas fa-recycle" onClick={e => handleDelete(index)} />
			</li>
		));
	};
	const handleDelete = index => {
		setList(list.filter(current => current !== list[index]));
	};

	const handleSumbit = e => {
		e.preventDefault();
		setList(list.concat([item]));
		todoInput.current.value = "";
	};

	return (
		<div>
			<form onSubmit={handleSumbit}>
				<input
					ref={todoInput}
					type="text"
					onChange={e => setItem(e.target.value)}
					placeholder="no tasks, add a task"
				/>
				<input type="submit" value="send" />
			</form>

			<ul>
				{" "}
				{list.length > 0 ? (
					getList()
				) : (
					<li>"What's on the agenda today"</li>
				)}
			</ul>
		</div>
	);
}
