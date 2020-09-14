import React, { useState, useEffect, useContext } from "react";
//import { Link } from "react-router-dom";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import { Context } from "../store/appContext";

import "../../styles/demo.scss";
const Enter = props => {
	//export default function Enter(props) {
	const { store, actions } = useContext(Context);
	const [contact, setContact] = useState(store.contacts.find(item => item.id == props.match.params.contactId));
	const [fullName, setFullName] = useState(contact !== undefined ? contact.full_name : "");
	const [address, setAddress] = useState(contact !== undefined ? contact.address : "");
	const [email, setEmail] = useState(contact !== undefined ? contact.email : "");
	const [phone, setPhone] = useState(contact !== undefined ? contact.phone : "");

	const handleSubmit = e => {
		e.preventDefault();

		if (props.match.params.contactId !== undefined) {
			// editing contact - use update fetch (PUT)
			actions.updateData(
				{
					full_name: fullName,
					email: email,
					agenda_slug: "athursto",
					address: address,
					phone: phone
				},
				props.match.params.contactId
			);
		} else {
			// adding contact - use add fetch (POST)
			actions.addData({
				full_name: fullName,
				email: email,
				agenda_slug: "athursto",
				address: address,
				phone: phone
			});
		}
		//if else for test contact not being null
	};
	return (
		<div className="container-fluid">
			<h1> Add a New Contact </h1>
			<form onSubmit={e => handleSubmit(e)}>
				{/* add an onsubmit to the handler to add in new data */}
				<div className="form-group">
					<label HTMLfor="name1">Name</label>
					<input
						type="text"
						className="form-control"
						id="name1"
						aria-describedby="name"
						placeholder="Your Name Here"
						value={fullName}
						onChange={e => setFullName(e.target.value)}
					/>
					<label HTMLfor="exampleInputEmail1">Email address</label>
					<input
						type="email"
						//pattern="/^(([^<>()\[\]\\.,;:\s@&quot;]+(\.[^<>()\[\]\\.,;:\s@&quot;]+)*)|(&quot;.+&quot;))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/"
						className="form-control"
						id="exampleInputEmail1"
						aria-describedby="emailHelp"
						placeholder="Enter email"
						value={email}
						onChange={e => setEmail(e.target.value)}
					/>
					{/* here you add an onSubmit that references function for adding */}
					<label HTMLfor="address1">Home address</label>
					<input
						type="text"
						className="form-control"
						id="address1"
						aria-describedby="emailHelp"
						placeholder="Enter address"
						value={address}
						onChange={e => setAddress(e.target.value)}
					/>
				</div>
				<div className="form-group">
					<label HTMLfor="phone">Phone</label>
					<input
						type="tel"
						className="form-control"
						id="phone1"
						placeholder="Phone"
						value={phone}
						onChange={e => setPhone(e.target.value)}
					/>
				</div>
				<button type="submit" className="btn btn-primary btn-block">
					Submit
				</button>
				{/* above button should have an onClick function  */}
			</form>
			<Link to="/">Or go back to contacts</Link>
		</div>
	);
};

Enter.propTypes = {
	location: PropTypes.string,
	match: PropTypes.shape({
		params: PropTypes.shape({
			contactId: PropTypes.string.isRequired
		})
	})
};

/*Enter.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
		state: PropTypes.object
	}),
	isRequired
};*/

export default withRouter(Enter);
