import { NavLink } from "react-router-dom";
import "../styles/header.css";

const Header = (props) => {
	return (
		<header className="header">
			<div className="header__container container">
				<nav className="navigation">
					<ul className="navigation__list">
						{props.routes.map((route, index) =>
							<li key={index} className="navigation__item">
								<NavLink
									className={({ isActive }) => { return isActive ? "active" : "" }}
									to={route.path}>{route.text}
								</NavLink>
							</li>
						)}
					</ul>
				</nav>
			</div>
		</header >
	);
}

export default Header;
