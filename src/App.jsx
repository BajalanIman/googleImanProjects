import "./App.css";

import React from "react";
import Body from "./Components/Body";
import Navigationbarleft from "./Components/Navigationbarleft";
import Navigationbar from "./Components/Navigationbar";

const App = () => {
	return (
		<div className="flex font-serif justify-center items-center w-screen h-screen bg-white m-[-20px]">
			<Navigationbarleft />
      <div className="flex justify-center items-center">
			<Body />
      </div>
			<Navigationbar />
		</div>
	);
};

export default App;
