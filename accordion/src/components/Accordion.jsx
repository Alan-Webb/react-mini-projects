import {useState} from "react";
import data from "../data";

const Accordion = () => {
	const [isOpen, setIsOpen] = useState(null);

	function handleSelect(getCurrentId) {
		// console.log(getCurrentId);
		setIsOpen(getCurrentId === isOpen ? null : getCurrentId);
	}

	return (
		<div className="flex justify-center text-2xl text-center mt-12">
			<div>
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div key={dataItem.id}>
							<div className="w-120 border p-6">
								<h3>{dataItem.question}</h3>
								<button
									onClick={() => handleSelect(dataItem.id)}
									className="cursor-pointer">
									+
								</button>
							</div>
							{isOpen === dataItem.id ? (
								<div className="w-120 border p-6">{dataItem.answer}</div>
							) : null}
						</div>
					))
				) : (
					<div>No Data Found</div>
				)}
			</div>
		</div>
	);
};

export default Accordion;
