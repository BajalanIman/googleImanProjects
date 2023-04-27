import { useState } from "react";
import Results from "./Results";

const FirstComponent = () => {
	const [colorChange, setColorChange] = useState();
	const [information, setInformation] = useState();
	const [showResults, setShowResults] = useState(false);
	const [sowSearchAtTop, setSowSearchAtTop] = useState(false);
	const [errorMessage, setErrorMessage] = useState(false);
	let info = "";

	const changeColorHandler = () => {
		setColorChange(!colorChange);
	};
	const ShowInformation = (e) => {
		info = e.target.value;
		if (info !== "") {
			setSowSearchAtTop(true);
		} else {
			setSowSearchAtTop(false);
		}
		setInformation(info);
	};

	const submitSearchInfo = () => {
		if (!information) {
			setErrorMessage(true);
			setTimeout(() => {
				setErrorMessage(false);
			}, 3000);
		} else {
			setShowResults(true);
			return information;
		}
	};

	const cleanSearchBox = () => {
		info = "";
		console.log(info);
	};

	return (
		<div className="bg w-full h-full flex flex-col items-center">
			<svg
				onClick={changeColorHandler}
				xmlns="http://www.w3.org/2000/svg"
				fill={colorChange ? "red" : "none"}
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="w-12 h-12 text-red-600 pl-2 absolute "
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"
				/>
			</svg>

			<img src="./logo.png" alt="logo" className="w-96 mb-4" />
			{errorMessage && (
				<p className="text-white font-bold px-5 py-2 flex justify-start bg-red-500 absolute mt-[112px]">
					Please write something to search!
				</p>
			)}
			<div className="mt-4 w-[600px] h-14 border rounded-3xl flex relative">
				<input
					placeholder="Search..."
					onChange={ShowInformation}
					type="text"
					className="pl-14 pb-1 w-full text-xl h-full border border-gray-500 rounded-3xl absolute bg-white text-black"
				/>
				{sowSearchAtTop && (
					<div className="absolute pb-8 bg-white text-xl text-blue-400 font-bold h-3 mt-[-14px] ml-14 pl-3 pr-6 rounded-full ">
						Search
					</div>
				)}
				<div className="top-3 left-4 absolute">
					<svg
						onClick={submitSearchInfo}
						xmlns="http://www.w3.org/2000/svg"
						fill="none"
						viewBox="0 0 24 24"
						strokeWidth="1.5"
						stroke="currentColor"
						className="w-7 h-7 text-gray-600"
					>
						<path
							strokeLinecap="round"
							strokeLinejoin="round"
							d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"
						/>
					</svg>
				</div>
				<div className="top-3 right-4 absolute">
					<div className="flex gap-3">
						<div className="flex gap-2 mt-[-8px] items-center text-gray-500 text-3xl">
							<svg
								onClick={cleanSearchBox}
								xmlns="http://www.w3.org/2000/svg"
								fill="none"
								viewBox="0 0 24 24"
								strokeWidth="1.5"
								stroke="currentColor"
								className="w-8 h-8 mt-2"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									d="M6 18L18 6M6 6l12 12"
								/>
							</svg>
							|
						</div>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 text-red-600"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M12 18.75a6 6 0 006-6v-1.5m-6 7.5a6 6 0 01-6-6v-1.5m6 7.5v3.75m-3.75 0h7.5M12 15.75a3 3 0 01-3-3V4.5a3 3 0 116 0v8.25a3 3 0 01-3 3z"
							/>
						</svg>

						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							viewBox="0 0 24 24"
							strokeWidth="1.5"
							stroke="currentColor"
							className="w-6 h-6 text-red-600"
						>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M6.827 6.175A2.31 2.31 0 015.186 7.23c-.38.054-.757.112-1.134.175C2.999 7.58 2.25 8.507 2.25 9.574V18a2.25 2.25 0 002.25 2.25h15A2.25 2.25 0 0021.75 18V9.574c0-1.067-.75-1.994-1.802-2.169a47.865 47.865 0 00-1.134-.175 2.31 2.31 0 01-1.64-1.055l-.822-1.316a2.192 2.192 0 00-1.736-1.039 48.774 48.774 0 00-5.232 0 2.192 2.192 0 00-1.736 1.039l-.821 1.316z"
							/>
							<path
								strokeLinecap="round"
								strokeLinejoin="round"
								d="M16.5 12.75a4.5 4.5 0 11-9 0 4.5 4.5 0 019 0zM18.75 10.5h.008v.008h-.008V10.5z"
							/>
						</svg>
					</div>
				</div>
			</div>
			{showResults && <Results submitSearchInfo={information} />}
		</div>
	);
};
export default FirstComponent;
