import { useState } from "react";

const SecondComponent = (props) => {
	const modalState = props.toggle;
	const [shoModal, setShoModal] = useState(modalState);

	const openModal = () => {
		setShoModal(!shoModal);
	};

	return (
		<div className="flex gap-5 font-bold fixed top-5 left-20 text-xl">
			<button onClick={openModal} className="bg-white">
				About
			</button>
			<button className="bg-white">Store</button>
		</div>
	);
};
export default SecondComponent;
