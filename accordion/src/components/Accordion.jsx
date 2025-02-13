import {useState} from "react";

const Accordion = () => {
	const [selected, setSelected] = useState(null);

	return (
		<div className="wrapper">
			<div className="accordion">
				{
					data && data.length > 0 ?
					data.map(dataItem => <div className="item"></div>)
					: <div>No data found</div>
				}
			</div>
		</div>
	);
};

export default Accordion;
