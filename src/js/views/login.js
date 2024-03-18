import React, { useState, useEffect, useContext } from "react";
import { Link } from "react-router-dom";

import { Context } from "../store/appContext";

import "../../styles/demo.css";
import { LoginForm } from "../component/loginForm";

export const Login = () => {

	return (
		<div className="container">
            <LoginForm />

			<Link to="/">
				<button className="btn btn-primary">Back home</button>
			</Link>
		</div>
	);
};
