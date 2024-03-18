import React, { useContext,useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Context } from "../store/appContext.js";
export const Navbar = () => {
	const { store, actions } = useContext(Context);
	const navigate = useNavigate();
  
	
		const handleLogout = () => {
			localStorage.removeItem("token");
			navigate("/");
		  };
	return (
		<nav className="navbar navbar-light bg-light mb-3">
			<Link to="/">
				<span className="navbar-brand mb-0 h1">Star Wars</span>
			</Link>
			<div className="ml-auto">
				<Link to="/demo">
					<div className="btn-group dropstart">
						<button type="button" className="btn btn-secondary dropdown-toggle" data-bs-toggle="dropdown" aria-expanded="false">
							Favoritos
						</button>
						<ul className="dropdown-menu">
							<li><Link className="dropdown-item" href="#">Action </Link></li>
						</ul>
					</div>
				</Link>
				
					<div>
						<Link to="/login">
						<button type="button" className="btn btn-secondary">Login</button>
						</Link>
						<Link to="/login">
							<button type="button" className="btn btn-danger" onClick={handleLogout}>
								Logout
							</button>
						</Link>
					</div>
				
			</div>
		</nav>
	);
};
