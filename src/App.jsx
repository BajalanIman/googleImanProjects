import "./App.css";

import React from "react";
import FirstComponent from "./GoogleProject/FirstComponent";
import SecondComponent from "./GoogleProject/SecondComponent";
import ThirdComponent from "./GoogleProject/ThirdComponent";

const App = () => {
	return (
		<div className="flex font-serif justify-center items-center w-screen h-screen bg-white m-[-20px]">
			<SecondComponent />
      <div className="flex justify-center items-center">
			<FirstComponent />
      </div>
			<ThirdComponent />
		</div>
	);
};

export default App;
