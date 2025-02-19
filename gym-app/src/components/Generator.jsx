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
	return (
		<div className="min-h-screen">
			<SectionWrapper
				header={"generate your workout"}
				title={["It's", " shredded", " O'clock"]}>
				<Header
					index={"01"}
					title={"Define your goals"}
					description={"Select your workout"}
				/>
				
			</SectionWrapper>
		</div>
	);
}
