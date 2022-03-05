import ReactDOM from "react-dom";
import { Route, Routes } from "react-router";
import { HashRouter as Router } from "react-router-dom";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";

import "./styles/base.css";
import "./styles/style.css";

import Footer from "./components/Footer";
import Navbar from "./components/Navbar";

import Home from "./pages/Home";
import Login from "./pages/Login";

const ScrollToTop = ({ children }) => {
	let location = useLocation();
	useEffect(() => {
		window.scrollTo({
			top: 0,
			behavior: "smooth",
		});
	}, [location]);
	return children;
};

const App = () => (
	<Router>
		<ScrollToTop>
			<Routes>
				{/*Home page*/}
				<Route path="/home" element={<Home />} />
				{/*Login page*/}
				{/* <Route path="/login" element={<Login />} /> */}
			</Routes>
		</ScrollToTop>
	</Router>
);

ReactDOM.render(<App />, document.getElementById("root"));
