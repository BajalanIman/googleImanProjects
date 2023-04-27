import { useState } from "react";
import Modal from "./Modal";

const Navigationbar = () => {
	const [shoModal, setShoModal] = useState(false);

	const openModal = () => {
		setShoModal(!shoModal);
	};

	return (
		<div className="fixed flex right-20  gap-5 top-5 text-xl">
			{shoModal.toString()}
			<span onClick={openModal} className="bg-white font-bold">
				Gmail
			</span>
			<span onClick={openModal} className="bg-white font-bold">
				Images
			</span>
			<svg
				onClick={openModal}
				xmlns="http://www.w3.org/2000/svg"
				fill="none"
				viewBox="0 0 24 24"
				strokeWidth="1.5"
				stroke="currentColor"
				className="w-8 h-8 pt-1"
			>
				<path
					strokeLinecap="round"
					strokeLinejoin="round"
					d="M3.75 5.25h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5m-16.5 4.5h16.5"
				/>
			</svg>
			<button
				onClick={openModal}
				className="px-5 py-1 bg-blue-500 rounded-md text-white"
			>
				Sign in
			</button>
			<Modal toggle={shoModal} />
		</div>
	);
};
export default Navigationbar;
