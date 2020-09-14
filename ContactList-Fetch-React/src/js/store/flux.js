import { Context } from "../store/appContext";
import React, { useState, useEffect, useContext } from "react";
import PropTypes from "prop-types";

const url = "https://assets.breatheco.de/apis/fake/contact";

/*state = {
	showSuccessAlert: false,
	showFailAlert: false
}; where should this be? */

const getState = ({ getStore, getActions, setStore }) => {
	return {
		store: {
			contacts: [
				{
					full_name: "Dave Bradley",
					email: "dave@gmail.com",
					agenda_slug: "my_super_agenda",
					address: "47568 NW 34ST, 33434 FL, USA",
					phone: "7864445566"
				},
				{
					full_name: "John Smith",
					email: "dave@gmail.com",
					agenda_slug: "my_super_agenda",
					address: "47568 NW 34ST, 33434 FL, USA",
					phone: "7864445566"
				},
				{
					full_name: "Alice Doe",
					email: "dave@gmail.com",
					agenda_slug: "my_super_agenda",
					address: "47568 NW 34ST, 33434 FL, USA",
					phone: "7864445566"
				}
			]
		},
		actions: {
			// Use getActions to call a function within a fuction
			exampleFunction: () => {
				getActions().changeColor(0, "green");
			},
			loadSomeData: () => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */
				return fetch("https://assets.breatheco.de/apis/fake/contact/agenda/athursto")
					.then(resp => {
						/*console.log(resp.ok); // will be true if the response is successfull
						console.log(resp.status); // the status code = 200 or code = 400 etc.
						console.log(resp.text()); // will try return the exact result as string*/
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(data => {
						//here is were your code should start after the fetch finishes
						setStore({ contacts: data }); //this will print on the console the exact object received from the server
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			addData: data => {
				/**
					fetch().then().then(data => setStore({ "foo": data.bar }))
                */ console.log(data);
				return fetch("https://assets.breatheco.de/apis/fake/contact/", {
					method: "POST",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(resp => {
						getActions().loadSomeData();
						window.location.href = "/";
					})
					.catch(error => {
						console.log(error);
					});
			},
			//below needs to be updated
			updateData: (data, id) => {
				console.log(data);
				return fetch(`https://assets.breatheco.de/apis/fake/contact/${id}`, {
					//I think above should include contactId
					method: "PUT",
					body: JSON.stringify(data),
					headers: {
						"Content-Type": "application/json"
					}
				})
					.then(resp => {
						return resp.json(); // (returns promise) will try to parse the result as json as return a promise that you can .then for results
					})
					.then(resp => {
						//here is were your code should start after the fetch finishes
						getActions().loadSomeData();
						window.location.href = "/";
					})
					.catch(error => {
						//error handling
						console.log(error);
					});
			},
			deleteData: id => {
				console.log(id);
				/**
				 fetch().then().then(data => setStore({ "foo": data.bar }))*/
				return (
					fetch(`${url}/${id}`, {
						method: "DELETE",
						headers: {
							"Content-Type": "application/json"
						}
					})
						//.then(console.log(data))
						.then(resp => {
							console.log(resp);
							return resp.json();
							// (returns promise) will try to parse the result as json as return a promise that you can .then for results
						})
						.then(resp => {
							getActions().loadSomeData();
							//the below is new-- attempting an alert
							/*this.setState({
								showSuccessAlert: true
							}); where should this be*/
							window.location.href = "/";
						})
						.catch(error => {
							console.log(error);
							/*this.setState({
								showFailAlert: true
							});
                            where should this be*/
						})
				);
			},

			changeColor: (index, color) => {
				//get the store
				const store = getStore();

				//we have to loop the entire demo array to look for the respective index
				//and change its color
				const demo = store.demo.map((elm, i) => {
					if (i === index) elm.background = color;
					return elm;
				});

				//reset the global store
				setStore({ demo: demo });
			}
		}
	};
};

export default getState;

getState.propTypes = {
	location: PropTypes.string
};
