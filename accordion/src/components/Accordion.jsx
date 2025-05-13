import {useState} from "react";
import data from "../data";

const Accordion = () => {
	const [selected, setSelected] = useState(null);
	const [enableMultiSelect, setEnableMultiSelect] = useState(false);
	const [multiple, setMultiple] = useState([]);

	function handleSelection(getCurrentId) {
		// console.log(getCurrentId);
		setSelected(getCurrentId === selected ? null : getCurrentId);
	}

	function handleMultiSelection(getCurrentId) {
		// Stage 6
		let cpyMultiple = [...multiple];
		const findIndexOfCurrentId = cpyMultiple.indexOf(getCurrentId);
		if (findIndexOfCurrentId === -1) {
			cpyMultiple.push(getCurrentId);
		} else {
			cpyMultiple.splice(findIndexOfCurrentId, 1);
		}

		setMultiple(cpyMultiple);
		// Stage 6 end
	}

	return (
		<div className="flex flex-col w-[850px] mx-auto m-24">
			<button
				onClick={() => setEnableMultiSelect(!enableMultiSelect)}
				className="mx-auto border text-3xl m-4 p-4 rounded-2xl cursor-pointer">
				Enable Multiple Selection
			</button>
			

			<div>
				{data && data.length > 0 ? (
					data.map((dataItem) => (
						<div
							key={dataItem.id}
							className="border text-4xl text-center p-4">
							<div>
								<h3>{dataItem.question}</h3>
								<span onClick={
									enableMultiSelect
										? () => handleMultiSelection(dataItem.id)
										: () => handleSelection(dataItem.id)
								} className="cursor-pointer">+</span>
							</div>
							{/* Stage 3: {selected === dataItem.id ? (
								<div>{dataItem.answer}</div>
							) : null} */}
							{selected === dataItem.id ||
							multiple.indexOf(dataItem.id) !== -1 ? (
								<div>{dataItem.answer}</div>
							) : null}
						</div>
					))
				) : (
					<div>No data found</div>
				)}
			</div>
		</div>
	);
};

export default Accordion;
