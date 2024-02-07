import React from "react";
import { Link } from "react-router-dom";

export const Navbar = () => {
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
				<Link to="/login">
					<div>
					<button type="button" className="btn btn-secondary">Login</button>
					</div>
				</Link>
			</div>
		</nav>
	);
};
