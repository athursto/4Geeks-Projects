import React, { Component } from "react";

export const Footer = () => (
	<footer className="footer py-3 mx-auto">
		<p>Follow Star Wars</p>
		<span>
			<i className="fab fa-instagram px-2" />
			<i className="fab fa-twitter px-2" />
			<i className="fab fa-facebook px-2" />
			<i className="fab fa-youtube px-2" />
		</span>
		<p>
			Photo by{" "}
			<a href="https://unsplash.com/@andyjh07?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
				Andy Holmes
			</a>{" "}
			on{" "}
			<a href="https://unsplash.com/s/photos/night-sky?utm_source=unsplash&amp;utm_medium=referral&amp;utm_content=creditCopyText">
				Unsplash
			</a>
		</p>
	</footer>
);
