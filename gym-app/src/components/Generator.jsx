import {useState} from "react";
import {SCHEMES, WORKOUTS} from "../utility/workout-data";
import SectionWrapper from "./SectionWrapper";

function Header(props) {
	const {index, title, description} = props;
	return (
		<div className="flex flex-col gap-4">
			<div className="flex items-center gap-2 justify-center">
				<p className="text-3xl sm:text-4xl md:text-5xl font-semibold text-slate-400">
					{index}
				</p>
				<h4 className="text-xl sm:text-2xl md:text-3xl">{title}</h4>
			</div>
			<p className="text-sm sm:text-base mx-auto">{description}</p>
		</div>
	);
}

export default function Generator() {
	const [showModal, setShowModal] = useState(false);
	const [strategy, setStrategy] = useState("individual");
	const [muscles, setMuscles] = useState([]);
	const [goal, setGoal] = useState("strength_power");

	function toggleModal() {
		setShowModal(!showModal);
	}

	return (
		<div className="min-h-screen">
			<SectionWrapper
				header={"generate your workout"}
				title={["It's", " shredded", " O'clock"]}>
				<Header
					index={"01"}
					title={"Define your strategy"}
					description={"Select your training split"}
				/>
				<div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
					{Object.keys(WORKOUTS).map((type, typeIndex) => {
						return (
							<button
								onClick={() => {
									setStrategy(type);
								}}
								className={
									"bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg" +
									(type === strategy ? "" : "border-blue-400")
								}
								key={typeIndex}>
								<p className="capitalize">{type.replaceAll("_", " ")}</p>
							</button>
						);
					})}
				</div>
				<Header
					index={"02"}
					title={"Lock on targets"}
					description={"Select muscles for shredding"}
				/>
				<div className="bg-slate-950  border border-solid border-blue-400 rounded-lg flex flex-col">
					<button
						onClick={toggleModal}
						className="relative flex p-3 items-center justify-center cursor-pointer">
						<p>Muscle groups</p>
						<i className="fa-solid absolute right-3 top-1/2 -translate-y-1/2 fa-caret-down"></i>
					</button>
					{showModal && <div className="flex flex-col px-3 pb-3">{}</div>}
				</div>
				<Header
					index={"03"}
					title={"Become Juggernaut"}
					description={"Select your ideal results"}
				/>
				<div className="grid grid-cols-3 gap-4">
					{Object.keys(SCHEMES).map((scheme, schemeIndex) => {
						return (
							<button
								onClick={() => {
									setGoal(scheme);
								}}
								className={
									"bg-slate-950 border duration-200 hover:border-blue-600 py-3 rounded-lg" +
									(scheme === goal ? "" : "border-blue-400")
								}
								key={schemeIndex}>
								<p className="capitalize">{scheme.replaceAll("_", " ")}</p>
							</button>
						);
					})}
				</div>
			</SectionWrapper>
		</div>
	);
}
