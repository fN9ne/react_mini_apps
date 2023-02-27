import Section from "../layout/Section";
import { Context } from "../Context";
import { useContext } from "react";
import { Link } from "react-router-dom";
import "../styles/home.css";

const Home = (props) => {
	const { routes } = useContext(Context);

	document.title = 'Home - React Mini Apps';

	return (
		<Section className={props.componentClass}>
			<h2 className={`${props.componentClass}__title`}>Apps</h2>
			<div className={`${props.componentClass}__pages`}>
				{routes.map((route, index) =>
					<Link key={index} className={`${props.componentClass}__page`} to={route.path}>{route.text}</Link>
				)}
			</div>
		</Section>
	);
}

export default Home;
