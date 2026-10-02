import {useState} from "react";
import data from "../data";

const Accordion = () => {
	const [selected, setSelected] = useState(null);
	const [enableToggle, setEnableToggle] = useState(false);
	const [multiple, setMultiple] = useState([]);

	function handleSelect(getCurrentId) {
		// console.log(getCurrentId);
		setSelected(getCurrentId === selected ? null : getCurrentId);
	}

	function handleMultiple(getCurrentId) {
		let cpyMultiple = [...multiple];
		const findIndexOfCurrId = cpyMultiple.indexOf(getCurrentId);
		// console.log(findIndexOfCurrId);
		if (findIndexOfCurrId === -1) cpyMultiple.push(getCurrentId);
		else cpyMultiple.splice(findIndexOfCurrId, 1);
		setMultiple(cpyMultiple);
		// console.log(multiple);
	}

	return (
		<div className="flex flex-col items-center text-center text-2xl mt-12">
			<button
				onClick={() => setEnableToggle(!enableToggle)}
				className="border rounded-xl p-4 my-3 cursor-pointer">
				SelectMultiple
			</button>
			{data && data.length > 0 ? (
				data.map((dataItem) => (
					<div key={dataItem.id} className="border w-110 p-4">
						<p>{dataItem.question}</p>
						<button
							onClick={
								enableToggle
									? () => handleMultiple(dataItem.id)
									: () => handleSelect(dataItem.id)
							}
							className="border rounded-full px-2.5 my-3 cursor-pointer">
							+
						</button>
						{selected === dataItem.id ||
						multiple.indexOf(dataItem.id) !== -1 ? (
							<p className="p-4">{dataItem.answer}</p>
						) : null}
					</div>
				))
			) : (
				<p>No data found!</p>
			)}
		</div>
	);
};

export default Accordion;
