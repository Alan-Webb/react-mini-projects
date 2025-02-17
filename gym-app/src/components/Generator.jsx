import SectionWrapper from "./SectionWrapper";

export default function Generator() {
	return (
		<div className="min-h-screen">
			<SectionWrapper
				header={"generate your workout"}
				title={["It's", " shredded", " O'clock"]}>
				info
			</SectionWrapper>
		</div>
	);
}
