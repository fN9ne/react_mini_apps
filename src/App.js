import { AnimatePresence } from "framer-motion";
import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import SearchFilter from "./pages/SearchFilter";
import Registration from "./pages/Registration";
import CalendarApp from "./pages/CalendarApp";
import Calculator from "./pages/Calculator";
import Header from "./components/Header";
import { Context } from "./Context";

const App = () => {
	const location = useLocation();

	const routes = [
		{ path: "/", element: <Home componentClass="home" />, text: "Home" },
		{ path: "/search-filter", element: <SearchFilter componentClass="search-filter" />, text: "Search Filter" },
		{ path: "/registration", element: <Registration componentClass="registration-form" />, text: "Registration form" },
		{ path: "/calendar", element: <CalendarApp componentClass="calendar" />, text: "Calendar" },
		{ path: "/calculator", element: <Calculator componentClass="calculator" />, text: "Calculator" }
	];

	return (
		<Context.Provider value={{ routes }}>
			<div className="app">
				<Header routes={routes}></Header>
				<AnimatePresence exitBeforeEnter>
					<Routes key={location.pathname} location={location}>
						{routes.map((route, index) => <Route key={index} path={route.path} element={route.element} />)}
					</Routes>
				</AnimatePresence>
			</div>
		</Context.Provider>
	);
}

export default App;
