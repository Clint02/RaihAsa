import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router";
import { HashRouter as Router } from "react-router-dom";

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

function App() {
    return (
      <Router>
          <ScrollToTop>
        <Routes>
          {/* home page */}
          <Route exact path="/home" element={<Home/>}/>
          {/*login page*/}
          <Route exact path="/login" element={<Login/>} />
        </Routes>
        </ScrollToTop>
      </Router>
    );
  }

export default App;