import React, { useState, useEffect, useContext } from "react";
import { Link, withRouter } from "react-router-dom";
import PropTypes from "prop-types";
import Modal from "../component/modal.js";
import { Context } from "../store/appContext";
export const Home = props => {
	const { store, actions } = useContext(Context);
	let testContact =
		typeof props.location.state !== "undefined" && typeof props.location.state.contact !== "undefined"
			? props.location.state.contact
			: null;
	const [contact, setContact] = useState(testContact !== null ? props.location.state.contact : null);
	/*const handleDelete = () => {

    }*/
	/*const handleDelete = e => {
		e.preventDefault();
		actions.deleteData({
			full_name: fullName,
			email: email,
			agenda_slug: "athursto",
			address: address,
			phone: phone
		});
	};*/

	const [modal, setModal] = useState(false);

	/*const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);*/

	//add popup modal
	//add success
	//change title of Enter when you are editing

	return (
		<div className="container-fluid">
			{/* <Modal show={modal} onClose={setModal} /> */}
			<h1 className="text-center">Welcome to My Rolodex</h1>
			<ul className="list-group">
				{store.contacts.map((item, index) => {
					return (
						<li className="list-group-item" key={index}>
							<div className="row">
								<img src="//placehold.it/200" alt="" />
								<div className="col">
									<h4>{item.full_name}</h4>

									<i className="fas fa-home p-2" />
									{item.address}
									<br />
									<i className="fa fa-phone p-2" />
									{item.phone}
									<br />
									<i className="fa fa-envelope p-2" />
									{item.email}
								</div>
								<div className="col" />
								<div className="col ml-auto">
									<i
										className="fas fa-pen-square fa-2x p-2"
										onClick={() => props.history.push(`/edit/${item.id}`)}
									/>
									<i
										className="fas fa-recycle fa-2x p-2"
										onClick={
											() => actions.deleteData(item.id)
											//setModal(true)
										}
									/>
								</div>
							</div>
						</li>
					);
				})}
			</ul>
		</div>
	);
};

//prop validation
Home.propTypes = {
	full_name: PropTypes.string,
	email: PropTypes.string,
	agenda_slug: PropTypes.string,
	address: PropTypes.string,
	phone: PropTypes.number,
	history: PropTypes.object,
	location: PropTypes.shape({
		pathname: PropTypes.string,
		state: PropTypes.object
	})
};

/*Enter.propTypes = {
	location: PropTypes.shape({
		pathname: PropTypes.string,
		state: PropTypes.object
	}),
	isRequired
};*/

export default withRouter(Home);
