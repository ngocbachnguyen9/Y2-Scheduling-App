import { Outlet, Link } from "react-router-dom";

const Menu = () => {
	return (
		<>
			<div className='Menu'>
				<nav>
					<ul>
						<li>
							<Link to="/">Welcome Page</Link>
						</li>
						<li>
							<Link to="/staffdash">Staff Dashboard</Link>
						</li>
						<li>
							<Link to="/trainerdash">Trainer Dashboard</Link>
						</li>
					</ul>
				</nav>
			</div>
			<Outlet />
		</>
	);
};


export default Menu;