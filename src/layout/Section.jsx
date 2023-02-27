import AnimatedPage from "../components/AnimatedPage";
import Container from "./Container";

const Section = (props) => {
	return (
		<div className={`${props.className} section`}>
			<Container className={`${props.className}__container container`}>
				<AnimatedPage className={`${props.className}__content`}>
					{props.children}
				</AnimatedPage>
			</Container>
		</div>
	);
}

export default Section;
