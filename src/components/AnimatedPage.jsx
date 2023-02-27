import { motion } from "framer-motion";

const animations = {
	initial: { opacity: 0, scale: 0.95 },
	animate: { opacity: 1, scale: 1 },
	exit: { opacity: 0, scale: 0.95 },
}

const AnimatedPage = (props) => {
	return (
		<motion.div
			variants={animations}
			initial="initial"
			animate="animate"
			exit="exit"
			transition={{ duration: 0.2 }}
			className={props.className}
		>
			{props.children}
		</motion.div>
	);
}

export default AnimatedPage;