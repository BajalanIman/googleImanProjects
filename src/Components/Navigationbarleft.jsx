import { useState } from "react";

const Navigationbarleft = (props) => {
	const modalState = props.toggle;
	const [shoModal, setShoModal] = useState(modalState);

	const openModal = () => {
		setShoModal(!shoModal);
	};

	return (
		<div className="flex gap-5 font-bold fixed top-5 left-20 text-xl">
			<button onClick={openModal} className="bg-white">
				<a target="blank" href="https://about.google/?fg=1&utm_source=google-DE&utm_medium=referral&utm_campaign=hp-header">About</a>
			</button>
			<button className="bg-white"><a target="blank" href="https://store.google.com/DE/?utm_source=hp_header&utm_medium=google_ooo&utm_campaign=GS100042&hl=de-DE">Store</a></button>
		</div>
	);
};
export default Navigationbarleft;
