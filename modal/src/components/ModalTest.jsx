import {useState} from "react";
import Modal from "./Modal";

const ModalTest = () => {
	const [showModal, setShowModal] = useState(false);

	function handleToggleModal() {
		setShowModal(!showModal);
	}

	return (
		<div className="flex flex-col items-center gap-4 text-center text-3xl mt-20">
			<button
				className="border rounded-xl p-4 cursor-pointer"
				onClick={handleToggleModal}>
				Open Modal
			</button>
			{showModal && <Modal body={<p>Customized Body</p>} />}
		</div>
	);
};

export default ModalTest;
