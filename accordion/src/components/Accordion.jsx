import {useState} from "react";

const Accordion = () => {
	const [selected, setSelected] = useState(null);

	return (
		<div className="wrapper">
			<div className="accordion"></div>
		</div>
	);
};

export default Accordion;
