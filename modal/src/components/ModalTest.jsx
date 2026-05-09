
import {useState} from "react";
import Modal from "./Modal";

const ModalTest = () => {
	const [showModal, setShowModal] = useState(false);

	function handleToggleModal() {
		setShowModal(!showModal);
	}

	return (
		<div className="flex flex-col items-center text-center text-3xl mt-12">
			<button
				onClick={handleToggleModal}
				className="border rounded-xl p-4 cursor-pointer">
				Toggle Modal
			</button>
			{showModal && <Modal body={<p>customized Body</p>} />}
		</div>
	);
};

export default ModalTest;
