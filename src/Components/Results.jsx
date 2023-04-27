
import uuid from "react-uuid";

const Results = (props) => {
	let info = ["Iman ", "Iman-1"];
	let information = props.submitSearchInfo;
	let concatedInfo = info.concat(information);

	let newResults="";
	const addNewResults =(e)=>{
		e.preventDefault();
		newResults= e.target.value;
	};

	const addBySearchBTN =()=>{
		concatedInfo=concatedInfo.concat(newResults);
		console.log(concatedInfo);
	}

	return (
		<div>
			<div className="bg-white min-w-screen h-screen animated fadeIn faster  fixed  left-0 top-0 flex justify-center items-center inset-0 z-90 outline-none focus:outline-none bg-no-repeat bg-center bg-cover">
				<div className="w-full h-full p-5 relative shadow-lg  bg-white ">
					<div className="py-5 px-9 flex flex-row">
						<img src="./logo.png" alt="logo" className="w-44 mt-3" />
						<div className="mt-8 w-[600px] h-14 border rounded-3xl flex relative">
							<input
							onChange={addNewResults}
								placeholder="Search..."
								type="text"
								className="pl-6 pb-1 w-full text-xl h-full border border-gray-500 rounded-3xl absolute"
							/>
							<div className="top-3 left-4 absolute"></div>
							<div className="top-3 right-4 absolute">
								<div className="flex gap-3">
									<div className="flex gap-2 mt-[-8px] items-center text-gray-500 text-3xl">
										<svg
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
									<svg
									    onClick={addBySearchBTN}
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
							</div>
						</div>
					</div>
					<div className="h-full mb-32 break-words">
						{concatedInfo.map((e) => (
							<div
								key={uuid()}
								className="flex justify-start items-start pl-14 mb-12 flex-col gap-2 w-[750px] break-words"
							>
								<span className="text-gray-500">https://{e}.com</span>
								<span className="text-blue-700 text-2xl">{e}</span>
								<span className="text-gray-900 text-justify break-all">{e.repeat(50)}
								</span>
							</div>
						))}
					</div>
				</div>
			</div>
		</div>
	);
};
export default Results;
